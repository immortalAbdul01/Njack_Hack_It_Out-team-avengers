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

const App = () => {
  return (
    <div>
      <Router>

        <Routes>

          <Route exact path="/login" element={<Login />} />

          {/* <Route path="/register" exact component={Register} /> */}
          <Route exact path="/" element={<DashBoard />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App