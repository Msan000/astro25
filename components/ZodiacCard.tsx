
import React from 'react';
import { ZodiacSignData } from '../types';

interface ZodiacCardProps {
  sign: ZodiacSignData;
}

const ZodiacCard: React.FC<ZodiacCardProps> = ({ sign }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 transition-all duration-300 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-400/10 hover:-translate-y-1">
      <h4 className="text-2xl font-bold font-serif text-amber-300 mb-4 flex items-center">
        <span className="text-3xl mr-3">{sign.emoji}</span>
        {sign.name}
      </h4>
      <p className="text-slate-300 mb-4 leading-relaxed">{sign.description}</p>
      <div className="space-y-3 text-sm">
        <p><strong className="text-violet-300">Oportunidad:</strong> <span className="text-slate-400">{sign.opportunity}</span></p>
        <p><strong className="text-violet-300">Reto:</strong> <span className="text-slate-400">{sign.challenge}</span></p>
        <p className="pt-2"><strong className="text-amber-400 italic">Afirmación: "{sign.affirmation}"</strong></p>
      </div>
    </div>
  );
};

export default ZodiacCard;
