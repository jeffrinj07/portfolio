import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-slate-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Jeffrin J. Built with <span className="text-blue-500 font-bold">React</span> & <span className="text-indigo-500 font-bold tracking-tight italic">Tailwind</span>.
        </div>
        
        <div className="flex space-x-6 text-slate-400 text-sm font-medium">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
