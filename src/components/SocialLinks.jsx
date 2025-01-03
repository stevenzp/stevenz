import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaLinkedin, FaFile } from 'react-icons/fa';

const SocialLinks = () => {
  const links = [
    { Icon: FaGithub, url: "https://github.com/stevenzp" },
    { Icon: FaEnvelope, url: "mailto:stevenza@umich.edu" },
    { Icon: FaLinkedin, url: "https://linkedin.com/in/stevenz-" },
  ];

  return (
    <div className="flex justify-center space-x-6">
      {links.map(({ Icon, url }, index) => (
        <motion.a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          className="text-2xl hover:text-primary transition-colors"
        >
          <Icon />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;