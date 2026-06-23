import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black-midnight text-white-pure pt-20 pb-10 border-t border-olive-light/20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-lg h-1 bg-gradient-to-r from-transparent via-olive-light/50 to-transparent"></div>
      
      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl md:text-4xl text-olive-light mb-8"
        >
          Send Your Duas & Wishes
        </motion.h3>
        
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 flex flex-col gap-6 max-w-md mx-auto" 
          onSubmit={(e) => e.preventDefault()}
        >
          <input 
            type="text" 
            placeholder="Your Name" 
            className="bg-white/5 backdrop-blur-sm border-b border-olive-light/40 px-4 py-3 text-white-pearl focus:outline-none focus:border-olive-light focus:bg-white/10 transition-all rounded-t-md"
          />
          <textarea 
            placeholder="Your Message..." 
            rows="3"
            className="bg-white/5 backdrop-blur-sm border-b border-olive-light/40 px-4 py-3 text-white-pearl focus:outline-none focus:border-olive-light focus:bg-white/10 transition-all resize-none rounded-t-md"
          ></textarea>
          <button className="mt-4 bg-olive-light/10 text-olive-light border border-olive-light py-3 rounded-md hover:bg-olive-light hover:text-black-midnight transition-all duration-500 font-display text-xl tracking-wide">
            Send Wishes
          </button>
        </motion.form>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <svg className="w-8 h-8 text-olive-light animate-pulse" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <p className="font-body text-sm md:text-base tracking-widest uppercase opacity-80">
            With Love & Prayers
            <br />
            <span className="font-display text-olive-light text-2xl md:text-3xl mt-4 block">Hakki</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
