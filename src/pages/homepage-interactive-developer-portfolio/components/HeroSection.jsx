import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const taglines = [
    'Backend Developer',
    'Cybersecurity Enthusiast'
  ];

  const terminalCommands = [
    { command: 'whoami', output: 'ashutosh jha' },
    { command: 'pwd', output: '/home/dev-sec' },
    { command: 'ls skills/', output: 'java spring-framework cybersecurity python' },
    { command: 'cat mission.txt', output: 'Building secure, scalable applications' }
  ];

  useEffect(() => {
    const currentTagline = taglines[currentTaglineIndex];
    let timeoutId;

    if (isTyping) {
      if (displayText.length < currentTagline.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentTagline.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, currentTaglineIndex, taglines]);

  return (
    <div className="bg-[#27313e] min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-[-1]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Terminal */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          {/* Terminal Window */}
          <div className="bg-dark-surface rounded-lg border border-primary/20 shadow-large overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-dark-bg border-b border-primary/20">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-error rounded-full"></div>
                <div className="w-3 h-3 bg-warning rounded-full"></div>
                <div className="w-3 h-3 bg-success rounded-full"></div>
              </div>
              <div className="text-text-muted text-sm font-mono">
                ashutosh@portfolio:~
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm">
              {/* Static Commands */}
              {terminalCommands.map((cmd, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.5 }}
                  className="mb-3"
                >
                  <div className="text-cyber-green">
                    <span className="text-text-muted">ashutosh@portfolio:~$</span> {cmd.command}
                  </div>
                  <div className="text-text-light ml-4">{cmd.output}</div>
                </motion.div>
              ))}

              {/* Dynamic Typing */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="mb-3"
              >
                <div className="text-cyber-green">
                  <span className="text-text-muted">ashutosh@portfolio:~$</span> echo "I am a {displayText}
                  <span className="animate-pulse">|</span>"
                </div>
                <div className="text-text-light ml-4">
                  I am a {displayText}
                  <span className="animate-pulse text-cyber-green">|</span>
                </div>
              </motion.div>

              {/* Current Command Line */}
              <div className="text-cyber-green">
                <span className="text-text-muted">ashutosh@portfolio:~$</span>
                <span className="animate-pulse">_</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="grid grid-cols-3 gap-4 mt-8"
          >
            <div className="bg-dark-surface/50 rounded-lg p-4 text-center border border-primary/10">
              <div className="text-2xl font-bold text-cyber-green font-mono">5+</div>
              <div className="text-text-muted text-sm">Projects</div>
            </div>
            <div className="bg-dark-surface/50 rounded-lg p-4 text-center border border-primary/10">
              <div className="text-2xl font-bold text-cyber-green font-mono">3+</div>
              <div className="text-text-muted text-sm">Years</div>
            </div>
            <div className="bg-dark-surface/50 rounded-lg p-4 text-center border border-primary/10">
              <div className="text-2xl font-bold text-cyber-green font-mono">15+</div>
              <div className="text-text-muted text-sm">Skills</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Profile */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="order-1 lg:order-2 text-center lg:text-left"
        >
          {/* Profile Image */}
          <div className="relative mb-8 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-cyber">
                <Image
                  src="public/assets/images/pfp-modified.png"
                  alt="Ashutosh Jha"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-cyber-green text-dark-bg p-2 rounded-full">
                <Icon name="Shield" size={20} />
              </div>
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-success rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-text-light mb-4">
              <span className="text-cyber-green font-mono">&lt;</span>
              Ashutosh Jha
              <span className="text-cyber-green font-mono">/&gt;</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-text-muted mb-6 font-mono">
              Backend | Cybersecurity
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-text-muted mb-8 max-w-lg mx-auto lg:mx-0"
          >
            Crafting secure, scalable applications where innovative code meets cybersecurity excellence.
            Bridging the gap between creative development and digital protection.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center lg:justify-start space-x-6 mt-4"
          >
            <a
              href="https://github.com/AJpacific"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-cyber-green transition-colors duration-300"
            >
              <Icon name="Github" size={24} />
            </a>
            <a
              href="http://www.linkedin.com/in/ajpacific"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-cyber-green transition-colors duration-300"
            >
              <Icon name="Linkedin" size={24} />
            </a>
            <a
              href="https://leetcode.com/u/AJpacific/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-cyber-green transition-colors duration-300"
            >
              <Icon name="Code" size={24} />
            </a>
            <a
              href="mailto:aj4ashutoshjha@gmail.com"
              className="text-text-muted hover:text-cyber-green transition-colors duration-300"
            >
              <Icon name="Mail" size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-1 w-full flex justify-center"
      >
        <div className="flex flex-col items-center space-y-2 text-text-muted">
          <span className="text-sm font-mono">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Icon name="ChevronDown" size={20} className="text-cyber-green" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;