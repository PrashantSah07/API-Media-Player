import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './globle.css'
import App from './App.jsx'
import Calender from './Calender.jsx';
import Images from './Images.jsx'
import Movies from './Movies.jsx';
import Songs from './Songs.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/calender" element={<Calender />} />
      <Route path="/images" element={<Images />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/songs" element={<Songs />} />
    </Routes>
  </BrowserRouter>,
)
