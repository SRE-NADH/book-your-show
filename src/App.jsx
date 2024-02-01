import { useState } from 'react'
import Header from './Components/Header/Header'
import MovieCard from './Components/MovieCard/MovieCard'
import Home from './Pages/Home'
import Show from './Pages/Show'
import { Route, Routes } from 'react-router'
import PopUpModel from './Components/PopUpModel/PopUpModel'



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/show' element={<Show/>}/>
      </Routes>
    </>
  )
}

export default App
