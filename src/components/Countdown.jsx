import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Countdown = () => {
  const targetDate = new Date('2026-08-09T00:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center bg-olive-dark/50 backdrop-blur-md border border-olive-light/50 rounded-full shadow-[0_0_20px_rgba(183,110,121,0.2)]"
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 20, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute font-display text-3xl md:text-5xl text-white-pearl"
          >
            {value.toString().padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
      </motion.div>
      <span className="mt-4 text-sm md:text-base font-body tracking-widest uppercase text-olive-light">{label}</span>
    </div>
  );

  return (
    <section className="py-32 bg-black-midnight flex flex-col items-center justify-center px-4 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-olive-light/10 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="font-display text-4xl md:text-5xl text-olive-light mb-4">Until They Say "I Do"</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-olive-light to-transparent mx-auto rounded-full"></div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-6 md:gap-12 max-w-4xl w-full relative z-10"
      >
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </motion.div>
    </section>
  );
};

export default Countdown;
