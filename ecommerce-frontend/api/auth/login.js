import { supabase } from '../../lib/supabase';

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
    const { email, password } = req.body;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return res.status(401).json({ error: error.message });
    }
    
    // Kullanıcının profil bilgilerini al
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', data.user.id)
      .single();

    // Token'ı cookie'ye kaydet
    res.setHeader('Set-Cookie', `access_token=${data.session.access_token}; HttpOnly; Secure; SameSite=Lax; Max-Age=${data.session.expires_in}; Path=/`);
    
    return res.status(200).json({ 
      message: 'Giriş başarılı', 
      user: profile,
      token: data.session.access_token 
    });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
} 