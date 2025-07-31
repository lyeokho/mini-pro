import './ProductList.css'


function ProductCard({product}){

  return(
    <>
    
    <div className="product-card">
      <img src={product.image} alt={product.id} /> 
        <div className="product-info">
          <h3>{product.name}</h3>
          <h4>{product.content}</h4>
          <h4>￦{product.price.toLocaleString('ko-KR')}</h4>
            <div className='like'>❤</div>
            <div className='go-cart' onClick={()=>{
              
            }}>cart담기</div>
        </div>
      
    </div>
    
    
    
    
    
    
    
    </>


  )


}
export default ProductCard


