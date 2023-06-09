import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { AppLayout } from './components/AppLayout/AppLayout'

function App() {

  return (
    <>

  <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
        <Route index element={<NavBar />} />
          
        </Route>
      </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
