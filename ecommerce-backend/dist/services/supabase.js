"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSupabaseSuccess = exports.handleSupabaseError = exports.TABLES = exports.supabaseAdmin = exports.supabase = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const envPath = path_1.default.resolve(__dirname, '../../.env');
console.log('ENV PATH:', envPath, 'Exists:', fs_1.default.existsSync(envPath));
dotenv_1.default.config({ path: envPath });
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables');
}
exports.supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseAnonKey);
exports.supabaseAdmin = (0, supabase_js_1.createClient)(supabaseUrl, supabaseServiceKey || supabaseAnonKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
    },
});
exports.TABLES = {
    USERS: 'users',
    COURSES: 'courses',
    INSTRUCTORS: 'instructors',
    CATEGORIES: 'categories',
    ENROLLMENTS: 'enrollments',
    LESSONS: 'lessons',
    USER_PROGRESS: 'user_progress',
    REVIEWS: 'reviews',
    PAYMENTS: 'payments',
};
const handleSupabaseError = (error) => {
    console.error('Supabase error:', error);
    return {
        success: false,
        error: error.message || 'Database operation failed',
        details: process.env.NODE_ENV === 'development' ? error : undefined,
    };
};
exports.handleSupabaseError = handleSupabaseError;
const handleSupabaseSuccess = (data, message = 'Operation successful') => {
    return {
        success: true,
        data,
        message,
    };
};
exports.handleSupabaseSuccess = handleSupabaseSuccess;
exports.default = exports.supabase;
//# sourceMappingURL=supabase.js.map