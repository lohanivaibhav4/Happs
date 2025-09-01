import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './components/Layout'
import Homepage from './components/Homepage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} >
            <Route index element={<Homepage />} />
          </ Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
