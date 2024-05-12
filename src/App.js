import './reset.css';
import './components/pages/mainPage/mainPage';
import Navigation from "./components/navigation/navigation";
import MainPage from './components/pages/mainPage/mainPage';
import Help from './components/popup/help/helpModal';
import { useState } from 'react';

function App() {
  const [helpActive, setHelpActive] = useState(true);
  return (
    <div className="App">
      <Navigation/>
      <MainPage/>
      <Help active={helpActive} setActive={setHelpActive}/>
    </div>
  );
}

export default App;
