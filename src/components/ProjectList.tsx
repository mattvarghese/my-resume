import { FaRocket, FaPlus, FaCode } from 'react-icons/fa';
import type { Project } from '../model/types';

interface Props {
  projects: Project[];
}

export const ProjectList = ({ projects }: Props) => {
  return (
    <section className="flex flex-col gap-2">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-8 h-8 border-2 border-[#4da6a6] rounded-full flex items-center justify-center text-[#4da6a6] text-sm">
          <FaRocket />
        </div>
        <h2 className="text-xl font-bold text-slate-800 uppercase tracking-widest leading-none">
          Projects
        </h2>
      </div>

      <div className="flex flex-col gap-2">
        {projects.map((project, index) => (
          /* The project-item class handles the top-padding on new pages */
          <div key={index} className="flex flex-col">

            {/* This is a hack to prevent splitting insdie a project when printing
              * First DIV fills up the gap onn previous page. 
              * Second DIV add padding in next page */
              project.needPadding &&
              <div className="hidden print:block">
                <div className="p-6" />
                <div className="p-3" />
              </div>}

            {/* Project Title with Icon */}
            <div className="flex items-center gap-2 mb-1">
              <div className="flex-shrink-0 w-5 h-5 border-[1px] border-slate-300 rounded-full flex items-center justify-center text-slate-900 text-[10px]">
                <FaPlus />
              </div>
              <h3 className="text-sm font-bold text-slate-800 leading-tight">
                {project.title}
              </h3>
            </div>

            {/* Timeframe */}
            <div className="flex justify-end -mt-1.5">
              <span className="text-[10px] font-semibold text-[#4da6a6] italic uppercase tracking-wider">
                {project.timeFrame}
              </span>
            </div>

            {/* Description and URL logic remains same... */}
            {project.description.length > 0 && (
              <ul className="flex flex-col gap-1 px-1">
                {project.description.map((point, pIndex) => (
                  <li key={pIndex} className="text-[11px] leading-tight text-slate-700 font-medium">
                    {point}
                  </li>
                ))}
              </ul>
            )}

            {project.url && (
              <a
                href={project.url.startsWith('http') ? project.url : `https://${project.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 pl-1.5 flex items-center gap-1.5 text-[10px] text-slate-500 hover:text-[#4da6a6] transition-colors truncate cursor-pointer group"
              >
                <FaCode className="shrink-0 size-2 group-hover:text-[#4da6a6]" />
                <span className="underline decoration-slate-300 underline-offset-2 truncate group-hover:decoration-[#4da6a6]">
                  {project.url.replace(/^https?:\/\//, '')}
                </span>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};