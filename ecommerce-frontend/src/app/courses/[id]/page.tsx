'use client';

import Link from 'next/link';

// Mock data for course details
const courseData = {
  1: {
    title: 'Shopify ile E-Ticaret Mastery',
    description: 'Shopify kullanarak profesyonel e-ticaret mağazası kurmayı ve yönetmeyi öğrenin. Bu kapsamlı kurs ile sıfırdan başlayarak uzman seviyeye ulaşın.',
    price: 299.99,
    originalPrice: 499.99,
    rating: 4.9,
    reviews: 450,
    lessons: 24,
    duration: '8 hafta',
    level: 'Başlangıç',
    bgColor: 'from-blue-100 to-blue-200',
    textColor: 'text-blue-800',
    icon: '🛍️',
    instructor: {
      name: 'Mehmet Yılmaz',
      title: 'E-Ticaret Uzmanı',
      icon: '👨‍💼'
    },
    features: [
      'Shopify mağaza kurulumu',
      'Tema özelleştirme',
      'Ürün yönetimi',
      'Ödeme sistemleri',
      'SEO optimizasyonu',
      'Pazarlama stratejileri',
      'Analitik ve raporlama',
      'Müşteri hizmetleri'
    ],
    curriculum: [
      { title: 'Shopify\'a Giriş', duration: '45 dk', completed: false },
      { title: 'Mağaza Kurulumu', duration: '60 dk', completed: false },
      { title: 'Tema Seçimi ve Özelleştirme', duration: '90 dk', completed: false },
      { title: 'Ürün Ekleme ve Yönetimi', duration: '75 dk', completed: false },
      { title: 'Ödeme ve Kargo Ayarları', duration: '50 dk', completed: false }
    ]
  },
  2: {
    title: 'Amazon FBA ile Pasif Gelir',
    description: 'Amazon FBA stratejileri ile e-ticaret işinizi büyütün ve pasif gelir elde edin.',
    price: 399.99,
    originalPrice: 599.99,
    rating: 4.8,
    reviews: 680,
    lessons: 32,
    duration: '10 hafta',
    level: 'Orta',
    bgColor: 'from-slate-100 to-slate-200',
    textColor: 'text-slate-800',
    icon: '📦',
    instructor: {
      name: 'Ayşe Demir',
      title: 'Amazon FBA Uzmanı',
      icon: '👩‍💼'
    },
    features: [
      'Amazon FBA temelleri',
      'Ürün araştırması',
      'Tedarikçi bulma',
      'Listing optimizasyonu',
      'PPC kampanyaları',
      'Envanter yönetimi',
      'Müşteri hizmetleri',
      'Ölçeklendirme stratejileri'
    ],
    curriculum: [
      { title: 'Amazon FBA\'ya Giriş', duration: '50 dk', completed: false },
      { title: 'Ürün Araştırması', duration: '75 dk', completed: false },
      { title: 'Tedarikçi Bulma', duration: '60 dk', completed: false },
      { title: 'Listing Oluşturma', duration: '80 dk', completed: false },
      { title: 'PPC Kampanyaları', duration: '90 dk', completed: false }
    ]
  },
  3: {
    title: 'Facebook Ads Uzmanlığı',
    description: 'Facebook reklamları ile etkili pazarlama kampanyaları oluşturun.',
    price: 199.99,
    originalPrice: 299.99,
    rating: 4.7,
    reviews: 320,
    lessons: 18,
    duration: '6 hafta',
    level: 'Başlangıç',
    bgColor: 'from-orange-100 to-orange-200',
    textColor: 'text-orange-800',
    icon: '📱',
    instructor: {
      name: 'Can Özkan',
      title: 'Dijital Pazarlama Uzmanı',
      icon: '👨‍💻'
    },
    features: [
      'Facebook Ads temelleri',
      'Hedef kitle belirleme',
      'Kreatif tasarım',
      'Kampanya optimizasyonu',
      'A/B testing',
      'Pixel kurulumu',
      'Remarketing',
      'ROI analizi'
    ],
    curriculum: [
      { title: 'Facebook Ads\'e Giriş', duration: '40 dk', completed: false },
      { title: 'Hedef Kitle Araştırması', duration: '55 dk', completed: false },
      { title: 'Kreatif Tasarım İlkeleri', duration: '60 dk', completed: false },
      { title: 'Kampanya Kurulumu', duration: '70 dk', completed: false },
      { title: 'Optimizasyon Teknikleri', duration: '65 dk', completed: false }
    ]
  }
};

