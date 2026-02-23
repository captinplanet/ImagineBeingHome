import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-sand-bg font-montserrat text-warm-gray">
      {/* Main Content Container - Strict max-w-760px */}
      <div className="w-full max-w-[760px] mx-auto p-8 md:p-16">

        {/* Hero Section */}
        <header className="flex flex-col items-center text-center mb-12">
            <h1 className="font-playfair font-semibold text-5xl md:text-7xl mb-6 tracking-tight leading-tight text-deep-teal">
              Imagine Being... HOME
            </h1>
            <p className="font-montserrat text-xl md:text-2xl text-warm-gray mb-12 leading-relaxed max-w-2xl mx-auto">
              Your go-to hub for trusted vendors, local favorites, and homeowner tips in Conway, SoDo, Belle Isle, and Greater Orlando.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-md mx-auto sm:max-w-none">
              <a
                  href="https://bk.homestack.com/sundialrealestate?aik=bkiniry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-8 py-4 bg-deep-teal text-white text-lg font-medium rounded-button hover:bg-opacity-90 transition-opacity duration-300 w-full sm:w-auto"
              >
                  Download the Sundial App
              </a>
              <a
                  href="#"
                  className="flex items-center justify-center px-8 py-4 bg-white text-deep-teal border border-deep-teal text-lg font-medium rounded-button transition-colors duration-300 w-full sm:w-auto"
              >
                  Browse the Resource Guide
              </a>
            </div>
        </header>

        {/* Credibility Section */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-12 py-8 border-t border-light-gray/30 border-b border-light-gray/30">
            <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-1">
                <h3 className="font-playfair font-semibold text-2xl text-warm-gray">Brittany Kiniry</h3>
                <p className="text-warm-gray text-lg font-medium">Sundial Real Estate</p>
            </div>

            <div className="relative">
                <div className="w-32 h-32 bg-seafoam rounded-image overflow-hidden border-4 border-white">
                    {/* Placeholder for Headshot */}
                    <img src="https://placehold.co/150x150/AEE6DF/1F7A7A?text=BK" alt="Brittany Kiniry" className="w-full h-full object-cover" />
                </div>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
                <p className="text-warm-gray text-lg font-medium">407.759.3275</p>
                <a href="https://instagram.com/brittany_is_your_realtor" target="_blank" rel="noopener noreferrer" className="text-deep-teal hover:text-coral-accent font-medium transition-colors">
                  @brittany_is_your_realtor
                </a>
            </div>
        </section>

        {/* Banner Image */}
        <div className="w-full mb-12">
            <div className="bg-seafoam rounded-image overflow-hidden">
                 <img src="/Sundial_banner.png" alt="Sundial Banner" className="w-full h-auto rounded-image block" />
            </div>
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
