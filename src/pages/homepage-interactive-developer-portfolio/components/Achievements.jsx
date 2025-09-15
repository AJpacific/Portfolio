import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 }
  };

  const fullTechStack = [
    'React 18',
    'Vite',
    'Tailwind CSS',
    'React Router DOM',
    'Axios',
    'Chart.js',
    'react-chartjs-2',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Mongoose',
    'JWT',
    'bcryptjs',
    'Helmet',
    'CORS',
    'Rate Limiting'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="text-center mb-12"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
            <span className="text-cyber-green font-mono">&lt;</span>
            Achievements
            <span className="text-cyber-green font-mono">/&gt;</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Recognitions and highlights that reflect my passion for building and securing systems.
          </p>
        </motion.div>
      </motion.div>

      {/* Unified Achievement Card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div variants={itemVariants} className="bg-dark-surface/50 rounded-lg p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300">
          {/* Award Header */}
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Icon name="Trophy" size={24} className="text-cyber-green" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-text-light">2nd Place - Lumen Quest Hackathon 2026</h3>
              <span className="text-sm text-text-muted font-mono">Innovation • Team Project</span>
            </div>
          </div>
          <p className="text-text-muted mb-6">
            Secured 2nd position at Lumen Quest 2026 by delivering a robust, user-centric subscription platform with an emphasis on security and scalability.
          </p>

          {/* Link Badge to clarify relationship */}
          <div className="flex items-center space-x-2 mb-4">
            <span className="px-2 py-1 text-xs rounded bg-cyber-green/10 text-cyber-green font-mono border border-cyber-green/30">Winning Project</span>
          </div>

          {/* Nested Project Panel */}
          <div className="rounded-lg bg-dark-bg/30 border border-primary/10 p-4">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Icon name="Layers" size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-text-light">Subscription Management System</h4>
                <span className="text-xs text-text-muted font-mono">Hackathon Project</span>
              </div>
            </div>

            {/* Role */}
            <div className="mb-3">
              <span className="px-2 py-1 text-xs rounded bg-primary/10 border border-primary/20 text-primary font-mono">Role: Backend Developer</span>
            </div>

            {/* Overview (concise) */}
            <p className="text-text-muted mb-4 text-sm">
              Full‑stack platform for telecom/ISP subscriptions: customers, plans, billing, and analytics.
            </p>

            {/* Highlights */}
            <h5 className="text-sm font-semibold text-text-light mb-2 font-mono">
              <Icon name="Sparkles" size={16} className="inline mr-2 text-cyber-green" />
              Highlights
            </h5>
            <div className="grid md:grid-cols-2 gap-2 mb-4">
              <div className="flex items-start space-x-2 text-text-muted"><Icon name="Shield" size={16} className="text-cyber-green mt-0.5" /><span className="text-sm">Security‑hardened Express API (Helmet, CORS, rate limiting)</span></div>
              <div className="flex items-start space-x-2 text-text-muted"><Icon name="KeyRound" size={16} className="text-cyber-green mt-0.5" /><span className="text-sm">JWT auth, bcryptjs hashing, RBAC + audit logs</span></div>
              <div className="flex items-start space-x-2 text-text-muted"><Icon name="BarChart3" size={16} className="text-cyber-green mt-0.5" /><span className="text-sm">Analytics dashboards (Chart.js, react-chartjs-2)</span></div>
              <div className="flex items-start space-x-2 text-text-muted"><Icon name="CreditCard" size={16} className="text-cyber-green mt-0.5" /><span className="text-sm">Automated billing cycles, discounts, payment tracking</span></div>
            </div>

            <h5 className="text-sm font-semibold text-text-light mb-2 font-mono">
              <Icon name="Code" size={16} className="inline mr-2 text-cyber-green" />
              Tech Stack
            </h5>
            <div className="flex flex-wrap gap-2">
              {fullTechStack.map((tech) => (
                <span key={tech} className="px-2.5 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-xs font-mono">
                  {tech}
                </span>
              ))}
            </div>

            {/* View Code Button */}
            <div className="mt-4">
              <a
                href="https://github.com/AJpacific/lumen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-dark-surface border border-primary/20 text-text-light px-6 py-2 rounded-lg font-mono hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
              >
                <Icon name="Github" size={20} />
                <span>View Code</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Achievements;


