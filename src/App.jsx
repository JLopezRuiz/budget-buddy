import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import LandingPage from './LandingPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/budget-buddy" element={<LandingPage />} />
      </Routes>
    </Router>
  )
}

export default App
