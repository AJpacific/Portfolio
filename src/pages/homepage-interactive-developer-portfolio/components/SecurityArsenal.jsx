import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const SecurityArsenal = () => {
  const [activeCategory, setActiveCategory] = useState('tools');

  const securityData = {
    tools: [
      {
        name: "Linux",
        description: "Operating system for security testing and administration",
        icon: "Terminal",
        proficiency: 75,
        category: "Operating System"
      },
      {
        name: "Nmap",
        description: "Network discovery and security auditing tool",
        icon: "Search",
        proficiency: 80,
        category: "Network Security"
      },
      {
        name: "OpenVAS",
        description: "Open-source vulnerability scanning framework",
        icon: "AlertTriangle",
        proficiency: 80,
        category: "Vulnerability Assessment"
      },
      {
        name: "Metasploit",
        description: "Penetration testing and exploit development framework",
        icon: "Target",
        proficiency: 70,
        category: "Penetration Testing"
      },
      {
        name: "John the Ripper",
        description: "Password cracking and security testing tool",
        icon: "Key",
        proficiency: 80,
        category: "Password Security"
      },
      {
        name: "Hashcat",
        description: "Advanced password recovery and hash cracking",
        icon: "Lock",
        proficiency: 80,
        category: "Password Security"
      },
      {
        name: "SQLmap",
        description: "Automated SQL injection and database takeover tool",
        icon: "Database",
        proficiency: 70,
        category: "Database Security"
      },
      {
        name: "Gobuster",
        description: "Directory and file brute-forcing tool",
        icon: "Folder",
        proficiency: 70,
        category: "Web Enumeration"
      },
      {
        name: "Gophish",
        description: "Phishing campaign simulation and training platform",
        icon: "Mail",
        proficiency: 75,
        category: "Social Engineering"
      },
      {
        name: "Aircrack-ng",
        description: "Wi-Fi network security testing suite",
        icon: "Wifi",
        proficiency: 80,
        category: "Wireless Security"
      },
      {
        name: "Burp Suite",
        description: "Web application vulnerability scanning and exploitation",
        icon: "Shield",
        proficiency: 70,
        category: "Web Security"
      },
      {
        name: "Web Exploits: SQL Injection",
        description: "Manual and automated SQL Injection exploitation",
        icon: "Code",
        proficiency: 70,
        category: "Web Exploitation"
      },
      {
        name: "Python (Scripting)",
        description: "Automating security tasks and developing custom tools",
        icon: "Code",
        proficiency: 50,
        category: "Programming"
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="text-center mb-16"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
            <span className="text-cyber-green font-mono">&lt;</span>
            Security Arsenal
            <span className="text-cyber-green font-mono">/&gt;</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Comprehensive cybersecurity expertise with professional tools for penetration testing, vulnerability assessment, and exploitation.
          </p>
        </motion.div>
      </motion.div>

      {/* Security Tools Display */}
      <motion.div
        key="tools"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityData.tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-surface/50 rounded-lg p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-medium"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon name={tool.icon} size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-light font-mono">
                    {tool.name}
                  </h3>
                  <span className="text-sm text-text-muted">{tool.category}</span>
                </div>
              </div>
              <p className="text-text-muted mb-4 text-sm">
                {tool.description}
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-text-muted">Proficiency</span>
                  <span className="text-sm font-mono text-cyber-green">{tool.proficiency}%</span>
                </div>
                <div className="w-full bg-dark-bg rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-primary to-cyber-green h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${tool.proficiency}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  );
};

export default SecurityArsenal;
