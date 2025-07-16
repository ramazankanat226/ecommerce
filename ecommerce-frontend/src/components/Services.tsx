'use client';

import React, { memo } from 'react';
import { ShoppingBag, TrendingUp, Target, Users, Globe, BarChart3 } from 'lucide-react';

const ServiceCard = memo(({ service, index }: { service: any; index: number }) => (
  <div className="bg-slate-800 border border-slate-700 rounded-xl shadow-xl p-6 sm:p-8 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1">
    <div className="flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl mb-4 sm:mb-6 shadow-lg">
      <service.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
    </div>
    
    <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
      {service.title}
    </h3>
    
    <p className="text-sm sm:text-base text-slate-300 mb-4 sm:mb-6">
      {service.description}
    </p>
    
    <ul className="space-y-2">
      {service.features.map((feature: string, featureIndex: number) => (
        <li key={featureIndex} className="flex items-center text-sm text-slate-400">
          <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-3 flex-shrink-0"></span>
          {feature}
        </li>
      ))}
    </ul>
    
    <button className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-sm sm:text-base shadow-lg">
      Detayları Gör
    </button>
  </div>
));

ServiceCard.displayName = 'ServiceCard';

const Services = memo(() => {
  const services = React.useMemo(() => [
    {
      icon: ShoppingBag,
      title: 'Shopify Mağaza Kurulumu',
      description: 'Profesyonel Shopify mağazanızı sıfırdan kuruyoruz. Tema seçimi, ürün yükleme ve ödeme sistemleri dahil.',
      features: ['Tema özelleştirme', 'Ürün kataloğu', 'Ödeme entegrasyonu', 'Mobil uyumlu tasarım']
    },
    {
      icon: TrendingUp,
      title: 'Amazon FBA Optimizasyonu',
      description: 'Amazon\'da satışlarınızı artırmak için ürün listelerinizi optimize ediyoruz ve FBA stratejileri geliştiriyoruz.',
      features: ['Ürün optimizasyonu', 'Anahtar kelime araştırması', 'Rakip analizi', 'FBA stratejileri']
    },
    {
      icon: Target,
      title: 'Dijital Pazarlama',
      description: 'Facebook, Instagram ve Google Ads ile hedef kitlenize ulaşın. ROI odaklı kampanya yönetimi.',
      features: ['Facebook Ads', 'Google Ads', 'Instagram pazarlama', 'Analiz ve raporlama']
    },
    {
      icon: Users,
      title: 'Müşteri Deneyimi',
      description: 'Müşteri memnuniyetini artırmak için CRM sistemleri ve müşteri hizmetleri süreçlerini optimize ediyoruz.',
      features: ['CRM kurulumu', 'Canlı destek', 'Müşteri analizi', 'Sadakat programları']
    },
    {
      icon: Globe,
      title: 'E-ticaret SEO',
      description: 'Mağazanızı Google\'da üst sıralara çıkarıyoruz. Organik trafik artışı için kapsamlı SEO hizmetleri.',
      features: ['Teknik SEO', 'İçerik optimizasyonu', 'Link building', 'Yerel SEO']
    },
    {
      icon: BarChart3,
      title: 'Analiz ve Raporlama',
      description: 'Satış performansınızı detaylı analiz ediyoruz. Veri odaklı kararlar alın ve büyümeyi hızlandırın.',
      features: ['Satış analizi', 'Müşteri davranışı', 'Performans raporları', 'Büyüme stratejileri']
    }
  ], []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-900 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            E-Ticaret Hizmetlerimiz
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            E-ticaret işinizi büyütmek için ihtiyacınız olan tüm hizmetleri sunuyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Tüm Hizmetleri Görüntüle
          </button>
        </div>
      </div>
    </section>
  );
});

Services.displayName = 'Services';

export default Services; 