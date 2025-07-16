"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const auth_service_1 = require("@/services/auth.service");
const supabase_1 = require("@/services/supabase");
exports.authController = {
    async register(req, res) {
        try {
            const { user } = await auth_service_1.authService.register(req.body);
            res.status(201).json({
                message: 'Kullanıcı başarıyla kaydedildi. Hesabınızı doğrulamak için lütfen e-postanızı kontrol edin.',
                userId: user.id
            });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    async login(req, res) {
        try {
            const { session, user } = await auth_service_1.authService.login(req.body);
            if (!session) {
                return res.status(401).json({ error: 'E-posta veya şifre hatalı' });
            }
            res.cookie('access_token', session.access_token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: session.expires_in * 1000,
                sameSite: 'lax',
            });
            return res.status(200).json({ message: 'Giriş başarılı', user });
        }
        catch (error) {
            return res.status(401).json({ error: error.message });
        }
    },
    async logout(req, res) {
        try {
            await auth_service_1.authService.logout();
            res.clearCookie('access_token');
            res.status(200).json({ message: 'Başarıyla çıkış yapıldı' });
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getProfile(req, res) {
        const { data: { user } } = await supabase_1.supabase.auth.getUser();
        if (!user) {
            return res.status(401).json({ error: 'Kimlik doğrulaması gerekli' });
        }
        return res.status(200).json(user);
    }
};
//# sourceMappingURL=auth.controller.js.map