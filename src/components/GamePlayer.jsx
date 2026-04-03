import { X, Maximize2, RotateCcw } from 'lucide-react';

export default function GamePlayer({ game, onClose }) {
  const reloadGame = () => {
    const iframe = document.getElementById('game-iframe');
    if (iframe) iframe.src = iframe.src;
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      <div className="bg-zinc-900 border-b border-zinc-800 p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onClose}
            className="p-2 hover:bg-zinc-800 rounded-full transition-colors text-zinc-400 hover:text-white"
          >
            <X size={24} />
          </button>
          <h2 className="text-xl font-bold text-white">{game.title}</h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={reloadGame}
            className="p-2 hover:bg-zinc-800 rounded-full transition-colors text-zinc-400 hover:text-white"
            title="Reload Game"
          >
            <RotateCcw size={20} />
          </button>
          <button
            onClick={() => document.getElementById('game-iframe')?.requestFullscreen()}
            className="p-2 hover:bg-zinc-800 rounded-full transition-colors text-zinc-400 hover:text-white"
            title="Fullscreen"
          >
            <Maximize2 size={20} />
          </button>
        </div>
      </div>
      <div className="flex-1 bg-zinc-950 relative">
        <iframe
          id="game-iframe"
          src={game.url}
          className="w-full h-full border-none"
          allow="autoplay; fullscreen; keyboard"
          title={game.title}
        />
      </div>
    </div>
  );
}
