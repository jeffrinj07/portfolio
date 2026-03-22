import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Layers, PenTool, Database } from 'lucide-react';

const Skills = () => {
  const skillGroups = [
    {
      title: "Programming",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["C", "Java"]
    },
    {
      title: "IoT & Embedded",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["Arduino", "ESP32", "Raspberry Pi", "Sensors", "Robotics"]
    },
    {
      title: "Web Technologies",
      icon: <Layers className="w-6 h-6" />,
      skills: ["HTML", "JavaScript", "React.js", "Tailwind CSS"]
    },
    {
      title: "Tools & Analytics",
      icon: <Database className="w-6 h-6" />,
      skills: ["Power BI", "Canva", "MS Office"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-slate-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Technical Proficiency</h2>
        <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mt-4"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md"
          >
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              {group.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-4">{group.title}</h3>
            <ul className="space-y-3">
              {group.skills.map((skill) => (
                <li key={skill} className="flex items-center text-slate-600 text-sm">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
