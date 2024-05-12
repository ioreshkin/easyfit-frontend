import './reset.css';
import './components/pages/mainPage/mainPage';
import MainPage from './components/pages/mainPage/mainPage';
import Help from './components/popup/help/help';
import { useState } from 'react';

function App() {
  const [helpActive, setHelpActive] = useState(true);
  return (
    <div className="App">
      <MainPage/>
      <Help active={helpActive} setActive={setHelpActive}/>
    </div>
  );
}

export default App;
