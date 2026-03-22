import React from 'react';
import { FaRocket, FaFlask, FaCode } from 'react-icons/fa';
import type { Project } from '../model/types';

interface KeyProjectsProps {
    projects: Project[];
}

export const KeyProjects: React.FC<KeyProjectsProps> = ({ projects }) => {
    return (
        <section className="flex flex-col pl-6 pr-4 mb-2 mt-2">
            {/* Section Header */}
            <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 border-2 border-[#4da6a6] rounded-full flex items-center justify-center text-[#4da6a6] text-sm">
                    <FaRocket />
                </div>
                <h2 className="text-xl font-bold text-slate-800 uppercase tracking-widest leading-none">
                    Key Projects
                </h2>
            </div>

            <div className="flex flex-col gap-2 mt-4">
                {projects.map((project, index) => (
                    <div key={index} className="flex items-start ml-1 gap-2">
                        {/* Compact Icon matching IndustryOutreach style */}
                        <div className="mt-1.5 flex-shrink-0">
                            <FaFlask className="text-[#4da6a6] text-[10px]" />
                        </div>

                        <div className="flex flex-col w-full">
                            {/* Header Row: Title and Timeframe */}
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-[13.5px] font-bold text-slate-950">
                                    {project.title}
                                </h3>
                                <span className="text-[10px] font-bold text-[#4da6a6] italic uppercase tracking-wider">
                                    {project.timeFrame}
                                </span>
                            </div>

                            {/* URL - Compact and Inline-style */}
                            {project.url && (
                                <a
                                    href={project.url.startsWith('http') ? project.url : `https://${project.url}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-[11px] text-slate-500 hover:text-[#4da6a6] transition-colors mb-2"
                                >
                                    <FaCode className="size-2" />
                                    <span className="underline decoration-slate-300 underline-offset-2">
                                        {project.url.replace(/^https?:\/\//, '')}
                                    </span>
                                </a>
                            )}

                            {/* Description - Joined into a single paragraph flow to save vertical space */}
                            {project.description.length > 0 && (
                                <p className="text-[12px] leading-relaxed text-slate-700 font-medium mt-0.5">
                                    {project.description.join(' ')}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};