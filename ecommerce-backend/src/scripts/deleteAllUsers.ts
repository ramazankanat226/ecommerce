import { supabaseAdmin } from '@/services/supabase';

(async () => {
  try {
    console.log('Kullanıcı listesi alınıyor...');
    const { data: listData, error: listError } = await supabaseAdmin.auth.admin.listUsers();
    if (listError) throw listError;

    if (!listData || listData.users.length === 0) {
      console.log('Silinecek kullanıcı yok.');
      process.exit(0);
    }

    for (const user of listData.users) {
      console.log(`Siliniyor ➜ ${user.email} (${user.id})`);
      const { error: delError } = await supabaseAdmin.auth.admin.deleteUser(user.id, true);
      if (delError) {
        console.error(`Hata ➜ ${user.email}:`, delError.message);
      }
    }

    console.log('Tüm kullanıcılar silindi.');
  } catch (err: any) {
    console.error('İşlem hatası:', err.message);
    process.exit(1);
  }
})(); 