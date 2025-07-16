import { supabase, supabaseAdmin } from '@/services/supabase';
import { RegisterRequest, LoginRequest } from '@/types';
import { hash, compare } from 'bcryptjs';

export const authService = {
  async register(userData: RegisterRequest) {
    const { email, password, first_name, last_name } = userData;

    // Supabase Auth ile kullanıcı oluşturma ve doğrulama sonrası login sayfasına yönlendirme
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/login`,
      },
    });

    if (authError) {
      throw new Error(authError.message);
    }

    if (!authData.user) {
      throw new Error('User could not be created in Supabase Auth.');
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
      throw new Error(profileError.message);
    }

    // Profil oluşturma başarılıysa, geliştirme ortamında e-postayı otomatik onayla
    if (process.env.NODE_ENV !== 'production') {
      await supabaseAdmin.auth.admin.updateUserById(authData.user.id, {
        email_confirm: true,
      });
    }

    return { user: authData.user };
  },

  async login(credentials: LoginRequest) {
    const { email, password } = credentials;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }
    
    // Kullanıcının profil bilgilerini al
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', data.user.id)
      .single();

    return { session: data.session, user: profile };
  },

  async logout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw new Error(error.message);
    }
    return { message: 'Successfully logged out' };
  }
}; 