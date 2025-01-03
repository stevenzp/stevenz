import React from 'react';
import { motion } from 'framer-motion';
import NavBar from './components/NavBar';
import ExperienceCard from './components/ExperienceCard';
import SocialLinks from './components/SocialLinks';

const experiences = [
  {
    company: "Amazon Web Services",
    role: "Software Development Intern",
    logo: "/aws-logo.png"
  }, 
  {
    company: "Strategic Reasoning Group",
    role: "Research Intern", 
    logo: "/srg.png"
  },
  {
    company: "S-Docs",
    role: "Software Engineering Intern", 
    logo: "/s-docs.png"
  }
];

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-black via-purple-900 to-black">
      <div className="grid-background animate-pulse-slow" />
      <NavBar />
      
      <main className="container mx-auto px-4 py-16 flex flex-col items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-4xl"
        >
          <h1 className="text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-gradient px-4 pb-2">Steven Zhang</h1>
          
          <p className="text-2xl mb-8 text-purple-200">Engineer</p>
          <div className="transform scale-125">
            <SocialLinks />
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 w-full max-w-5xl">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ExperienceCard {...exp} />
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;