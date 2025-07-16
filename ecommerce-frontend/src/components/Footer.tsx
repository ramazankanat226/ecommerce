'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 text-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-16 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-2xl text-white">Anils</span>
            </div>
            <p className="text-slate-300 text-base">
              Öğrenme ve büyüme için bir platform. Dünya standartlarında kurslarla potansiyelinizi açığa çıkarın.
            </p>
          </div>

          {/* Hızlı Bağlantılar */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-slate-300 hover:text-blue-400 transition-colors">Hakkımızda</Link></li>
              <li><Link href="/courses" className="text-slate-300 hover:text-blue-400 transition-colors">Kurslar</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-blue-400 transition-colors">Bize Ulaşın</Link></li>
              <li><Link href="/blog" className="text-slate-300 hover:text-blue-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Kaynaklar */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Kaynaklar</h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-slate-300 hover:text-blue-400 transition-colors">Yardım Merkezi</Link></li>
              <li><Link href="/faq" className="text-slate-300 hover:text-blue-400 transition-colors">Sık Sorulan Sorular</Link></li>
              <li><Link href="/privacy" className="text-slate-300 hover:text-blue-400 transition-colors">Gizlilik Politikası</Link></li>
              <li><Link href="/terms" className="text-slate-300 hover:text-blue-400 transition-colors">Kullanım Şartları</Link></li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">İletişim</h3>
            <div className="space-y-2">
              <p className="text-slate-300 text-sm">
                <Mail className="inline w-4 h-4 mr-2" />
                info@anils.com
              </p>
              <p className="text-slate-300 text-sm">
                📞 +90 (555) 123-4567
              </p>
              <p className="text-slate-300 text-sm">
                📍 İstanbul, Türkiye
              </p>
            </div>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2024 Anils. Tüm hakları saklıdır.
          </div>
          
          {/* Sosyal Medya */}
          <div className="flex space-x-4">
            <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 