import { FaStamp, FaEllipsisV } from 'react-icons/fa';

interface Props {
    certifications: string[];
}

export const EpicCertifications = ({ certifications }: Props) => {
    return (
        <section className="flex flex-col gap-2">
            {/* Section Header */}
            <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 border-2 border-[#4da6a6] rounded-full flex items-center justify-center text-[#4da6a6] text-sm">
                    <FaStamp />
                </div>
                <h2 className="text-md font-bold text-slate-800 uppercase tracking-widest leading-none whitespace-nowrap">
                    Epic Certifications
                </h2>
            </div>

            {/* The Paragraph Block */}
            <p className="px-0.5 text-[11px] text-slate-700 font-medium leading-snug">
                {certifications.map((cert, index) => (
                    <span key={index}>
                        {/* Standard span allows natural wrapping between words if a certification is very long, 
                but keeps it flowing as a paragraph */}
                        <span>{cert}</span>

                        {/* React Icon Separator */}
                        {index < certifications.length - 1 && (
                            <span className="inline-flex items-center px-1">
                                <FaEllipsisV className="text-[#4da6a6] text-[8px]" />
                            </span>
                        )}
                    </span>
                ))}
            </p>
        </section>
    );
};