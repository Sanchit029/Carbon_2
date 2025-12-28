import { ArrowUpRight } from 'lucide-react';

// trending section - shows popular nfts this week
const TrendingSection = () => {
  // array of trending items with their info
  const trendingItems = [
    {
      id: 1,
      artist: 'Sebastian',
      collection: 'Golden Flower',
      price: '2.3 ETH',
      image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=500&fit=crop',
    },
    {
      id: 2,
      artist: 'Ferhat Deniz',
      collection: 'Golden Flower',
      price: '2.3 ETH',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop',
    },
    {
      id: 3,
      artist: 'Javier Miranda',
      collection: 'Golden Flower',
      price: '2.3 ETH',
      image: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=400&h=500&fit=crop',
    },
    {
      id: 4,
      artist: 'Polina Kondrashova',
      collection: 'Golden Flower',
      price: '2.3 ETH',
      image: 'https://images.unsplash.com/photo-1633957897986-70e83293f3ff?w=400&h=500&fit=crop',
    },
    {
      id: 5,
      artist: 'Milad Fakurian',
      collection: 'Golden Flower',
      price: '2.3 ETH',
      image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&h=500&fit=crop',
    },
    {
      id: 6,
      artist: 'Erick Butler',
      collection: 'Golden Flower',
      price: '2.3 ETH',
      image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=400&h=500&fit=crop',
    },
  ];

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* blurry background circle */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-purple/20 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* title and description */}
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Trending This Week
          </h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur dolore adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        
        {/* two column grid for cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* left column - even items */}
          <div className="space-y-8">
            {trendingItems.filter((_, i) => i % 2 === 0).map((item) => (
              <TrendingCard key={item.id} item={item} />
            ))}
          </div>
          
          {/* right column - odd items */}
          <div className="space-y-8 md:mt-16">
            {trendingItems.filter((_, i) => i % 2 === 1).map((item) => (
              <TrendingCard key={item.id} item={item} />
            ))}
          </div>
        </div>
        
        {/* explore more button */}
        <div className="flex justify-end mt-12">
          <button className="inline-flex items-center gap-2 bg-white text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-gray-200 group">
            Explore More
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

// card component for each trending item
const TrendingCard = ({ item }) => {
  return (
    <div className="group">
      {/* artist name and price */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-white font-semibold text-lg">{item.artist}</h3>
          <p className="text-primary-pink text-sm">{item.collection}</p>
        </div>
        <p className="text-primary-pink font-semibold">{item.price}</p>
      </div>
      
      {/* nft image */}
      <div className="relative rounded-2xl overflow-hidden card-hover">
        <img
          src={item.image}
          alt={`${item.artist}'s artwork`}
          className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
};

export default TrendingSection;
