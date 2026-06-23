import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Calendar, Clock } from 'lucide-react';

const EventDetails = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const scale1 = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const events = [
    {
      title: "Nikkah",
      date: "August 9, 2026 (Sunday)",
      time: "11:30 AM to 12:00 PM",
      venue: "T.A Convention Centre",
      address: "Kayamkulam",
      direction: -50,
      scale: scale1
    },
    {
      title: "Reception",
      date: "August 8, 2026 (Saturday)",
      time: "From 3:00 PM",
      venue: "T.A Convention Centre",
      address: "Kayamkulam",
      direction: 50,
      scale: scale2
    }
  ];

  return (
    <section ref={containerRef} className="py-32 bg-olive-dark relative overflow-hidden">
      {/* Background Ornament */}
      <div className="absolute inset-0 opacity-5 flex items-center justify-center pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-[800px] h-[800px] text-olive-light fill-current animate-spin-slow">
          <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              style={{ scale: event.scale }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-xl p-8 md:p-12 border border-white/10 rounded-[2rem] relative group hover:border-olive-light/50 hover:bg-white/10 transition-all duration-500 shadow-2xl"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-olive-dark border border-olive-light/50 rounded-full p-3 shadow-lg">
                <Calendar className="w-6 h-6 text-olive-light" />
              </div>
              
              <h3 className="text-3xl font-display text-olive-light text-center mt-6 mb-8">{event.title}</h3>
              
              <div className="space-y-6 font-body text-white-pure/90 text-lg">
                <div className="flex items-center gap-4">
                  <Calendar className="w-6 h-6 text-olive-light flex-shrink-0" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-olive-light flex-shrink-0" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-olive-light flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white-pearl">{event.venue}</p>
                    <p className="text-sm opacity-80 mt-1">{event.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
