import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Moviesseries from './components/Moviesseries'
function App() {

  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Moviesseries/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
