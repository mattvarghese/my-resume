import type {
    Resume,
    Person,
    Connections,
    Employment,
    Experience,
    Project,
    SkillSet,
    Education,
    IndustryInvolvement
} from '../model/types';
import { resumeData } from '../model/data';

/**
 * Main ATS View Container
 */
export const AtsFriendly = () => {
    const data: Resume = resumeData;
    return (
        /* Outer Desk: Completely hidden from print */
        <div className="bg-slate-200 min-h-screen py-0 print:bg-white flex flex-col items-center">

            {/* Inner Paper: Strips all styling during print */}
            <div className="
                bg-white 
                w-[8.5in] 
                min-h-[11in]
                p-[0.5in] 
                flex flex-col 
                gap-1
                shadow-2xl 
                print:shadow-none
                print:m-0
                print:static
                print:overflow-visible
                ">
                <AtsPersonSummary person={data.person} />
                <AtsPersonContact connections={data.person.connections} />

                <div className="flex flex-col">
                    <AtsWorkExperience jobs={[...data.person.jobs, ...data.person.priorJobs]} />
                    <AtsProjectList projects={[...data.person.keyProjects, ...data.person.projects]} />
                    <AtsIndustryOutreach involvement={data.person.involvement} />
                    <AtsDegreeList degrees={data.person.degrees} />
                    <AtsSkillList skillSet={data.person.skillSet} />
                    <AtsEpicCertifications certifications={data.person.epicCertifications} />
                    <AtsMiscList misc={data.person.misc} />
                </div>
            </div>

            <div className="mt-4 print:hidden text-slate-500 text-sm italic">
                ATS-Friendly View &bull; Optimized for Parsers
            </div>
        </div>
    );
};

/**
 * Section Components
 */

const AtsPersonSummary = ({ person }: { person: Person }) => (
    <div className="text-center mb-2">
        <h1 className="text-3xl font-bold uppercase tracking-tight mb-1">
            {person.name}
        </h1>
        <p className="text-[11.5px] leading-tight text-slate-800 italic max-w-4xl mx-auto">
            {person.summary}
        </p>
    </div>
);

const AtsPersonContact = ({ connections }: { connections: Connections }) => {
    const items = [
        connections.email,
        connections.phone,
        connections.location,
        connections.linkedIn,
        connections.github
    ].filter(Boolean);

    return (
        <div className="text-center text-[10px] font-medium border-b border-slate-300 pb-1 mb-1">
            {items.join(' | ')}
        </div>
    );
};

const AtsWorkExperience = ({ jobs }: { jobs: Employment[] }) => (
    <section className="mb-1">
        <h2 className="text-lg font-bold border-b border-slate-800 mb-1 tracking-wide uppercase">Experience</h2>
        <div className="flex flex-col gap-1">
            {jobs.map((job, idx) => (
                <AtsEmploymentComponent key={idx} employment={job} />
            ))}
        </div>
    </section>
);

const AtsEmploymentComponent = ({ employment }: { employment: Employment }) => (
    <div className="flex flex-col mb-2 break-inside-avoid">
        <div className="flex justify-between items-baseline">
            <h3 className="text-[14px] font-bold">{employment.company}</h3>
            <span className="text-[11px] font-semibold italic">{employment.timeFrame}</span>
        </div>
        <div className="text-[12px] font-bold text-slate-700 uppercase leading-none">
            {employment.title}
        </div>

        {/* NEW: Employment Summary for ATS */}
        {employment.summary && (
            <p className="text-[11.5px] leading-tight text-slate-800 italic mt-1 mb-1">
                {employment.summary}
            </p>
        )}

        <div className="flex flex-col gap-0.5 mt-0.5">
            {employment.experiences.map((exp, idx) => (
                <AtsExperienceComponent key={idx} experience={exp} />
            ))}
        </div>
    </div>
);

const AtsExperienceComponent = ({ experience }: { experience: Experience }) => (
    <div className="flex flex-col text-[12px] leading-snug">
        <div className="flex items-baseline gap-x-1">
            {/* The Bullet Symbol for ATS readability */}
            <span className="text-slate-400 font-bold mr-1">•</span>

            <div className="text-slate-800">
                {experience.title && (
                    <span className="font-bold">
                        {experience.title}:
                    </span>
                )}
                <span className="ml-1">
                    {experience.detail}
                </span>
            </div>
        </div>
    </div>
);

