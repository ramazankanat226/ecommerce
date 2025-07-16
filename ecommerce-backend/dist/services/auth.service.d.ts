import { RegisterRequest, LoginRequest } from '@/types';
export declare const authService: {
    register(userData: RegisterRequest): Promise<{
        user: import("@supabase/auth-js").User;
    }>;
    login(credentials: LoginRequest): Promise<{
        session: import("@supabase/auth-js").Session;
        user: any;
    }>;
    logout(): Promise<{
        message: string;
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map