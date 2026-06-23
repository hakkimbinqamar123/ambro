import React from 'react';
import photo1 from '../assets/images/1.jpg';
import photo2 from '../assets/images/2.jpg';
import photo3 from '../assets/images/3.jpg';
import photo4 from '../assets/images/4.jpg';
import photo5 from '../assets/images/5.jpg';
import photo6 from '../assets/images/6.jpg';

const MemoriesStrip = () => {
  const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

  return (
    <section className="py-16 bg-olive-dark overflow-hidden border-y border-olive-light/20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-olive-dark via-transparent to-olive-dark z-20 pointer-events-none"></div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {photos.map((src, index) => (
            <div key={index} className="w-64 h-80 md:w-80 md:h-96 mx-4 flex-shrink-0 relative group rounded-2xl overflow-hidden border border-olive-light/30 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-black-midnight/80 via-transparent to-transparent z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-50"></div>
              <img 
                src={src} 
                alt={`Memory ${index}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
            </div>
          ))}
          {/* Duplicate for infinite loop */}
          {photos.map((src, index) => (
            <div key={`dup-${index}`} className="w-64 h-80 md:w-80 md:h-96 mx-4 flex-shrink-0 relative group rounded-2xl overflow-hidden border border-olive-light/30 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-black-midnight/80 via-transparent to-transparent z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-50"></div>
              <img 
                src={src} 
                alt={`Memory Duplicate ${index}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoriesStrip;
