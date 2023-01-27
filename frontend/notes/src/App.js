import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Login from './pages/Login'
// import Register from './pages/Register'
import DashBoard from './pages/Dashboard'
import PersonalDash from './pages/PersonalDash'
import Notes from './Notes'
import Board from './WhiteBoardComponents/Board'
// import name from './pages/Login'
import SignUp from './pages/SignUp';
// import DrawingTool from './WhiteBoardComponents/drawingTool';

const App = () => {


  return (
    <div>



      <Router>

        <Routes>

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/notes" element={<Notes />} />

          <Route exact path="/sign" element={<SignUp />} />
          {/* <Route path="/register" exact component={Register} /> */}
          <Route exact path="/" element={<DashBoard />} />
          <Route exact path="/white" element={<Board />} />
          <Route exact path="/you" element={<PersonalDash />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App