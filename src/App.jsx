import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Orders from './pages/order'


function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Orders/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
