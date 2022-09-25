
import './styles/main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ComingSoon from './components/ComingSoon'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ComingSoon />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App