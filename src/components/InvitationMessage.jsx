import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const InvitationMessage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section ref={containerRef} className="relative w-full py-32 bg-white-off text-olive-dark flex items-center justify-center px-4 overflow-hidden">
      {/* Aesthetic glassmorphism container */}
      <motion.div 
        style={{ y }}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl text-center z-10 bg-white/40 backdrop-blur-xl border border-white/50 p-12 md:p-20 rounded-[3rem] shadow-xl relative"
      >
        <motion.div variants={itemVariants} className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white-off rounded-full p-4 border border-olive-light/30 shadow-lg">
          <svg className="w-8 h-8 text-olive-light" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </motion.div>
        
        <motion.p variants={itemVariants} className="font-body text-xl md:text-2xl leading-relaxed font-light mb-8 pt-4">
          With hearts full of joy and gratitude to Allah,<br/>
          joyfully invite you to witness and celebrate<br/>
          the blessed union of our beloved
        </motion.p>

        <motion.h2 variants={itemVariants} className="font-display text-4xl md:text-5xl text-olive-light mb-8 py-6 border-y border-olive-light/20">
          Rizwana Binth Razi & Ajmal AR
        </motion.h2>

        <motion.p variants={itemVariants} className="font-body text-xl md:text-2xl leading-relaxed font-light">
          on this auspicious occasion of their Nikah.<br/>
          Your presence and prayers will make this moment truly complete.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default InvitationMessage;
