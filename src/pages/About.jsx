import { Users, Palette, Shield, Zap } from 'lucide-react';

// about page
const About = () => {
  // some stats to show
  const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '$2M+', label: 'NFTs Sold' },
    { value: '10K+', label: 'Artists' },
    { value: '100+', label: 'Countries' },
  ];

  // features we offer
  const features = [
    {
      icon: Palette,
      title: 'Digital Art Curation',
      description: 'We carefully curate the finest digital artworks from talented artists worldwide, ensuring quality and authenticity.',
    },
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'Built on blockchain technology, every transaction is secure, transparent, and immutable.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join a vibrant community of collectors, artists, and enthusiasts passionate about digital art.',
    },
    {
      icon: Zap,
      title: 'Fast & Easy',
      description: 'Our intuitive platform makes buying, selling, and creating NFTs simple and accessible.',
    },
  ];

  // team members
  const team = [
    {
      name: 'Sarah Chen',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    },
    {
      name: 'David Kim',
      role: 'Community Manager',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face',
    },
  ];

  return (
    <main className="pt-20">
      {/* hero section at top */}
      <section className="relative py-16 lg:py-24 overflow-hidden gradient-bg">
        <div className="absolute top-20 left-0 w-96 h-96 bg-primary-purple/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-pink/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="gradient-text">NFTme</span>
            </h1>
            <p className="text-gray-400 text-lg lg:text-xl leading-relaxed">
              We're on a mission to revolutionize the digital art world by providing a platform where creators can showcase their work and collectors can discover unique pieces.
            </p>
          </div>
        </div>
      </section>

      {/* stats numbers section */}
      <section className="py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl lg:text-5xl font-bold gradient-text">{stat.value}</p>
                <p className="text-gray-400 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                At NFTme, we believe that digital art deserves the same recognition and value as traditional art forms. Our platform bridges the gap between talented creators and passionate collectors.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                We're committed to building a sustainable ecosystem where artists can thrive, collectors can discover unique pieces, and everyone can participate in the future of art ownership.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=600&h=400&fit=crop"
                  alt="Our Mission"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-purple to-primary-pink rounded-3xl -z-10 blur-md opacity-30" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Why Choose NFTme?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We provide everything you need to start your NFT journey
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-dark-card p-6 rounded-2xl border border-white/5 hover:border-primary-purple/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-purple to-primary-pink flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The passionate people behind NFTme
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-purple to-primary-pink p-0.5">
                    <div className="w-full h-full rounded-full overflow-hidden bg-dark-bg p-0.5">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                <p className="text-primary-pink text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-purple/20 to-primary-pink/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your NFT Journey?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of artists and collectors who are already part of the NFTme community.
          </p>
          <button className="bg-gradient-to-r from-primary-purple to-primary-pink text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </section>
    </main>
  );
};

export default About;
