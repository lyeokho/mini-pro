import ProductCard from "./ProductCard";



function ProductList(){

  
  const products=[
    {
      id:0,
      name:'친환경 식기 세트',
      content:'재질: 대나무+ 생분해성 크라프트지, 반복 사용 가능한 구조',
      price:5000,
      image:'/shop_img/product0.png'
    },
    {
      id:1,
      name:'친환경 빨대',
      content:'재질:생분해성 크라프트지, 반복 사용 가능한 구조',
      price:1000,
      image:'/shop_img/product1.png'
    },
    {
      id:2,
      name:'친환경 접시',
      content:'재질:생분해성 크라프트지, 반복 사용 가능한 구조',
      price:3000,
      image:'/shop_img/product2.png'
    },
    {
      id:3,
      name:'친환경 컵',
      content:'재질:생분해성 크라프트지, 반복 사용 가능한 구조',
      price:2000,
      image:'/shop_img/product3.png'
    },
    {
      id:4,
      name:'친환경 티슈',
      content:'재질:생분해성 크라프트지, 무표백+반복 사용 가능한 구조',
      price:3000,
      image:'/shop_img/product4.png'
    },
    {
      id:5,
      name:'친환경 냅킨',
      content:'재질:생분해성 크라프트지, 무표백+반복 사용 가능한 구조 (50매)',
      price:3000,
      image:'/shop_img/product5.png'
    },
    {
      id:6,
      name:'친환경 텀블러',
      content:'재질:스테인리스+세라믹, 무표백 슬리브',
      price:20000,
      image:'/shop_img/product6.png'
    },  
    {
      id:7,
      name:'친환경 비닐봉투',
      content:'재질:생분해성 PLA, 무독성+생분해 가능 (50매)',
      price:3000,
      image:'/shop_img/product7.png'
    },
    {
      id:8,
      name:'친환경 볼펜',
      content:'재질:생분해성 크라프트지+대나무, 생분해 가능+무독성 잉크',
      price:2000,
      image:'/shop_img/product8.png'
    },
    {
      id:9,
      name:'친환경 우산',
      content:'재질:RPET+오가닉코튼+TPU, 생분해 가능+무독성 잉크',
      price:10000,
      image:'/shop_img/product9.png'
    },
    {
      id:10,
      name:'친환경 컨버스백',
      content:'재질:RPET+오가닉코튼, 생분해 가능+방수 기능',
      price:15000,
      image:'/shop_img/product10.png'
    },
  ]
  
  
  return(
    <>
      <div className="product-list">
        {
        products.map(product=>(
          <ProductCard product={product} key={product.id}></ProductCard>
        ))
        }
  

      </div>  



    
    </>
    
    
    
  )
}
  




export default ProductList;