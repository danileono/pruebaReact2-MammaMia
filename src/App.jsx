import './App.css'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import { Router } from './router/Router'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {


  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Router />
    </BrowserRouter>
    </>
  )
}

export default App
