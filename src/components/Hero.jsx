import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-slate-50">
      {/* Decorative background element */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-50/50 rounded-full blur-3xl -z-10"></div>

      <div className="section-padding grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
              IoT & Embedded Systems Engineer
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1]">
              Hello, I'm <span className="gradient-text">Jeffrin J</span>
            </h1>
            <div className="text-xl md:text-2xl text-slate-600 font-medium min-h-[3rem]">
              <Typewriter
                options={{
                  strings: ['Building Intelligent IoT & AI Systems for Real-World Problems'],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                  wrapperClassName: "typewriter-wrapper",
                  cursorClassName: "text-blue-600"
                }}
              />
            </div>
            <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
              I design and develop smart systems using IoT, Embedded Technologies, and AI to solve challenges in healthcare, safety, and automation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:scale-105 transition-all">
              View Projects
            </a>
            <a href="#" className="px-8 py-4 bg-white text-slate-800 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all">
              Download Resume
            </a>
            <a href="#contact" className="px-8 py-4 text-blue-600 font-semibold hover:underline underline-offset-8">
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden md:block"
        >
          {/* Abstract representation of IoT/Embedded/AI */}
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-3xl opacity-10 blur-2xl"></div>
            <div className="relative h-full w-full bg-white rounded-3xl border border-white p-8 shadow-2xl flex items-center justify-center">
              <div className="grid grid-cols-2 gap-8 opacity-40">
                <div className="p-6 bg-slate-50 rounded-2xl flex items-center justify-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl flex items-center justify-center">
                   <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
                  </div>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl flex items-center justify-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 20c4.321 0 8.117-2.726 9.571-6.571m-3.44-2.04l.054-.09A10.003 10.003 0 0112 4c-4.321 0-8.117 2.726-9.571 6.571m17.142 0A10.003 10.003 0 0112 20c-4.321 0-8.117-2.726-9.571-6.571" /></svg>
                  </div>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl flex items-center justify-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" /></svg>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-40 h-40 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-2xl rotate-45 flex items-center justify-center">
                       <svg className="w-10 h-10 text-white -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
