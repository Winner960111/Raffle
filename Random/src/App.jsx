import { Routes, Route } from 'react-router-dom'
import Home from './Page/Home'
import Admin from './Page/Admin'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </>
  )
}

export default App
