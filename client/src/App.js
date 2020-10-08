import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

//context
import UserContextProvider from './context/UserContext';

//components
import Navbar from './components/Navbar'
import Formpage from './views/Formpage'
import Landing from './views/Landing'

function App() {

  return (
    <div>
      <Router>
        <UserContextProvider>
        <Navbar />

        <Route exact path="/" component={Landing} />
        <Route exact path="/submit" component={Formpage} />
        </UserContextProvider>
      </Router>
    </div>
  )
}

export default App;
