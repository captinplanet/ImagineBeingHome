import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-sand-bg font-montserrat text-warm-gray">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');`}
      </style>

      {/* Full-Bleed Hero Section */}
      <header className="relative w-full min-h-[55vh] min-h-[500px] flex flex-col justify-end pt-20 md:pt-0">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
            <img
                src="/OrlandoBlur.avif"
                alt="Orlando Skyline Blur"
                className="w-full h-full object-cover object-[center_20%] md:object-center"
            />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7F3EE] via-[#F7F3EE]/70 to-transparent"></div>

        {/* Hero Content - Constrained Width & Bottom Aligned */}
        <div className="relative z-10 w-full max-w-[760px] mx-auto px-6 pb-8 md:pb-12 text-center">
            <div className="max-w-2xl mx-auto mb-8">
              <h1 className="font-playfair font-semibold mb-8 tracking-tight leading-tight text-deep-teal flex flex-col items-center drop-shadow-[0_0px_5px_rgba(255,255,255,1)] md:drop-shadow-[0_0px_10px_rgba(255,255,255,0.9)]">
                <span className="text-4xl md:text-7xl italic mb-6 md:mb-12">Imagine Being...</span>
                <span className="text-[6rem] md:text-[12rem] text-coral-accent leading-[0.8]" style={{ fontFamily: "'Great Vibes', cursive" }}>Home!</span>
              </h1>
              <p className="font-montserrat text-sm md:text-2xl text-[#4A4A4A] font-semibold leading-snug md:leading-normal drop-shadow-[0_0px_4px_rgba(255,255,255,1)]">
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
                  href="https://www.canva.com/design/DAHBy52ZfSc/KCfaJqE4pwgiyPgkoSWkhg/view?utm_content=DAHBy52ZfSc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7b67ea1a70"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-8 py-4 bg-white text-deep-teal border border-deep-teal text-lg font-medium rounded-button transition-colors duration-300"
              >
                  Browse the Resource Guide
              </a>
            </div>
        </div>
      </header>

      {/* Main Content Container - Strict max-w-760px */}
      <div className="w-full max-w-[760px] mx-auto px-8 pt-8 md:px-16 md:pt-12 pb-16">

        {/* Credibility Section */}
        <section className="flex flex-row items-center justify-center gap-6 mb-12 py-6 px-8 bg-white rounded-button border border-gray-200 w-full max-w-md mx-auto">
            <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-seafoam rounded-full overflow-hidden border-2 border-white shadow-md">
                    {/* Placeholder for Headshot */}
                    <img src="/BrittHeadShot.avif" alt="Brittany Kiniry" className="w-full h-full object-cover" />
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
