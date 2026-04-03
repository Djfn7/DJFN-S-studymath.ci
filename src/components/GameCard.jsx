import React from 'react';
import { motion } from 'motion/react';

const GameCard = ({ game, onSelect }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 cursor-pointer group"
      onClick={() => onSelect(game)}
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm">PLAY NOW</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-zinc-100 font-semibold text-lg truncate">{game.title}</h3>
      </div>
    </motion.div>
  );
};

export default GameCard;
