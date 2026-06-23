import React from 'react';
import { motion } from 'framer-motion';

const Blessings = () => {
  return (
    <section className="py-32 bg-white-off text-olive-dark px-4 flex justify-center text-center relative overflow-hidden">
      {/* Decorative SVG Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#8DA37B 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="max-w-4xl relative z-10"
      >
        <div className="text-3xl md:text-5xl font-arabic text-olive-light mb-10 leading-relaxed drop-shadow-sm">
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
        </div>
        <div className="w-24 h-px bg-olive-light/40 mx-auto mb-10"></div>
        <p className="font-body text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto opacity-90 leading-relaxed">
          "And among His signs is that He created for you mates from among yourselves..."
        </p>
        <p className="font-display mt-8 text-olive-light uppercase tracking-widest text-sm md:text-base">
          — Quran 30:21 —
        </p>
      </motion.div>
    </section>
  );
};

export default Blessings;
