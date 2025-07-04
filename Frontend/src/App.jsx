import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from "./components/Homepage"
import MainLayout from "./layouts/MainLayout"
import About from "./components/About"
import Events from "./components/Events"

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
