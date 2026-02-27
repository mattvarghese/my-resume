import type { Person } from '../model/types';

interface Props {
  person: Person;
}

export const PersonSummary = ({ person }: Props) => {
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="relative flex bg-slate-100 rounded-l-sm overflow-hidden h-48">
      {/* Date in top right - shrunk to 9px for a true "metadata" look */}
      <div className="absolute top-2 right-4 text-[9px] text-slate-600 font-mono italic tracking-tighter uppercase opacity-70">
        {today}
      </div>

      {/* Dark Accent Bar - width reduced slightly to match the sleeker look */}
      <div className="w-1.5 bg-[#2c3e50] shrink-0" />

      <div className="p-5 py-4">
        {/* Name: Shrunk from text-4xl to 3xl */}
        <h1 className="text-3xl font-bold text-slate-950 tracking-tight leading-none font-sans">
          {person.name}
        </h1>

        {/* Title: Shrunk from text-lg to text-base */}
        <h2 className="text-base font-semibold text-[#4da6a6] mt-2 mb-1 font-sans tracking-[0.15em]">
          {person.title}
        </h2>

        {/* Summary: text-sm remains the standard, but we'll use text-[13px] for extra precision */}
        <p className="text-[12px] leading-tight text-slate-800 max-w-[98%] font-medium">
          {person.summary}
        </p>
      </div>
    </div>
  );
};