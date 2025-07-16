'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            E-Ticaret Yolculuğunuzda Yanınızdayız
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto">
            Shopify, Amazon FBA veya dijital pazarlama konularında sorularınız mı var? E-ticaret uzmanlarımız size yardımcı olmaya hazır.
          </p>
        </div>
      </section>

      {/* Contact Info and Form Section */}
      <section className="py-12 sm:py-16 lg:py-20 relative">
        {/* Background effects */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                  Bizimle İletişime Geçin
                </h2>
                <p className="text-base sm:text-lg text-slate-300">
                  Sorularınız, önerileriniz veya destek talebiniz için bize ulaşabilirsiniz. 
                  Uzman ekibimiz size en kısa sürede geri dönüş yapacaktır.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                    <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white">Adres</h3>
                    <p className="text-sm sm:text-base text-slate-300">
                      Maslak Mahallesi, Büyükdere Caddesi<br />
                      No: 123, Sarıyer/İstanbul
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white">Telefon</h3>
                    <p className="text-sm sm:text-base text-slate-300">
                      +90 (212) 555-0123<br />
                      +90 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white">E-posta</h3>
                    <p className="text-sm sm:text-base text-slate-300">
                      info@anils.com<br />
                      destek@anils.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Mesaj Gönder
              </h3>
              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs sm:text-sm font-medium text-slate-300 mb-1">Ad</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      placeholder="Adınız" 
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-600 bg-slate-700 text-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base placeholder-slate-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs sm:text-sm font-medium text-slate-300 mb-1">Soyad</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName" 
                      placeholder="Soyadınız" 
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-600 bg-slate-700 text-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base placeholder-slate-400"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-slate-300 mb-1">E-posta</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="E-posta adresiniz" 
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-600 bg-slate-700 text-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base placeholder-slate-400"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-slate-300 mb-1">Konu</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    placeholder="Mesaj konusu" 
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-600 bg-slate-700 text-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base placeholder-slate-400"
                  />
                </div>
                <div className="mb-4 sm:mb-6">
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-slate-300 mb-1">Mesajınız</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    placeholder="Mesajınızı buraya yazın..." 
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-600 bg-slate-700 text-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base resize-none placeholder-slate-400"
                  ></textarea>
                </div>
                <div>
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Mesajı Gönder</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section>
        <div className="w-full h-64 sm:h-80 lg:h-96 bg-slate-800 border-t border-slate-700">
          {/* Google Maps iframe or a static image can go here */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.81956135078819!3d-6.194741395514638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356240452!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1625833003447!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
            allowFullScreen={true}
            loading="lazy"
            title="Konumumuz"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 