import { FaShieldAlt } from 'react-icons/fa'; // Added building icon
import type { Employment } from '../model/types';
import { ExperienceComponent } from './ExperienceComponent';

interface Props {
  employment: Employment;
}

export const EmploymentComponent = ({ employment }: Props) => {
  return (
    <div className="flex flex-col mb-4 last:mb-0 experience-item mt-2">
      {/* Main Job Title */}
      <h3 className="text-xl font-bold text-slate-950 leading-none tracking-tight">
        {employment.title}
      </h3>

      {/* Company Name & Date Range */}
      <div className="flex justify-between items-baseline mt-1 mb-1">
        <div className="flex items-center gap-2 text-lg font-semibold text-slate-900">
          <FaShieldAlt className="text-[#4da6a6] text-sm shrink-0" />
          <span>{employment.company}</span>
        </div>
        <span className="text-[11px] font-bold text-[#4da6a6] italic uppercase tracking-wider">
          {employment.timeFrame}
        </span>
      </div>

      {/* Summary: Removed border, reduced margin, added a slight indent */}
      {employment.summary && (
        <p className="text-[12px] leading-relaxed text-slate-600 font-medium mb-2 ml-1">
          {employment.summary}
        </p>
      )}

      {/* Experience Sections: Reduced gap to 1.5 for a tighter feel */}
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
    </div>
  );
};