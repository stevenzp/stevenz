import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';
import { CodeIcon as CodeBracketIcon, BeakerIcon, LightbulbIcon as LightBulbIcon } from 'lucide-react';

export default function AboutSection({ aboutMe }) {
  const interests = [
    {
      icon: <CodeBracketIcon className="w-6 h-6" />,
      title: "AI Development",
      description: "Building intelligent agents and ML infrastructure"
    },
    {
      icon: <BeakerIcon className="w-6 h-6" />,
      title: "Research",
      description: "Exploring distributed systems and ML optimization"
    },
  ];

  return (
    <>
      <motion.div
        className="mb-12 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-yellow-500 animate-gradient">
          {aboutMe.title}
        </h2>
        
        <motion.p 
          className="text-lg text-purple-200 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          I'm a third-year Computer Science major at the{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-yellow-500 animate-gradient'>
            University of Michigan
          </span>{' '}
          with a minor in Mathematics. My academic interests focus on intelligent AI agents, distributed systems, and machine learning infrastructure.
        </motion.p>

        

        
      </motion.div>
      
      <SocialLinks />
    </>
  );
}

