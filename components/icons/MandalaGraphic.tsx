import React from 'react';
import { IconProps } from './IconProps';
import SparklesIcon from './SparklesIcon';

const MandalaGraphic: React.FC<IconProps> = ({ className }) => (
    <div className={`relative w-60 h-60 mx-auto flex items-center justify-center ${className}`}>
        {/* Animated outer rings */}
        <div className="absolute inset-0 border-2 border-amber-400/20 rounded-full animate-spin [animation-duration:25s]"></div>
        <div className="absolute inset-4 border border-violet-400/20 rounded-full animate-spin [animation-direction:reverse] [animation-duration:20s]"></div>
        <div className="absolute inset-8 border-2 border-amber-400/20 rounded-full animate-spin [animation-duration:15s]"></div>

        {/* Static central geometry */}
        <svg viewBox="0 0 100 100" className="w-full h-full absolute text-slate-500/80">
            {/* 8-point star */}
            <path d="M50 10 L58 42 L90 50 L58 58 L50 90 L42 58 L10 50 L42 42 Z" fill="currentColor" opacity="0.1" />
            <path d="M50 10 L58 42 L90 50 L58 58 L50 90 L42 58 L10 50 L42 42 Z" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(22.5 50 50)" opacity="0.2" />
            {/* Circles */}
            <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
            <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.2" />
        </svg>

        {/* Central icon */}
        <SparklesIcon className="w-16 h-16 text-amber-300/60 drop-shadow-[0_0_10px_rgba(252,211,77,0.5)]" />
    </div>
);

export default MandalaGraphic;