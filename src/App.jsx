import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './components/ExperienceCard';
import SocialLinks from './components/SocialLinks';
import ProjectCard from './components/ProjectCard';

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

const education = [
  {
    company: "University of Michigan",
    role: "BSE Computer Science",
    logo: "/umich.png"
  }
];

const projects = [
  {
    company: 'GeomPT',
    logo: 'hackmit.png',
    description: 'Web-based physical therapy platform powered by GoogleAPI’s pose-detection kit, enabling real-time analysis of patients’ range of motion',
    technologies: ['React', 'MediaPipe', 'WebSockets'],
    link: 'https://ballot.hackmit.org/project/fnjby-pztke-ionsy-qebtg',
    prize: true,
    prizeText: '🏅 2nd Place at HackMIT', 
    month: "SEP", 
    day: 16, 
    year: 2024,
    colorTheme: 'blue'
  }, 
  {
    company: "Autocal",
    logo: 'mhacks.png',
    description: 'Voice powered calendar optimization application that uses AI voice recognition and the Google Calendar API to enhance user scheduling efficiency',
    technologies: ['React', 'Python'],
    link: 'https://devpost.com/software/autocal-ai',
    prize: true,
    prizeText: '🏆 Best Use of Google Cloud at MHacks', 
    month: "NOV", 
    day: 19, 
    year: 2023,
    colorTheme: 'teal'
  }
];


function App() {
  const canvasRef = useRef(null);
  const [activeSection, setActiveSection] = useState('experience');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const sections = {
    experience: experiences,
    education: education,
    projects: projects,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let gridOffset = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const drawSynthwaveGrid = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#2b0048');
      gradient.addColorStop(1, '#1c0030');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Animated grid with mouse interaction
      ctx.strokeStyle = 'rgba(255, 0, 255, 0.15)';
      ctx.lineWidth = 0.5;

      const gridSize = 80;
      gridOffset = (gridOffset + 0.5) % gridSize; // Continuous movement
      const perspectiveOffset = Math.sin(time * 0.001) * 5 + mousePosition.x;

      // Vertical lines with animation
      for (let x = -gridSize; x < canvas.width + gridSize; x += gridSize) {
        const xPos = x + gridOffset;
        ctx.beginPath();
        ctx.moveTo(xPos, 0);
        ctx.lineTo(xPos + perspectiveOffset, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines with animation
      for (let y = 0; y < canvas.height; y += gridSize) {
        const amplitude = 2 + (mousePosition.y * 0.1);
        const frequency = 0.05;
        const waveOffset = Math.sin((y + gridOffset) * frequency + time * 0.003) * amplitude;

        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.bezierCurveTo(
          canvas.width / 3, y + waveOffset,
          (canvas.width / 3) * 2, y - waveOffset,
          canvas.width, y
        );
        ctx.stroke();
      }

      const centerX = canvas.width / 2;
      const bottomY = canvas.height + 50;
      const sunRadius = canvas.height / 4;
      const rayCount = 16;
      const maxRayLength = sunRadius * 1.25;
      const rayAngleSpread = Math.PI * 0.8;
      const rayStart = Math.PI + (Math.PI - rayAngleSpread) / 2;
      const rayEnd = Math.PI * 2 - (Math.PI - rayAngleSpread) / 2;
      
      ctx.save();
      ctx.translate(centerX, bottomY);
      
      for (let i = 0; i < rayCount; i++) {
        const angle = rayStart + (rayEnd - rayStart) * (i / (rayCount - 1));
        const rayLength = maxRayLength * (0.6 + Math.sin(time * 0.003 + i) * 0.4);
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(
          Math.cos(angle) * rayLength,
          Math.sin(angle) * rayLength
        );
        
        const gradient = ctx.createLinearGradient(0, 0,
          Math.cos(angle) * rayLength,
          Math.sin(angle) * rayLength
        );
        gradient.addColorStop(0, 'rgba(255, 100, 0, 0.9)');
        gradient.addColorStop(1, 'rgba(255, 80, 0, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3 + Math.sin(time * 0.002 + i) * 2;
        ctx.stroke();
      }
      
      ctx.restore();

      // Enhanced sun gradient
      const sunGradient = ctx.createRadialGradient(
        centerX, bottomY, 0,
        centerX, bottomY, sunRadius
      );
      sunGradient.addColorStop(0, 'rgba(255, 160, 50, 1)');
      sunGradient.addColorStop(0.5, 'rgba(255, 100, 0, 0.95)');
      sunGradient.addColorStop(1, 'rgba(255, 60, 0, 0)');
      
      ctx.fillStyle = sunGradient;
      ctx.beginPath();
      ctx.arc(centerX, bottomY, sunRadius, 0, Math.PI * 2);
      ctx.fill();

      // Improved text rendering
      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Text shadow for better visibility
      ctx.font = 'bold 20px "Inter", sans-serif';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
      ctx.shadowBlur = 4;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;

      animationFrameId = requestAnimationFrame(() => drawSynthwaveGrid(time + 16));
    };

    drawSynthwaveGrid(0);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [mousePosition]);

  return (
    <div className="min-h-screen flex flex-col items-center relative overflow-hidden">
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full" style={{ zIndex: -1 }} />
      
      <motion.div 
        className="fixed bottom-8 z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 0.5,
          type: "spring",
          stiffness: 100 
        }}
      >
        <SocialLinks />
      </motion.div>

      <main className="container mx-auto px-4 py-10 flex flex-col items-center w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 max-w-4xl"
        >
          <motion.h1 
            className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-gradient px-4 pb-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Steven Zhang
          </motion.h1>
          
          <motion.p 
            className="text-2xl mb-6 text-purple-200"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Engineer
          </motion.p>
          


          <div className="flex justify-center gap-4">
            {Object.keys(sections).map((section) => (
              <motion.button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === section
                    ? 'bg-purple-500/50 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-purple-900/30 text-purple-200 hover:bg-purple-500/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {activeSection === 'about' ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-6 max-w-4xl"
            >
              <h2 className="text-3xl font-bold mb-2">{aboutMe.title}</h2>
              <p className="text-lg text-purple-200">{aboutMe.content}</p>
            </motion.div>
          ) : (
            sections[activeSection].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {activeSection === 'projects' ? (
                  <ProjectCard {...item} />
                ) : (
                  <ExperienceCard {...item} />
                )}
              </motion.div>
            ))
          )}
        </motion.div>
      </main>
    </div>
  );
}

export default App;