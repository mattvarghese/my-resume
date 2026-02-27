import type { Education } from '../model/types';
import { FaUniversity, FaCircle } from 'react-icons/fa';

interface Props {
    education: Education;
}

export const DegreeComponent = ({ education }: Props) => {
    return (
        <div className="flex flex-col mb-4">
            {/* Degree Title */}
            <h3 className="text-xl font-bold text-slate-950 leading-none">
                {education.degree}
            </h3>

            {/* School Name & Date Range */}
            <div className="flex justify-between items-baseline mt-0.5 mb-1">
                <div className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                    <FaUniversity className="text-[#4da6a6] text-sm" />
                    <span>{education.school}</span>
                </div>
                <span className="text-[11px] font-semibold text-[#4da6a6] italic uppercase tracking-wider">
                    {education.timeFrame}
                </span>
            </div>

            {/* Bullet Points */}
            {education.bulletPoints.length > 0 && (
                <ul className="flex flex-col gap-1.5 px-1">
                    {education.bulletPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-2.5">
                            <span className="mt-1.5 flex-shrink-0 text-[#4da6a6]">
                                <FaCircle className="text-[6px]" />
                            </span>
                            <span className="text-[12px] leading-tight text-slate-700 font-medium">
                                {point}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};