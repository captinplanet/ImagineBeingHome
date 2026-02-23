import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-sand-bg font-montserrat text-warm-gray">
      {/* Main Content Container - Strict max-w-760px */}
      <div className="w-full max-w-[760px] mx-auto p-8 md:p-16">

        {/* Hero Section */}
        <header className="flex flex-col items-center text-center mb-12 bg-[url('/OrlandoBlur.avif')] bg-cover bg-center bg-no-repeat py-16 px-6 rounded-3xl">
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-[16px] max-w-2xl mx-auto mb-12">
              <h1 className="font-playfair font-semibold mb-6 tracking-tight leading-tight text-deep-teal flex flex-col items-center">
                <span className="text-3xl md:text-5xl italic mb-2">Imagine Being...</span>
                <span className="text-6xl md:text-8xl font-bold text-coral-accent">HOME</span>
              </h1>
              <p className="font-montserrat text-xl md:text-2xl text-warm-gray leading-relaxed">
                Your go-to hub for trusted vendors, local favorites, and homeowner tips in Conway, SoDo, Belle Isle, and Greater Orlando.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
              <a
                  href="https://bk.homestack.com/sundialrealestate?aik=bkiniry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-8 py-4 bg-deep-teal text-white text-lg font-medium rounded-button hover:bg-opacity-90 transition-opacity duration-300"
              >
                  Download the Sundial App
              </a>
              <a
                  href="#"
                  className="flex items-center justify-center px-8 py-4 bg-white text-deep-teal border border-deep-teal text-lg font-medium rounded-button transition-colors duration-300"
              >
                  Browse the Resource Guide
              </a>
            </div>
        </header>

        {/* Credibility Section */}
        <section className="flex flex-row items-center justify-center gap-6 mb-12 py-6 px-8 bg-white rounded-button border border-gray-200 w-full max-w-md mx-auto">
            <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-seafoam rounded-full overflow-hidden">
                    {/* Placeholder for Headshot */}
                    <img src="https://placehold.co/150x150/AEE6DF/1F7A7A?text=BK" alt="Brittany Kiniry" className="w-full h-full object-cover" />
                </div>
            </div>

            <div className="flex flex-col items-start text-left space-y-1">
                <h3 className="font-playfair font-bold text-xl text-warm-gray">Brittany Kiniry</h3>
                <p className="text-warm-gray text-sm mb-1">Sundial Real Estate</p>
                <p className="text-warm-gray text-base font-medium">407.759.3275</p>
                <a href="https://instagram.com/brittany_is_your_realtor" target="_blank" rel="noopener noreferrer" className="text-deep-teal hover:text-coral-accent font-medium transition-colors text-sm">
                  @brittany_is_your_realtor
                </a>
            </div>
        </section>

        {/* Banner Image */}
        <div className="w-full mt-12 mb-12 flex justify-center">
             <img src="/Sundial_banner.png" alt="Sundial Real Estate" className="h-16 w-auto object-contain" />
        </div>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-light-gray/30">
            <p className="text-xs text-warm-gray/80 leading-relaxed mb-4">
              Vendor recommendations are provided as a courtesy. Clients should verify licensing, insurance, and credentials independently. Sundial Real Estate and Brittany Kiniry do not guarantee third-party services.
            </p>
            <p className="text-xs text-warm-gray/60">
              © {new Date().getFullYear()} Sundial Real Estate. All rights reserved.
            </p>
        </footer>

      </div>
    </div>
  );
};

export default LandingPage;
