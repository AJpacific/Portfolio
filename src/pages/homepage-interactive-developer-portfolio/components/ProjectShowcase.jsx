import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProjectShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform Backend",
      category: "Backend Development",
      description: `Built a secure, high-performance e-commerce backend with Spring Boot, Spring Security, and Spring Data JPA. Implemented user authentication with encrypted passwords, role-based authorization, product catalog management, order processing, and optimized SQL queries for fast and reliable operations.`,
      technologies: ["Spring Boot", "Spring Security", "Spring Data JPA", "PostgreSQL", "JWT", "Encryption"],
      securityFeatures: ["Multi-Factor Authentication", "End-to-End Encryption", "OWASP Compliance"],
      githubUrl: "https://github.com/AJpacific/E-Commerce",
    },
    {
      id: 2,
      title: "Network Vulnerability Scanner",
      category: "Cybersecurity",
      description: `A Python-based network vulnerability scanner that detects open TCP ports, identifies running services, and checks for known vulnerabilities.`,
      technologies: ["Python", "Nmap", "Requests", "BeautifulSoup4"],
      securityFeatures: ["TCP Port Scanning", "Banner Grabbing", "Vulnerability Lookup", "Structured JSON Reports"],
      githubUrl: "https://github.com/AJpacific/Network-Vulnerability-Scanner"
    },
    {
      id: 3,
      title: "WiFi DoS",
      category: "Cybersecurity",
      description: `A Python-based wireless network analysis and deauthentication (DoS) tool leveraging the Aircrack-ng suite. It scans nearby WiFi networks, lists them in real-time, and allows controlled deauth attacks on selected targets. Designed purely for educational use to demonstrate wireless security concepts in authorized environments.`,
      technologies: [
        "Python",
        "Aircrack-ng",
        "Airodump-ng",
        "Aireplay-ng",
        "Airmon-ng",
        "Linux (Kali)"
      ],
      securityFeatures: [
        "WiFi Adapter Detection",
        "Privilege Check",
        "Network Scanning",
        "Duplicate Filtering",
        "Monitor Mode",
        "Deauthentication Attack"
      ],
      githubUrl: "https://github.com/AJpacific/DoS-WiFi"
    },
    {
      id: 4,
      title: "HomeBite – Food Delivery Web App",
      category: "Frontend Development",
      description: `A responsive React + Tailwind CSS food delivery web app showcasing a variety of pizzas with real-time ratings and cart management.`,
      technologies: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
      securityFeatures: ["HTTPS", "Form Validation", "Input Sanitization", "Secure Storage (Local/Session)"],
      githubUrl: "https://github.com/AJpacific/HomeBite",
    }
  ];

  const categories = ["All", ...new Set(projects.map(p => p.category))];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="text-center mb-10"
      >
        <motion.div variants={itemVariants}>
        <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
            <span className="text-cyber-green font-mono">&lt;</span>
            Project Showcase
            <span className="text-cyber-green font-mono">/&gt;</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Explore my work across different domains including backend, frontend, and cybersecurity.
          </p>
        </motion.div>
      </motion.div>

      {/* Category Filter */}
      <div className="flex justify-center mb-8">
  <div className="flex flex-wrap justify-center space-x-2 bg-dark-surface/50 rounded-lg p-2 border border-primary/20 w-full">
    {categories.map(cat => (
      <button
        key={cat}
        onClick={() => setActiveCategory(cat)}
        className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
          activeCategory === cat
            ? 'bg-primary text-white shadow-cyber'
            : 'text-text-muted hover:text-cyber-green hover:bg-primary/10'
        }`}
      >
        {cat}
      </button>
    ))}
  </div>
</div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 gap-10"
      >
        {filteredProjects.map(project => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="bg-dark-surface/50 rounded-lg p-6 border border-primary/20"
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-3 h-3 bg-cyber-green rounded-full animate-pulse"></div>
              <span className="text-cyber-green font-mono text-sm">
                {project.category}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-text-light mb-2">
              {project.title}
            </h3>
            <p className="text-text-muted mb-4">{project.description}</p>

            {/* Technologies */}
            <h4 className="text-lg font-semibold text-text-light mb-2 font-mono">
              <Icon name="Code" size={20} className="inline mr-2 text-cyber-green" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-mono">
                  {tech}
                </span>
              ))}
            </div>

            {/* Security Features */}
            <h4 className="text-lg font-semibold text-text-light mb-2 font-mono">
              <Icon name="Shield" size={20} className="inline mr-2 text-cyber-green" />
              Security Implementation
            </h4>
            <ul className="mb-4 space-y-1">
              {project.securityFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2 text-text-muted">
                  <Icon name="CheckCircle" size={16} className="text-cyber-green" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* GitHub Link */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-dark-surface border border-primary/20 text-text-light px-6 py-2 rounded-lg font-mono hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
            >
              <Icon name="Github" size={20} />
              <span>View Code</span>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectShowcase;
