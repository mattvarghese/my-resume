import { FaShieldAlt } from 'react-icons/fa'; // Added building icon
import type { Employment } from '../model/types';
import { ExperienceComponent } from './ExperienceComponent';

interface Props {
  employment: Employment;
}

export const EmploymentComponent = ({ employment }: Props) => {
  return (
    <div className="flex flex-col mb-4 last:mb-0 experience-item">
      {/* Main Job Title */}
      <h3 className="text-xl font-bold text-slate-950 leading-none">
        {employment.title}
      </h3>

      {/* Company Name & Date Range - Now with Icon */}
      <div className="flex justify-between items-baseline mt-1 mb-1">
        <div className="flex items-center gap-2 text-lg font-semibold text-slate-900">
          <FaShieldAlt className="text-[#4da6a6] text-sm shrink-0" /> {/* Professional Icon */}
          <span>{employment.company}</span>
        </div>
        <span className="text-[11px] font-semibold text-[#4da6a6] italic uppercase tracking-wider">
          {employment.timeFrame}
        </span>
      </div>

      {/* Experience Sections */}
      <div className="flex flex-col gap-1.5">
        {employment.experiences.map((exp, index) => (
          <div key={index}>
            {/* Print-only spacer hack */}
            {exp.needPadding &&
              <div className="hidden print:block">
                <div className="p-6" />
                <div className="p-3" />
              </div>}
            <ExperienceComponent experience={exp} />
          </div>
        ))}
      </div>
    </div>
  );
};