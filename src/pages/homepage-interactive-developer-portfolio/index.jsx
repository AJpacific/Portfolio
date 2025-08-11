import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import Icon from '../../components/AppIcon';

import HeroSection from './components/HeroSection';
import SkillsLaboratory from './components/SkillsLaboratory';
import ProjectShowcase from './components/ProjectShowcase';
import SecurityArsenal from './components/SecurityArsenal';

const HomepageInteractiveDeveloperPortfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const containerRef = useRef(null);

  const sections = [
    { id: 'hero', name: 'Home', icon: 'Home' },
    { id: 'skills', name: 'Skills', icon: 'Code' },
    { id: 'projects', name: 'Projects', icon: 'FolderOpen' },
    { id: 'security', name: 'Security', icon: 'Shield' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'projects', 'security', 'achievements', 'social-proof'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg text-text-light" ref={containerRef}>
      {/* Floating Navigation */}
      <motion.div 
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="bg-dark-surface/80 backdrop-blur-lg rounded-full p-2 border border-primary/20">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`block p-3 rounded-full transition-all duration-300 mb-2 last:mb-0 group relative ${
                activeSection === section.id
                  ? 'bg-primary text-white shadow-cyber'
                  : 'text-text-muted hover:text-cyber-green hover:bg-primary/10'
              }`}
              title={section.name}
            >
              <Icon name={section.icon} size={20} />
              <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-dark-surface px-2 py-1 rounded text-xs font-mono text-text-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {section.name}
              </div>
            </button>
          ))}
        </div>
        
        {/* Progress Indicator */}
        <div className="mt-4 bg-dark-surface/80 backdrop-blur-lg rounded-full p-2 border border-primary/20">
          <div className="w-1 h-20 bg-dark-bg rounded-full relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyber-green to-primary rounded-full"
              style={{ height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']) }}
            />
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section id="hero" className="relative">
        <HeroSection />
      </section>

      {/* Skills Laboratory */}
      <section id="skills" className="relative py-20">
        <SkillsLaboratory />
      </section>

      {/* Project Showcase */}
      <section id="projects" className="relative py-20 bg-dark-surface/30">
        <ProjectShowcase />
      </section>

      {/* Security Arsenal */}
      <section id="security" className="relative py-20">
        <SecurityArsenal />
      </section>

      {/* Call to Action Footer */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-mono">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next project. Whether it's full-stack development or cybersecurity implementation, I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:aj4ashutoshjha@gmail.com"
              className="bg-white text-primary px-8 py-4 rounded-lg font-mono font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-large"
            >
              <div className="flex items-center justify-center space-x-2">
                <Icon name="MessageCircle" size={20} />
                <span>Start Collaboration</span>
              </div>
            </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/3 w-32 h-32 bg-cyber-green/5 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
};

export default HomepageInteractiveDeveloperPortfolio;