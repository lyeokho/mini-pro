
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'

function Header(){
  const navigate = useNavigate();

  return(

    <>
    <div className='header'>
  <div className="header-section">
    <Link to='/App'>HOME</Link>
    <Link to='/shop'>SHOP</Link>
    <Link to='/cart' >CART</Link>
    <Link to='/about' >ABOUT</Link>
    <Link to='/signin' >SIGNIN</Link> 
  </div>
    </div>
    </>

  )
}

export default Header
