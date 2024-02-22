import React from 'react'
import "./App.css"
import Header from './components/Header'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingleSong from './pages/SingleSong'
import Player from './components/Player'
import NotFound from './pages/NotFound'
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/song/:id' element={<SingleSong/>}/>
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
    <Player/>
    </BrowserRouter>
  )
}

export default App