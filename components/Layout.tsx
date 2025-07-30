import React, { useState, useEffect, useRef } from 'react';
import { GuideData, Section as SectionType } from '../types';
import Sidebar from './Sidebar';
import ContentRenderer from './ContentRenderer';
import JournalInput from './JournalInput';
import MenuIcon from './icons/MenuIcon';

interface LayoutProps {
  guideData: GuideData;
  currentViewId: string;
  onNavigate: (id: string) => void;
}

const findSection = (guideData: GuideData, id: string): SectionType | null => {
    for (const main of guideData.mainSections) {
        if (main.id === id) return main;
        if (main.subSections) {
            const sub = main.subSections.find(s => s.id === id);
            if (sub) return sub;
        }
    }
    return guideData.mainSections[0] || null; // Fallback to the first section
}

const Layout: React.FC<LayoutProps> = ({ guideData, currentViewId, onNavigate }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const mainContentRef = useRef<HTMLDivElement>(null);

  const activeSectionData = findSection(guideData, currentViewId);

  useEffect(() => {
    // Scroll to top when the view changes
    mainContentRef.current?.scrollTo(0, 0);
  }, [currentViewId]);

  return (
    <div className="bg-slate-900/50 text-slate-300 flex max-h-screen">
      {isSidebarOpen && (
        <div 
            className="fixed inset-0 bg-black/60 z-30 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
        />
      )}
      <Sidebar 
        guideData={guideData} 
        currentViewId={currentViewId}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onNavigate={onNavigate}
      />
      <main ref={mainContentRef} className="flex-1 h-screen overflow-y-auto">
        <button 
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden fixed top-4 left-4 z-20 p-2 rounded-full bg-slate-800/70 backdrop-blur-sm text-white shadow-lg"
            aria-label="Abrir menú"
        >
            <MenuIcon className="w-6 h-6" />
        </button>
        {activeSectionData && (
             <section id={activeSectionData.id} className="py-16 px-4 sm:px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 flex items-center gap-4">
                        {activeSectionData.icon && <activeSectionData.icon className="w-8 h-8 md:w-10 md:h-10 text-amber-300" />}
                        {activeSectionData.title}
                    </h2>
                    <ContentRenderer content={activeSectionData.content} />
                    <JournalInput sectionId={activeSectionData.id} />
                </div>
            </section>
        )}
      </main>
    </div>
  );
};

export default Layout;