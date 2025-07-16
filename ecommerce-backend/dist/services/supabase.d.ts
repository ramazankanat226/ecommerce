import { SupabaseClient } from '@supabase/supabase-js';
export declare const supabase: SupabaseClient;
export declare const supabaseAdmin: SupabaseClient;
export declare const TABLES: {
    readonly USERS: "users";
    readonly COURSES: "courses";
    readonly INSTRUCTORS: "instructors";
    readonly CATEGORIES: "categories";
    readonly ENROLLMENTS: "enrollments";
    readonly LESSONS: "lessons";
    readonly USER_PROGRESS: "user_progress";
    readonly REVIEWS: "reviews";
    readonly PAYMENTS: "payments";
};
export declare const handleSupabaseError: (error: any) => {
    success: boolean;
    error: any;
    details: any;
};
export declare const handleSupabaseSuccess: (data: any, message?: string) => {
    success: boolean;
    data: any;
    message: string;
};
export default supabase;
//# sourceMappingURL=supabase.d.ts.map