import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';
import bgImage from '../assets/images/ambro.png';

const Particles = ({ count = 500 }) => {
  const mesh = useRef(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.2, 8, 8]} />
      {/* Light Olive color for particles */}
      <meshBasicMaterial color="#8DA37B" transparent opacity={0.6} />
    </instancedMesh>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, 50]);
  const yBg = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black-midnight flex flex-col items-center justify-center">
      
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={bgImage} 
          alt="Wedding Background" 
          className="w-full h-full object-cover object-top opacity-30" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-olive-dark via-transparent to-olive-dark opacity-60 mix-blend-multiply pointer-events-none"></div>
      </motion.div>

      {/* Colorful Ambient Glows using new theme */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-olive-dark rounded-full mix-blend-screen filter blur-[100px] opacity-80 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-olive-light rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white-off/10 rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>

      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ fov: 75, position: [0, 0, 30] }}>
          <Particles count={isMobile() ? 150 : 300} />
        </Canvas>
      </div>

      <motion.div 
        style={{ y: y1, opacity }}
        className="z-10 flex flex-col items-center justify-center text-center px-4 w-full h-full relative"
      >
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-olive-light text-3xl md:text-4xl font-arabic mb-8 drop-shadow-md"
        >
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-8xl font-display text-white-pearl tracking-wide mb-2 drop-shadow-lg">Rizwana Binth Razi</h1>
          <div className="text-4xl md:text-6xl font-display text-olive-light my-4">&amp;</div>
          <h1 className="text-5xl md:text-8xl font-display text-white-pearl tracking-wide drop-shadow-lg">Ajmal AR</h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="mt-8 text-lg md:text-xl font-body text-white-pure tracking-widest uppercase"
        >
          are joyfully united in the bond of Nikah
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-12 border border-olive-light/40 rounded-full px-8 py-3 bg-olive-dark/30 backdrop-blur-md shadow-[0_0_20px_rgba(183,110,121,0.2)]"
        >
          <span className="font-display text-2xl md:text-3xl text-olive-light tracking-wider">9th August 2026</span>
        </motion.div>
      </motion.div>
      
      <motion.div 
        style={{ y: y2, opacity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
      >
        <svg className="w-6 h-6 text-olive-light opacity-70" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
};

const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

export default Hero;
