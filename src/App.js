import './reset.css';
import './components/pages/mainPage/mainPage';
import MainPage from './components/pages/mainPage/mainPage';
import HelpModal from './components/popup/helpModule/helpModal';
import Navigation from './components/navigation/navigation';
import { useEffect, useState } from 'react';
import ProgramsPage from './components/pages/programsPage/programsPage';
import ExercisesPage from './components/pages/exercisesPage/exercisesPage';
import ExerciseInfo from './components/pages/exerciseInfoPage/exerciseInfo';
import AboutPage from './components/pages/aboutPage/aboutPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProgramsInfo from './components/pages/programsInfoPage/programsInfo';

function App() {
  const [helpActive, setHelpActive] = useState(false);
  const [langCode, setLangCode] = useState("ru");
  const [category, setCategory] = useState("");
  const [group, setGroup] = useState("");
  const [exercises, setExercises] = useState([]);
  const [exercisesInfo, setExercisesInfo] = useState([]);
  const [programsInfo, setProgramsInfo] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:3002/exercises/' + group);
      const jsonData = await response.json();
      const array = [];
      jsonData.map((item) => {
        array.push(<Route path={"/exercises/" + item.name_en}  element={<ExerciseInfo info = {item} langCode = {langCode}/>}/>)
      });
      setExercisesInfo(array);
      setExercises(jsonData);
    };
  fetchData();
  }, [exercises]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:3002/programs/' + category);
      const jsonData = await response.json();
      const array = [];
      jsonData.map((item) => {
        array.push(<Route path={"/programs/" + item.name_en}  element={<ProgramsInfo info = {item} langCode = {langCode}/>}/>)
      });
      setProgramsInfo(array);
      setPrograms(jsonData);
    };
  fetchData();
  }, [programs]);
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation setActive={setHelpActive} langCode = {langCode} setLangCode={setLangCode}/>
        <Routes>
          <Route path="" element={<MainPage langCode = {langCode} setCategory={setCategory}/>}/>
          <Route path="/programs" element={<ProgramsPage langCode = {langCode} category = {category} setCategory={setCategory} data={programs} setData={setPrograms}/>}/>
          <Route path="/exercises" element={<ExercisesPage langCode = {langCode} group={group} setGroup={setGroup} data={exercises} setData={setExercises}/>}/>
          {exercisesInfo}
          {programsInfo}
          <Route path="/about" element={<AboutPage langCode = {langCode}/>}/>
        </Routes>
      </BrowserRouter>
      <HelpModal active={helpActive} setActive={setHelpActive} langCode = {langCode}/>
    </div>
  );
}

export default App;
