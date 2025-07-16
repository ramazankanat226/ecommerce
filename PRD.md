# Anils E-Ticaret Eğitim Platformu - PRD (Product Requirements Document)

## Proje Genel Bakış

### Proje Adı
Anils E-Ticaret Eğitim Platformu

### Proje Açıklaması
Shopify, Amazon FBA, dijital pazarlama ve e-ticaret konularında uzman eğitmenlerden kurs alma imkanı sunan modern, dark theme'li eğitim platformu.

### Teknoloji Stack
- **Frontend**: Next.js 15.4.1 (React 19.0.0)
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: Lucide React 0.460.0
- **Language**: TypeScript 5
- **Performance**: Bundle Analyzer, Dynamic Imports
- **Deployment**: Vercel Ready

---

## Tamamlanan Özellikler

### 1. Sayfa Yapısı ve Navigasyon
✅ **Ana Sayfa (/)**: Hero section, hizmetler, kurslar
✅ **Hakkımızda (/about)**: Şirket bilgileri, istatistikler, takım
✅ **Kurslar (/courses)**: Kurs listesi, filtreleme, arama
✅ **Kurs Detay (/courses/[id])**: Dinamik kurs sayfaları
✅ **İletişim (/contact)**: İletişim formu, harita
✅ **Giriş (/login)**: Kullanıcı girişi
✅ **Kayıt (/signup)**: Kullanıcı kaydı
✅ **Şifre Sıfırlama (/forgot-password)**: Şifre kurtarma
✅ **Yeni Şifre (/reset-password)**: Şifre yenileme
✅ **E-posta Doğrulama (/signup/confirmation)**: Hesap aktivasyonu

### 2. Dark Theme Uygulaması
✅ **Tutarlı Renk Paleti**:
- Background: `slate-900`
- Cards: `slate-800` with `slate-700` borders
- Gradients: Blue-purple combinations
- Text: `slate-100`, `slate-300`, `slate-400`

✅ **Görsel Efektler**:
- Blur background effects
- Gradient buttons ve text
- Hover animations
- Glow effects

### 3. Performance Optimizasyonları
✅ **Bundle Optimizasyonu**:
- Dynamic imports
- Code splitting
- Vendor chunk separation
- Lucide React package optimization

✅ **Image Optimizasyonu**:
- WebP ve AVIF format support
- Minimum cache TTL: 31536000
- SVG security policies

✅ **Font Optimizasyonu**:
- Inter font with display=swap
- Preload ve preconnect
- Variable font support

### 4. Responsive Design
✅ **Mobile-First Approach**:
- Breakpoints: sm, md, lg, xl
- Flexible grid layouts
- Touch-friendly interfaces
- Optimized typography scales

### 5. SEO ve Meta Optimizasyonu
✅ **Meta Tags**:
- Title, description, keywords
- OpenGraph tags
- Twitter cards
- Robots directives

✅ **Performance Headers**:
- Security headers
- Cache control
- Content type options

### 6. Component Architecture
✅ **Reusable Components**:
- Header: Navigation, search, auth buttons
- Footer: Links, social media
- Hero: Landing section
- Services: Service cards
- Courses: Course listing
- Forms: Login, signup, contact

### 7. Form Handling
✅ **Authentication Forms**:
- Login form with validation
- Signup with password confirmation
- Forgot password flow
- Reset password with requirements
- Email verification

✅ **Contact Form**:
- Name, email, message fields
- Responsive design
- Dark theme styling

### 8. State Management
✅ **React State**:
- Form state management
- Password visibility toggles
- Menu state handling
- Search and filter states

---

## Kurs İçeriği (Mock Data)

### Mevcut Kurslar
1. **Shopify ile E-Ticaret Mastery** - ₺299.99
2. **Amazon FBA ile Pasif Gelir** - ₺399.99
3. **Facebook Ads Uzmanlığı** - ₺199.99
4. **Google Ads ile Satış Artırma** - ₺249.99
5. **Dropshipping ile E-Ticaret** - ₺179.99
6. **E-Ticaret SEO Stratejileri** - ₺159.99

### Kurs Özellikleri
- Rating sistemi (4.4-4.9)
- Review sayıları
- Seviye belirtimi (Başlangıç, Orta, İleri)
- Süre bilgisi
- Ders sayısı
- Kategori filtreleme

---

## Backend Geliştirme İçin Gereksinimler

