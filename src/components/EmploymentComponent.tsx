import { FaShieldAlt } from 'react-icons/fa'; // Added building icon
import type { Employment } from '../model/types';
import { ExperienceComponent } from './ExperienceComponent';

interface Props {
  employment: Employment;
}

export const EmploymentComponent = ({ employment }: Props) => {
  // Check if we should de-emphasize this entry
  const isDeemphasized = employment.experiences.length === 0;

  return (
    <div className={`
      flex flex-col last:mb-0 experience-item 
      ${isDeemphasized ? 'ml-1 mt-2 mb-2' : 'mt-2 mb-4'} 
    `}>
      {/* Main Job Title: text-xl for standard, text-md for de-emphasized */}
      <h3 className={`font-bold text-slate-950 leading-none tracking-tight ${isDeemphasized ? 'text-md' : 'text-xl'
        }`}>
        {employment.title}
      </h3>

      {/* Company Name & Date Range */}
      <div className="flex justify-between items-baseline mt-1">
        <div className={`flex items-center gap-2 text-slate-900 ${isDeemphasized ? 'text-md font-medium mb-1' : 'text-lg font-semibold mb-1'
          }`}>
          <FaShieldAlt className="text-[#4da6a6] text-sm shrink-0" />
          <span>{employment.company}</span>
        </div>
        <span className="text-[11px] font-bold text-[#4da6a6] italic uppercase tracking-wider">
          {employment.timeFrame}
        </span>
      </div>

      {/* Summary: Scaled down slightly if de-emphasized */}
      {employment.summary && (
        <p className={`leading-relaxed text-slate-600 font-medium mb-2 ml-1 ${isDeemphasized ? 'text-[12px]' : 'text-[12px]'
          }`}>
          {employment.summary}
        </p>
      )}

      {/* Experience Sections: Only renders if they exist */}
      {!isDeemphasized && (
        <div className="flex flex-col gap-1.5">
          {employment.experiences.map((exp, index) => (
            <div key={index}>
              {exp.needPadding && (
                <div className="hidden print:block">
                  <div className="p-5" />
                  <div className="p-5" />
                </div>
              )}
              <ExperienceComponent experience={exp} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};