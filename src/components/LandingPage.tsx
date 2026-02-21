import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900">
      {/* Hero Section */}
      <header className="flex-grow flex flex-col items-center justify-center py-20 px-4 text-center bg-gray-50 relative overflow-hidden">
        {/* Background Placeholder */}
        <div className="absolute inset-0 z-0">
             <img
               src="https://placehold.co/1920x1080/FFF7ED/FB923C?text=Sundial+Real+Estate"
               alt="Background"
               className="w-full h-full object-cover opacity-20"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/80"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto w-full">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900 tracking-tight leading-tight">
              Imagine Being... <span className="text-sundial-orange">HOME</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-2xl mx-auto">
              Your go-to hub for trusted vendors, local favorites, and homeowner tips in Conway, SoDo, Belle Isle, and Greater Orlando.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-md mx-auto sm:max-w-none">
              <a
                  href="https://bk.homestack.com/sundialrealestate?aik=bkiniry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-8 py-4 bg-sundial-orange text-white text-lg font-bold rounded-xl shadow-lg hover:bg-orange-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
              >
                  Download the Sundial App
              </a>
              <a
                  href="#"
                  className="flex items-center justify-center px-8 py-4 bg-sundial-yellow text-gray-900 text-lg font-bold rounded-xl shadow-lg hover:bg-yellow-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
              >
                  Browse the Resource Guide
              </a>
            </div>
        </div>
      </header>

      {/* Credibility Strip */}
      <section className="bg-white py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-8">

              <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-1">
                  <h3 className="text-2xl font-bold text-gray-900">Brittany Kiniry</h3>
                  <p className="text-gray-600 text-lg font-medium">Sundial Real Estate</p>
              </div>

              <div className="relative">
                  <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden shadow-lg border-4 border-white ring-2 ring-sundial-orange/20">
                      {/* Placeholder for Headshot */}
                      <img src="https://placehold.co/150x150/e2e8f0/1e293b?text=BK" alt="Brittany Kiniry" className="w-full h-full object-cover" />
                  </div>
              </div>

              <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
                  <p className="text-gray-600 text-lg font-medium">407.759.3275</p>
                  <a href="https://instagram.com/brittany_is_your_realtor" target="_blank" rel="noopener noreferrer" className="text-sundial-orange hover:text-orange-600 font-medium transition-colors">
                    @brittany_is_your_realtor
                  </a>
              </div>

            </div>
        </div>
      </section>

      {/* Banner Image */}
      <div className="w-1/2 mx-auto mb-8">
        <img src="/Sundial_banner.png" alt="Sundial Banner" className="w-full h-auto" />
      </div>

      {/* Footer / Disclaimer */}
      <footer className="bg-gray-50 py-8 text-center px-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 max-w-xl mx-auto leading-relaxed">
          Vendor recommendations are provided as a courtesy, clients should verify licensing and insurance.
        </p>
        <p className="text-xs text-gray-400 mt-4">
          © {new Date().getFullYear()} Sundial Real Estate. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
