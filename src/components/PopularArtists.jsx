import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// popular artists section
const PopularArtists = () => {
  // list of artists to display
  const artists = [
    {
      id: 1,
      name: 'Ferhat Deniz',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
    },
    {
      id: 2,
      name: 'Sebastian',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    },
    {
      id: 3,
      name: 'Javier Miranda',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face',
    },
    {
      id: 4,
      name: 'Erick Butler',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    },
  ];

  return (
    <section className="relative py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* title and view all button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Popular Artists
          </h2>
          <Link
            to="/artists"
            className="inline-flex items-center gap-2 border border-white text-white font-medium py-2 px-5 rounded-lg transition-all duration-300 hover:bg-white hover:text-black group"
          >
            View all Artists
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
        
        {/* artists grid - 4 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {artists.map((artist) => (
            <div key={artist.id} className="text-center group cursor-pointer">
              {/* circular profile picture with gradient border */}
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-purple to-primary-pink p-0.5">
                  <div className="w-full h-full rounded-full overflow-hidden bg-dark-bg p-0.5">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg group-hover:text-primary-purple transition-colors">
                {artist.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularArtists;
