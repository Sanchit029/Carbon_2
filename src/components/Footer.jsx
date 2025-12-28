import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

// footer component
const Footer = () => {
  // navigation links for footer
  const footerLinks = [
    { name: 'Explore', path: '/explore' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Artists', path: '/artists' },
    { name: 'Contact', path: '/about' },
  ];

  // social media links
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-dark-bg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* top part of footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* logo and nav links */}
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-white">NFT</span>
              <span className="text-primary-purple">me</span>
            </Link>
            
            <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* social media icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary-purple transition-all duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* horizontal line */}
        <div className="border-t border-white/10 my-8" />

        {/* bottom part with copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>Privacy policy</p>
          <p>Copyright @ Kartik Bansal 2022. All Rights Reserved.</p>
          <p>Terms of service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
