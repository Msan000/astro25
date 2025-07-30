import React, { useState } from 'react';
import { GuideData, Section } from '../types';
import CloseIcon from './icons/CloseIcon';

interface SidebarProps {
  guideData: GuideData;
  currentViewId: string;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ guideData, currentViewId, isOpen, onClose, onNavigate }) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    'introduccion': true,
    'panorama-anual': true,
    'preparacion': true,
    'ciclo-mensual': true,
    'cierre-de-ano': true,
  });

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };
  
  const NavLink: React.FC<{ section: Section, isSubLink?: boolean }> = ({ section, isSubLink = false }) => {
    const isActive = currentViewId === section.id;
    const linkClasses = `
      flex items-center w-full text-left p-3 rounded-md transition-all duration-200 group
      ${isSubLink ? 'pl-10 text-sm' : 'pl-4 text-base'}
      ${isActive 
        ? 'bg-amber-400/10 text-amber-300 font-semibold' 
        : 'text-slate-400 hover:bg-slate-700/50 hover:text-slate-200'
      }
    `;

    const handleClick = () => {
      onNavigate(section.id);
      onClose();
    };

    return (
      <button onClick={handleClick} className={linkClasses}>
        {section.icon && <section.icon className={`w-5 h-5 mr-3 transition-colors ${isActive ? 'text-amber-300' : 'text-slate-500 group-hover:text-slate-400'}`} />}
        <span>{section.title}</span>
      </button>
    );
  };
  
  return (
    <aside className={`fixed inset-y-0 left-0 z-40 w-80 h-screen bg-slate-900/80 backdrop-blur-lg border-r border-slate-800 flex-shrink-0 overflow-y-auto p-4 transition-transform duration-300 ease-in-out md:static md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="mb-8 flex justify-between items-center">
        <div className="text-left">
            <h1 className="font-serif text-3xl font-bold text-white">Guia AstroBio</h1>
            <p className="text-amber-400 text-lg">2025</p>
        </div>
        <button onClick={onClose} className="md:hidden p-2 text-slate-400 hover:text-white">
            <CloseIcon className="w-6 h-6" />
        </button>
      </div>
      <nav className="space-y-2">
        {guideData.mainSections.map((section) => (
          <div key={section.id}>
            {section.subSections ? (
              <>
                <button onClick={() => toggleSection(section.id)} className="flex items-center justify-between w-full text-left p-3 rounded-md text-slate-300 hover:bg-slate-700/50">
                   <div className="flex items-center">
                    {section.icon && <section.icon className="w-5 h-5 mr-3 text-slate-500" />}
                    <span className="font-semibold">{section.title}</span>
                   </div>
                   <svg
                    className={`w-5 h-5 transition-transform ${openSections[section.id] ? 'rotate-90' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                   >
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                   </svg>
                </button>
                {openSections[section.id] && (
                  <div className="mt-1 space-y-1">
                    {section.subSections.map(subSection => (
                      <NavLink key={subSection.id} section={subSection} isSubLink={true} />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <NavLink section={section} />
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;