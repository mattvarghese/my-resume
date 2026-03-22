import React from 'react';
import { FaUsers, FaBurn } from 'react-icons/fa';
import type { IndustryInvolvement } from '../model/types';

interface CollaborationProps {
    involvement: IndustryInvolvement[];
}

export const Collaboration: React.FC<CollaborationProps> = ({ involvement }) => {
    return (
        <section className="flex flex-col gap-1 mt-2">
            {/* Section Header - Matches ProjectList/WorkExperience */}
            <div className="flex items-center gap-2">
                <div className="flex-shrink-0 w-8 h-8 border-2 border-[#4da6a6] rounded-full flex items-center justify-center text-[#4da6a6] text-sm">
                    <FaUsers />
                </div>
                <h2 className="text-xl font-bold text-slate-800 uppercase tracking-widest leading-none">
                    Collaboration
                </h2>
            </div>

            <div className="flex flex-col gap-1 pl-0.5">
                {involvement.map((item, index) => (
                    <div key={index} className="relative flex flex-col">

                        {/* This is a hack to prevent splitting insdie a project when printing
                                  * First DIV fills up the gap onn previous page. 
                                  * Second DIV add padding in next page */
                            item.needPadding &&
                            <div className="hidden print:block">
                                <div className="hidden print:flex flex-col items-end pb-5 pt-2">
                                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-slate-500 px-9">
                                        Page 1 <span className="text-[#4da6a6] mx-1">|</span> 2
                                    </span>
                                </div>
                                <div className="p-5" />
                            </div>}

                        {/* Title Line: 
                          The Icon is placed relatively to the text.
                          To prevent the icon from pushing the description text, 
                          we keep the title and icon together, but the container has no left padding.
                        */}
                        <div className="flex items-center gap-2 mb-1">
                            <div className="flex-shrink-0 w-5 h-5 border-[1px] border-slate-200 rounded-full flex items-center justify-center text-slate-400 text-[10px] bg-slate-50/50">
                                <FaBurn />
                            </div>
                            <h3 className="text-[13.5px] font-bold text-slate-950 leading-tight">
                                {item.ItemTitle}
                            </h3>
                        </div>

                        {/* Description: 
                          NO left padding (pl-0). 
                          This allows the text to wrap all the way to the left, 
                          sitting directly under the flame icon.
                        */}
                        <p className="text-[12px] leading-snug text-slate-700 font-medium">
                            {item.Description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};