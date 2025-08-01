import { useDispatch, useSelector } from "react-redux"
import { removeFromCart, increaseQuantity, decreaseQuantity  } from "../reducer/cartSlice";
import './Cart.css'
import ScrollBtn from "../component/ScrollBtn";


function Cart() {
  const cartItems = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)




  return (

    <div className="cart">
    <div className="cart-page">
      {/* <h2>CART</h2> */}
      {cartItems.length === 0 ? (
        <p>장바구니가 비었습니다.</p>) : (
        cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />

            <div>
              <h3>{item.name}</h3>
              <p>{item.content}</p>
              <p>￦{item.price.toLocaleString('ko-KR')}</p>

              <div className="cnt">
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              </div>

              <button onClick={()=> dispatch(removeFromCart(item.id))}>X</button>
           
            </div>

          </div>
      
        )
      )

      )}

      <h2>총합: ￦{total.toLocaleString('ko-KR')}</h2>
     


    </div>
    <ScrollBtn />
   </div>
  )
}

export default Cart