import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center p-12">
             <div className="text-slate-300">
               <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
             </div>
          </div>
          <div className="absolute -bottom-6 -right-6 p-6 bg-blue-600 text-white rounded-2xl shadow-xl hidden md:block">
            <p className="text-2xl font-bold">4+</p>
            <p className="text-sm opacity-80 uppercase tracking-wider">Major Projects</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-slate-900">About Me</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
          
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Jeffrin J is an aspiring Electronics and Communication Engineer with a strong foundation in C and Java, and a deep interest in IoT, Embedded Systems, and AI-driven solutions.
            </p>
            <p>
              He specializes in designing real-time systems using sensors, microcontrollers, and data-driven approaches to solve real-world problems. His work focuses on areas such as healthcare monitoring, industrial safety, and smart automation.
            </p>
            <p>
              With hands-on experience in building intelligent systems, he is passionate about transforming ideas into scalable and impactful engineering solutions.
            </p>
          </div>

          <div className="pt-4 grid grid-cols-2 gap-4">
            <div className="p-4 border border-slate-100 rounded-xl">
              <p className="text-slate-400 text-sm mb-1 uppercase tracking-tighter">Location</p>
              <p className="font-semibold text-slate-800">Tamil Nadu, India</p>
            </div>
            <div className="p-4 border border-slate-100 rounded-xl">
              <p className="text-slate-400 text-sm mb-1 uppercase tracking-tighter">Availability</p>
              <p className="font-semibold text-slate-800">Open to Roles</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
