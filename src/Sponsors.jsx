import React from 'react';

const Sponsors = () => {
  // Sponsors data - grouped by type
  const strategicPartners = [
    {
      id: 1,
      name: "Mulearn",
      logo: "/mulearn.png",
      website: "https://mulearn.org",
    },
  ];

  const mediaPartners = [
    {
      id: 2,
      name: "Eventopia",
      logo: "/Eventopia-Logo-13.png",
      website: "#",
    },
  ];

  const renderSponsorLogo = (sponsor, index) => (
    <a
      key={sponsor.id}
      href={sponsor.website}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20 flex-shrink-0"
      style={{
        animationDelay: `${index * 0.1}s`,
        animation: 'fadeInUp 0.8s ease-out forwards'
      }}
    >
      <img
        src={sponsor.logo}
        alt={`${sponsor.name} Logo`}
        className="w-16 h-16 object-contain filter brightness-110 group-hover:brightness-125 transition-all duration-300"
        onError={(e) => {
          e.target.style.display = "none";
          e.target.nextElementSibling.style.display = "flex";
        }}
      />
      <div className="hidden items-center justify-center text-white/90 text-sm font-semibold">
        {sponsor.name}
      </div>

      {/* Hover tooltip */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-purple-400/30">
        Visit {sponsor.name}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800/90"></div>
      </div>
    </a>
  );

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          animation: shimmer 2s infinite;
        }
      `}</style>
      
      <div className="relative bg-gradient-to-b from-gray-900 to-black py-10 border-t border-gray-800/50 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Section header */}
          <div className="text-center mb-8">
            <h2 
              className="text-2xl md:text-3xl font-bold text-white mb-2"
              style={{ fontFamily: "RusticRoadway, sans-serif" }}
            >
              Our Partners
            </h2>
          </div>

          {/* Partners grid */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-center">
            {/* Strategic Partner */}
            <div className="relative">
              <div className="flex items-center justify-center mb-4">
                <p
                  className="text-purple-400 text-sm font-bold tracking-wider uppercase"
                  style={{ fontFamily: "RusticRoadway, sans-serif" }}
                >
                  Strategic Partner
                </p>
              </div>
              <div className="flex items-center justify-center gap-6 flex-wrap">
                {strategicPartners.map((sponsor, index) => renderSponsorLogo(sponsor, index))}
              </div>
            </div>

            {/* Media Partner */}
            <div className="relative">
              <div className="flex items-center justify-center mb-4">
                <p
                  className="text-yellow-400 text-sm font-bold tracking-wider uppercase"
                  style={{ fontFamily: "RusticRoadway, sans-serif" }}
                >
                  Media Partner
                </p>
              </div>
              <div className="flex items-center justify-center gap-6 flex-wrap">
                {mediaPartners.map((sponsor, index) => renderSponsorLogo(sponsor, index))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;