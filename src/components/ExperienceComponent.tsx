import type { Experience } from '../model/types';

interface Props {
  experience: Experience;
}

export const ExperienceComponent = ({ experience }: Props) => {
  return (
    <div className="relative pl-5 mb-0.5 last:mb-0">
      {/* The Bullet Point Dot */}
      <span className="absolute left-1 top-[6px] w-1.5 h-1.5 rounded-full bg-[#4da6a6] shrink-0" />

      {/* Combined Title and Detail */}
      <p className="text-[12px] leading-relaxed text-slate-800 font-medium">
        <span className="font-bold text-slate-900">
          {experience.title}
        </span>{" "}
        <span className="text-slate-700">
          {experience.detail}
        </span>
      </p>
    </div>
  );
};