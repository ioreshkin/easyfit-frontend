import './reset.css';
import './components/pages/mainPage/mainPage';
import Navigation from "./components/navigation/navigation";
import MainPage from './components/pages/mainPage/mainPage';

import HelpModal from './components/popup/helpModule/helpModal';
import { useState } from 'react';
import ProgramsPage from './components/pages/programsPage/programsPage';
import ExercisesPage from './components/pages/exercisesPage/exercisesPage';

function App() {
  const [helpActive, setHelpActive] = useState(false);
  return (
    <div className="App">
      <Navigation setActive={setHelpActive}/>
      {/* <MainPage/> */}
      <ProgramsPage/>
      {/* <ExercisesPage/> */}
      <Footer/>
      <HelpModal active={helpActive} setActive={setHelpActive}/>
    </div>
  );
}

export default App;
