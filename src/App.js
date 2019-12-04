import React, { useState } from 'react';
import { Provider } from 'react-redux'
import store from './JamieWho/redux'

import JamieWho from './JamieWho/';
import { Reset } from './JamieWho/components/styled'


const APP_MODE = {
  JAMIE_WHO: "JamieWho"
}

function App() {
  const [appMode] = useState(APP_MODE.JAMIE_WHO);

  function chooseApp(appMode) {
    switch (appMode) {
      case "JamieWho":
        return <JamieWho />;
      default:
        return
    }
  }

  return (
    <Provider store={store}>
      <Reset key="Reset" />
      {chooseApp(appMode)}
    </Provider>
  )
}

export default App;