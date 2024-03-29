import React from 'react'
import LandingPage from './pages/landingPage/LandingPage'
import { Route, Routes } from 'react-router-dom'
import ResultPageByAirport from './pages/resultPageByAirport/ResultPageByAirport'
import ResultPageByAirline from './pages/resultPageByAirline/ResultPageByAirline'





function App() {
  return (
    <>
      <Routes>
        <Route exatch path="/" element={<LandingPage />} />
        <Route path="/resultPageByAirport/:icao" element={<ResultPageByAirport />} />
        <Route path="/resultPageByAirline" element={<ResultPageByAirline />} />
      </Routes>
    </>
  )
}

export default App