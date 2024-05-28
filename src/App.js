import './reset.css';
import './components/pages/mainPage/mainPage';
import MainPage from './components/pages/mainPage/mainPage';
import HelpModal from './components/popup/helpModule/helpModal';
import Navigation from './components/navigation/navigation';
import { useState } from 'react';
import ProgramsPage from './components/pages/programsPage/programsPage';
import ProgramsPage2 from './components/pages/programsPage2/programsPage2';
import ExercisesPage from './components/pages/exercisesPage/exercisesPage';
import ExercisesPageSearch from './components/pages/exercisesPageSearch/exercisesPageSearch';
import AboutPage from './components/pages/aboutPage/aboutPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [helpActive, setHelpActive] = useState(false);
  const [langCode, setLangCode] = useState("ru");
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation setActive={setHelpActive} langCode = {langCode} setLangCode={setLangCode}/>
        <Routes>
          <Route path="easyfit" element={<MainPage langCode = {langCode}/>}/>
          <Route path="easyfit/programs" element={<ProgramsPage langCode = {langCode}/>}/>
          <Route path="easyfit/exercises" element={<ExercisesPage langCode = {langCode}/>}/>
          <Route path="easyfit/about" element={<AboutPage langCode = {langCode}/>}/>
          <Route path="easyfit/exercisesSearch" element={<ExercisesPageSearch langCode = {langCode}/>}/>
          <Route path="easyfit/programs2" element={<ProgramsPage2 langCode = {langCode}/>}/>
        </Routes>
      </BrowserRouter>
      <HelpModal active={helpActive} setActive={setHelpActive} langCode = {langCode}/>
    </div>
  );
}

export default App;
