import React from 'react';
import SparklesIcon from './icons/SparklesIcon';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900 transition-opacity duration-1000">
      <div className="absolute inset-0 bg-grid-slate-800/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.15)_0%,rgba(12,18,34,0)_50%)]"></div>
      
      <div className="relative text-center p-8 animate-fade-in-up">
        <div className="absolute -top-16 -left-16 w-32 h-32">
          <SparklesIcon className="w-full h-full text-amber-300/20" />
        </div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48">
          <SparklesIcon className="w-full h-full text-violet-400/10" />
        </div>
        <h1 className="font-serif text-6xl md:text-8xl font-bold text-white tracking-wider drop-shadow-lg">
          Guia AstroBio
        </h1>
        <p className="text-amber-300 text-3xl md:text-4xl mt-2 mb-12 drop-shadow-md">
          2025
        </p>
        <button
          onClick={onStart}
          className="bg-amber-400 text-slate-900 font-bold text-lg py-3 px-10 rounded-full shadow-lg shadow-amber-400/20 transition-all duration-300 hover:bg-amber-300 hover:shadow-xl hover:shadow-amber-300/30 transform hover:scale-105"
        >
          Empezar el viaje
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;