import type { Resume } from './model/types';
import { resumeData } from './model/data';
import { PersonSummary } from './components/PersonSummary';
import { PersonContact } from './components/PersonContact';
import { SideBar } from './components/SideBar';
import { SkillList } from './components/SkillList';
import { WorkExperience } from './components/WorkExperience';
import { ProjectList } from './components/ProjectList';
import { EpicCertifications } from './components/EpicCertifications';
import { MiscList } from './components/MiscList';
import { DegreeList } from './components/DegreeList';

const App = () => {
  const data: Resume = resumeData;

  return (
    <div className="bg-slate-200 min-h-screen py-10 print:p-0 print:bg-white flex flex-col items-center">

      {/* Single Continuous Paper Wrapper */}
      <div className="relative w-[8.5in] bg-white shadow-2xl print:shadow-none flex min-h-[11in]">

        {/* Left Column */}
        <main className="w-[66%] flex flex-col p-1 gap-1 ">
          <PersonSummary person={data.person} />
          <WorkExperience jobs={data.person.jobs} />
          <DegreeList degrees={data.person.degrees} />
        </main>

        {/* Right Column */}
        <div className="w-[34%] flex flex-col p-1">
          <PersonContact connections={data.person.connections} />
          <SideBar>
            <SkillList skillSet={data.person.skillSet} />
            <ProjectList projects={data.person.projects} />
            <EpicCertifications certifications={data.person.epicCertifications} />
            <MiscList misc={data.person.misc} />
            {/* extra padding for sidebar if required */}
            <div className="hidden print:block">
              <div className="pt-2" />
            </div>
          </SideBar>
        </div>
      </div>
    </div>
  );
};

export default App;