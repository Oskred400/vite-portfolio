import './App.css'
import { AboutMe } from './components/AboutMe/AboutMe'
import { NavBar } from './components/NavBar/NavBar'

function App() {

  return (
    <>
      <NavBar/>
      <div className="introduction">
        <h1 className="intro-text"> Hello World</h1>
        <h1 className="intro-text">Meet Siddarth!</h1>
      </div>
      <title>Sid's Portfolio </title>
      <AboutMe/>
    </>
  )
}

export default App
