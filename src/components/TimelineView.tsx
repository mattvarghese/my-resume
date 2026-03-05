import {
  FaNetworkWired,
  FaServer,
  FaUserMd,
  FaFileInvoiceDollar,
  FaQuestion,
  FaChevronRight
} from 'react-icons/fa';
import { resumeData } from '../model/data';
import type { TimelineEvent } from '../model/types';

const IconMap = (isFuture: boolean) => ({
  systems: <FaNetworkWired />,
  distributed: <FaServer />,
  clinical: <FaUserMd />,
  insurance: <FaFileInvoiceDollar />,
  future: <FaQuestion size={isFuture ? 32 : 16} />,
});

export const TimelineView = () => {
  const events = [...resumeData.timeline].reverse(); // Presentation: Future at top, History at bottom

  return (
    <div className="bg-slate-200 min-h-screen py-10 px-4 flex flex-col items-center font-sans">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-sm p-8 md:p-12">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-950 tracking-tight uppercase">
            Career Timeline
          </h1>
          <div className="w-24 h-1.5 bg-[#4da6a6] mx-auto mt-4" />
          <p className="mt-6 text-slate-600 italic max-w-2xl mx-auto">
            A journey through systems engineering, distributed computing, and 16 years of healthcare technology and architecture.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-4 border-slate-100 ml-4 md:ml-32">
          {events.map((event, index) => (
            <TimelineItem
              key={event.id}
              event={event}
              isLast={index === events.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({ event, isLast }: { event: TimelineEvent, isLast: boolean }) => {
  const icons = IconMap(!!event.isFuture);

  return (
    <div className={`relative pl-10 ${isLast ? 'pb-0' : 'pb-16'}`}>

      {/* The Dot/Icon Connector */}
      {/* Increased padding for the future case by adjusting top and left offsets */}
      <div className={`absolute ${event.isFuture ? '-left-[40px] -top-5 z-10' : '-left-[22px] top-0'}`}>
        <div className={`
          rounded-full flex items-center justify-center border-4 border-white shadow-md
          ${event.isFuture
            ? 'w-20 h-20 bg-amber-400 text-white'
            : 'w-10 h-10 bg-[#4da6a6] text-white'}
        `}>
          {icons[event.iconType]}
        </div>
      </div>

      {/* Date Label (Desktop Side-car) */}
      <div className="hidden md:block absolute -left-44 top-2 w-32 text-right">
        <span className="text-sm font-bold text-[#4da6a6] tracking-tighter uppercase">
          {event.timeFrame}
        </span>
      </div>

      {/* Content Card */}
      {/* Added extra left padding (pl-14) specifically for the future case to clear the larger icon */}
      <div className={`group transition-all duration-300 hover:translate-x-1 ${event.isFuture ? 'pl-6' : ''}`}>
        <span className="md:hidden block text-xs font-bold text-[#4da6a6] mb-1">
          {event.timeFrame}
        </span>

        {/* Increased text size for the first two lines in the future case */}
        <h3 className={`font-bold text-slate-900 leading-tight ${event.isFuture ? 'text-3xl' : 'text-xl'}`}>
          {event.title}
        </h3>

        <div className={`flex items-center gap-2 mt-1 mb-3`}>
          <span className={`font-semibold text-slate-500 uppercase tracking-widest ${event.isFuture ? 'text-md' : 'text-sm'}`}>
            {event.subtitle}
          </span>
        </div>

        {/* Knowledge Pills */}
        <div className="flex flex-wrap gap-2">
          {event.knowledgePoints.map((point, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 text-[14px] font-bold rounded-full border border-slate-200"
            >
              <FaChevronRight className="text-[#4da6a6] text-[9px] font-sans" />
              {point}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};