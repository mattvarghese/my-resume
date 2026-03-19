import { BrowserRouter, Routes, Route } from 'react-router';
import { MenuView } from './components/MenuView';
import { FormattedResume } from './components/FormattedResume';
import { AtsFriendly } from './components/AtsFriendly';
import { TimelineView } from './components/TimelineView';

// React icons reference: https://react-icons.github.io/react-icons/icons/fa/

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuView />} />
        <Route path="/formatted" element={<FormattedResume />} />
        <Route path="/ats" element={<AtsFriendly />} />
        <Route path="/timeline" element={<TimelineView />} />
        {/* We'll add /ats and /timeline here later */}
        <Route path="*" element={<MenuView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;