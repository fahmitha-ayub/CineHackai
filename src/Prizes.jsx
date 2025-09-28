import React from "react";
import {
  Star,
  Users,
  Trophy,
  TShirt,
  ForkKnife,
  Bed,
  MusicNotes,
  Sparkle,
} from "phosphor-react";

const WhyJoinCard = ({ bgColor, innerBg, Icon, text }) => (
  <div className="text-center group cursor-pointer">
    <div className="mb-8 flex justify-center">
      {/* Glowing border wrapper */}
      <div className="relative p-0.5 rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Blur effect for glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 blur-sm opacity-80"></div>
        
        {/* Original card content */}
        <div
          className={`relative w-20 h-20 ${bgColor} rounded-full flex items-center justify-center group-hover:animate-spinY transition-transform duration-1000 transform-gpu`}
        >
          <div
            className={`w-16 h-16 ${innerBg} rounded-full flex items-center justify-center shadow-inner`}
          >
            <Icon size={32} weight="fill" className="text-white" />
          </div>
        </div>
      </div>
      
      {/* Non-glowing version (shown when not hovered) */}
      <div
        className={`absolute w-20 h-20 ${bgColor} rounded-full flex items-center justify-center group-hover:animate-spinY group-hover:opacity-0 transition-all duration-300 transform-gpu`}
      >
        <div
          className={`w-16 h-16 ${innerBg} rounded-full flex items-center justify-center shadow-inner`}
        >
          <Icon size={32} weight="fill" className="text-white" />
        </div>
      </div>
    </div>
    <p className="text-lg md:text-xl leading-relaxed max-w-sm mx-auto">{text}</p>
  </div>
);

const PrizesAndOpportunities = () => {
  const cards = [
    {
      bgColor: "bg-blue-600",
      innerBg: "bg-blue-800",
      Icon: Star,
      text: "Shape the future of filmmaking with your ideas.",
    },
    {
      bgColor: "bg-blue-600",
      innerBg: "bg-blue-800",
      Icon: Users,
      text: "Connect with industry leaders and fellow innovators.",
    },
    {
      bgColor: "bg-blue-600",
      innerBg: "bg-blue-800",
      Icon: Trophy,
      text: "Compete for substantial cash prizes and recognition.",
    },
    {
      bgColor: "bg-blue-600",
      innerBg: "bg-blue-800",
      Icon: TShirt,
      text: "Exclusive hackathon goodies – T-shirts, stickers, and merchandise.",
    },
    {
      bgColor: "bg-blue-600",
      innerBg: "bg-blue-800",
      Icon: ForkKnife,
      text: "Delicious food for all 3 days included with your registration.",
    },
    {
      bgColor: "bg-blue-600",
      innerBg: "bg-blue-800",
      Icon: Bed,
      text: "Convenient accommodation for all participants.",
    },
    {
      bgColor: "bg-blue-600",
      innerBg: "bg-blue-800",
      Icon: MusicNotes,
      text: "Free cultural events pass – experience campus life beyond hacking.",
    },
    {
      bgColor: "bg-blue-600",
      innerBg: "bg-blue-800",
      Icon: Sparkle,
      text: "Access to electrifying pro shows and pre-events of CineHack.ai.",
    },
  ];

  return (
    <div
      className="bg-black text-white py-16 px-8 min-h-14 flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto">
        {/* Prize Distribution Section */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            PRIZE POOL
          </h2>
          <br />
          <br />
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto items-start">
            
            {/* Second Place */}
            <div className="group text-center md:mt-12">
              <div className="relative p-1 rounded-2xl bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 hover:from-gray-200 hover:via-gray-300 hover:to-gray-400 transition-all duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-gray-400/50">
                  <div className="mb-4">
                    <Trophy size={48} weight="fill" className="text-gray-400 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-400 mb-2">2nd Place</h3>
                  <div className="text-3xl font-black text-white mb-2">₹75,000</div>
                  <p className="text-gray-300 text-sm">Runner Up</p>
                </div>
              </div>
            </div>

            {/* First Place */}
            <div className="group text-center md:-mt-8">
              <div className="relative p-1 rounded-2xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-500 transition-all duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-yellow-500/50">
                  <div className="mb-4">
                    <Trophy size={48} weight="fill" className="text-yellow-400 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">1st Place</h3>
                  <div className="text-3xl font-black text-white mb-2">₹1,00,000</div>
                  <p className="text-gray-300 text-sm">Winner Takes It All</p>
                </div>
              </div>
            </div>

            {/* Third Place */}
            <div className="group text-center md:mt-12">
              <div className="relative p-1 rounded-2xl bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-500 hover:via-amber-600 hover:to-amber-700 transition-all duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-amber-600/50">
                  <div className="mb-4">
                    <Trophy size={48} weight="fill" className="text-amber-600 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold text-amber-600 mb-2">3rd Place</h3>
                  <div className="text-3xl font-black text-white mb-2">₹50,000</div>
                  <p className="text-gray-300 text-sm">Third Place</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-left">
          WHY JOIN ?
        </h2>
        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
          {cards.map((card, i) => (
            <WhyJoinCard key={i} {...card} />
          ))}
        </div>
      </div>

      {/* Custom spin animation for Y-axis */}
      <style>{`
        @keyframes spinY {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }
        .group:hover .group-hover\\:animate-spinY {
          animation: spinY 1s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default PrizesAndOpportunities;
