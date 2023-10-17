import React from 'react'

import './App.css'
import Home from './Home.jsx'
import Error from './Error.jsx'
import Singlemovie from "./Singlemovie.jsx"
import { Route,Routes } from 'react-router-dom'

function App() {
 

  return (
    <>
      <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="movie/:id" element={<Singlemovie/>}/>
    <Route path="*" element={<Error/>}/>
  </Routes>
    </>
  )
}

export default App
