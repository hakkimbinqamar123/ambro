import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import photo1 from '../assets/images/couple-photo-1.png';
import photo2 from '../assets/images/couple-photo-2.png';
import photo3 from '../assets/images/couple-photo-3.png';

const PhotoGallery = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={containerRef} className="py-32 bg-black-midnight relative text-white-pure px-4 md:px-12 overflow-hidden">
      {/* Vibrant Background Ornaments */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-olive-dark/60 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-olive-light/20 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl text-olive-light mb-6">A Love Blessed by Allah ﷻ</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-olive-light to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Main Photo with Parallax */}
          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden group rounded-xl border border-olive-light/20 hover:border-olive-light/80 transition-colors duration-500 md:col-span-2 md:row-span-2 shadow-2xl"
          >
            <div className="absolute inset-0 bg-olive-light/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none mix-blend-overlay"></div>
            <img src={photo1} alt="Couple Photo 1" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out" />
          </motion.div>

          {/* Secondary Photos with different Parallax speeds */}
          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden group rounded-xl border border-olive-light/20 hover:border-olive-light/80 transition-colors duration-500 md:col-span-1 md:row-span-1 shadow-xl"
          >
            <div className="absolute inset-0 bg-olive-light/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none mix-blend-overlay"></div>
            <img src={photo2} alt="Couple Photo 2" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out" />
          </motion.div>

          <motion.div
            style={{ y: y3 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative overflow-hidden group rounded-xl border border-olive-light/20 hover:border-olive-light/80 transition-colors duration-500 md:col-span-1 md:row-span-1 shadow-xl"
          >
            <div className="absolute inset-0 bg-olive-light/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none mix-blend-overlay"></div>
            <img src={photo3} alt="Couple Photo 3" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
