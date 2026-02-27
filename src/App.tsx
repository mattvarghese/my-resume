import type { Resume } from './types';
import { resumeData } from './data';
import { PersonSummary } from './components/PersonSummary';
import { PersonContact } from './components/PersonContact';
import { SideBar } from './components/SideBar';
import { SkillList } from './components/SkillList';
import { PageWrapper } from './components/PageWrapper';

const App = () => {
  const data: Resume = resumeData;
  const TOTAL_PAGES = 2; // Update this as you add more content

  return (
    <div className="bg-slate-200 min-h-screen py-10 print:p-0 flex flex-col items-center">
      
      {/* PAGE 1 */}
      <PageWrapper pageNumber={1} totalPages={TOTAL_PAGES}>
        {/* Left Column */}
        <main className="w-[67%] flex flex-col p-1 gap-1 ">
           <PersonSummary person={data.person} />
           {/* Content... */}
        </main>

        {/* Right Column */}
        <div className="w-[33%] flex flex-col p-1">
           <div className="p-2 bg-[#2c3e50] mb-2">
             <PersonContact connections={data.person.connections} />
           </div>
           <SideBar>
             <SkillList skillSet={data.person.skillSet} />
           </SideBar>
           {/* Content... */}
        </div>
      </PageWrapper>

      {/* PAGE 2 */}
      <PageWrapper pageNumber={2} totalPages={TOTAL_PAGES}>
        <main className="w-[67%] p-8 border-r border-slate-100">
           {/* Content... */}
        </main>
        
        <aside className="w-[33%] bg-slate-100 p-4">
           {/* Content... */}
        </aside>
      </PageWrapper>

    </div>
  );
};

export default App;