import React, { useState } from 'react';
import EqualHousing from '../assets/Equal-Housing.png';
import RealtorMLS from '../assets/Realtor-MLS.png';

const LandingPage: React.FC = () => {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-sand-bg font-montserrat text-warm-gray">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');`}
      </style>

      {/* Full-Bleed Hero Section */}
      <header className="relative w-full min-h-[500px] md:min-h-[65vh] flex flex-col justify-center pt-8 md:pt-20 pb-24 md:pb-40">
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
        <div className="relative z-10 w-full max-w-[760px] mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto mb-8">
              <h1 className="font-playfair font-semibold mb-8 tracking-tight leading-tight text-[#4A4A4A] flex flex-col items-center drop-shadow-[0_0px_5px_rgba(255,255,255,1)] md:drop-shadow-[0_0px_10px_rgba(255,255,255,0.9)]">
                <span className="text-4xl md:text-7xl italic mb-6 md:mb-12">Imagine Being...</span>
                <span className="text-[6rem] md:text-[12rem] text-coral-accent leading-[0.8]" style={{ fontFamily: "'Great Vibes', cursive" }}>Home!</span>
              </h1>
              <p className="font-montserrat text-sm md:text-2xl text-[#4A4A4A] font-semibold leading-snug md:leading-normal drop-shadow-[0_0px_4px_rgba(255,255,255,1)]">
                Your go-to hub for trusted vendors, local favorites, and homeowner tips in Conway, SoDo, Belle Isle, and Greater Orlando.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
              <button
                  className="flex items-center justify-center px-8 py-4 bg-deep-teal text-white text-lg font-medium rounded-button hover:bg-opacity-90 transition-opacity duration-300 cursor-default"
              >
                  Coming soon
              </button>
              <a
                  href="https://canva.link/f5fi8hno892k1i3"
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
      <div className="w-full max-w-[760px] mx-auto px-8 md:px-16 pt-0 pb-16">

        {/* Credibility Section */}
        <section className="relative z-20 flex flex-col overflow-hidden bg-white rounded-[16px] max-w-xl mx-auto w-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-[#D9D6D2] -mt-12 md:-mt-24 mb-12 pb-4 md:pb-6">
            <div className="flex flex-col md:flex-row w-full">
                <div className="w-full md:w-1/3">
                    {/* Placeholder for Headshot */}
                    <img src="/BrittHeadShot.avif" alt="Brittany Kiniry" className="w-full h-48 md:h-full object-cover object-center" />
                </div>

                <div className="w-full md:w-2/3 flex flex-col justify-center items-start text-left p-6 md:px-8 md:py-8 gap-1.5">
                    <h3 className="text-2xl font-sans font-bold text-[#4A4A4A] tracking-tight mb-1">Brittany Kiniry</h3>
                    <div className="flex justify-between items-center w-full text-sm text-[#4A4A4A] mb-3">
                        <span className="font-medium tracking-wide uppercase">REALTOR®</span>
                        <span className="text-gray-500">#SL3627481</span>
                    </div>
                    <div className="flex flex-col gap-2 w-full mt-2">
                        <a href="tel:4074534755" className="w-full px-2 sm:px-4 py-2.5 text-[13px] sm:text-sm font-semibold text-[#1F7A7A] bg-[#1F7A7A]/10 rounded-lg text-center hover:bg-[#1F7A7A] hover:text-white transition-colors duration-200 break-all">407.453.4755</a>
                        <a href="mailto:brittany@imaginebeinghome.com" className="w-full px-2 sm:px-4 py-2.5 text-[13px] sm:text-sm font-semibold text-[#1F7A7A] bg-[#1F7A7A]/10 rounded-lg text-center hover:bg-[#1F7A7A] hover:text-white transition-colors duration-200 break-all">
                            <span className="hidden max-[360px]:inline">Email Brittany</span>
                            <span className="max-[360px]:hidden">brittany@imaginebeinghome.com</span>
                        </a>
                        <a href="https://instagram.com/brittany_is_your_realtor" target="_blank" rel="noopener noreferrer" className="w-full px-2 sm:px-4 py-2.5 text-[13px] sm:text-sm font-semibold text-[#1F7A7A] bg-[#1F7A7A]/10 rounded-lg text-center hover:bg-[#1F7A7A] hover:text-white transition-colors duration-200 break-all">@brittany_is_your_realtor</a>
                    </div>
                </div>
            </div>

            <hr className="border-t border-[#1F7A7A]/10 my-4" />

            <div className="px-6">
                <h4 className="font-playfair text-xl text-[#1F7A7A] text-center mb-1">
                    Ready to make a move?
                </h4>
                <p className="text-xs text-center text-[#4A4A4A] font-montserrat font-medium max-w-xl mx-auto mb-6 leading-relaxed">
                    Whether you're looking for your first home in Conway or a luxury estate in Belle Isle, my dedicated Pixel Realty portal gives you direct access to <strong className="text-deep-teal">live MLS data</strong> and <strong className="text-deep-teal">personalized market reports</strong> tailored to your goals.
                </p>
                <div className="grid grid-cols-3 gap-3 w-full px-4 md:px-8 mb-2">
                    <a href="https://brittany.ipixelrealty.com/listing" target="_blank" rel="noopener noreferrer" className="text-center py-2.5 bg-[#1F7A7A]/10 text-[#1F7A7A] text-sm font-semibold rounded-full hover:bg-[#1F7A7A] hover:text-white transition-colors duration-200">
                        Buy
                    </a>
                    <a href="https://brittany.ipixelrealty.com/sell" target="_blank" rel="noopener noreferrer" className="text-center py-2.5 bg-[#1F7A7A]/10 text-[#1F7A7A] text-sm font-semibold rounded-full hover:bg-[#1F7A7A] hover:text-white transition-colors duration-200">
                        Sell
                    </a>
                    <a href="https://brittany.ipixelrealty.com/rental-listing" target="_blank" rel="noopener noreferrer" className="text-center py-2.5 bg-[#1F7A7A]/10 text-[#1F7A7A] text-sm font-semibold rounded-full hover:bg-[#1F7A7A] hover:text-white transition-colors duration-200">
                        Rent
                    </a>
                </div>
            </div>
        </section>

        {/* Banner Image */}
        <div className="w-full mt-12 mb-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
             <a href="https://brittany.ipixelrealty.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity duration-200">
                 <img src="/Pixel_Logo.webp" alt="Pixel Real Estate" className="h-48 w-auto object-contain" />
             </a>
             <div className="flex flex-col items-center gap-2">
                 <span className="text-sm font-semibold text-[#4A4A4A]">Download My App</span>
                 <img src="/QR_Closely.png" alt="QR Closely" className="h-32 w-auto object-contain" />
             </div>
        </div>

        {/* About Me Section */}
        <section className="w-full mb-12 flex flex-col items-center">
            <button
                onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                className="flex justify-between items-center w-full max-w-5xl mx-auto border-y border-[#D9D6D2] py-4 px-6 md:px-12 cursor-pointer hover:bg-gray-50 transition-colors focus:outline-none group"
                aria-expanded={isAboutExpanded}
            >
                <span className="text-lg font-medium text-[#4A4A4A]">About me</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`w-5 h-5 transform transition-transform duration-300 text-[#4A4A4A] ${isAboutExpanded ? 'rotate-180' : ''}`}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </button>

            <div
                data-testid="about-content"
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isAboutExpanded ? 'max-h-[1000px] opacity-100 mt-8' : 'max-h-0 opacity-0 mt-0'
                }`}
            >
                <div className="text-left text-warm-gray font-montserrat text-sm md:text-base leading-relaxed space-y-4 px-2 md:px-8 max-w-2xl mx-auto">
                    <p>Raised in Orlando and deeply rooted in Central Florida, I built my life around community, family, and service. After a chapter in Austin, Texas, where my husband and I started our family, we chose to return home to Orlando — a decision that reinforced just how special this community truly is.</p>
                    <p>My personal experience buying and selling my own home with a local brokerage gave me firsthand insight into what clients deserve: clear communication, strategic guidance, and an advocate who genuinely cares. That experience ultimately inspired me to join the brokerage that helped my own family feel confident and supported.</p>
                    <p>Before real estate, I built my career in customer service and earned a degree in culinary arts, where precision, timing, and attention to detail mattered every day. Those same skills now guide how I serve buyers and sellers — thoughtfully, proactively, and with steady support from contract to closing.</p>
                    <p>As a wife, a mom of two, and an active member of the local community, I understand that buying or selling a home is more than a transaction. It’s about lifestyle, schools, commute, family rhythms, and long-term goals. I approach every client relationship with that bigger picture in mind.</p>
                    <p>If you’re thinking about buying, selling, or simply exploring your options in Central Florida, I would be honored to guide you home.</p>
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-light-gray/30">
            <p className="text-xs text-warm-gray/80 leading-relaxed mb-4">
              Vendor recommendations are provided as a courtesy. Clients should verify licensing, insurance, and credentials independently. Brittany Kiniry does not guarantee third-party services.
            </p>
            <div className="flex justify-center items-center gap-6 mb-6">
                <img src={EqualHousing} alt="Equal Housing Opportunity" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                <img src={RealtorMLS} alt="Realtor MLS" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-xs text-warm-gray/60">
              © 2026 Imagine Being Home LLC. All rights reserved.
            </p>
        </footer>

      </div>
    </div>
  );
};

export default LandingPage;
