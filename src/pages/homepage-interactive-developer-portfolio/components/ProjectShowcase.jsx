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
      description: `Developed a production-ready REST API for modern e-commerce platforms using Spring Boot 3 and Java 21. Implemented secure JWT-based authentication, role-based access control (Admin, Manager, Customer), and password encryption with BCrypt. Features include user management, product CRUD, shopping cart, orders, payments, inventory management, and robust API security.`,
      technologies: [
        "Spring Boot",
        "Java",
        "Spring Security",
        "Spring Data JPA",
        "MySQL",
        "Hibernate",
        "JWT",
        "BCrypt",
        "Maven",
        "REST API Design"
      ],
      securityFeatures: [
        "JWT Authentication",
        "Role-Based Access Control",
        "BCrypt Password Hashing",
        "Input Validation",
        "Error Handling",
        "CSRF Protection Disabled for API",
        "Stateless Sessions"
      ],
      githubUrl: "https://github.com/AJpacific/E-Commerce-Backend"
    },

    {
      id: 2,
      title: "LMS Backend",
      category: "Backend Development",
      description: `Developed a comprehensive Learning Management System (LMS) using Spring Boot and Java. Implemented JWT-based authentication, role-based access control (Student, Instructor, Approver), and a secure REST API architecture. Features include user management, course creation/approval, enrollments, progress tracking, and file upload for course materials.`,
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Spring Data JPA",
        "MySQL",
        "H2 Database",
        "Hibernate",
        "JWT",
        "BCrypt",
        "SpringDoc OpenAPI",
        "JUnit 5"
      ],
      securityFeatures: [
        "JWT Authentication",
        "Role-Based Access Control",
        "Password Encryption (BCrypt)",
        "CORS Configuration",
        "Secure REST API Endpoints"
      ],
      githubUrl: "https://github.com/AJpacific/LMS-Backend"
    },
    {
      id: 6,
      title: "Real-Time Chat Backend",
      category: "Backend Development",
      description: `A robust, scalable, and secure backend infrastructure designed for modern real-time messaging applications. Built with Spring Boot 4.0 and Java 21, this system delivers low-latency communication through WebSocket (STOMP over SockJS) for bi-directional, event-driven communication. Features include JWT-based authentication, RESTful APIs for resource management, real-time message delivery, and reliable PostgreSQL data persistence with connection pooling via HikariCP.`,
      technologies: [
        "Spring Boot 4.0",
        "Java 21",
        "WebSocket",
        "STOMP",
        "SockJS",
        "PostgreSQL",
        "Spring Security",
        "JWT (JJWT 0.13.0)",
        "Spring Data JPA",
        "Hibernate",
        "HikariCP",
        "Maven",
        "H2 Database (Testing)"
      ],
      securityFeatures: [
        "JWT Authentication (Stateless)",
        "WebSocket Security",
        "Connection Pooling (HikariCP)",
        "ACID Compliance",
        "Asynchronous Processing",
        "Horizontal Scalability",
        "Virtual Threads Ready (Java 21)"
      ],
      githubUrl: "https://github.com/AJpacific/chat-app-backend"
    },
    {
      id: 3,
      title: "Network Vulnerability Scanner",
      category: "Cybersecurity",
      description: `A Python-based network vulnerability scanner that detects open TCP ports, identifies running services, and checks for known vulnerabilities.`,
      technologies: ["Python", "Nmap", "Requests", "BeautifulSoup4"],
      securityFeatures: ["TCP Port Scanning", "Banner Grabbing", "Vulnerability Lookup", "Structured JSON Reports"],
      githubUrl: "https://github.com/AJpacific/Network-Vulnerability-Scanner"
    },
    {
      id: 4,
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
      id: 5,
      title: "HomeBite – Food Delivery Web App",
      category: "Frontend Development",
      description: `A dynamic and responsive food delivery web application built using HTML, CSS, and JavaScript.`,
      technologies: ["JavaScript", "HTML", "CSS"],
      securityFeatures: ["HTTPS", "Form Validation", "Input Sanitization", "Secure Storage (Local/Session)"],
      githubUrl: "https://github.com/AJpacific/HomeBite",
    },
    {
      id: 7,
      title: "Rigveda Digital Explorer",
      category: "Frontend Development",
      description: `A modern, responsive web application for exploring, searching, and studying the ancient texts of the Rigveda. This application provides a user-friendly interface to delve into the 10 Mandalas, 1,028 Suktas, and 10,552 verses of this foundational Vedic Sanskrit text. Features include hierarchical navigation, universal search across all verses, random verse discovery, an in-built Sanskrit dictionary, and an integrated AI assistant for deeper insights.`,
      technologies: [
        "Next.js (App Router)",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "ESLint",
        "API Routes",
        "AI Integration",
        "JSON Data Processing"
      ],
      securityFeatures: [
        "Server-Side Rendering (SSR)",
        "API Route Protection",
        "Input Sanitization",
        "Responsive Design",
        "SEO Optimized"
      ],
      githubUrl: "https://github.com/AJpacific/rigveda",
      liveUrl: "https://rigveda-snh2.vercel.app/"
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
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
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${activeCategory === cat
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
            className="bg-dark-surface/50 rounded-lg p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-medium"
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

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-dark-surface border border-primary/20 text-text-light px-6 py-2 rounded-lg font-mono hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
              >
                <Icon name="Github" size={20} />
                <span>View Code</span>
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-primary border border-primary text-white px-6 py-2 rounded-lg font-mono hover:bg-primary/80 transition-all duration-300 shadow-cyber"
                >
                  <Icon name="ExternalLink" size={20} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectShowcase;
