import Hero from '../components/Hero';
import FeaturedArtwork from '../components/FeaturedArtwork';
import TrendingSection from '../components/TrendingSection';
import PopularArtists from '../components/PopularArtists';
import JoinCommunity from '../components/JoinCommunity';

// home page - shows all the main sections
const Home = () => {
  return (
    <main>
      {/* all the sections on homepage */}
      <Hero />
      <FeaturedArtwork />
      <TrendingSection />
      <PopularArtists />
      <JoinCommunity />
    </main>
  );
};

export default Home;
