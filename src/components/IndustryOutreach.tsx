import React from 'react';
import { FaDna, FaBurn } from 'react-icons/fa';
import type { IndustryInvolvement } from '../model/types';

interface IndustryOutreachProps {
    involvement: IndustryInvolvement[];
}

export const IndustryOutreach: React.FC<IndustryOutreachProps> = ({ involvement }) => {
    return (
        <section className="flex flex-col gap-2 p-4 pl-6 pt-0 mt-2">
            {/* Section Header */}
            <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 border-2 border-[#4da6a6] rounded-full flex items-center justify-center text-[#4da6a6] text-sm">
                    <FaDna />
                </div>
                <h2 className="text-xl font-bold text-slate-800 uppercase tracking-widest leading-none">
                    Industry & Outreach
                </h2>
            </div>

            {/* List of Involvement Items */}
            <div className="flex flex-col gap-1">
                {involvement.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                        {/* The Icon */}
                        <div className="mt-2 flex-shrink-0">
                            <FaBurn className="text-[#4da6a6] text-xs" />
                        </div>

                        {/* Combined Paragraph Text */}
                        <p className="text-[12px] leading-relaxed text-slate-700 font-medium">
                            <span className="text-[13.5px] font-bold text-slate-950 mr-1">
                                {item.ItemTitle}:
                            </span>
                            {item.Description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};