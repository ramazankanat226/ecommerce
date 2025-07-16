'use client';

import { useState } from 'react';
import Link from 'next/link';

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const courses = [
    {
      id: 1,
      title: 'Shopify ile E-Ticaret Mastery',
      description: 'Shopify kullanarak profesyonel e-ticaret mağazası kurmayı ve yönetmeyi öğrenin.',
      instructor: 'Mehmet Yılmaz',
      rating: 4.9,
      reviews: 450,
      price: 299.99,
      originalPrice: 499.99,
      category: 'shopify',
      level: 'Başlangıç',
      duration: '8 hafta',
      lessons: 24,
      bgColor: 'from-blue-100 to-blue-200',
      textColor: 'text-blue-800',
      icon: '🛍️'
    },
    {
      id: 2,
      title: 'Amazon FBA ile Pasif Gelir',
      description: 'Amazon FBA stratejileri ile e-ticaret işinizi büyütün ve pasif gelir elde edin.',
      instructor: 'Ayşe Demir',
      rating: 4.8,
      reviews: 680,
      price: 399.99,
      originalPrice: 599.99,
      category: 'amazon',
      level: 'Orta',
      duration: '10 hafta',
      lessons: 32,
      bgColor: 'from-slate-100 to-slate-200',
      textColor: 'text-slate-800',
      icon: '📦'
    },
    {
      id: 3,
      title: 'Facebook Ads Uzmanlığı',
      description: 'Facebook reklamları ile etkili pazarlama kampanyaları oluşturun.',
      instructor: 'Can Özkan',
      rating: 4.7,
      reviews: 320,
      price: 199.99,
      originalPrice: 299.99,
      category: 'marketing',
      level: 'Başlangıç',
      duration: '6 hafta',
      lessons: 18,
      bgColor: 'from-orange-100 to-orange-200',
      textColor: 'text-orange-800',
      icon: '📱'
    },
    {
      id: 4,
      title: 'Google Ads ile Satış Artırma',
      description: 'Google Ads ile etkili reklam kampanyaları oluşturun ve ROI\'nizi artırın.',
      instructor: 'Elif Kaya',
      rating: 4.6,
      reviews: 280,
      price: 249.99,
      originalPrice: 399.99,
      category: 'marketing',
      level: 'Orta',
      duration: '7 hafta',
      lessons: 21,
      bgColor: 'from-blue-100 to-blue-200',
      textColor: 'text-blue-800',
      icon: '🎯'
    },
    {
      id: 5,
      title: 'Dropshipping ile E-Ticaret',
      description: 'Dropshipping modeliyle stoksuz e-ticaret işi kurmayı öğrenin.',
      instructor: 'Ahmet Çelik',
      rating: 4.5,
      reviews: 190,
      price: 179.99,
      originalPrice: 279.99,
      category: 'dropshipping',
      level: 'Başlangıç',
      duration: '5 hafta',
      lessons: 15,
      bgColor: 'from-slate-100 to-slate-200',
      textColor: 'text-slate-800',
      icon: '🚚'
    },
    {
      id: 6,
      title: 'E-Ticaret SEO Stratejileri',
      description: 'E-ticaret sitenizi Google\'da üst sıralara çıkarın.',
      instructor: 'Zeynep Aydın',
      rating: 4.4,
      reviews: 150,
      price: 159.99,
      originalPrice: 249.99,
      category: 'seo',
      level: 'İleri',
      duration: '6 hafta',
      lessons: 20,
      bgColor: 'from-orange-100 to-orange-200',
      textColor: 'text-orange-800',
      icon: '🔍'
    },
  ];

  const categories = [
    { value: 'all', label: 'Tüm Kategoriler' },
    { value: 'shopify', label: 'Shopify' },
    { value: 'amazon', label: 'Amazon FBA' },
    { value: 'marketing', label: 'Dijital Pazarlama' },
    { value: 'dropshipping', label: 'Dropshipping' },
    { value: 'seo', label: 'SEO' },
  ];

  const levels = [
    { value: 'all', label: 'Tüm Seviyeler' },
    { value: 'Başlangıç', label: 'Başlangıç' },
    { value: 'Orta', label: 'Orta' },
    { value: 'İleri', label: 'İleri' },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return b.reviews - a.reviews;
    }
  });

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 py-8 relative z-10">
          <h1 className="text-3xl font-bold text-white mb-2">E-Ticaret Kursları</h1>
          <p className="text-slate-300">Uzman eğitmenlerden e-ticaret dünyasının tüm inceliklerini öğrenin</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Filters */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg shadow-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Ara</label>
              <input
                type="text"
                placeholder="Kurs ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-slate-600 bg-slate-700 text-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-slate-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Kategori</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-slate-600 bg-slate-700 text-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Seviye</label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-3 py-2 border border-slate-600 bg-slate-700 text-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {levels.map(level => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Sıralama</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-slate-600 bg-slate-700 text-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="popular">Popülerlik</option>
                <option value="rating">Puan</option>
                <option value="price-low">Fiyat (Düşük)</option>
                <option value="price-high">Fiyat (Yüksek)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedCourses.map((course) => (
            <div key={course.id} className="bg-slate-800 border border-slate-700 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1">
              {/* Course Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${course.bgColor} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-slate-900/40"></div>
                <div className="text-center relative z-10">
                  <div className="text-5xl mb-2">{course.icon}</div>
                  <h3 className={`text-xl font-semibold text-white drop-shadow-lg`}>
                    {course.title.split(' ')[0]}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-blue-400 bg-blue-900/50 border border-blue-700 px-2 py-1 rounded-full font-medium">
                    {course.level}
                  </span>
                  <div className="flex items-center text-sm text-slate-400">
                    <span>{course.duration}</span>
                    <span className="mx-2">•</span>
                    <span>{course.lessons} ders</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">
                  {course.title}
                </h3>
                <p className="text-slate-300 mb-4 line-clamp-2">
                  {course.description}
                </p>
                
                <div className="flex items-center mb-4">
                  <span className="text-sm text-slate-400">Eğitmen: {course.instructor}</span>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm font-medium text-white ml-1">
                      {course.rating}
                    </span>
                    <span className="text-sm text-slate-400 ml-1">
                      ({course.reviews} değerlendirme)
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      ₺{course.price}
                    </span>
                    <span className="text-sm text-slate-500 line-through ml-2">
                      ₺{course.originalPrice}
                    </span>
                  </div>
                  <Link
                    href={`/courses/${course.id}`}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium shadow-lg"
                  >
                    Detaylar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {sortedCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">Aradığınız kriterlere uygun kurs bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage; 