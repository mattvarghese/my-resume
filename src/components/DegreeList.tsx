import { FaGraduationCap } from 'react-icons/fa';
import type { Education } from '../model/types';
import { DegreeComponent } from './DegreeComponent';

interface Props {
    degrees: Education[];
}

export const DegreeList = ({ degrees }: Props) => {
    return (
        <section className="flex flex-col gap-4 p-4 pl-6 pt-1">
            {/* Section Header */}
            <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 border-2 border-[#4da6a6] rounded-full flex items-center justify-center text-[#4da6a6] text-sm">
                    <FaGraduationCap />
                </div>
                <h2 className="text-xl font-bold text-slate-800 uppercase tracking-widest leading-none">
                    Education
                </h2>
            </div>

            {/* List of Degrees */}
            <div className="flex flex-col">
                {degrees.map((degree, index) => (
                    <DegreeComponent key={index} education={degree} />
                ))}
            </div>
        </section>
    );
};