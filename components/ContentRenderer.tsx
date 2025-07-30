import React from 'react';
import { ContentItem } from '../types';
import ZodiacCard from './ZodiacCard';
import { zodiacSigns } from '../data/guideData';
import MandalaGraphic from './icons/MandalaGraphic';

interface ContentRendererProps {
  content: ContentItem[];
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ content }) => {
  return (
    <div className="space-y-6">
      {content.map((item, index) => {
        switch (item.type) {
          case 'heading':
            return <h3 key={index} id={item.text?.toLowerCase().replace(/\s+/g, '-')} className="font-serif text-3xl font-bold text-violet-300 pt-8 pb-2 border-b border-slate-700 scroll-mt-16">{item.text}</h3>;
          case 'subheading':
            return <h4 key={index} className="font-serif text-2xl font-semibold text-amber-300 mt-6">{item.text}</h4>;
          case 'paragraph':
            return <p key={index} className="text-slate-300 leading-relaxed text-lg">{item.text}</p>;
          case 'list':
            return (
              <ul key={index} className="list-disc list-inside space-y-2 pl-4 text-slate-300 text-lg">
                {(item.items as string[])?.map((li, i) => <li key={i} dangerouslySetInnerHTML={{ __html: li }}></li>)}
              </ul>
            );
          case 'event-list':
             return (
              <ul key={index} className="space-y-3 mt-4">
                {(item.items as { date: string; event: string }[])?.map((eventItem, i) => (
                  <li key={i} className="flex items-center gap-4 p-3 bg-slate-800/40 rounded-lg border border-slate-700/50">
                     <span className="font-semibold text-amber-400 w-32 text-right">{eventItem.date}</span>
                     <span className="text-slate-300">{eventItem.event}</span>
                  </li>
                ))}
              </ul>
            );
          case 'ritual':
            return (
                <div key={index} className="mt-6 p-6 border-l-4 border-amber-400 bg-slate-800/70 rounded-r-lg">
                    <h5 className="font-serif text-xl font-bold text-amber-400 mb-2">{item.title}</h5>
                    <div className="text-slate-300 space-y-3" dangerouslySetInnerHTML={{ __html: item.text?.replace(/\n/g, '<br />') ?? '' }} />
                </div>
            );
          case 'mandala':
            return (
                <div key={index} className="mt-8 text-center p-6 bg-slate-800/70 rounded-lg border border-slate-700/50">
                    <h5 className="font-serif text-xl font-bold text-amber-400 mb-2">{item.title}</h5>
                    <p className="text-slate-400 italic mb-6 max-w-md mx-auto">{item.text}</p>
                    <MandalaGraphic />
                    <p className="text-slate-500 mt-4 text-sm">Espacio para colorear o imprimir.</p>
                </div>
            );
          case 'quote':
            return <blockquote key={index} className="font-serif text-2xl italic text-center text-amber-200 py-8 px-4 border-y-2 border-slate-700/50 my-8">"{item.text}"</blockquote>;
          case 'zodiac-grid':
            return (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {zodiacSigns.map(sign => <ZodiacCard key={sign.name} sign={sign} />)}
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ContentRenderer;