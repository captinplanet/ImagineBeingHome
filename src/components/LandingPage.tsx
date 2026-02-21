import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-montserrat text-warm-gray bg-sand-bg">
      {/* Hero Section */}
      <header className="flex-grow flex flex-col items-center justify-center py-8 px-6 md:py-16 md:px-12 text-center relative overflow-hidden">
        {/* Background Placeholder - Minimal & Subtle */}
        <div className="absolute inset-0 z-0">
             {/* Using a very subtle background or pattern if needed, but keeping it clean for now */}
             <div className="absolute inset-0 bg-sand-bg"></div>
        </div>

        <div className="relative z-10 w-full max-w-[760px] mx-auto">
            <h1 className="font-playfair font-semibold text-5xl md:text-7xl mb-6 tracking-tight leading-tight text-warm-gray">
              Imagine Being... <span className="text-deep-teal">HOME</span>
            </h1>
            <p className="font-montserrat text-xl md:text-2xl text-warm-gray mb-12 leading-relaxed max-w-2xl mx-auto">
              Your go-to hub for trusted vendors, local favorites, and homeowner tips in Conway, SoDo, Belle Isle, and Greater Orlando.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-md mx-auto sm:max-w-none">
              <a
                  href="https://bk.homestack.com/sundialrealestate?aik=bkiniry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-8 py-4 bg-deep-teal text-white text-lg font-medium rounded-xl hover:opacity-90 transition-opacity duration-300 w-full sm:w-auto"
              >
                  Download the Sundial App
              </a>
              <a
                  href="#"
                  className="flex items-center justify-center px-8 py-4 bg-white text-deep-teal border border-deep-teal text-lg font-medium rounded-xl hover:bg-light-seafoam transition-colors duration-300 w-full sm:w-auto"
              >
                  Browse the Resource Guide
              </a>
            </div>
        </div>
      </header>

      {/* Credibility Strip */}
      <section className="bg-white py-12 border-t border-light-gray">
        <div className="container mx-auto px-4 max-w-[760px]">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-8">

              <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-1">
                  <h3 className="font-playfair font-semibold text-2xl text-warm-gray">Brittany Kiniry</h3>
                  <p className="text-warm-gray text-lg font-medium">Sundial Real Estate</p>
              </div>

              <div className="relative">
                  <div className="w-32 h-32 bg-light-gray rounded-full overflow-hidden border-4 border-white ring-2 ring-deep-teal/20">
                      {/* Placeholder for Headshot */}
                      <img src="https://placehold.co/150x150/e2e8f0/1F7A7A?text=BK" alt="Brittany Kiniry" className="w-full h-full object-cover" />
                  </div>
              </div>

              <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
                  <p className="text-warm-gray text-lg font-medium">407.759.3275</p>
                  <a href="https://instagram.com/brittany_is_your_realtor" target="_blank" rel="noopener noreferrer" className="text-deep-teal hover:text-coral-accent font-medium transition-colors">
                    @brittany_is_your_realtor
                  </a>
              </div>

            </div>
        </div>
      </section>

      {/* Banner Image */}
      <div className="w-full max-w-[760px] mx-auto my-8 px-6 md:px-0">
        <img src="/Sundial_banner.png" alt="Sundial Banner" className="w-full h-auto rounded-xl" />
      </div>

      {/* Footer / Disclaimer */}
      <footer className="bg-sand-bg py-8 text-center px-4 border-t border-light-gray">
        <p className="text-xs text-warm-gray/80 max-w-[760px] mx-auto leading-relaxed">
          Vendor recommendations are provided as a courtesy. Clients should verify licensing, insurance, and credentials independently. Sundial Real Estate and Brittany Kiniry do not guarantee third-party services.
        </p>
        <p className="text-xs text-warm-gray/60 mt-4">
          © {new Date().getFullYear()} Sundial Real Estate. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
