
import './App.css'
import Footer from './component/Footer'
import video from '/185711-876210645.mp4'
import Header from './component/Header'
import Shop from './page/Shop'
import Cart from './page/Cart'
import About from './page/About'
import Signin from './page/Signin'
import { Route, Routes } from 'react-router-dom'



function App() {

  return (
  
    <>
    <Header />

  <Routes>
   <Route path='/App' element={<div className='main'>
    <video autoPlay loop muted>
      <source src={video} type='video/mp4'/>
    </video>
    <div className='mainTitle'>
    <h1 onClick={()=>Navigate('/s')}>KindEarth</h1>
    </div>
    </div>} />

    <Route path='/shop' element={<Shop/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/signin' element={<Signin/>} />
  
  </Routes>
    


    <Footer />

    
    </>
  )
}

export default App
