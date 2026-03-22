import type { Resume } from '../model/types';
import { resumeData } from '../model/data';
import { PersonSummary } from './PersonSummary';
import { PersonContact } from './PersonContact';
import { SideBar } from './SideBar';
import { SkillList } from './SkillList';
import { WorkExperience } from './WorkExperience';
import { ProjectList } from './ProjectList';
import { EpicCertifications } from './EpicCertifications';
import { MiscList } from './MiscList';
import { DegreeList } from './DegreeList';
import { KeyProjects } from './KeyProjects';
import { Collaboration } from './Collaboration';

export const FormattedResume = () => {
    const data: Resume = resumeData;

    return (
        <div className="bg-slate-200 min-h-screen py-10 print:p-0 print:bg-white flex flex-col items-center">

            {/* Single Continuous Paper Wrapper */}
            <div className="relative w-[8.5in] bg-white shadow-2xl print:shadow-none flex min-h-[11in]">

                {/* Left Column */}
                <main className="w-[66%] flex flex-col p-1 gap-1 ">
                    <PersonSummary person={data.person} />
                    <WorkExperience jobs={data.person.jobs} title="Work Experience" />
                    <KeyProjects projects={data.person.keyProjects} />
                    {/* <IndustryOutreach involvement={resumeData.person.involvement} /> */}
                    <WorkExperience jobs={data.person.priorJobs} title="Prior Experience" tight />
                    <DegreeList degrees={data.person.degrees} />
                </main>

                {/* Right Column */}
                <div className="w-[34%] flex flex-col p-1 pb-0">
                    <PersonContact connections={data.person.connections} />
                    <SideBar>
                        <SkillList skillSet={data.person.skillSet} />
                        <Collaboration involvement={resumeData.person.involvement} />
                        <ProjectList projects={data.person.projects} />
                        <EpicCertifications certifications={data.person.epicCertifications} />
                        <MiscList misc={data.person.misc} />
                        {/* extra padding for sidebar if required */}
                        <div className="hidden print:flex flex-col items-end pb-5 pt-0">
                            <span className="text-[10px] font-serif font-bold uppercase tracking-widest text-slate-500 px-9">
                                Page 2 <span className="text-[#4da6a6] mx-1">|</span> 2
                            </span>
                        </div>
                    </SideBar>
                </div>
            </div>
        </div>
    );
};
