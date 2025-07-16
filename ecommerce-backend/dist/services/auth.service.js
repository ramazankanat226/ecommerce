"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const supabase_1 = require("@/services/supabase");
exports.authService = {
    async register(userData) {
        const { email, password, first_name, last_name } = userData;
        const { data: authData, error: authError } = await supabase_1.supabase.auth.signUp({
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
        const { error: profileError } = await supabase_1.supabaseAdmin
            .from('profiles')
            .insert({
            id: authData.user.id,
            first_name,
            last_name,
            role: 'student',
        });
        if (profileError) {
            await supabase_1.supabaseAdmin.auth.admin.deleteUser(authData.user.id);
            throw new Error(profileError.message);
        }
        if (process.env.NODE_ENV !== 'production') {
            await supabase_1.supabaseAdmin.auth.admin.updateUserById(authData.user.id, {
                email_confirm: true,
            });
        }
        return { user: authData.user };
    },
    async login(credentials) {
        const { email, password } = credentials;
        const { data, error } = await supabase_1.supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) {
            throw new Error(error.message);
        }
        const { data: profile } = await supabase_1.supabase
            .from('profiles')
            .select('*')
            .eq('id', data.user.id)
            .single();
        return { session: data.session, user: profile };
    },
    async logout() {
        const { error } = await supabase_1.supabase.auth.signOut();
        if (error) {
            throw new Error(error.message);
        }
        return { message: 'Successfully logged out' };
    }
};
//# sourceMappingURL=auth.service.js.map