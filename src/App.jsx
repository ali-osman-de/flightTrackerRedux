import React from 'react'
import LandingPage from './pages/landingPage/LandingPage'
import { Route, Routes } from 'react-router-dom'
import ResultPageByAirport from './pages/resultPageByAirport/ResultPageByAirport'





function App() {
  return (
    <>
      <Routes>
        <Route exatch path="/" element={<LandingPage />} />
        <Route exatch path="/resultPageByAirport" element={<ResultPageByAirport />} />
      </Routes>
    </>
  )
}

export default App