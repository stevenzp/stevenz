// ExperienceSection.js
import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

export default function ExperienceSection({ experiences }) {
  return (
    <>
      {experiences.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
        >
          <ExperienceCard {...item} />
        </motion.div>
      ))}
    </>
  );
}