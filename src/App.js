import './reset.css';
import './components/pages/mainPage/mainPage';
import Navigation from "./components/navigation/navigation";
import MainPage from './components/pages/mainPage/mainPage';
import Footer from "./components/footer/footer";
import HelpModal from './components/popup/helpModule/helpModal';
import { useState } from 'react';
import ProgramsPage from './components/pages/programsPage/programsPage';
import ExercisesPage from './components/pages/exercisesPage/exercisesPage';
import AboutPage from './components/pages/aboutPage/aboutPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [helpActive, setHelpActive] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="easyfit" element={<MainPage setActive={setHelpActive}/>}/>
          <Route path="easyfit/programs" element={<ProgramsPage setActive={setHelpActive}/>}/>
          <Route path="easyfit/exercises" element={<ExercisesPage setActive={setHelpActive}/>}/>
          <Route path="easyfit/about" element={<AboutPage setActive={setHelpActive}/>}/>
        </Routes>
      </BrowserRouter>
      <HelpModal active={helpActive} setActive={setHelpActive}/>
    </div>
  );
}

export default App;
