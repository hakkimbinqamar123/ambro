import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? '💍' : '❤️';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(Boolean);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.4 }}
      className="flex flex-col items-center relative z-10 w-full max-w-md"
    >
      <h3 className="font-display text-3xl md:text-4xl text-olive-dark mb-2">While you wait...</h3>
      <p className="font-body text-olive-dark/70 mb-8 tracking-widest uppercase text-sm">Play a quick game!</p>
      
      <div className="bg-white-pure p-6 md:p-8 rounded-3xl shadow-[0_10px_40px_rgba(59,77,46,0.1)] border border-olive-light/30 w-full">
        <div className="grid grid-cols-3 gap-3 mb-6">
          {board.map((cell, i) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={i}
              onClick={() => handleClick(i)}
              className="aspect-square bg-white-off rounded-2xl text-4xl md:text-5xl flex items-center justify-center hover:bg-olive-light/10 transition-colors shadow-inner border border-olive-light/10"
            >
              {cell && (
                <motion.span
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                >
                  {cell}
                </motion.span>
              )}
            </motion.button>
          ))}
        </div>
        <div className="text-center">
          <div className="h-12 mb-4 flex items-center justify-center">
            {winner ? (
              <motion.p initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="font-display text-3xl text-olive-dark font-bold">{winner} Wins!</motion.p>
            ) : isDraw ? (
              <motion.p initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="font-display text-3xl text-olive-dark">It's a Tie!</motion.p>
            ) : (
              <p className="font-body text-olive-dark/80 text-lg uppercase tracking-widest">Next turn: <span className="text-2xl ml-2">{isXNext ? '💍' : '❤️'}</span></p>
            )}
          </div>
          <button 
            onClick={resetGame} 
            className="px-8 py-3 bg-olive-light text-white-pure rounded-full hover:bg-olive-dark transition-colors font-body tracking-widest uppercase text-sm shadow-md"
          >
            Restart Game
          </button>
        </div>
      </div>
    </motion.div>
  );
};

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
        className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center bg-white-pure border border-olive-light/30 rounded-full shadow-[0_5px_15px_rgba(59,77,46,0.1)]"
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 20, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute font-display text-3xl md:text-5xl text-olive-dark font-bold"
          >
            {value.toString().padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
      </motion.div>
      <span className="mt-4 text-sm md:text-base font-body tracking-widest uppercase text-olive-dark opacity-80">{label}</span>
    </div>
  );

  return (
    <section className="py-24 bg-white-off flex flex-col items-center justify-center px-4 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-olive-light/10 rounded-full filter blur-[80px]"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-olive-light/10 rounded-full filter blur-[100px]"></div>

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Column: Countdown */}
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-olive-dark mb-4">Until They Say "I Do"</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-olive-light to-transparent mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 md:gap-8 w-full"
          >
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
          </motion.div>
        </div>

        {/* Right Column: Mini Game */}
        <div className="flex justify-center w-full">
          <TicTacToe />
        </div>
        
      </div>
    </section>
  );
};

export default Countdown;
