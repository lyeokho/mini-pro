
import './App.css'
import Footer from './component/footer'
import video from '/185711-876210645.mp4'



function App() {

  return (
    
    <>
    <header />
    <video autoPlay loop muted>
      <source src={video} type='video/mp4'/>
    </video>
    <div className='mainName'>
    <h1>KindEarth</h1>
    </div>

    
    </>
  )
}

export default App
