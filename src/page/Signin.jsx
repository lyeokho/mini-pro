
import './Signin.css'
import { useState } from "react"



function Login(){

  const[id, setId]=useState('');
  const[pw, setPw]=useState('');

  return(

    <>
 <div className='login-form'>   
  <div className="login-container">
    <h2>LOGIN OR CREATE AN ACCOUNT</h2>

    <input 
          type="text" 
          placeholder="아이디"
          value={id}
          onChange={(e)=>setId(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="패스워드"
          value={pw}
          onChange={(e)=>setPw(e.target.value)}
        />
    <div className="login-btn">
      <button>LOG IN</button>
    </div>
    <div className="create-btn">
      <button>CREATE ACCOUNT</button>
    </div>

    <div className="naver-btn">
      <button>네이버 로그인</button>
    </div>
    <div className="cacao-btn">
      <button>카카오계정 로그인</button>
    </div>
  </div>
</div>


 


    </>
  )
}

export default Login