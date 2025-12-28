// hero section - main banner of the website
const Hero = () => {
  // stats to show on the page
  const stats = [
    { value: '32k+', label: 'Artwork' },
    { value: '20k+', label: 'Auctions' },
    { value: '10k+', label: 'Artists' },
  ];

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden gradient-bg">
      {/* purple and pink blurry circles in background */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary-purple/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary-pink/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* left side - text and button */}
          <div className="text-center lg:text-left">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Discover Rare{' '}
              <span className="block">Collections Of</span>
              <span className="block">Art & NFT's</span>
            </h1>
            
            <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto lg:mx-0">
              Create, Explore, & Collect Digital Art NFTs
            </p>
            
            <button className="bg-primary-purple hover:bg-purple-600 text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 text-lg">
              EXPLORE
            </button>
            
            {/* showing stats like artwork, auctions, artists */}
            <div className="flex items-center justify-center lg:justify-start gap-12 mt-16">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</p>
                  <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* right side - nft card images */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* back card - tilted */}
              <div className="absolute top-4 right-0 sm:-right-4 w-44 sm:w-52 h-56 sm:h-64 rounded-2xl overflow-hidden transform rotate-6 shadow-2xl z-10">
                <img
                  src="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=400&h=500&fit=crop"
                  alt="Abstract Colorful Art"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* front card - main nft card */}
              <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-0.5 nft-glow animate-float z-20">
                <div className="bg-dark-card rounded-2xl overflow-hidden">
                  {/* nft image */}
                  <div className="h-44 sm:h-52 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=400&h=300&fit=crop"
                      alt="Blue Silk NFT"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* card info section */}
                  <div className="p-4 sm:p-5 bg-gradient-to-br from-blue-900/90 to-indigo-900/90">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-cyan-500 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">L</span>
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm">Laura</p>
                          <p className="text-gray-400 text-xs">0.21 Weth</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-400 text-xs">Remaining Time</p>
                        <p className="text-primary-purple font-semibold text-sm">18h : 57m : 14s</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-xs">Current Bid</p>
                        <p className="text-accent-yellow font-bold flex items-center gap-1">
                          <span className="text-green-400">↗</span> 2.8 ETH
                        </p>
                      </div>
                      <button className="bg-white text-black font-semibold py-2 px-5 rounded-lg text-xs hover:bg-gray-200 transition-colors">
                        PLACE A BID
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
