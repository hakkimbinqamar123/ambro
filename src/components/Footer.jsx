import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const [blessings, setBlessings] = useState(0);
  const [hearts, setHearts] = useState([]);

  const handleSendBlessing = useCallback(() => {
    setBlessings((prev) => prev + 1);
    
    const newHeart = {
      id: Date.now(),
      x: Math.random() * 200 - 100, // Random X offset
    };
    
    setHearts((prev) => [...prev, newHeart]);

    // Remove heart after animation
    setTimeout(() => {
      setHearts((prev) => prev.filter(h => h.id !== newHeart.id));
    }, 2000);
  }, []);

  return (
    <footer className="bg-olive-dark text-white-pure pt-20 pb-10 border-t border-olive-light/20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-lg h-1 bg-gradient-to-r from-transparent via-olive-light/50 to-transparent"></div>
      
      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl md:text-4xl text-olive-light mb-4"
        >
          Shower Your Blessings
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-white-off opacity-80 mb-10"
        >
          Tap the button below to send your love and duas to the couple.
        </motion.p>
        
        <div className="mb-16 relative flex flex-col items-center justify-center min-h-[150px]">
          <AnimatePresence>
            {hearts.map((heart) => (
              <motion.div
                key={heart.id}
                initial={{ opacity: 1, y: 0, x: 0, scale: 0.5 }}
                animate={{ opacity: 0, y: -150, x: heart.x, scale: 1.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute text-olive-light pointer-events-none z-0"
              >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </motion.div>
            ))}
          </AnimatePresence>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSendBlessing}
            className="relative z-10 bg-olive-light/10 text-olive-light border border-olive-light px-8 py-4 rounded-full hover:bg-olive-light hover:text-olive-dark transition-all duration-300 font-display text-2xl tracking-wide shadow-[0_0_15px_rgba(141,163,123,0.3)]"
          >
            Send a Blessing ✨
          </motion.button>
          
          <motion.div 
            key={blessings}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-xl font-display text-white-pearl"
          >
            {blessings > 0 && (
              <p>You have sent <span className="text-olive-light font-bold text-2xl">{blessings}</span> {blessings === 1 ? 'blessing' : 'blessings'}!</p>
            )}
            {blessings >= 10 && (
              <p className="text-sm mt-2 font-body text-olive-light italic">"Thank you for showering us with so much love!"</p>
            )}
          </motion.div>
        </div>

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
            Your Love, Laughter, And Presence
            <br />
            Will Make Our Day Truly Special.
            <br />
            <span className="font-display text-olive-light text-2xl md:text-3xl mt-4 block">With Love, Rukzana Razi</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
