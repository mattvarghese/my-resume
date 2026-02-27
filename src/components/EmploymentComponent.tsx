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

      {/* Company Name & Date Range - Now on the same line */}
      <div className="flex justify-between items-baseline mt-0 mb-1">
        <div className="text-lg font-semibold text-slate-900">
          {employment.company}
        </div>
        <span className="text-[11px] font-semibold text-[#4da6a6] italic uppercase tracking-wider">
          {employment.timeFrame}
        </span>
      </div>

      {/* Experience Sections */}
      <div className="flex flex-col gap-1.5">
        {employment.experiences.map((exp, index) => (
          <>
            {/* This is a hack to prevent splitting insdie a project when printing
              * First DIV fills up the gap onn previous page. 
              * Second DIV add padding in next page */
              exp.needPadding &&
              <div className="hidden print:block">
                <div className="p-6" />
                <div className="p-3" />
              </div>}
            <ExperienceComponent key={index} experience={exp} />
          </>
        ))}
      </div>
    </div>
  );
};