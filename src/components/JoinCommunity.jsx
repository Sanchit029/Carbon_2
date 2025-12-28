// join community section
const JoinCommunity = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* blurry gradient circles in background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-purple/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary-pink/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* wave image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&h=500&fit=crop"
                alt="Ocean Wave NFT Collection"
                className="w-full h-auto object-cover rounded-3xl"
              />
              {/* color overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-purple/40 via-cyan-500/30 to-cyan-400/40 rounded-3xl mix-blend-overlay" />
            </div>
            
            {/* glowing border */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary-purple via-cyan-400 to-primary-pink rounded-3xl -z-10 blur-md opacity-40" />
          </div>
          
          {/* text and button */}
          <div className="text-center lg:text-left">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Join The Community
              <span className="block">And Get The Best NFT</span>
              <span className="block">Collection</span>
            </h2>
            
            <button className="bg-gradient-to-r from-primary-purple to-primary-pink text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-purple/30">
              JOIN COMMUNITY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
