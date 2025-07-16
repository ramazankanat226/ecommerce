import { createClient, SupabaseClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

const envPath = path.resolve(__dirname, '../../.env');
console.log('ENV PATH:', envPath, 'Exists:', fs.existsSync(envPath));
dotenv.config({ path: envPath });

// Supabase configuration
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

// Client for general use (with RLS)
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

// Admin client for server-side operations (bypasses RLS)
export const supabaseAdmin: SupabaseClient = createClient(
  supabaseUrl,
  supabaseServiceKey || supabaseAnonKey,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

// Database table names
export const TABLES = {
  USERS: 'users',
  COURSES: 'courses',
  INSTRUCTORS: 'instructors',
  CATEGORIES: 'categories',
  ENROLLMENTS: 'enrollments',
  LESSONS: 'lessons',
  USER_PROGRESS: 'user_progress',
  REVIEWS: 'reviews',
  PAYMENTS: 'payments',
} as const;

// Helper function to handle Supabase errors
export const handleSupabaseError = (error: any) => {
  console.error('Supabase error:', error);
  
  return {
    success: false,
    error: error.message || 'Database operation failed',
    details: process.env.NODE_ENV === 'development' ? error : undefined,
  };
};

// Helper function for successful responses
export const handleSupabaseSuccess = (data: any, message = 'Operation successful') => {
  return {
    success: true,
    data,
    message,
  };
};

export default supabase; 