### 1. Veritabanı Tasarımı
🔄 **Gerekli Tablolar**:
- users (kullanıcılar)
- courses (kurslar)
- instructors (eğitmenler)
- enrollments (kayıtlar)
- reviews (yorumlar)
- payments (ödemeler)
- categories (kategoriler)
- lessons (dersler)
- user_progress (kullanıcı ilerlemesi)

### 2. Authentication & Authorization
🔄 **Gerekli Özellikler**:
- JWT token sistemi
- Email verification
- Password reset flow
- Role-based access (student, instructor, admin)
- Session management
- OAuth integration (Google, Facebook)

### 3. API Endpoints
🔄 **Auth Endpoints**:
- POST /api/auth/login
- POST /api/auth/register
- POST /api/auth/forgot-password
- POST /api/auth/reset-password
- POST /api/auth/verify-email
- POST /api/auth/logout

🔄 **Course Endpoints**:
- GET /api/courses
- GET /api/courses/:id
- POST /api/courses (admin)
- PUT /api/courses/:id (admin)
- DELETE /api/courses/:id (admin)

🔄 **User Endpoints**:
- GET /api/users/profile
- PUT /api/users/profile
- GET /api/users/enrollments
- POST /api/users/enroll

### 4. Payment Integration
🔄 **Gerekli Özellikler**:
- Stripe/PayPal integration
- Turkish payment methods (iyzico)
- Subscription management
- Invoice generation
- Refund handling

### 5. Content Management
🔄 **Video Streaming**:
- Video upload ve encoding
- Streaming optimization
- Progress tracking
- Subtitle support

🔄 **File Management**:
- Course materials upload
- Certificate generation
- Backup systems

### 6. Admin Panel
🔄 **Gerekli Özellikler**:
- Course management
- User management
- Analytics dashboard
- Payment tracking
- Content moderation

### 7. Email Services
🔄 **Email Templates**:
- Welcome emails
- Course enrollment confirmation
- Password reset
- Course completion certificates
- Marketing emails

### 8. Analytics & Reporting
🔄 **Tracking Systems**:
- User engagement metrics
- Course completion rates
- Revenue analytics
- Performance monitoring

---

## Teknik Detaylar

### Mevcut Konfigürasyonlar
```typescript
// Next.js 15.4.1 with Turbopack
// Performance optimizations enabled
// Bundle analyzer integrated
// Security headers configured
```

### Styling System
```css
/* Tailwind CSS 3.4.1 */
/* Custom color palette */
/* Responsive breakpoints */
/* Dark theme utilities */
```

### Performance Metrics
- Build time: ~3.7s (initial)
- Page load times: 194ms - 845ms
- Bundle size: Optimized with code splitting
- Lighthouse scores: Performance optimized

---

## Sonraki Adımlar

### Öncelik 1: Backend Kurulumu
1. Node.js/Express.js API kurulumu
2. PostgreSQL/MongoDB veritabanı tasarımı
3. Authentication sistemi
4. Temel CRUD operasyonları

### Öncelik 2: Kullanıcı Yönetimi
1. Kullanıcı profil sayfası
2. Dashboard geliştirme
3. Kurs satın alma süreci
4. Ödeme entegrasyonu

### Öncelik 3: İçerik Yönetimi
1. Video player entegrasyonu
2. Kurs içeriği yönetimi
3. Progress tracking
4. Certificate sistemi

### Öncelik 4: Admin Panel
1. Kurs yönetimi
2. Kullanıcı yönetimi
3. Analytics dashboard
4. Content moderation

---

## Proje Durumu

**Frontend**: %100 Tamamlandı ✅
- Tüm sayfalar dark theme ile uygulandı
- Responsive design tamamlandı
- Performance optimizasyonları yapıldı
- SEO ayarları tamamlandı

**Backend**: %0 - Başlanacak 🔄
- API tasarımı yapılacak
- Veritabanı kurulumu
- Authentication sistemi
- Payment integration

**Deployment**: Hazır 🚀
- Vercel deployment ready
- Environment variables configured
- Performance monitoring ready

---

## Notlar

- Tüm sayfalar başarıyla test edildi
- Dark theme tutarlı şekilde uygulandı
- Performance optimizasyonları aktif
- Mobile-first responsive design
- SEO-friendly structure
- TypeScript strict mode enabled
- Modern React 19 features kullanıldı

Bu PRD dokümanı proje ilerledikçe güncellenecektir. 