interface CourseDetailPageProps {
  params: Promise<{ id: string }>;
}

const CourseDetailPage = async ({ params }: CourseDetailPageProps) => {
  const { id } = await params;
  const course = courseData[parseInt(id) as keyof typeof courseData];

  if (!course) {
    return <div className="container mx-auto px-4 py-8 text-white">Kurs bulunamadı.</div>;
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Course Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2">
              <nav className="text-xs sm:text-sm text-slate-400 mb-3 sm:mb-4">
                <Link href="/courses" className="hover:text-blue-400 transition-colors">Kurslar</Link>
                <span className="mx-2">›</span>
                <span className="truncate text-slate-300">{course.title}</span>
              </nav>
              
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">{course.title}</h1>
              <p className="text-base sm:text-lg text-slate-300 mb-4 sm:mb-6">{course.description}</p>
              
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-4 sm:mb-6">
                <div className="flex items-center">
                  <span className="text-yellow-400 text-base sm:text-lg">★</span>
                  <span className="font-semibold text-white ml-1 text-sm sm:text-base">{course.rating}</span>
                  <span className="text-slate-400 ml-1 text-xs sm:text-sm">({course.reviews} değerlendirme)</span>
                </div>
                <span className="text-slate-400 text-xs sm:text-sm">{course.lessons} ders</span>
                <span className="text-slate-400 text-xs sm:text-sm">{course.duration}</span>
                <span className="text-slate-400 text-xs sm:text-sm">{course.level}</span>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="text-xl sm:text-2xl">{course.instructor.icon}</div>
                <div>
                  <p className="font-medium text-white text-sm sm:text-base">{course.instructor.name}</p>
                  <p className="text-xs sm:text-sm text-blue-400">{course.instructor.title}</p>
                </div>
              </div>
            </div>
            
            {/* Course Image */}
            <div className="lg:col-span-1 order-first lg:order-last">
              <div className={`h-48 sm:h-56 lg:h-64 bg-gradient-to-br ${course.bgColor} rounded-lg flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-slate-900/40"></div>
                <div className="text-center relative z-10">
                  <div className="text-4xl sm:text-5xl lg:text-6xl mb-2 sm:mb-4">{course.icon}</div>
                  <h3 className={`text-base sm:text-lg lg:text-xl font-semibold text-white drop-shadow-lg`}>
                    {course.title.split(' ')[0]} Kursu
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Course Features */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg shadow-xl p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Bu Kursta Neler Öğreneceksiniz?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {course.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm sm:text-base text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Curriculum */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg shadow-xl p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Kurs İçeriği</h2>
              <div className="space-y-3 sm:space-y-4">
                {course.curriculum.map((lesson, index) => (
                  <div key={index} className="flex items-center justify-between p-3 sm:p-4 border border-slate-600 rounded-lg hover:bg-slate-700 transition-colors">
                    <div className="flex items-center">
                      <span className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-medium mr-3 sm:mr-4">
                        {index + 1}
                      </span>
                      <span className="text-sm sm:text-base text-white">{lesson.title}</span>
                    </div>
                    <span className="text-xs sm:text-sm text-slate-400">{lesson.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800 border border-slate-700 rounded-lg shadow-xl p-4 sm:p-6 sticky top-6">
              <div className="text-center mb-4 sm:mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    ₺{course.price}
                  </span>
                  <span className="text-base sm:text-lg text-slate-500 line-through">
                    ₺{course.originalPrice}
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-green-400 font-medium">
                  %{Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)} indirim
                </span>
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold text-sm sm:text-base hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg mb-3 sm:mb-4">
                Kursa Kayıt Ol
              </button>
              
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center">
                  <span className="mr-2">📚</span>
                  <span>{course.lessons} ders</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">⏱️</span>
                  <span>{course.duration} süre</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">📊</span>
                  <span>{course.level} seviye</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">🎓</span>
                  <span>Sertifika dahil</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">♾️</span>
                  <span>Sınırsız erişim</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage; 