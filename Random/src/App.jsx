import { Routes, Route } from 'react-router-dom'
import Home from './Page/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/admin" component={Admin} /> */}
      </Routes>
    </>
  )
}

export default App
