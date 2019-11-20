import React, { useState } from 'react';
import JamieWho from './JamieWho/';

function App() {
  const [appMode, setAppMode] = useState("JamieWho");

  function chooseApp(appMode) {
    switch (appMode) {
      case "JamieWho": return <JamieWho setAppMode={setAppMode}></JamieWho>;
      default: return null
    }
  }

  return chooseApp(appMode)
}

export default App;