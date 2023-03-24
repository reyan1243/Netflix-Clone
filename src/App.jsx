import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Login from'./pages/Login'
import Signup from './pages/Signup'
import Netflix from './pages/Netflix'
import Player from "./pages/Player"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/netflix' element={<Netflix/>}/>
          <Route exact path='/player' element={<Player/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App