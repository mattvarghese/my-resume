import { FaBriefcase } from 'react-icons/fa';
import type { Employment } from '../model/types';
import { EmploymentComponent } from './EmploymentComponent';

interface Props {
  jobs: Employment[];
}

export const WorkExperience = ({ jobs }: Props) => {
  return (
    <section className="flex flex-col gap-4 p-6 pl-6">
      {/* Section Header - Matches SkillList style for consistency */}
      <div className="flex items-center gap-3 pb-0">
        <div className="flex-shrink-0 w-8 h-8 border-2 border-[#4da6a6] rounded-full flex items-center justify-center text-[#4da6a6] text-sm">
          <FaBriefcase />
        </div>
        <h2 className="text-xl font-bold text-slate-800 uppercase tracking-widest leading-none">
          Work Experience
        </h2>
      </div>

      {/* List of Jobs */}
      <div className="flex flex-col">
        {jobs.map((job, index) => (
          <EmploymentComponent key={index} employment={job} />
        ))}
      </div>
    </section>
  );
};