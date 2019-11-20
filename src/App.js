import React, { useState } from 'react';

import { createStore } from 'redux'
import rootReducer from './JamieWho/redux'
import { Provider } from 'react-redux'

import JamieWho from './JamieWho/';

const theStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {
  const [appMode, setAppMode] = useState("JamieWho");

  function chooseApp(appMode) {
    switch (appMode) {
      case "JamieWho": return <JamieWho></JamieWho>;
      default: return null
    }
  }

  return (
    <Provider store={theStore}>
      {chooseApp(appMode)}
    </Provider>
  )
}

export default App;