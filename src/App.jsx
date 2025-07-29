
import './App.css'
import Footer from './component/Footer'
import video from '/185711-876210645.mp4'
import Header from './component/Header'
import Shop from './page/Shop'
import Cart from './page/Cart'
import About from './page/About'
import Signin from './page/Signin'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Modal from './Modal'
import './Modal.css'



function App() {
  const[modalOpen, setModalOpen]=useState(false);



  return (
  
    <>
    <Header />

  <Routes>
   <Route path='/App' element={<div className='main'>
    <video autoPlay loop muted>
      <source src={video} type='video/mp4'/>
    </video>

    <div className='mainTitle'>
    <h1 onClick={()=>setModalOpen(true)}>KindEarth</h1>
    </div>

    <Modal isOpen={modalOpen} isClose={()=>setModalOpen(false)}>
      <span>🐢KindEarth에 오신걸 환영합니다</span>
    </Modal>

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
