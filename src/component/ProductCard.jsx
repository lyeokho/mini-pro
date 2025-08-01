import { useDispatch } from 'react-redux'
import { addToCart } from "../reducer/cartSlice";
import './ProductList.css'


function ProductCard({product}){

  const dispatch=useDispatch();

  return(
    <>
    
    <div className="product-card">
      <img src={product.image} alt={product.id} /> 
        <div className="product-info">
          <h3>{product.name}</h3>
          <h4>{product.content}</h4>
                                    {/* tolocaleString 소수점 표시해줌 */}
          <h4>￦{product.price.toLocaleString('ko-KR')}</h4>
            <div className='like'>❤</div>                {/* 액션을 받아 리듀서 실행*/}
            <div className='go-cart' onClick={()=>dispatch(addToCart(product))}>
            cart담기</div>
        </div>
      
    </div>
    
    
    
    
    
    
    
    </>


  )


}
export default ProductCard


