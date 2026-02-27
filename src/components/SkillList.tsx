import { FaHammer, FaChevronRight } from 'react-icons/fa';
import type { SkillSet } from '../model/types';

interface Props {
  skillSet: SkillSet;
}

export const SkillList = ({ skillSet }: Props) => {
  return (
    <section className="flex flex-col gap-2">
      {/* Icon and Title */}
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-8 h-8 border-2 border-[#4da6a6] rounded-full flex items-center justify-center text-[#4da6a6] text-sm">
          <FaHammer />
        </div>
        <h2 className="text-xl font-bold text-slate-800 uppercase tracking-widest leading-none">
          Skills
        </h2>
      </div>

      <div className="flex flex-col gap-1">
        {skillSet.groups.map((group, index) => (
          <div key={index} className="flex flex-col gap-1.5">
            <div>
              {/* Pillbox with Icon Inside */}
              <span className="inline-flex items-center gap-1 bg-slate-400 text-white text-[10px] font-bold pl-1.5 pr-3 py-1 pb-0.5 rounded-sm tracking-tight">
                <FaChevronRight className="text-white/80" />
                {group.group}
              </span>
            </div>

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