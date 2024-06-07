import './reset.css';
import './components/pages/mainPage/mainPage';
import MainPage from './components/pages/mainPage/mainPage';
import HelpModal from './components/popup/helpModule/helpModal';
import Navigation from './components/navigation/navigation';
import { useState } from 'react';
import ProgramsPage from './components/pages/programsPage/programsPage';
import ExercisesPage from './components/pages/exercisesPage/exercisesPage';
import ExerciseInfo from './components/pages/exerciseInfo/exerciseInfo';
import AboutPage from './components/pages/aboutPage/aboutPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProgramsPageStart from './components/pages/programsPageStart/programsPageStart';

function App() {
  const [helpActive, setHelpActive] = useState(false);
  const [langCode, setLangCode] = useState("ru");
  const [category, setCategory] = useState("popular");
  const [group, setGroup] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation setActive={setHelpActive} langCode = {langCode} setLangCode={setLangCode}/>
        <Routes>
          <Route path="" element={<MainPage langCode = {langCode} setCategory={setCategory}/>}/>
          <Route path="/programs" element={<ProgramsPage langCode = {langCode} category = {category} setCategory={setCategory}/>}/>
          <Route path="/exercises" element={<ExercisesPage langCode = {langCode} group={group} setGroup={setGroup}/>}/>
          <Route path="/about" element={<AboutPage langCode = {langCode}/>}/>
          <Route path="/exerciseInfo" element={<ExerciseInfo langCode = {langCode}/>}/>
          <Route path="/programs2" element={<ProgramsPageStart langCode = {langCode}/>}/>
        </Routes>
      </BrowserRouter>
      <HelpModal active={helpActive} setActive={setHelpActive} langCode = {langCode}/>
    </div>
  );
}

export default App;
