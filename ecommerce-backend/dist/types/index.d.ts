export interface User {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    phone?: string;
    avatar_url?: string;
    role: 'student' | 'instructor' | 'admin';
    is_verified: boolean;
    created_at: string;
    updated_at: string;
}
export interface UserProfile {
    id: string;
    user_id: string;
    bio?: string;
    website?: string;
    social_links?: {
        twitter?: string;
        linkedin?: string;
        instagram?: string;
    };
    preferences?: {
        email_notifications: boolean;
        marketing_emails: boolean;
    };
    created_at: string;
    updated_at: string;
}
export interface Course {
    id: string;
    title: string;
    description: string;
    short_description: string;
    instructor_id: string;
    category_id: string;
    price: number;
    original_price?: number;
    currency: string;
    level: 'beginner' | 'intermediate' | 'advanced';
    duration_weeks: number;
    total_lessons: number;
    thumbnail_url?: string;
    preview_video_url?: string;
    is_published: boolean;
    rating: number;
    total_reviews: number;
    total_students: number;
    created_at: string;
    updated_at: string;
}
export interface Category {
    id: string;
    name: string;
    slug: string;
    description?: string;
    icon?: string;
    color?: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}
export interface Instructor {
    id: string;
    user_id: string;
    title: string;
    bio: string;
    expertise: string[];
    years_experience: number;
    total_students: number;
    total_courses: number;
    rating: number;
    is_verified: boolean;
    created_at: string;
    updated_at: string;
}
export interface Lesson {
    id: string;
    course_id: string;
    title: string;
    description?: string;
    content?: string;
    video_url?: string;
    video_duration?: number;
    order_index: number;
    is_preview: boolean;
    resources?: {
        name: string;
        url: string;
        type: 'pdf' | 'video' | 'link' | 'image';
    }[];
    created_at: string;
    updated_at: string;
}
export interface Enrollment {
    id: string;
    user_id: string;
    course_id: string;
    enrolled_at: string;
    completed_at?: string;
    progress_percentage: number;
    is_completed: boolean;
    certificate_url?: string;
}
export interface UserProgress {
    id: string;
    user_id: string;
    lesson_id: string;
    enrollment_id: string;
    is_completed: boolean;
    completed_at?: string;
    time_spent: number;
    last_position?: number;
    created_at: string;
    updated_at: string;
}
export interface Review {
    id: string;
    user_id: string;
    course_id: string;
    rating: number;
    comment?: string;
    is_verified_purchase: boolean;
    created_at: string;
    updated_at: string;
}
export interface Payment {
    id: string;
    user_id: string;
    course_id: string;
    amount: number;
    currency: string;
    payment_method: string;
    payment_status: 'pending' | 'completed' | 'failed' | 'refunded';
    transaction_id?: string;
    provider_response?: any;
    created_at: string;
    updated_at: string;
}
export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    message?: string;
    error?: string;
    details?: any;
}
export interface PaginatedResponse<T = any> {
    success: boolean;
    data: T[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
        hasNext: boolean;
        hasPrev: boolean;
    };
}
export interface LoginRequest {
    email: string;
    password: string;
}
export interface RegisterRequest {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    phone?: string;
}
export interface AuthResponse {
    success: boolean;
    data?: {
        user: User;
        token: string;
        expires_in: number;
    };
    message?: string;
    error?: string;
}
export interface CourseQuery {
    page?: number;
    limit?: number;
    category?: string;
    level?: string;
    search?: string;
    sort?: 'popular' | 'newest' | 'price_low' | 'price_high' | 'rating';
    instructor?: string;
}
export interface CreateCourseRequest {
    title: string;
    description: string;
    short_description: string;
    category_id: string;
    price: number;
    original_price?: number;
    level: 'beginner' | 'intermediate' | 'advanced';
    duration_weeks: number;
    thumbnail_url?: string;
    preview_video_url?: string;
}
//# sourceMappingURL=index.d.ts.map