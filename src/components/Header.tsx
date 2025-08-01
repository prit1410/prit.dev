import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';
import QuantumParticles from "./ui/QuantumParticles";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.header 
      className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Quantum Particles Animation */}
      <QuantumParticles />

      {/* Enhanced Glowing Background Effects */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {/* Primary large glowing orb */}
        <motion.div 
          className="absolute w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(circle at center, rgba(99,102,241,0.4) 0%, rgba(168,85,247,0.3) 30%, rgba(99,102,241,0.1) 50%, rgba(0,0,0,0) 70%)',
            boxShadow: '0 0 80px 60px rgba(99,102,241,0.15)',
            filter: 'blur(50px)',
            top: '5%',
            right: '-15%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0.9, 0.7],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Secondary pulsing glow */}
        <motion.div 
          className="absolute w-[400px] h-[400px]"
          style={{
            background: 'radial-gradient(circle at center, rgba(168,85,247,0.5) 0%, rgba(99,102,241,0.3) 40%, rgba(0,0,0,0) 70%)',
            boxShadow: '0 0 60px 40px rgba(168,85,247,0.2)',
            filter: 'blur(40px)',
            bottom: '15%',
            left: '5%',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 0.8, 0.6],
            x: [0, 40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Accent glow sphere */}
        <motion.div 
          className="absolute w-[300px] h-[300px]"
          style={{
            background: 'radial-gradient(circle at center, rgba(99,102,241,0.5) 0%, rgba(79,70,229,0.3) 40%, rgba(0,0,0,0) 70%)',
            boxShadow: '0 0 50px 30px rgba(99,102,241,0.25)',
            filter: 'blur(30px)',
            top: '35%',
            left: '25%',
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 0.7, 0.5],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Floating highlight glow */}
        <motion.div 
          className="absolute w-[250px] h-[250px]"
          style={{
            background: 'radial-gradient(circle at center, rgba(168,85,247,0.4) 0%, rgba(99,102,241,0.2) 50%, rgba(0,0,0,0) 70%)',
            boxShadow: '0 0 40px 20px rgba(168,85,247,0.2)',
            filter: 'blur(25px)',
            top: '15%',
            left: '15%',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />

        {/* Additional small accent glows */}
        <motion.div 
          className="absolute w-[150px] h-[150px]"
          style={{
            background: 'radial-gradient(circle at center, rgba(99,102,241,0.4) 0%, rgba(168,85,247,0.2) 40%, rgba(0,0,0,0) 70%)',
            boxShadow: '0 0 30px 15px rgba(99,102,241,0.15)',
            filter: 'blur(20px)',
            bottom: '30%',
            right: '20%',
          }}
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, -180, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      {/* Subtle gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-white/10 dark:bg-gray-900/10 backdrop-blur-[1px] z-[2]" />

      {/* Content */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative mb-4 text-sm uppercase tracking-[4px] text-portfolio-primary dark:text-portfolio-accent z-10"
      >
        Welcome to my portfolio
      </motion.div>
      
      <motion.h1 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold mb-6 z-10"
      >
        <span>Hi, I'm </span>
        <span className="gradient-text">Prit Vekariya</span>
      </motion.h1>
      
      <motion.p 
        initial={{ y: -20, opacity: 0.8 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="text-xl md:text-2xl max-w-2xl mb-8 text-muted-foreground dark:text-gray-300 z-10"
      >
        An aspiring{' '}
        <span className="text-portfolio-primary dark:text-portfolio-accent font-medium">
          <TypeAnimation
            sequence={[
              'Flutter Developer',
              2000,
              'Python Developer',
              2000,
              'App Development',
              2000,
              'Full-Stack Development',
              2000,
            ]}
            wrapper="span"
            speed={25}
            repeat={Infinity}
            cursor={true}
          />
        </span>
        {' '}with a passion for building innovative and efficient software solutions.
      </motion.p>
      
      <motion.div
        initial={{ y: -20, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="z-10"
      >
        <Button variant="default" className="bg-portfolio-primary hover:bg-portfolio-secondary dark:bg-portfolio-accent dark:hover:bg-portfolio-accent/80" size="lg" asChild>
          <a href="#contact">
            Get in Touch
          </a>
        </Button>
        <Button variant="outline" size="lg" className="ml-4 dark:text-white dark:border-gray-700 dark:hover:bg-gray-800" asChild>
          <a 
            href="https://drive.google.com/file/d/1S_uVnqRy9VsowFIUL6_3TruCbhyHSULS/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={18} className="mr-2" />
            Resume
          </a>
        </Button>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="animate-bounce">
          <a href="#about" className="flex flex-col items-center text-sm text-muted-foreground dark:text-gray-400">
            <span>Scroll Down</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1">
              <path d="M12 5v14"/>
              <path d="m19 12-7 7-7-7"/>
            </svg>
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
