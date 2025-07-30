
import React, { useState } from 'react';

interface JournalInputProps {
  sectionId: string;
}

const JournalInput: React.FC<JournalInputProps> = ({ sectionId }) => {
  const [note, setNote] = useState(() => localStorage.getItem(`journal_${sectionId}`) || '');

  const handleSave = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newNote = e.target.value;
    setNote(newNote);
    localStorage.setItem(`journal_${sectionId}`, newNote);
  };

  return (
    <div className="mt-12 p-6 bg-slate-900/50 rounded-lg border border-slate-700/50">
      <h4 className="font-serif text-2xl font-bold text-amber-300 mb-3">Mi Diario Personal</h4>
      <p className="text-slate-400 mb-4">Usa este espacio para tus reflexiones, intenciones y notas personales. Tus escritos se guardan en tu dispositivo.</p>
      <textarea
        value={note}
        onChange={handleSave}
        className="w-full h-36 bg-slate-800 border border-slate-600 rounded-md p-4 text-slate-200 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors duration-300"
        placeholder="Escribí tus reflexiones aquí..."
      />
    </div>
  );
};

export default JournalInput;
