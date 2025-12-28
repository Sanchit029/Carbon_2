import { useState } from 'react';
import { Search, ArrowUpRight, Twitter, Instagram } from 'lucide-react';

// artists page - shows all the artists
const Artists = () => {
  // state for search
  const [searchQuery, setSearchQuery] = useState('');

  // featured artists to show at top
  const featuredArtists = [
    {
      id: 1,
      name: 'Ferhat Deniz',
      bio: 'Digital artist specializing in abstract 3D sculptures and surreal landscapes.',
      followers: '12.5K',
      items: 156,
      volume: '245 ETH',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
      banner: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=300&fit=crop',
      verified: true,
    },
    {
      id: 2,
      name: 'Sebastian',
      bio: 'Creating digital dreams and exploring the boundaries of visual art.',
      followers: '8.3K',
      items: 89,
      volume: '180 ETH',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      banner: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&h=300&fit=crop',
      verified: true,
    },
    {
      id: 3,
      name: 'Javier Miranda',
      bio: 'Pushing the limits of digital art with experimental techniques.',
      followers: '15.2K',
      items: 234,
      volume: '320 ETH',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face',
      banner: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=800&h=300&fit=crop',
      verified: true,
    },
    {
      id: 4,
      name: 'Erick Butler',
      bio: 'Exploring the intersection of technology and traditional art forms.',
      followers: '6.8K',
      items: 67,
      volume: '95 ETH',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
      banner: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&h=300&fit=crop',
      verified: false,
    },
  ];

  const allArtists = [
    ...featuredArtists,
    {
      id: 5,
      name: 'Polina Kondrashova',
      bio: 'Mixed media artist focusing on vibrant colors and emotional depth.',
      followers: '9.1K',
      items: 112,
      volume: '156 ETH',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face',
      banner: 'https://images.unsplash.com/photo-1633957897986-70e83293f3ff?w=800&h=300&fit=crop',
      verified: true,
    },
    {
      id: 6,
      name: 'Milad Fakurian',
      bio: 'Abstract artist creating minimalist yet powerful visual experiences.',
      followers: '11.4K',
      items: 78,
      volume: '210 ETH',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
      banner: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=300&fit=crop',
      verified: true,
    },
    {
      id: 7,
      name: 'Anna White',
      bio: 'Contemporary digital artist with a focus on nature and technology.',
      followers: '7.2K',
      items: 45,
      volume: '88 ETH',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face',
      banner: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=300&fit=crop',
      verified: false,
    },
    {
      id: 8,
      name: 'James Lee',
      bio: 'Photorealistic digital painter creating stunning visual narratives.',
      followers: '14.8K',
      items: 189,
      volume: '285 ETH',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      banner: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&h=300&fit=crop',
      verified: true,
    },
  ];

  const filteredArtists = allArtists.filter((artist) =>
    artist.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden gradient-bg">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-pink/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Discover <span className="gradient-text">Artists</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Meet the talented creators behind the most stunning NFT collections
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search artists..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-dark-card border border-white/10 rounded-full py-4 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary-purple transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8">Featured Artists</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {featuredArtists.slice(0, 2).map((artist) => (
              <FeaturedArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </div>
      </section>

      {/* All Artists */}
      <section className="py-16 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8">All Artists</h2>
          
          {filteredArtists.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredArtists.map((artist) => (
                <ArtistCard key={artist.id} artist={artist} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No artists found matching "{searchQuery}"</p>
            </div>
          )}
          
          {/* Load More */}
          {filteredArtists.length > 0 && (
            <div className="text-center mt-12">
              <button className="inline-flex items-center gap-2 border border-white text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-black group">
                Load More Artists
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Become an Artist CTA */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-purple/20 to-primary-pink/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Become a Creator
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Join our community of talented artists and start selling your digital creations to collectors worldwide.
          </p>
          <button className="bg-gradient-to-r from-primary-purple to-primary-pink text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105">
            Apply Now
          </button>
        </div>
      </section>
    </main>
  );
};

const FeaturedArtistCard = ({ artist }) => {
  return (
    <div className="bg-dark-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary-purple/50 transition-all duration-300 group">
      {/* Banner */}
      <div className="relative h-32 overflow-hidden">
        <img
          src={artist.banner}
          alt={`${artist.name}'s banner`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent" />
      </div>
      
      {/* Profile */}
      <div className="relative px-6 pb-6">
        <div className="relative -mt-12 mb-4">
          <div className="w-24 h-24 rounded-full border-4 border-dark-card overflow-hidden">
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-full object-cover"
            />
          </div>
          {artist.verified && (
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-primary-purple rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
        
        <h3 className="text-white font-semibold text-xl mb-1">{artist.name}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{artist.bio}</p>
        
        <div className="flex items-center justify-between text-sm mb-4">
          <div>
            <p className="text-gray-500">Followers</p>
            <p className="text-white font-medium">{artist.followers}</p>
          </div>
          <div>
            <p className="text-gray-500">Items</p>
            <p className="text-white font-medium">{artist.items}</p>
          </div>
          <div>
            <p className="text-gray-500">Volume</p>
            <p className="text-primary-pink font-medium">{artist.volume}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex-1 bg-primary-purple text-white font-medium py-2 rounded-lg hover:bg-purple-600 transition-colors">
            Follow
          </button>
          <button className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
            <Twitter className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
            <Instagram className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ArtistCard = ({ artist }) => {
  return (
    <div className="bg-dark-card rounded-2xl p-5 border border-white/5 hover:border-primary-purple/50 transition-all duration-300 group text-center card-hover">
      <div className="relative w-20 h-20 mx-auto mb-4">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-purple to-primary-pink p-0.5">
          <div className="w-full h-full rounded-full overflow-hidden bg-dark-bg p-0.5">
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-full rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>
        {artist.verified && (
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary-purple rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
      
      <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-primary-purple transition-colors">
        {artist.name}
      </h3>
      <p className="text-gray-400 text-sm mb-4">{artist.items} items</p>
      
      <div className="flex items-center justify-center gap-4 text-sm">
        <div>
          <p className="text-primary-pink font-medium">{artist.volume}</p>
          <p className="text-gray-500 text-xs">Volume</p>
        </div>
        <div className="w-px h-8 bg-white/10" />
        <div>
          <p className="text-white font-medium">{artist.followers}</p>
          <p className="text-gray-500 text-xs">Followers</p>
        </div>
      </div>
    </div>
  );
};

export default Artists;
