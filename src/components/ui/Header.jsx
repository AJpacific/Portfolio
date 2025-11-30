import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Image from '../AppImage';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage-interactive-developer-portfolio', icon: 'Home' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'backdrop-cyber bg-dark-bg/90 shadow-medium'
        : 'bg-dark-bg/80'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/homepage-interactive-developer-portfolio"
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary group-hover:shadow-cyber transition-all duration-300">
                <Image
                  src="/Portfolio/assets/images/pfp-modified.png"
                  alt="Ashutosh Jha"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyber-green rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-text-light font-mono text-lg font-semibold">
                <span className="text-cyber-green">&gt;</span> Ashutosh Jha
              </div>
              <div className="text-text-muted text-xs font-mono">
                Backend | Cybersecurity
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 group ${isActivePath(item.path)
                  ? 'text-cyber-green bg-primary/20 shadow-glow'
                  : 'text-text-light hover:text-cyber-green hover:bg-primary/10'
                  }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon
                    name={item.icon}
                    size={16}
                    className={`transition-colors duration-300 ${isActivePath(item.path) ? 'text-cyber-green' : 'group-hover:text-cyber-green'
                      }`}
                  />
                  <span>{item.name}</span>
                </div>
                {isActivePath(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyber-green rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Terminal Command Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="bg-dark-surface rounded-lg px-3 py-2 font-mono text-sm text-text-muted border border-primary/20">
              <span className="text-cyber-green">$</span> status: online
            </div>
            <a
              href="mailto:aj4ashutoshjha@gmail.com"
              className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-lg font-mono text-sm font-semibold hover:shadow-cyber transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-2">
                <Icon name="Terminal" size={16} />
                <span>Connect</span>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-text-light hover:text-cyber-green hover:bg-primary/10 transition-all duration-300"
            aria-label="Toggle menu"
          >
            <Icon
              name={isMenuOpen ? "X" : "Menu"}
              size={24}
              className="transition-transform duration-300"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <nav className="py-4 space-y-2 border-t border-primary/20">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-mono text-sm transition-all duration-300 ${isActivePath(item.path)
                  ? 'text-cyber-green bg-primary/20 shadow-glow'
                  : 'text-text-light hover:text-cyber-green hover:bg-primary/10'
                  }`}
              >
                <Icon
                  name={item.icon}
                  size={18}
                  className={`transition-colors duration-300 ${isActivePath(item.path) ? 'text-cyber-green' : ''
                    }`}
                />
                <span>{item.name}</span>
                {isActivePath(item.path) && (
                  <div className="ml-auto w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
                )}
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-primary/20">
              <a
                href="mailto:aj4ashutoshjha@gmail.com"
                onClick={closeMenu}
                className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg font-mono text-sm font-semibold hover:shadow-cyber transition-all duration-300"
              >
                <Icon name="Terminal" size={16} />
                <span>Connect</span>
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Terminal Cursor Effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-green to-transparent opacity-30 animate-pulse"></div>
    </header>
  );
};

export default Header;