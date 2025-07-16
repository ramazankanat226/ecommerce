import React from 'react';

const AboutPage = () => {
  const stats = [
    { number: '2,500+', label: 'Aktif Öğrenci' },
    { number: '12+', label: 'Mentor' },
    { number: '25+', label: 'Uzman Eğitim' },
    { number: '95%', label: 'Memnuniyet Oranı' }
  ];

  const teamMembers = [
    {
      name: 'Mehmet Yılmaz',
      role: 'Kurucu & CEO',
      experience: '10+ yıl e-ticaret deneyimi',
      icon: '👨‍💼'
    },
    {
      name: 'Ayşe Demir',
      role: 'Eğitim Direktörü',
      experience: 'Pedagoji uzmanı',
      icon: '👩‍🏫'
    },
    {
      name: 'Can Özkan',
      role: 'Dijital Pazarlama Uzmanı',
      experience: 'Google & Facebook sertifikalı',
      icon: '👨‍💻'
    },
    {
      name: 'Elif Kara',
      role: 'Müşteri Başarı Uzmanı',
      experience: 'Öğrenci deneyimi odaklı',
      icon: '👩‍💼'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Hakkımızda
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto text-slate-300">
            E-ticaret dünyasında başarıya giden yolda rehberiniz olmaktan gurur duyuyoruz
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative">
        {/* Background effects */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16 relative z-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Misyonumuz
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mb-4 sm:mb-6">
              Anils olarak, e-ticaret dünyasında başarılı olmak isteyen girişimcilere 
              en güncel ve pratik eğitimleri sunuyoruz. Shopify'dan Amazon FBA'ya, 
              dijital pazarlamadan SEO'ya kadar geniş bir yelpazede uzman eğitmenlerimizle 
              birlikte çalışıyoruz.
            </p>
            <p className="text-base sm:text-lg text-slate-300">
              Amacımız, sadece teorik bilgi vermek değil, aynı zamanda pratik uygulamalar 
              ve gerçek dünya örnekleriyle öğrencilerimizin başarıya ulaşmasını sağlamaktır.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 sm:p-12 shadow-2xl">
              <div className="text-center">
                <div className="text-4xl sm:text-6xl mb-4">🎯</div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2">Misyonumuz</h3>
                <p className="text-sm sm:text-base text-slate-300">E-ticaret Başarısı</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-12 sm:mb-16 relative z-10">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-white mb-8 sm:mb-12">
            Rakamlarla Anils
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-slate-800 border border-slate-700 rounded-xl shadow-xl p-4 sm:p-6 text-center hover:shadow-2xl hover:shadow-blue-500/20 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-slate-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="relative z-10">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-white mb-8 sm:mb-12">
            Uzman Ekibimiz
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-slate-800 border border-slate-700 rounded-xl shadow-xl p-4 sm:p-6 text-center hover:shadow-2xl hover:shadow-blue-500/20 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{member.icon}</div>
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {member.name}
                </h4>
                <p className="text-sm sm:text-base text-blue-400 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-xs sm:text-sm text-slate-400">
                  {member.experience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 