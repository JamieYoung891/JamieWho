import React, { useState } from 'react';
import { Provider } from 'react-redux'
import store from './JamieWho/redux'

// import JamieWho from './JamieWho/';
// import './reset.css'


import Test from './Test'
import { Reset } from './Test/styled'


const APP_MODE = {
  JAMIE_WHO: "JamieWho",
  TEST: "Test"
}

function App() {
  const [appMode] = useState(APP_MODE.TEST);

  function chooseApp(appMode) {
    switch (appMode) {
      // case "JamieWho":
      //   return <JamieWho setAppMode={setAppMode} />;
      case "Test":
        return [
          <Reset key="Reset" />,
          <Test key="Test" />
        ]
      default:
        return
    }
  }

  return (
    <Provider store={store}>
      {chooseApp(appMode)}
    </Provider>
  )
}

export default App;