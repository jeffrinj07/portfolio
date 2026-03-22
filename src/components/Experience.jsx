import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Professional Experience</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mt-4"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative pl-8 border-l-2 border-slate-200 py-4"
        >
          <div className="absolute -left-[11px] top-6 w-5 h-5 bg-blue-600 rounded-full border-4 border-white"></div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Internship</h3>
                <p className="text-blue-600 font-medium">Entudio Pvt Ltd</p>
              </div>
              <div className="flex items-center text-slate-400 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                <span>2024 - Present</span>
              </div>
            </div>
            
            <p className="text-slate-600 leading-relaxed mb-6">
              Worked on IoT systems, sensor integration, and real-time monitoring solutions. Gained hands-on experience in prototyping industrial-grade embedded systems.
            </p>

            <div className="flex flex-wrap gap-2">
               <span className="px-3 py-1 bg-slate-50 text-slate-500 text-xs rounded-full border border-slate-100">IoT Systems</span>
               <span className="px-3 py-1 bg-slate-50 text-slate-500 text-xs rounded-full border border-slate-100">Sensors</span>
               <span className="px-3 py-1 bg-slate-50 text-slate-500 text-xs rounded-full border border-slate-100">Real-time Monitoring</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
