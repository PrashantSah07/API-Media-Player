import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './globle.css'
import App from './App.jsx'
import About from './About.jsx'
import News from './News.jsx';
import Calender from './Calender.jsx';
import Movies from './Movies.jsx';
import Songs from './Songs.jsx'
import TooManyRequest from './TooManyRequest.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/news" element={<News />} />
      <Route path="/calender" element={<Calender />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/songs" element={<Songs/>} />
      <Route path="/too-many-request" element={<TooManyRequest />} />
    </Routes>
  </BrowserRouter>,
)
