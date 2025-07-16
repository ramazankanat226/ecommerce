import { Request, Response } from 'express';
import { authService } from '@/services/auth.service';
import { supabase } from '@/services/supabase';

export const authController = {
  async register(req: Request, res: Response) {
    try {
      const { user } = await authService.register(req.body);
      res.status(201).json({ 
        message: 'Kullanıcı başarıyla kaydedildi. Hesabınızı doğrulamak için lütfen e-postanızı kontrol edin.', 
        userId: user.id 
      });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async login(req: Request, res: Response) {
    try {
      const { session, user } = await authService.login(req.body);
      
      if (!session) {
        return res.status(401).json({ error: 'E-posta veya şifre hatalı' });
      }

      // Token'ı cookie'ye kaydet
      res.cookie('access_token', session.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: session.expires_in * 1000, // milisaniye cinsinden
        sameSite: 'lax',
      });
      
      return res.status(200).json({ message: 'Giriş başarılı', user });
    } catch (error: any) {
      return res.status(401).json({ error: error.message });
    }
  },

  async logout(req: Request, res: Response) {
    try {
      await authService.logout();
      res.clearCookie('access_token');
      res.status(200).json({ message: 'Başarıyla çıkış yapıldı' });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async getProfile(req: Request, res: Response) {
    // Bu fonksiyon daha sonra bir 'authMiddleware' tarafından korunacak
    // ve req.user nesnesini o middleware sağlayacak.
    // Şimdilik placeholder olarak bırakalım.
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return res.status(401).json({ error: 'Kimlik doğrulaması gerekli' });
    }

    return res.status(200).json(user);
  }
}; 