import { FaSkiing, FaBolt } from 'react-icons/fa';

interface Props {
    misc: string[];
}

export const MiscList = ({ misc }: Props) => {
    return (
        <section className="flex flex-col gap-2">
            {/* Section Header */}
            <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 border-2 border-[#4da6a6] rounded-full flex items-center justify-center text-[#4da6a6] text-sm">
                    <FaSkiing />
                </div>
                <h2 className="text-xl font-bold text-slate-800 uppercase tracking-widest leading-none">
                    Other
                </h2>
            </div>

            {/* Vertical Bullet List */}
            <ul className="flex flex-col gap-0.5 pl-1">
                {misc.map((item, index) => (
                    <li key={index} className="flex items-start gap-1">
                        {/* Custom Bullet Icon */}
                        <span className="mt-1 flex-shrink-0 text-[#4da6a6] text-[8px]">
                            <FaBolt />
                        </span>
                        <span className="text-[11px] text-slate-700 font-medium leading-tight">
                            {item}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
};