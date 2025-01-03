import React from 'react';
import { motion } from 'framer-motion';

const ExperienceCard = ({ company, role, logo }) => {
  return (
    <div className="p-6 rounded-xl bg-opacity-10 bg-white backdrop-blur-md border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 min-h-[250px] flex flex-col items-center justify-center shadow-lg hover:shadow-purple-500/25">
      <img src={logo} alt={company} className="w-25 h-24 object-contain mb-4" />
      <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">{company}</h3>
      <p className="text-lg text-purple-200">{role}</p>
    </div>
  );
};

export default ExperienceCard;