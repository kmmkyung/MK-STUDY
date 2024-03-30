import { useFetcher, useParams } from "react-router-dom";
import { useEffect,useState } from "react";


function Detail(props){
  let {id} = useParams();
  let findItem = props.shoes.find(function(ele){
    return ele.id == id
  })
  let [alertNum,alertFn] = useState(true)
  let [count, setCount] = useState(0)
  let [num, fnNum] = useState('')
  useEffect(function(){
    let a = setTimeout(function(){alertFn(false)},2000)
    return()=>{
      clearTimeout(a)
    }
  },[])
  useEffect(function(){
    if(isNaN(num)== true){
      alert('숫자만 입력')
    }
  },[num])

  return(
    <div className="container">
      {alertNum==false?null:
      <div className="alert">2초 이내 구매시 할인</div>
      }
      <button onClick={()=>{setCount(count+1)}}>{count}버튼</button>
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes"+[Number(id)+1]+".jpg"} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findItem.title}</h4>
          <p>{findItem.content}</p>
          <p>{findItem.price}</p>
          <input onChange={(e)=>{fnNum(e.target.value)}}></input>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  )
}

export default Detail;