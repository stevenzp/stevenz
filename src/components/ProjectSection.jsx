// ProjectsSection.js
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

export default function ProjectsSection({ projects }) {
  return (
    <>
      {projects.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
        >
          <ProjectCard {...item} />
        </motion.div>
      ))}
    </>
  );
}