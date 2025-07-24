

import './App.css'
import Footer from './component/Footer'
import video from '/185711-876210645.mp4'
import Header from './component/Header'




function App() {

  return (
    
    <>


    <Header />

    <div className='main'>
    <video autoPlay loop muted>
      <source src={video} type='video/mp4'/>
    </video>

    <div className='mainName'>
    <p onClick>KindEarth</p>
    </div>
    </div>




    <Footer />

    
    </>
  )
}

export default App
