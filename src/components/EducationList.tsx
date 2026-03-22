import React from 'react';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';
import type { Education } from '../model/types';

interface EducationProps {
    degrees: Education[];
}

export const EducationList: React.FC<EducationProps> = ({ degrees }) => {
    return (
        <section className="flex flex-col gap-4 mt-6 px-1">
            {/* Section Header - Matches Sidebar Styling */}
            <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 border-2 border-[#4da6a6] rounded-full flex items-center justify-center text-[#4da6a6] text-sm">
                    <FaGraduationCap />
                </div>
                <h2 className="text-xl font-bold text-slate-800 uppercase tracking-widest leading-none">
                    Education
                </h2>
            </div>

            <div className="flex flex-col gap-5">
                {degrees.map((edu, index) => (
                    <div key={index} className="flex flex-col">

                        {/* Title Line with University Icon */}
                        <div className="flex items-center gap-2 mb-1">
                            <div className="flex-shrink-0 w-8 h-8 border-[1px] border-slate-200 rounded-full flex items-center justify-center text-[#4da6a6] text-[10px] bg-slate-50/50">
                                <FaUniversity />
                            </div>
                            <h3 className="text-[15px] font-bold text-slate-950 leading-relaxed pr-6">
                                {edu.school}
                            </h3>
                        </div>

                        {/* Content Area - Flush Left under the icon */}
                        <div className="flex flex-col">
                            {/* School and Timeframe Row */}
                            <div className="flex justify-between items-baseline mb-1">
                                <span className="text-[12px] font-bold leading-relaxed text-slate-700">
                                    {edu.degree}
                                </span>
                                <span className="text-[11px] font-bold text-[#4da6a6] italic uppercase tracking-wider">
                                    {edu.timeFrame}
                                </span>
                            </div>

                            {/* Bullet Points - Joined into a single compact paragraph */}
                            {edu.bulletPoints.length > 0 && (
                                <p className="text-[11px] leading-relaxed text-slate-600 font-medium">
                                    {edu.bulletPoints.join(' ')}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};