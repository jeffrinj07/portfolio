import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">Let's build the future <span className="gradient-text">together.</span></h2>
            <p className="text-slate-500 mt-6 text-lg">
              I am open to opportunities in IoT, Embedded Systems, and AI. If you have a question or just want to say hi, my inbox is always open.
            </p>
          </div>

          <div className="space-y-4">
            <a href="mailto:jeffrin0707@gmail.com" className="flex items-center p-4 bg-slate-50 rounded-2xl border border-slate-100 group transition-all hover:bg-white hover:shadow-lg">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mr-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Me</p>
                <p className="text-slate-800 font-medium">jeffrin0707@gmail.com</p>
              </div>
            </a>

            <a href="https://github.com/jeffrinj07" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-slate-50 rounded-2xl border border-slate-100 group transition-all hover:bg-white hover:shadow-lg">
              <div className="w-12 h-12 bg-slate-800 text-white rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-all">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">GitHub Profile</p>
                <p className="text-slate-800 font-medium font-mono text-sm leading-none">github.com/jeffrinj07</p>
              </div>
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Your Name</label>
                <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Email Address</label>
                <input type="email" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Message</label>
              <textarea rows="4" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" placeholder="How can we collaborate?"></textarea>
            </div>
            <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-100 flex items-center justify-center group hover:bg-blue-700 transition-all">
              Send Message <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
