import { supabase, supabaseAdmin } from '../../lib/supabase';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL || 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, password, first_name, last_name } = req.body;

    // Supabase Auth ile kullanıcı oluşturma ve doğrulama sonrası login sayfasına yönlendirme
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/login`,
      },
    });

    if (authError) {
      return res.status(400).json({ error: authError.message });
    }

    if (!authData.user) {
      return res.status(400).json({ error: 'User could not be created in Supabase Auth.' });
    }

    // `profiles` tablosuna ek bilgi ekleme
    const { error: profileError } = await supabaseAdmin
      .from('profiles')
      .insert({
        id: authData.user.id,
        first_name,
        last_name,
        role: 'student', // default role
      });

    if (profileError) {
      // Eğer profil oluşturulamazsa, auth kullanıcısını silerek işlemi geri al
      await supabaseAdmin.auth.admin.deleteUser(authData.user.id);
      return res.status(400).json({ error: profileError.message });
    }

    // Profil oluşturma başarılıysa, geliştirme ortamında e-postayı otomatik onayla
    if (process.env.NODE_ENV !== 'production') {
      await supabaseAdmin.auth.admin.updateUserById(authData.user.id, {
        email_confirm: true,
      });
    }

    return res.status(201).json({ 
      message: 'Kullanıcı başarıyla kaydedildi. Hesabınızı doğrulamak için lütfen e-postanızı kontrol edin.', 
      userId: authData.user.id 
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
} 