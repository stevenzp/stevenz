import React from 'react';
import { motion } from 'framer-motion';

const ExperienceCard = ({ company, role, logo, description = "", technologies = [], dates = "" }) => {
  return (
    <motion.div
      layout
      className="group relative p-4 rounded-xl bg-opacity-10 bg-white backdrop-blur-md border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 min-h-[200px] flex flex-col items-center justify-center shadow-lg hover:shadow-purple-500/25"
      whileHover={{ y: -5 }}
    >
      <motion.div 
        className="absolute inset-0 rounded-xl bg-gradient-to-b from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      
      <div className="relative z-10 flex flex-col items-center">
        <img src={logo} alt={company} className="h-20 object-contain mb-2 relative z-10" />
        <h3 className="text-lg font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
          {company}
        </h3>
        <p className="text-sm text-purple-200 mb-1">{role}</p>
        {dates && <p className="text-xs text-purple-300/80 mb-1">{dates}</p>}
        
        {description && (
          <motion.p 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="text-xs text-purple-200/90 mb-2 hidden group-hover:block"
          >
            {description}
          </motion.p>
        )}
        
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-200"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;