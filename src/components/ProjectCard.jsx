import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const colorThemes = {
  purple: {
    gradient: "from-[#4B2A76] to-[#2D1B47]",
    hover: "from-pink-400 to-purple-400",
    border: "border-purple-500/30 hover:border-purple-400/60",
    glow: "hover:shadow-purple-500/25",
    overlay: "from-purple-600/20 via-purple-500/10",
    tech: "bg-purple-800/50 border-purple-500/30 text-purple-200",
  },
  blue: {
    gradient: "from-[#2A4B76] to-[#1B2D47]",
    hover: "from-cyan-400 to-blue-400",
    border: "border-blue-500/30 hover:border-blue-400/60",
    glow: "hover:shadow-blue-500/25",
    overlay: "from-blue-600/20 via-blue-500/10",
    tech: "bg-blue-800/50 border-blue-500/30 text-blue-200",
  },
  pink: {
    gradient: "from-[#762A4B] to-[#471B2D]",
    hover: "from-rose-400 to-pink-400",
    border: "border-pink-500/30 hover:border-pink-400/60",
    glow: "hover:shadow-pink-500/25",
    overlay: "from-pink-600/20 via-pink-500/10",
    tech: "bg-pink-800/50 border-pink-500/30 text-pink-200",
  },
  teal: {
    gradient: "from-[#2A7676] to-[#1B4747]",
    hover: "from-cyan-400 to-teal-400",
    border: "border-teal-500/30 hover:border-teal-400/60",
    glow: "hover:shadow-teal-500/25",
    overlay: "from-teal-600/20 via-teal-500/10",
    tech: "bg-teal-800/50 border-teal-500/30 text-teal-200",
  }
};

const ProjectCard = ({ 
  company, 
  logo, 
  description, 
  technologies, 
  link, 
  prize, 
  prizeText, 
  month, 
  day, 
  year,
  colorTheme = 'purple' // default theme
}) => {
  const theme = colorThemes[colorTheme];

  return (
    <motion.div
      layout
      className={`group relative p-4 rounded-xl bg-gradient-to-br ${theme.gradient} backdrop-blur-lg border ${theme.border} transition-all duration-300 h-[280px] flex flex-col shadow-lg ${theme.glow}`}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      {prize && (
        <div className="absolute -top-3 -right-2 z-20">
          <div className="px-4 py-1 bg-yellow-400 rounded-lg font-semibold text-purple-900 text-sm flex items-center gap-1.5 shadow-lg">
            {prizeText}
          </div>
        </div>
      )}
      
      <motion.div 
        className={`absolute inset-0 rounded-xl bg-gradient-to-b ${theme.overlay} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-400 blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            <img 
              src={logo} 
              alt={company} 
              className="relative h-20 w-20 object-contain"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${theme.hover} transition-all duration-300`}>
              {company}
            </h1>
            {prize && (
              <div className="flex items-center gap-2 bg-purple-800/30 px-2 py-0.5 rounded-md border border-purple-500/20 w-fit">
                <span className="text-xs font-bold text-purple-300">
                  {month}
                </span>
                <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                  {day}
                </span>
                <span className="text-xs font-medium text-purple-400">
                  {year}
                </span>
              </div>
            )}
          </div>
        </div>
        
        <p className="text-sm text-purple-100/80 leading-relaxed flex-grow">
          {description}
        </p>
        
        <div className="mt-4">
          <div className="flex flex-wrap gap-2 mb-3">
            {technologies.map((tech, index) => (
              <span key={index} className={`px-2 py-1 text-xs font-medium ${theme.tech} rounded-full`}>
                {tech}
              </span>
            ))}
          </div>
          
          {link && (
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-medium text-purple-300 hover:text-purple-100 transition-colors duration-200"
              whileHover={{ x: 2 }}
            >
              View Project <ArrowUpRight className="ml-1 h-3 w-3" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