const AtsIndustryOutreach = ({ involvement }: { involvement: IndustryInvolvement[] }) => (
    <section className="mb-1.5">
        <AtsSectionHeader title="Industry & Outreach" />
        <div className="flex flex-col gap-0.5">
            {involvement.map((item, idx) => (
                <div key={idx} className="text-[11.5px] leading-tight">
                    <span className="font-bold">{item.ItemTitle}:</span>{' '}
                    <span className="text-slate-800">{item.Description}</span>
                </div>
            ))}
        </div>
    </section>
);

const AtsProjectList = ({ projects }: { projects: Project[] }) => (
    <section className="mb-1">
        <h2 className="text-lg font-bold border-b border-slate-800 mb-2 tracking-wide uppercase">Projects</h2>
        <div className="flex flex-col gap-2">
            {projects.map((project, idx) => (
                <div key={idx} className="flex flex-col text-[12px] leading-snug">
                    {/* Header Row: Title + Link (Left) and Date (Right) */}
                    <div className="flex justify-between items-baseline">
                        <div className="flex items-baseline gap-2">
                            <h3 className="text-[14px] font-bold underline decoration-slate-300 underline-offset-2">
                                {project.title}
                            </h3>
                            {project.url && (
                                <span className="text-[10px] text-slate-500 font-mono">
                                    [{project.url}]
                                </span>
                            )}
                        </div>
                        <span className="text-[11px] font-semibold italic shrink-0 ml-4">
                            {project.timeFrame}
                        </span>
                    </div>

                    {/* Description Paragraph */}
                    <div className="text-slate-800 mt-0.5">
                        {project.description.map((point, pIdx) => (
                            <span key={pIdx}>
                                {point}
                                {pIdx < project.description.length - 1 && (
                                    <span className="mx-1.5 font-bold text-slate-400"> • </span>
                                )}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
);

const AtsSectionHeader = ({ title }: { title: string }) => (
    <div className="mt-1.5 mb-1"> {/* Reduced mt-3 to mt-1.5 */}
        <h2 className="text-[14px] font-bold text-slate-900 uppercase tracking-wider border-b border-slate-800 leading-tight">
            {title}
        </h2>
    </div>
);

const AtsSkillList = ({ skillSet }: { skillSet: SkillSet }) => (
    <section className="mb-1.5">
        <AtsSectionHeader title="Skills" />
        <div className="flex flex-col gap-0.5">
            {skillSet.groups.map((group, idx) => (
                <div key={idx} className="text-[11.5px] leading-tight">
                    <span className="font-bold">{group.group}:</span>{' '}
                    <span className="text-slate-800">{group.skills.join(' \u2022 ')}</span>
                </div>
            ))}
        </div>
    </section>
);

const AtsDegreeList = ({ degrees }: { degrees: Education[] }) => (
    <section>
        <AtsSectionHeader title="Education" />
        <div className="flex flex-col gap-2">
            {degrees.map((degree, idx) => (
                <AtsDegreeComponent key={idx} education={degree} />
            ))}
        </div>
    </section>
);

const AtsDegreeComponent = ({ education }: { education: Education }) => (
    <div className="flex flex-col text-[11.5px] leading-tight">
        <div className="flex justify-between items-baseline">
            <h3 className="text-[13px] font-bold">{education.degree}</h3>
            <span className="text-[11px] font-semibold italic">{education.timeFrame}</span>
        </div>
        <div className="text-slate-700">
            <span className="font-semibold">{education.school}</span>
            {education.bulletPoints.length > 0 && (
                <>
                    <span className="mx-1.5 text-slate-400">|</span>
                    <span>{education.bulletPoints.join(' \u2022 ')}</span>
                </>
            )}
        </div>
    </div>
);

const AtsEpicCertifications = ({ certifications }: { certifications: string[] }) => (
    <section className="mt-1 mb-1.5">
        <AtsSectionHeader title="Epic Certifications" />
        <p className="text-[11.5px] text-slate-800 leading-snug">
            {certifications.join(' \u2022 ')}
        </p>
    </section>
);

const AtsMiscList = ({ misc }: { misc: string[] }) => (
    <section className="mb-1.5">
        <AtsSectionHeader title="Additional Information" />
        <p className="text-[11.5px] text-slate-800 leading-snug">
            {misc.join(' \u2022 ')}
        </p>
    </section>
);