import { useNavigate } from "react-router-dom"

function Card({data}){
  const navigate=useNavigate();
  return(
<>
    <div className="card" onClick={()=>{
      navigate('/shop/'+ data.id);
    }}>
      <img src={`https://vscode.dev/github/lyeokho/mini-pro/blob/minipro/01/public/img/${data.tatle}.png`}alt="" width='50%' />
      <h4>{data.title}</h4>
      <p>{data.content}</p>  
    </div>


</>


  )

}
export default Card;




