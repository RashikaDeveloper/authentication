import React from "react"
import { BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import ProtectedRoute from "./components/ProtectedRoute"
import Signup from "./components/Signup"
import Home from "./components/Home"

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/"element={
            <ProtectedRoute>
            <Home/>
            </ProtectedRoute>
          }>

          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
        </Routes>
      </Router>
     
    </>
  )
}

export default App
