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

  const fetchExercises = async () => {
    return await fetch('http://127.0.0.1:3002/exercises/' + group).then(async response => {
      if (!response.ok) {
        throw new Error('Ошибка сервера: ' + response.status);
      } else {
        return response.json();
      }
    }).catch(err => {
        return Promise.reject(err);
    });
  }

  const fetchPrograms = async () => {
    return await fetch('http://127.0.0.1:3002/programs/' + category).then(async response => {
      if (!response.ok) {
        throw new Error('Ошибка сервера: ' + response.status);
      } else {
        return response.json();
      }
    }).catch(err => {
        return Promise.reject(err);
    });
  }

  useEffect(() => {
    fetchExercises().then(jsonData => {
      const array = [];
      jsonData.map((item) => {
        array.push(<Route path={"/exercises/" + item.name_en.toLowerCase()}  element={<ExerciseInfo info = {item} langCode = {langCode}/>}/>);
      });
      setExercisesInfo(array);
      setExercises(jsonData);
    }).catch(err => {
      console.log("Ошибка сервера");
    });
  }, [group]);

  useEffect(() => {
    fetchPrograms().then(jsonData => {
      const array = [];
      const exercisesArray = [];
      let exercisesIds = [];
      jsonData.map((item) => {
        if (jsonData.length > 0) {
          exercisesIds = item.exercises.split(",\s+");
        }
        exercises.map((exercise) => {
          if (exercisesIds.indexOf(exercise.id)) {
              exercisesArray.push(exercise);
          }
        })
        array.push(<Route path={"/programs/" + item.name_en.toLowerCase()}  element={<ProgramsInfo info = {item} langCode = {langCode} data={exercisesArray}/>}/>)
      });
      setProgramsInfo(array);
      setPrograms(jsonData);
    }).catch(err => {
      console.log("Ошибка сервера");
    });
           
    }, [category]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation setActive={setHelpActive} langCode = {langCode} setLangCode={setLangCode}/>
        <Routes>
          <Route path="" element={<MainPage langCode = {langCode} setCategory={setCategory}/>}/>
          <Route path="/programs" element={<ProgramsPage langCode = {langCode} category = {category} setCategory={setCategory} data={programs}/>}/>
          <Route path="/exercises" element={<ExercisesPage langCode = {langCode} group={group} setGroup={setGroup} data={exercises}/>}/>
          {exercisesInfo}
          {programsInfo}
          <Route path="/about" element={<AboutPage langCode = {langCode}/>}/>
        </Routes>
        <HelpModal active={helpActive} setActive={setHelpActive} langCode = {langCode}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
