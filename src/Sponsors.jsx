
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

  const renderSponsorCard = (sponsor) => (
    <div
      key={sponsor.id}
      className="group relative p-0.5 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 hover:animate-pulse transition-all duration-300"
    >
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div
        className="sponsor-card p-6 rounded-lg shadow-xl text-center flex flex-col items-center justify-center gap-4 relative bg-gradient-to-br from-[#0a1535] to-[#1e3a8a] hover:from-[#1e3a8a] hover:to-[#0a1535] transition-all duration-300"
        style={{
          minHeight: "200px",
        }}
      >
        <a
          href={sponsor.website}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex flex-col items-center justify-center gap-6 group-hover:scale-105 transition-transform duration-300"
        >
          <img
            src={sponsor.logo}
            alt={`${sponsor.name} Logo`}
            className="w-48 h-48 object-contain"
            onError={(e) => {
              // Fallback if logo doesn't exist yet
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'block';
            }}
          />
          <div className="hidden text-gray-300 text-sm text-center">
            Logo Coming Soon
          </div>
          <h3 className="text-lg font-bold text-center text-white">
            {sponsor.name}
          </h3>
        </a>
      </div>
    </div>
  );

  return (
    <div id="sponsors" className="min-h-screen bg-black font-sans select-none py-16">
      {/* Sponsors Section */}
      <div className="bg-gradient-to-b from-black via-purple-900/20 to-black">
        <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h1
              className="font-bold mb-4 text-white leading-tight"
              style={{
                fontSize: "clamp(32px, 5vw, 64px)",
              }}
            >
              OUR SPONSORS
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We are grateful to our amazing sponsors who make CineHack.AI possible. 
              Together, we're pushing the boundaries of AI in filmmaking.
            </p>
          </div>

          {/* Sponsors Grid */}
          <div className="max-w-6xl mx-auto">
            {sponsors.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {sponsors.map(renderSponsorCard)}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="relative p-0.5 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 max-w-md mx-auto">
                  <div className="p-8 rounded-lg bg-gradient-to-br from-[#0a1535] to-[#1e3a8a] text-white text-center">
                    <span className="text-4xl mb-4 block">🤝</span>
                    <h3 className="text-xl font-bold mb-2">Become a Sponsor</h3>
                    <p className="text-gray-300">
                      Join us in revolutionizing the film industry with AI. 
                      Contact us to explore sponsorship opportunities.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Sponsors;
