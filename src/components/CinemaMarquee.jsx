import React from 'react';
import './CinemaMarquee.css';

const CinemaMarquee = ({ 
  text = "CINEHACK.AI • RUSH HOUR • 24 HOURS", 
  speed = 50
}) => {
  return (
    <div className="cinema-marquee-container">
      {/* Film strip holes */}
      <div className="film-strip film-strip-top">
        {Array.from({ length: 100 }, (_, i) => (
          <div key={i} className="film-hole"></div>
        ))}
      </div>
      
      <div 
        className="cinema-marquee"
        style={{ 
          '--scroll-speed': `${speed}s`
        }}
      >
        <div className="marquee-content">
          <span className="marquee-text">{text}</span>
          <span className="marquee-text">{text}</span>
          <span className="marquee-text">{text}</span>
          <span className="marquee-text">{text}</span>
        </div>
      </div>
      
      {/* Film strip holes */}
      <div className="film-strip film-strip-bottom">
        {Array.from({ length: 100 }, (_, i) => (
          <div key={i} className="film-hole"></div>
        ))}
      </div>
    </div>
  );
};

export default CinemaMarquee;
