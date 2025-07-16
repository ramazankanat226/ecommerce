"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const supabase_1 = require("@/services/supabase");
(async () => {
    try {
        console.log('Kullanıcı listesi alınıyor...');
        const { data: listData, error: listError } = await supabase_1.supabaseAdmin.auth.admin.listUsers();
        if (listError)
            throw listError;
        if (!listData || listData.users.length === 0) {
            console.log('Silinecek kullanıcı yok.');
            process.exit(0);
        }
        for (const user of listData.users) {
            console.log(`Siliniyor ➜ ${user.email} (${user.id})`);
            const { error: delError } = await supabase_1.supabaseAdmin.auth.admin.deleteUser(user.id, true);
            if (delError) {
                console.error(`Hata ➜ ${user.email}:`, delError.message);
            }
        }
        console.log('Tüm kullanıcılar silindi.');
    }
    catch (err) {
        console.error('İşlem hatası:', err.message);
        process.exit(1);
    }
})();
//# sourceMappingURL=deleteAllUsers.js.map