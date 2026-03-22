import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Code2, 
  Layers, 
  Github, 
  Mail, 
  ExternalLink, 
  Award, 
  Briefcase, 
  ChevronRight,
  Terminal,
  Database,
  Smartphone,
  Zap,
  Maximize2,
  X
} from 'lucide-react';
import Typewriter from 'typewriter-effect';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <div className="bg-slate-50">
          <Experience />
          <Achievements />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
