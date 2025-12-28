import { useState } from 'react';
import { Search, Filter, ArrowUpRight } from 'lucide-react';

// explore page - browse all nfts
const Explore = () => {
  // state for selected category
  const [activeCategory, setActiveCategory] = useState('All');
  // state for search input
  const [searchQuery, setSearchQuery] = useState('');

  // category buttons
  const categories = ['All', 'Art', '3D', 'Music', 'Photography', 'Video'];

  // all the nft items
  const nftItems = [
    {
      id: 1,
      name: 'Cosmic Dreams',
      artist: 'Sebastian',
      price: '2.5 ETH',
      image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=400&fit=crop',
      category: 'Art',
    },
    {
      id: 2,
      name: 'Digital Horizon',
      artist: 'Ferhat Deniz',
      price: '1.8 ETH',
      image: 'https://images.unsplash.com/photo-1634017839464-5c339ez329d?w=400&h=400&fit=crop',
      category: '3D',
    },
    {
      id: 3,
      name: 'Abstract Flow',
      artist: 'Javier Miranda',
      price: '3.2 ETH',
      image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&h=400&fit=crop',
      category: 'Art',
    },
    {
      id: 4,
      name: 'Neon Dreams',
      artist: 'Polina K.',
      price: '2.1 ETH',
      image: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=400&h=400&fit=crop',
      category: '3D',
    },
    {
      id: 5,
      name: 'Ethereal Waves',
      artist: 'Milad F.',
      price: '1.5 ETH',
      image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=400&h=400&fit=crop',
      category: 'Art',
    },
    {
      id: 6,
      name: 'Red Portrait',
      artist: 'Erick Butler',
      price: '4.0 ETH',
      image: 'https://images.unsplash.com/photo-1633957897986-70e83293f3ff?w=400&h=400&fit=crop',
      category: '3D',
    },
    {
      id: 7,
      name: 'Ocean Depths',
      artist: 'Anna White',
      price: '2.8 ETH',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop',
      category: 'Photography',
    },
    {
      id: 8,
      name: 'Golden Hour',
      artist: 'James Lee',
      price: '1.9 ETH',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=400&fit=crop',
      category: 'Photography',
    },
  ];

  const filteredItems = nftItems.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.artist.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 overflow-hidden gradient-bg">
        <div className="absolute top-10 right-0 w-80 h-80 bg-primary-purple/30 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Explore <span className="gradient-text">NFTs</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Discover unique digital artworks from talented creators around the world
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search NFTs, artists, or collections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-dark-card border border-white/10 rounded-full py-4 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary-purple transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Categories */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-primary-purple text-white'
                      : 'bg-dark-card text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Filter Button */}
            <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-dark-card text-gray-400 hover:text-white transition-colors">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>
      </section>

      {/* NFT Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <NFTCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No NFTs found matching your criteria</p>
            </div>
          )}
          
          {/* Load More */}
          {filteredItems.length > 0 && (
            <div className="text-center mt-12">
              <button className="inline-flex items-center gap-2 border border-white text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-black group">
                Load More
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

const NFTCard = ({ item }) => {
  return (
    <div className="bg-dark-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary-purple/50 transition-all duration-300 group card-hover">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-full bg-primary-purple text-white font-medium py-2 rounded-lg hover:bg-purple-600 transition-colors">
            Place Bid
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-white font-semibold text-lg mb-1">{item.name}</h3>
        <p className="text-gray-400 text-sm mb-3">by {item.artist}</p>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-xs">Current Price</p>
            <p className="text-primary-pink font-semibold">{item.price}</p>
          </div>
          <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-400">
            {item.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Explore;
