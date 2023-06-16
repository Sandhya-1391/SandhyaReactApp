
import React, { useState } from 'react'
// // import Header from './component/Header'
// // import Footer from './component/Footer'
import './components.css'
import Hero from './component/Hero'
// // import BootstrapHeader from './component/BootstrapHeader'
// // import RegularBtn from './component/RegularBtn'
// // import TextUtilsForm from './component/TextUtilsForm'
// // import TextSummary from './component/TextSummary'
// import Stopwatch from './component/stopwatch'
import Counter from './component/Counter'
import Stopwatch from './component/Stopwatch'
import { BrowserRouter as Browser, Routes, Route, BrowserRouter } from 'react-router-dom'
import TextUtilsForm from './component/TextUtilsForm'
import BootstrapHeader from './component/BootstrapHeader'
import Menu from './component/Menu'
import User from './component/User'
import SingleCard from './component/SingleCard'
import Data from './Data.json'
import Students from './component/Students'
import Dress from './component/Dress'
import Product from './component/Product/Product'





const App = () => {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <>
      {/* <Header/>   */}
      
       <Browser>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/textEditor' element={<TextUtilsForm />} />
          <Route path='/Counter' element={<Counter />} />
          <Route path='/Stopwatch' element={<Stopwatch />} />
          <Route path='/user/:myid' element={<User />} />
          <Route path='/data' element={<Students />} />
          <Route path='/Dress' element={<Dress />} />
          <Route path='/Product' element={<Product />} />





        </Routes>
      </Browser>


    </>
  )
}


export default App









