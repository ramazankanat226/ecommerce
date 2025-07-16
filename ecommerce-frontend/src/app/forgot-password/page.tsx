import Link from 'next/link';

const ForgotPasswordPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative flex flex-col md:flex-row m-6 space-y-8 md:space-y-0 bg-slate-800 border border-slate-700 shadow-2xl rounded-2xl max-w-4xl w-full overflow-hidden">
        {/* Left Side */}
        <div className="flex flex-col justify-center p-8 md:p-14 flex-1">
          <div className="flex items-center mb-8 justify-center md:justify-start">
             <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white text-2xl font-bold flex items-center justify-center rounded-full mr-2 shadow-lg">
               A
             </div>
             <span className="text-2xl font-bold text-white">Anils</span>
           </div>
          <Link
            href="/login"
            className="flex items-center mb-6 text-sm text-blue-400 hover:text-blue-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Giriş sayfasına dön
          </Link>
          <h1 className="text-3xl font-bold mb-2 text-white text-center md:text-left">Şifreni mi unuttun?</h1>
          <p className="text-slate-300 mb-8 text-center md:text-left">Endişelenme, hepimizin başına gelir. Şifrenizi kurtarmak için aşağıya e-postanızı girin.</p>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">E-posta</label>
              <input
                type="email"
                id="email"
                placeholder="E-posta adresiniz"
                className="w-full px-4 py-3 border border-slate-600 bg-slate-700 text-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-slate-400"
                required
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
            >
              Şifre Sıfırlama Bağlantısı Gönder
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-400">
              Şifrenizi hatırladınız mı?{' '}
              <Link href="/login" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                Giriş yapın
              </Link>
            </p>
          </div>
        </div>
        
        {/* Right Side */}
        <div className="flex flex-col justify-center p-8 md:p-14 bg-gradient-to-br from-blue-600 to-purple-600 text-white flex-1 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <div className="text-6xl mb-6">🔐</div>
            <h2 className="text-3xl font-bold mb-4">Şifre Kurtarma</h2>
            <p className="text-blue-100 mb-6">
              Hesabınıza tekrar güvenli bir şekilde erişin.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-blue-100">Güvenli kurtarma</span>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-blue-100">Hızlı işlem</span>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-blue-100">E-posta koruması</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage; 