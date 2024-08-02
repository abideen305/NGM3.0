import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from "./views/Home"
import Gallery from './views/Gallery'



function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/team' element={<team/>}/>
    </Routes>
     
    </>
  )
}

export default App
