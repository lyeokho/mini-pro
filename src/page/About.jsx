
import ScrollBtn from '../component/ScrollBtn';
import './About.css'


function About(){

  return(

    <>
    <div className="about-container">
      <section className='about-part'>
          {/* <img src={`${process.env.PUBLIC_URL}/about_img/img_bg4.jpg`} alt='img'/> */}
          <img src="/about_img/img_bg5.jpg" alt="img" />
       <h2>우리의 시작</h2>
        <p>지구가 점점 더워지고, 환경문제가 심각해지는 지금, 우리 모두의 작은 선택이 큰 변화를 만든다고 믿습니다.<br />
        그래서 우리는 친환경 제품을 쉽고 편하게 구매할 수 있는 공간을 만들기로 했습니다.<br />

        함께 만든 시작, 2025년<br />
        2025년 봄, 우리가 처음 이 아이디어를 꺼낸 건 일회용 컵으로 가득 찬 쓰레기통 앞에서였습니다.<br />
        “왜 이렇게 불필요한 쓰레기가 많을까?” “우리라도 바꿔볼 수 없을까?”<br />
        이런 고민 끝에, 작은 실천이 모이면 큰 변화를 만든다는 믿음으로 이 브랜드가 탄생했습니다.<br />
        </p>
      </section> 

      <section className='about-part'>
        <img src="/about_img/img_bg3.jpg" alt="img" />
        <h2>브랜드 철학</h2>
        <p>“지속 가능함이 곧 아름다움이다.”<br />
         우리는 믿습니다.<br />
         지금 우리가 손에 쥔 하나의 텀블러, 하나의 냅킨이<br />
         결국 내일의 지구를 바꾼다고.<br />
          <br />
         환경을 위한 선택이 어렵지 않도록,<br />
         일상에서 쉽게 실천할 수 있도록,<br />
         우리는 ‘지속 가능함’을 중심에 둡니다.<br />
         </p>
      </section>

      <section className='about-part'>
      <img src="/about_img/img_bg1.jpg" alt="img"/>
      <h2>협력사&제휴 파트너</h2>
       <div className='partner-list'>
        <div className='partner-info'>
          <h4>그린서클 🍀 GreenCircle</h4>
            <p><strong>분야:</strong> 재생 종이, 친환경 포장재</p>
            <p><strong>설명:</strong> 폐종이와 해조류 소재를 이용한 친환경 포장 솔루션을 공급하는 기업.</p>
            <p><strong>우리의 제휴 내용:</strong> 전 제품 포장에 GreenCircle의 무독성 재생 포장재 사용</p>
        </div>
        <div className='partner-info'>
          <h4>리플랜트 🌱 ReePlant</h4>
            <p><strong>분야:</strong> 바이오 플라스틱 컵, 생분해 식기류</p>
            <p><strong>설명:</strong> 옥수수 전분 기반의 생분해성 소재를 활용해 일회용품을 대체하는 전문 브랜드.</p>
            <p><strong>우리의 제휴 내용:</strong> 텀블러, 접시, 수저 등 생분해 가능한 제품 공급</p>
        </div>
        <div className='partner-info'>
          <h4>제로웨이스트랩 🐋 ZeroWaste Lab</h4>
            <p><strong>분야:</strong> 환경 교육, 캠페인 기획</p>
            <p><strong>설명:</strong> 기업 및 소비자 대상 ‘제로 웨이스트’ 실천을 위한 프로그램을 운영.</p>
            <p><strong>우리의 제휴 내용:</strong> 고객 대상 ‘친환경 실천 가이드’ 제공 및 캠페인 공동 기획</p>
        </div>
       </div>
      </section> 
        <ScrollBtn />
    </div>
    </>
  )
}
export default About;