'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login');
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-200">
        Yükleniyor...
      </div>
    );
  }

  if (!user) return null; // redirecting

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Profil</h1>
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg max-w-md">
          <p><span className="font-semibold">Ad:</span> {user.first_name} {user.last_name}</p>
          <p className="mt-2"><span className="font-semibold">E-posta:</span> {user.email}</p>
          <p className="mt-2"><span className="font-semibold">Rol:</span> {user.role}</p>

          {/* WhatsApp katılım linki alanı */}
          <div className="mt-4">
            <label htmlFor="whatsappLink" className="block text-sm font-medium text-slate-300 mb-1">WhatsApp Katılım Linki</label>
            <input
              type="url"
              id="whatsappLink"
              placeholder="https://chat.whatsapp.com/..."
              disabled
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-slate-400 cursor-not-allowed"
            />
            <p className="text-xs text-slate-500 mt-1">Yakında aktif olacak</p>
          </div>
        </div>
      </div>
    </div>
  );
} 