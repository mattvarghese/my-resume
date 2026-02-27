import { FaLightbulb } from 'react-icons/fa';
import type { SkillSet } from '../types';

interface Props {
  skillSet: SkillSet;
}

export const SkillList = ({ skillSet }: Props) => {
  return (
    <section className="flex flex-col gap-2">
      {/* Title with Icon */}
      <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-10 h-10 border-2 border-[#4da6a6] rounded-full flex items-center justify-center text-[#4da6a6] text-lg">
            <FaLightbulb />
          </div>
        <h2 className="text-xl font-bold text-slate-800 uppercase tracking-widest leading-none">
          Skills
        </h2>
      </div>

      {/* Skill Groups */}
      <div className="flex flex-col gap-1">
        {skillSet.groups.map((group, index) => (
          <div key={index} className="flex flex-col gap-1">
            {/* Group Label (Pillbox) */}
            <div>
              <span className="inline-block bg-slate-400 text-white text-[10px] font-bold px-3 py-1 rounded-sm  tracking-tight">
                {group.group}
              </span>
            </div>

            {/* Individual Skills */}
            <ul className="flex flex-wrap gap-x-3 gap-y-0.5 px-2 list-none">
              {group.skills.map((skill, sIndex) => (
                <li key={sIndex} className="flex items-center gap-1.5 text-slate-700 text-xs font-medium whitespace-nowrap">
                  <span className="w-1 h-1 rounded-full bg-[#4da6a6] shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};