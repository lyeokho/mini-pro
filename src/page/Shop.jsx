import './Shop.css'
import ProductList from "../component/ProductList";
import ScrollBtn from '../component/ScrollBtn';


function Shop(){


  return(
<>

<div className='shop'> 
    <div className="shop-top">
    </div>

    <div className="shop-list">
      <ProductList></ProductList>
    </div>
      <ScrollBtn />
    
</div>
</>

    
  );
}



export default Shop;
