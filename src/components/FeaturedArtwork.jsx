import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

// featured artwork section with countdown timer
const FeaturedArtwork = () => {
  // state for countdown timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 18,
    minutes: 57,
    seconds: 14,
  });

  // countdown timer logic - runs every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        
        // decrease seconds
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    // cleanup timer when component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* background gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary-purple/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* artwork image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden nft-glow">
              <img
                src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=600&h=600&fit=crop"
                alt="Bitcoin Art Work - Astronaut"
                className="w-full aspect-square object-cover"
              />
              {/* dark overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-purple to-primary-pink rounded-3xl -z-10 blur-sm opacity-50" />
          </div>
          
          {/* artwork info and timer */}
          <div className="text-center lg:text-left">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Bitcoin
              <span className="block">Art Work</span>
            </h2>
            
            <p className="text-gray-400 mb-8">
              Created by <span className="text-primary-pink font-medium">Jonathan Borba</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 mb-10">
              {/* current bid price */}
              <div className="text-center sm:text-left">
                <p className="text-gray-400 text-sm mb-1">Current Bid</p>
                <p className="text-3xl font-bold text-white">1.09 ETH</p>
                <p className="text-gray-500 text-sm">$1,835</p>
              </div>
              
              {/* line between bid and timer */}
              <div className="hidden sm:block w-px h-16 bg-gray-700" />
              
              {/* countdown timer */}
              <div>
                <p className="text-gray-400 text-sm mb-2">Auction Ends In</p>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary-pink">{timeLeft.hours}</p>
                    <p className="text-gray-500 text-xs">Hours</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary-pink">{timeLeft.minutes}</p>
                    <p className="text-gray-500 text-xs">Minutes</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary-pink">{timeLeft.seconds}</p>
                    <p className="text-gray-500 text-xs">Seconds</p>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-black group">
              View Art Work
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtwork;
