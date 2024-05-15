import './reset.css';
import './components/pages/mainPage/mainPage';
import Navigation from "./components/navigation/navigation";
import MainPage from './components/pages/mainPage/mainPage';
import HelpModal from './components/popup/helpModule/helpModal';
import { useState } from 'react';

function App() {
  const [helpActive, setHelpActive] = useState(false);
  return (
    <div className="App">
      <Navigation setActive={setHelpActive}/>
      <MainPage/>
      <HelpModal active={helpActive} setActive={setHelpActive}/>
    </div>
  );
}

export default App;
