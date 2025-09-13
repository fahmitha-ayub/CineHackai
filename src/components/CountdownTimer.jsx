import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0,
    isActive: false,
    hasStarted: false,
    hasEnded: false
  });

  useEffect(() => {
    // Event start time: September 13, 2025 at 9:30 AM IST
    const eventStartTime = new Date('2025-09-13T09:30:00+05:30');
    const eventEndTime = new Date(eventStartTime.getTime() + 24 * 60 * 60 * 1000); // 24 hours later

    const updateCountdown = () => {
      const now = new Date();
      
      if (now < eventStartTime) {
        // Event hasn't started yet - show countdown to start
        const timeDiff = eventStartTime - now;
        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        
        setTimeLeft({
          hours: Math.min(hours, 99), // Cap at 99 hours for display
          minutes,
          seconds,
          isActive: false,
          hasStarted: false,
          hasEnded: false
        });
      } else if (now >= eventStartTime && now < eventEndTime) {
        // Event is active - show countdown to end
        const timeDiff = eventEndTime - now;
        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        
        setTimeLeft({
          hours,
          minutes,
          seconds,
          isActive: true,
          hasStarted: true,
          hasEnded: false
        });
      } else {
        // Event has ended
        setTimeLeft({
          hours: 0,
          minutes: 0,
          seconds: 0,
          isActive: false,
          hasStarted: true,
          hasEnded: true
        });
      }
    };

    // Update immediately
    updateCountdown();
    
    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const getStatusMessage = () => {
    if (timeLeft.hasEnded) {
      return "Rush Hour has ended!";
    } else if (timeLeft.isActive) {
      return "Rush Hour is live!";
    } else if (timeLeft.hasStarted) {
      return "Rush Hour has ended!";
    } else {
      return "Rush Hour starts in:";
    }
  };

  const getStatusColor = () => {
    if (timeLeft.hasEnded) {
      return "text-red-400";
    } else if (timeLeft.isActive) {
      return "text-green-400";
    } else {
      return "text-purple-400";
    }
  };

  return (
    <div className="text-center">
      {/* Status Message */}
      <div className={`text-lg font-semibold mb-4 ${getStatusColor()}`}>
        {getStatusMessage()}
      </div>
      
      {/* Countdown Display */}
      <div className="flex items-center justify-center space-x-4">
        {/* Hours */}
        <div className="relative">
          <div className={`w-20 h-20 border-4 ${timeLeft.isActive ? 'border-green-500' : timeLeft.hasEnded ? 'border-red-500' : 'border-purple-500'} rounded-full flex items-center justify-center bg-gray-900/70 backdrop-blur-sm`}>
            <div className="text-center">
              <div className="text-xl font-bold text-white">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="text-xs text-gray-300 uppercase tracking-wider">
                Hours
              </div>
            </div>
          </div>
          {timeLeft.isActive && (
            <div className="absolute inset-0 border-4 border-transparent border-t-green-400 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
          )}
        </div>

        {/* Separator */}
        <div className="text-2xl font-bold text-white">:</div>

        {/* Minutes */}
        <div className="relative">
          <div className={`w-20 h-20 border-4 ${timeLeft.isActive ? 'border-green-500' : timeLeft.hasEnded ? 'border-red-500' : 'border-purple-500'} rounded-full flex items-center justify-center bg-gray-900/70 backdrop-blur-sm`}>
            <div className="text-center">
              <div className="text-xl font-bold text-white">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="text-xs text-gray-300 uppercase tracking-wider">
                Mins
              </div>
            </div>
          </div>
          {timeLeft.isActive && (
            <div className="absolute inset-0 border-4 border-transparent border-t-green-400 rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
          )}
        </div>

        {/* Separator */}
        <div className="text-2xl font-bold text-white">:</div>

        {/* Seconds */}
        <div className="relative">
          <div className={`w-20 h-20 border-4 ${timeLeft.isActive ? 'border-green-500' : timeLeft.hasEnded ? 'border-red-500' : 'border-purple-500'} rounded-full flex items-center justify-center bg-gray-900/70 backdrop-blur-sm`}>
            <div className="text-center">
              <div className="text-xl font-bold text-white">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="text-xs text-gray-300 uppercase tracking-wider">
                Secs
              </div>
            </div>
          </div>
          {timeLeft.isActive && (
            <div className="absolute inset-0 border-4 border-transparent border-t-green-400 rounded-full animate-spin" style={{ animationDuration: '1s' }}></div>
          )}
        </div>
      </div>
      
      {/* Event Details */}
      <div className="mt-4 text-sm text-gray-400">
        {timeLeft.isActive ? (
          <p>Event ends at 9:30 AM on September 14, 2025</p>
        ) : !timeLeft.hasStarted ? (
          <p>Event starts at 9:30 AM IST on September 13, 2025</p>
        ) : (
          <p>Thank you for participating!</p>
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;
