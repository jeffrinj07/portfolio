import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Medal, Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "1st Prize – Innovation Conclave",
      organization: "StartupTN",
      icon: <Trophy className="w-5 h-5 text-amber-500" />
    },
    {
      title: "1st Prize – Hackathon",
      organization: "Institutional Level",
      icon: <Medal className="w-5 h-5 text-blue-500" />
    },
    {
      title: "5th Rank – TechnoXian World Cup",
      organization: "International Robotics",
      icon: <Star className="w-5 h-5 text-purple-500" />
    },
    {
      title: "Jury Choice Award – Ignite 2.0",
      organization: "Engineering Prototype",
      icon: <Award className="w-5 h-5 text-emerald-500" />
    },
    {
      title: "Journal Publication",
      organization: "Academic Research",
      icon: <Award className="w-5 h-5 text-indigo-500" />
    }
  ];

  return (
    <section id="achievements" className="section-padding">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Achievements & Recognitions</h2>
        <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mt-4"></div>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-6 bg-slate-50`}>
              {item.icon}
            </div>
            <div>
              <h3 className="font-bold text-slate-800">{item.title}</h3>
              <p className="text-slate-500 text-sm uppercase tracking-wider mt-1">{item.organization}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
