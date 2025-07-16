'use client';

import { useState } from 'react';
import Link from 'next/link';

const Hero = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Email:', email);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
              E-Ticaret Dünyasında
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent block">Başarıya Giden Yolunuz</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              Shopify, Amazon FBA, dijital pazarlama ve daha fazlası ile e-ticaret dünyasında uzmanlaşın. 
              Sıfırdan başlayarak profesyonel seviyeye ulaşın.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Tüm Kursları Görüntüle
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-slate-800 text-slate-200 font-semibold rounded-lg border-2 border-slate-600 hover:bg-slate-700 hover:border-slate-500 transition-all text-sm sm:text-base"
              >
                Hakkımızda
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 text-center lg:text-left mt-8 sm:mt-12">
              <div>
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">2.5k+</div>
                <div className="text-xs sm:text-sm text-slate-400">Aktif Öğrenci</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">25+</div>
                <div className="text-xs sm:text-sm text-slate-400">Uzman Eğitim</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative mt-8 lg:mt-0">
            {/* Main Image Placeholder */}
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 sm:p-12 shadow-2xl">
              <div className="text-center">
                <div className="text-4xl sm:text-6xl mb-4">📊</div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2">E-Ticaret Eğitimi</h3>
                <p className="text-sm sm:text-base text-slate-300">Profesyonel Kurslar</p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-slate-800 border border-slate-600 rounded-full p-3 sm:p-4 shadow-lg">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-sm sm:text-base">📊</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-slate-800 border border-slate-600 rounded-full p-3 sm:p-4 shadow-lg">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-sm sm:text-base">💰</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 