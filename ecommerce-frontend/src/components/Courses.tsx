'use client';

import React, { memo } from 'react';
import Link from 'next/link';

const CourseCard = memo(({ course }: { course: any }) => (
  <div className="bg-slate-800 border border-slate-700 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1">
    {/* Course Image Placeholder */}
    <div className={`h-48 sm:h-56 bg-gradient-to-br ${course.bgColor} flex items-center justify-center relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-slate-900/40"></div>
      <div className="text-center relative z-10">
        <div className="text-4xl sm:text-5xl mb-2">{course.icon}</div>
        <h3 className={`text-lg sm:text-xl font-semibold text-white drop-shadow-lg`}>
          {course.title}
        </h3>
      </div>
    </div>
    
    <div className="p-4 sm:p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs sm:text-sm text-blue-400 bg-blue-900/50 border border-blue-700 px-2 py-1 rounded-full font-medium">
          {course.level}
        </span>
        <span className="text-xs sm:text-sm text-slate-400">{course.duration}</span>
      </div>
      
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
        {course.title}
      </h3>
      <p className="text-sm sm:text-base text-slate-300 mb-4">
        {course.description}
      </p>
      
      <div className="flex items-center justify-between">
        <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          {course.price}
        </span>
        <Link
          href={`/courses/${course.id}`}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-sm sm:text-base font-medium shadow-lg"
        >
          Detaylar
        </Link>
      </div>
    </div>
  </div>
));

CourseCard.displayName = 'CourseCard';

const Courses = memo(() => {
  const courses = React.useMemo(() => [
    {
      id: 1,
      title: 'Shopify ile E-Ticaret',
      description: 'Shopify kullanarak profesyonel e-ticaret mağazası kurmayı öğrenin.',
      price: '₺299.99',
      duration: '8 hafta',
      level: 'Başlangıç',
      bgColor: 'from-blue-100 to-blue-200',
      textColor: 'text-blue-800',
      icon: '🛍️'
    },
    {
      id: 2,
      title: 'Amazon FBA Mastery',
      description: 'Amazon FBA ile pasif gelir elde etme stratejilerini keşfedin.',
      price: '₺399.99',
      duration: '10 hafta',
      level: 'Orta',
      bgColor: 'from-slate-100 to-slate-200',
      textColor: 'text-slate-800',
      icon: '📦'
    },
    {
      id: 3,
      title: 'Facebook Ads Uzmanlığı',
      description: 'Facebook reklamları ile etkili pazarlama kampanyaları oluşturun.',
      price: '₺199.99',
      duration: '6 hafta',
      level: 'Başlangıç',
      bgColor: 'from-orange-100 to-orange-200',
      textColor: 'text-orange-800',
      icon: '📱'
    },
  ], []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-900 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Popüler Kurslarımız
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            E-ticaret dünyasında başarılı olmak için ihtiyacınız olan tüm becerileri kazanın
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/courses"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Tüm Kursları Görüntüle
          </Link>
        </div>
      </div>
    </section>
  );
});

Courses.displayName = 'Courses';

export default Courses; 