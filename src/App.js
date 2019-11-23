import React, { useState } from 'react';
import { Provider } from 'react-redux'
import store from './JamieWho/redux'

import JamieWho from './JamieWho/';

function App() {
  const [appMode, setAppMode] = useState("JamieWho");

  function chooseApp(appMode) {
    switch (appMode) {
      case "JamieWho": return <JamieWho></JamieWho>;
      default: return null
    }
  }

  return (
    <Provider store={store}>
      {chooseApp(appMode)}
    </Provider>
  )
}

export default App;