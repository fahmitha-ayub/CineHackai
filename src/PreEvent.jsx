import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, Play, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const PreEvent = () => {
  const filmStripRef = useRef(null);

  // Animation effects
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (filmStripRef.current) {
        gsap.to(filmStripRef.current, {
          x: -20,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut"
        });
      }
    });

    return () => ctx.revert();
  }, []);


  return (
    <div id="pre-event" className="bg-black text-white py-16 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-black to-purple-900/20" />
      
      {/* Animated film strip background */}
      <div 
        ref={filmStripRef}
        className="absolute top-0 left-0 right-0 h-6 bg-white flex justify-center items-center opacity-10"
      >
        <div className="flex space-x-3">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="w-3 h-3 bg-black rounded-full flex-shrink-0" />
          ))}
        </div>
      </div>

      <div 
        ref={filmStripRef}
        className="absolute bottom-0 left-0 right-0 h-6 bg-white flex justify-center items-center opacity-10"
      >
        <div className="flex space-x-3">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="w-3 h-3 bg-black rounded-full flex-shrink-0" />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-3 px-4 py-2 bg-gray-800/50 border border-gray-600 rounded">
              <Play className="text-gray-300" size={16} />
              <span className="text-gray-300 font-semibold tracking-wider text-sm">LIVE NOW</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            PRE-EVENT ACTIVITIES
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Exciting pre-event activities are being planned to prepare you for the ultimate hackathon experience.
          </p>
        </div>

        {/* Preview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="relative bg-gradient-to-br from-orange-9  00 to-orange rounded-lg p-6 border-2 border-orange-400 hover:border-orange-700 transition-all duration-300">
            {/* Film strip decoration */}
            <div className="absolute left-2 top-2 bottom-2 w-3 bg-gray-700 flex flex-col justify-evenly items-center opacity-20">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-black rounded-full"></div>
              ))}
            </div>
            <div className="w-12 h-12 bg-oraneg-800 border border-orange-400 border-4 rounded flex items-center justify-center mb-4">
              <span className="text-2xl">🎬</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Workshops</h3>
            <p className="text-gray-300 text-sm">Hands-on technical sessions to prepare for the hackathon</p>
          </div>
          
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 border-2 border-orange-400 hover:border-orange-700 transition-all duration-300">
            {/* Film strip decoration */}
            <div className="absolute left-2 top-2 bottom-2 w-3 bg-gray-700 flex flex-col justify-evenly items-center opacity-20">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-black rounded-full"></div>
              ))}
            </div>
            <div className="w-12 h-12 bg-white/20 border border-orange-400 border-4 rounded flex items-center justify-center mb-4">
              <span className="text-2xl">🎤</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Tech Talks</h3>
            <p className="text-gray-300 text-sm">Industry insights and expert discussions</p>
          </div>
          
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 border-2 border-orange-400 hover:border-orange-700 transition-all duration-300">
            {/* Film strip decoration */}
            <div className="absolute left-2 top-2 bottom-2 w-3 bg-gray-700 flex flex-col justify-evenly items-center opacity-20">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-black rounded-full"></div>
              ))}
            </div>
            <div className="w-12 h-12 bg-gray-800 border border-orange-400 border-4 rounded flex items-center justify-center mb-4">
              <span className="text-2xl">🧑🏻‍💻</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Fun Quizzes</h3>
            <p className="text-gray-300 text-sm">Team formation and collaboration opportunities</p>
          </div>
        </div>
              
        {/* CTA */}
        <div className="text-center">
          <Link to="/pre-events" className="group inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-700 rounded-lg text-  font-bold hover:scale-105 transition-all duration-300 shadow-lg">
            <span>View All Pre-Events</span>
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
      
    </div>
    
  );
};

export default PreEvent;
