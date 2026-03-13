import {
  FaNetworkWired,
  FaServer,
  FaUserMd,
  FaFileInvoiceDollar,
  FaQuestion,
  FaCheck,
  FaHeart,
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
  const events = [...resumeData.timeline].reverse();

  return (
    <div className="bg-slate-200 min-h-screen py-10 print:py-0 print:bg-white flex flex-col items-center font-sans">
      <div className="
        w-full max-w-4xl bg-white shadow-2xl rounded-sm p-8 md:p-12
        print:shadow-none print:w-[8.5in] print:min-h-[11in] print:p-[0.5in]
      ">

        {/* Header - Scaled down for print */}
        <div className="text-center mb-16 print:mb-8">
          <h1 className="text-4xl print:text-2xl font-bold text-slate-950 tracking-tight uppercase">
            Career Timeline
          </h1>
          <div className="w-24 h-1.5 bg-[#4da6a6] mx-auto mt-4 print:mt-2" />
          <p className="mt-6 print:mt-3 text-slate-600 italic max-w-2xl mx-auto print:text-[11px] print:leading-tight">
            A journey through systems engineering, distributed computing, and 16 years of healthcare technology and architecture.
          </p>
        </div>

        {/* Timeline Container - Adjusted left margin for print */}
        <div className="relative border-l-4 border-slate-100 ml-4 md:ml-32 print:ml-24">
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
    <div className={`relative pl-10 ${isLast ? 'pb-0' : 'pb-16 print:pb-8'} break-inside-avoid`}>

      {/* The Dot/Icon Connector - Scaled circle sizes */}
      <div className={`absolute ${event.isFuture ? '-left-[40px] print:-left-[30px] -top-5 z-10' : '-left-[22px] top-0'}`}>
        <div className={`
          rounded-full flex items-center justify-center border-4 border-white shadow-md
          ${event.isFuture
            ? 'w-20 h-20 print:w-14 print:h-14 bg-amber-400 text-white'
            : 'w-10 h-10 print:w-8 print:h-8 bg-[#4da6a6] text-white'}
        `}>
          {/* Use specific sizing for the icon inside the circle for print */}
          {event.isFuture ? (
            <span className="print:hidden">{icons[event.iconType]}</span>
          ) : (
            <span className="print:text-xs">{icons[event.iconType]}</span>
          )}
          {event.isFuture && <FaQuestion className="hidden print:block text-xl" />}
        </div>
      </div>

      {/* Date Label - Forced into desktop side-car position for print */}
      <div className="hidden md:block print:block absolute -left-40 print:-left-36 top-1 w-32 print:w-28 text-right">
        <span className="text-sm print:text-[10px] font-bold text-[#4da6a6] tracking-tighter uppercase">
          {event.timeFrame}
        </span>
      </div>

      {/* Content Card - Scaled text sizes */}
      <div className={`group transition-all duration-300 hover:translate-x-1 ${event.isFuture ? 'pl-6 print:pl-4' : ''}`}>
        <span className="md:hidden print:hidden block text-xs font-bold text-[#4da6a6] mb-1">
          {event.timeFrame}
        </span>

        <h3 className={`font-bold text-slate-900 leading-tight ${event.isFuture ? 'text-3xl print:text-xl' : 'text-xl print:text-base'}`}>
          {event.title}
        </h3>

        <div className={`flex items-center gap-2 mt-1 mb-3 print:mb-1`}>
          <span className={`font-semibold text-slate-500 uppercase tracking-widest ${event.isFuture ? 'text-md print:text-xs' : 'text-sm print:text-[10px]'}`}>
            {event.subtitle}
          </span>
        </div>

        {/* Knowledge Pills - Smaller padding and text */}
        <div className="flex flex-wrap gap-2 print:gap-1 print:max-w-[450px]">
          {event.knowledgePoints.map((point, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-3 py-1 print:px-2 print:py-0 bg-slate-100 text-slate-700 text-[14px] print:text-[10px] font-bold rounded-full border border-slate-200"
            >
              {event.isFuture ?
                <FaHeart className="text-[#4da6a6] text-[9px] print:text-[7px]" /> :
                <FaCheck className="text-[#4da6a6] text-[9px] print:text-[7px]" />
              }
              {point}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
