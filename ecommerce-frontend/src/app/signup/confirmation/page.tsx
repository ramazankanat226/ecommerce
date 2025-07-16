import Link from 'next/link';

const ConfirmationPage = () => {
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
          <h1 className="text-3xl font-bold mb-2 text-white text-center md:text-left">Hesabını Doğrula</h1>

          <p className="text-slate-300 mb-8 text-center md:text-left">
            Lütfen mailinize gelen doğrulama linkine tıklayarak hesabınızı onaylayın.
          </p>

          <div className="mt-6 text-center">
            <Link href="/login" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
              Giriş sayfasına dön
            </Link>
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
            <div className="text-6xl mb-6">📧</div>
            <h2 className="text-3xl font-bold mb-4">E-posta Doğrulama</h2>
            <p className="text-blue-100 mb-6">
              Hesabınızı güvenli tutmak için e-posta adresinizi doğrulayın.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-blue-100">Güvenli doğrulama</span>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-blue-100">Hızlı aktivasyon</span>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-blue-100">Anında erişim</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage; 