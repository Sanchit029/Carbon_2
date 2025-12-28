import { useState } from 'react';
import { Search, TrendingUp, Clock, DollarSign, ArrowUpRight } from 'lucide-react';

// marketplace page - buy and sell nfts
const Marketplace = () => {
  // state for active tab
  const [activeTab, setActiveTab] = useState('trending');

  // tab buttons
  const tabs = [
    { id: 'trending', label: 'Trending', icon: TrendingUp },
    { id: 'recent', label: 'Recently Added', icon: Clock },
    { id: 'top', label: 'Top Sales', icon: DollarSign },
  ];

  // marketplace items data
  const marketplaceItems = [
    {
      id: 1,
      name: 'Bored Ape Collection',
      collection: '10,000 items',
      price: '85.5 ETH',
      change: '+12.5%',
      volume: '2,500 ETH',
      image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=100&h=100&fit=crop',
      isPositive: true,
    },
    {
      id: 2,
      name: 'CryptoPunks',
      collection: '10,000 items',
      price: '65.2 ETH',
      change: '+8.3%',
      volume: '1,800 ETH',
      image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=100&h=100&fit=crop',
      isPositive: true,
    },
    {
      id: 3,
      name: 'Azuki',
      collection: '10,000 items',
      price: '12.8 ETH',
      change: '-3.2%',
      volume: '950 ETH',
      image: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=100&h=100&fit=crop',
      isPositive: false,
    },
    {
      id: 4,
      name: 'Doodles',
      collection: '10,000 items',
      price: '7.5 ETH',
      change: '+5.1%',
      volume: '720 ETH',
      image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=100&h=100&fit=crop',
      isPositive: true,
    },
    {
      id: 5,
      name: 'CloneX',
      collection: '20,000 items',
      price: '4.2 ETH',
      change: '+15.8%',
      volume: '580 ETH',
      image: 'https://images.unsplash.com/photo-1633957897986-70e83293f3ff?w=100&h=100&fit=crop',
      isPositive: true,
    },
    {
      id: 6,
      name: 'Moonbirds',
      collection: '10,000 items',
      price: '3.8 ETH',
      change: '-1.5%',
      volume: '420 ETH',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&h=100&fit=crop',
      isPositive: false,
    },
  ];

  const featuredCollections = [
    {
      id: 1,
      name: 'Abstract Dreams',
      artist: 'Digital Arts Studio',
      items: 250,
      floorPrice: '2.5 ETH',
      image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      name: 'Neon Future',
      artist: 'Cyber Collective',
      items: 180,
      floorPrice: '1.8 ETH',
      image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      name: 'Ethereal Beings',
      artist: 'Meta Artists',
      items: 500,
      floorPrice: '3.2 ETH',
      image: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=400&h=300&fit=crop',
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden gradient-bg">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-purple/30 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              NFT <span className="gradient-text">Marketplace</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Buy, sell, and discover exclusive digital collectibles
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search collections..."
                className="w-full bg-dark-card border border-white/10 rounded-full py-4 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary-purple transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8">Featured Collections</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {featuredCollections.map((collection) => (
              <div
                key={collection.id}
                className="bg-dark-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary-purple/50 transition-all duration-300 group card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent" />
                </div>
                
                <div className="p-5">
                  <h3 className="text-white font-semibold text-xl mb-1">{collection.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">by {collection.artist}</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <p className="text-gray-500">Items</p>
                      <p className="text-white font-medium">{collection.items}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500">Floor Price</p>
                      <p className="text-primary-pink font-medium">{collection.floorPrice}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rankings Section */}
      <section className="py-16 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold">Collection Rankings</h2>
            
            {/* Tabs */}
            <div className="flex items-center gap-2 bg-dark-card rounded-full p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-primary-purple text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Table */}
          <div className="bg-dark-card rounded-2xl overflow-hidden border border-white/5">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-6 gap-4 px-6 py-4 border-b border-white/10 text-gray-400 text-sm">
              <div className="col-span-2">Collection</div>
              <div>Floor Price</div>
              <div>24h Change</div>
              <div>Volume</div>
              <div></div>
            </div>
            
            {/* Table Body */}
            <div className="divide-y divide-white/5">
              {marketplaceItems.map((item, index) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 md:grid-cols-6 gap-4 px-6 py-4 hover:bg-white/5 transition-colors items-center"
                >
                  <div className="col-span-2 flex items-center gap-4">
                    <span className="text-gray-500 font-medium w-6">{index + 1}</span>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="text-white font-medium">{item.name}</h4>
                      <p className="text-gray-400 text-sm">{item.collection}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="md:hidden text-gray-400 text-sm">Floor Price</p>
                    <p className="text-white font-medium">{item.price}</p>
                  </div>
                  
                  <div>
                    <p className="md:hidden text-gray-400 text-sm">24h Change</p>
                    <p className={`font-medium ${item.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                      {item.change}
                    </p>
                  </div>
                  
                  <div>
                    <p className="md:hidden text-gray-400 text-sm">Volume</p>
                    <p className="text-white">{item.volume}</p>
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="inline-flex items-center gap-1 text-primary-purple hover:text-purple-400 transition-colors text-sm font-medium">
                      View
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Load More */}
          <div className="text-center mt-8">
            <button className="inline-flex items-center gap-2 border border-white text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-black group">
              View All Rankings
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Create Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-purple/10 to-primary-pink/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Create and Sell Your NFTs
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Join our marketplace and start selling your digital creations. It's easy, secure, and opens up a world of possibilities.
              </p>
              <button className="bg-gradient-to-r from-primary-purple to-primary-pink text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105">
                Start Creating
              </button>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=200&h=200&fit=crop"
                  alt="NFT Sample"
                  className="rounded-2xl w-full"
                />
                <img
                  src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=200&h=200&fit=crop"
                  alt="NFT Sample"
                  className="rounded-2xl w-full mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=200&h=200&fit=crop"
                  alt="NFT Sample"
                  className="rounded-2xl w-full -mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=200&h=200&fit=crop"
                  alt="NFT Sample"
                  className="rounded-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Marketplace;
