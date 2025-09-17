const Sponsors = () => {
  // Sponsors data - add your sponsor logos here
  const sponsors = [
    {
      id: 1,
      name: "Mulearn",
      logo: "/mulearn.png", // Place logo in public folder
      website: "https://mulearn.org",
    },
    // Add your sponsors here as they become available
  ];

  const renderSponsorLogo = (sponsor) => (
    <a
      key={sponsor.id}
      href={sponsor.website}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-center p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105"
    >
      <img
        src={sponsor.logo}
        alt={`${sponsor.name} Logo`}
        className="h-8 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        onError={(e) => {
          // Fallback if logo doesn't exist yet
          e.target.style.display = 'none';
          e.target.nextElementSibling.style.display = 'flex';
        }}
      />
      <div className="hidden items-center justify-center text-white/80 text-xs font-medium">
        {sponsor.name}
      </div>
    </a>
  );

  return (
    <div className="bg-black/50 backdrop-blur-sm py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center">
          {/* Strategic Partner Label */}
          <p className="text-gray-400 text-sm font-medium mb-4 tracking-wide">
            STRATEGIC PARTNER
          </p>
          
          {/* Sponsors Logos */}
          {sponsors.length > 0 ? (
            <div className="flex items-center justify-center gap-6 flex-wrap">
              {sponsors.map(renderSponsorLogo)}
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <div className="px-6 py-3 rounded-lg bg-white/5 border border-white/10">
                <span className="text-white/60 text-sm">Partner opportunities available</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;