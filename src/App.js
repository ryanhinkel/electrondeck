import React from "react";
import { Provider } from 'react-redux'

import { store } from './services/hostApi'
import PresentButton from "./components/PresentButton"
import Router from "./Router"

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <header>
          <PresentButton />
        </header>
        <Router />
      </div>
    </Provider>
  )
}

export default App;
