import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/AppIcon';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Terminal-style 404 */}
        <div className="bg-dark-surface rounded-lg border border-primary/20 p-8 mb-8 font-mono">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-error rounded-full"></div>
            <div className="w-3 h-3 bg-warning rounded-full"></div>
            <div className="w-3 h-3 bg-success rounded-full"></div>
          </div>
          <div className="text-left">
            <div className="text-cyber-green mb-2">
              <span className="text-text-muted">ashutosh@portfolio:~$</span> ls -la /requested-page
            </div>
            <div className="text-error mb-2">
              ls: cannot access '/requested-page': No such file or directory
            </div>
            <div className="text-cyber-green mb-2">
              <span className="text-text-muted">ashutosh@portfolio:~$</span> echo "Error 404"
            </div>
            <div className="text-text-light mb-4">Error 404</div>
            <div className="text-cyber-green">
              <span className="text-text-muted">ashutosh@portfolio:~$</span> 
              <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-cyber-green mb-4 font-mono">404</h1>
          <h2 className="text-2xl font-semibold text-text-light mb-4">
            Page Not Found
          </h2>
          <p className="text-text-muted text-lg mb-8">
            The page you're looking for seems to have been moved, deleted, or doesn't exist.
            Let's get you back to exploring the digital realm.
          </p>
        </div>

        {/* Navigation Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Link
            to="/homepage-interactive-developer-portfolio"
            className="flex items-center justify-center space-x-3 bg-gradient-to-r from-primary to-accent text-white px-6 py-4 rounded-lg font-mono font-semibold hover:shadow-cyber transition-all duration-300 hover:scale-105"
          >
            <Icon name="Home" size={20} />
            <span>Return Home</span>
          </Link>
          
          <Link
            to="/projects-case-study-showcase"
            className="flex items-center justify-center space-x-3 bg-dark-surface border border-primary/20 text-text-light px-6 py-4 rounded-lg font-mono font-semibold hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
          >
            <Icon name="FolderOpen" size={20} />
            <span>View Projects</span>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="text-text-muted">
          <p className="mb-4">Or explore these sections:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/about-professional-journey"
              className="text-cyber-green hover:text-accent transition-colors duration-300 font-mono text-sm"
            >
              About
            </Link>
            <Link
              to="/skills-interactive-laboratory"
              className="text-cyber-green hover:text-accent transition-colors duration-300 font-mono text-sm"
            >
              Skills
            </Link>
            <Link
              to="/security-arsenal-cybersecurity-expertise"
              className="text-cyber-green hover:text-accent transition-colors duration-300 font-mono text-sm"
            >
              Security
            </Link>
            <Link
              to="/contact-collaboration-portal"
              className="text-cyber-green hover:text-accent transition-colors duration-300 font-mono text-sm"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent/5 rounded-full blur-xl"></div>
      </div>
    </div>
  );
};

export default NotFound;