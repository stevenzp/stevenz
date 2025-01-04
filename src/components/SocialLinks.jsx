import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  const links = [
    { Icon: FaGithub, url: "https://github.com/stevenzp", label: "GitHub" },
    { Icon: FaEnvelope, url: "mailto:stevenza@umich.edu", label: "Email" },
    { Icon: FaLinkedin, url: "https://linkedin.com/in/stevenz-", label: "LinkedIn" },
  ];

  return (
    <div className="p-4 rounded-xl bg-purple-900/30 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300">
      <div className="flex justify-center space-x-8">
        {links.map(({ Icon, url, label }, index) => (
          <motion.a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-2xl text-purple-200 hover:text-purple-400 transition-colors duration-300"
            aria-label={label}
          >
            <Icon />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;

