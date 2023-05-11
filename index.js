import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import AndroidLarge1 from './views/android-large1'
import AndroidLarge2 from './views/android-large2'
import AndroidLarge3 from './views/android-large3'
import AndroidLarge4 from './views/android-large4'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={AndroidLarge1} exact path="/android-large1" />
        <Route component={AndroidLarge2} exact path="/android-large2" />
        <Route component={AndroidLarge3} exact path="/android-large3" />
        <Route component={AndroidLarge4} exact path="/android-large4" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
