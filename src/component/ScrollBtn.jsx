import { useEffect, useState } from "react";
import './ScrollBtn.css';





function ScrollBtn(){


  const[isShow, setIsShow]=useState(false);

  
  useEffect(()=>{
    const toggleVisibility=()=>{
      if(window.scrollY>200){
        setIsShow(true);
      }else{
        setIsShow(false);
      }
    }

      window.addEventListener('scroll', toggleVisibility);

      return()=>{
       window.removeEventListener('scroll', toggleVisibility);
     };

  })

  const topBtn=()=>{
    window.scrollTo({top:0, behavior:'smooth'});
  };

  return(
    <>
    {isShow && (
    <button onClick={topBtn} className="scrollBtn">⬆</button>
    
    )}



    </>






  )


}

export default ScrollBtn;