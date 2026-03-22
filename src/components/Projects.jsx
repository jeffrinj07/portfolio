import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "VoiceGuard AI",
    shortDesc: "AI-Based Respiratory Health Screening System",
    description: "VoiceGuard AI is an intelligent healthcare system designed to detect early signs of respiratory diseases using cough sound analysis. It captures sounds, processes them with signal processing techniques, and classifies them using ML models.",
    image: "https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&q=80&w=800",
    techs: ["Python", "Machine Learning", "Audio Signal Processing", "IoT Integration"],
    features: ["Real-time cough analysis", "AI-based prediction", "Scalable for mobile/IoT deployment"],
    impact: "Provides accessible and early detection of respiratory conditions, improving preventive healthcare."
  },
  {
    id: 2,
    title: "AI-Powered Beekeeping",
    shortDesc: "IoT Smart Monitoring System for Beehives",
    description: "An IoT-based smart monitoring system designed to improve beehive management using real-time data and AI-based sound analysis. Sensors collect temperature, weight, and sound data for monitoring hive health.",
    image: "https://images.unsplash.com/photo-1587334274328-64186a80aeee?auto=format&fit=crop&q=80&w=800",
    techs: ["ESP32 & CAM", "Firebase", "Power BI", "Sound Sensors", "HX711"],
    features: ["Real-time hive monitoring", "Sound anomaly detection", "Cloud-based data storage", "Dashboard visualization"],
    impact: "Improves productivity, reduces colony loss, and enables smart agriculture."
  },
  {
    id: 3,
    title: "Miner’s Guardian Robot",
    shortDesc: "Safety-focused robotic monitoring for mines",
    description: "A safety-focused robotic system designed to monitor hazardous conditions in mining environments. It detects gas, fire, and environmental conditions, sending real-time alerts to a control system.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    techs: ["Raspberry Pi", "Arduino", "Gas Sensor (MICS-5524)", "HC-12 / ESP8266"],
    features: ["Gas detection (CO, CH4, NH3)", "Fire detection", "Real-time alerts", "Wireless communication"],
    impact: "Enhances worker safety and prevents accidents in hazardous environments."
  },
  {
    id: 4,
    title: "EcoSense",
    shortDesc: "Smart Energy Management System",
    description: "A smart system designed to monitor and optimize energy usage in homes and institutions. It tracks consumption and automates control to reduce unnecessary usage.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
    techs: ["Microcontrollers", "IoT Sensors", "Embedded Systems"],
    features: ["Energy monitoring", "Automation control", "Efficient usage tracking"],
    impact: "Reduces energy wastage and promotes sustainability."
  },
  {
    id: 5,
    title: "Smart Exhibition System",
    shortDesc: "Interactive IoT-based exhibition exhibits",
    description: "An IoT-based system designed to make exhibitions interactive and engaging. User interactions trigger automated responses, making exhibits dynamic.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    techs: ["Sensors", "Microcontrollers", "Embedded Systems"],
    features: ["Interactive displays", "Automated control", "User engagement"],
    impact: "Enhances visitor experience in exhibitions."
  },
  {
    id: 6,
    title: "Event Planner App",
    shortDesc: "Frontend-based event management tool",
    description: "A frontend-based web application for efficient event planning and management. Provides a user-friendly interface to manage events, schedules, and planning tasks.",
    image: "https://images.unsplash.com/photo-1505373673406-3bb0ef230c7b?auto=format&fit=crop&q=80&w=800",
    techs: ["HTML", "CSS", "JavaScript"],
    features: ["Simple UI", "Event management", "Organized workflow"],
    impact: "Simplifies event planning and improves productivity."
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Selected Projects</h2>
        <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mt-4"></div>
        <p className="text-slate-500 mt-6 max-w-2xl mx-auto">
          Solving complex engineering problems through integrated IoT and AI solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`project-${project.id}`}
            whileHover={{ y: -10 }}
            className="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-medium flex items-center">
                  View Details <Maximize2 className="ml-2 w-4 h-4" />
                </span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-slate-500 text-sm line-clamp-2">{project.shortDesc}</p>
              <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between items-center">
                <div className="flex -space-x-1">
                  {/* Visual badges for tech stack count */}
                  <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded-full border border-blue-100">
                    {project.techs.length} Techs
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transition-colors" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full hover:bg-slate-200 z-10"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-full">
                  <img src={selectedProject.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="p-8 md:p-12 space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">{selectedProject.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{selectedProject.description}</p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-blue-600">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techs.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-slate-50 text-slate-600 text-sm rounded-lg border border-slate-100">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-blue-600">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map(feature => (
                        <li key={feature} className="flex items-start text-slate-600 text-sm">
                          <div className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                     <h4 className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">Impact</h4>
                     <p className="text-blue-900 text-sm font-medium">{selectedProject.impact}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const ChevronRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
  </svg>
);

export default Projects;
