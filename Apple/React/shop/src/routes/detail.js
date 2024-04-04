import { useParams } from "react-router-dom";
import { useContext, useEffect,useState } from "react";
import { Nav } from 'react-bootstrap'
import {Context1} from './../App.js'


function Detail(props){
  let {id} = useParams();
  let findItem = props.shoes.find(function(ele){
    return ele.id == id
  })
  let [alertNum,alertFn] = useState(true)
  let [count, setCount] = useState(0)
  let [num, fnNum] = useState('')
  let [tab, tabChange] = useState(0)
  let [fade2, setFade2] = useState('')
  let {재고,shoes} = useContext(Context1)
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

  useEffect(()=>{
    setTimeout(()=>{setFade2('end')},100)
    return ()=>{
      setFade2('')
    }
  },[])

  return(
    <div className={"container start "+ fade2}>
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
      <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={function(){tabChange(0)}}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={function(){tabChange(1)}}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={function(){tabChange(2)}}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} shoes={props.shoes}></TabContent>
    </div> 
  )
}

function TabContent({tab,shoes}){
  let [fade, setFade] = useState('')

  useEffect(()=>{
    setTimeout(()=>{setFade('end')},100)
  return ()=>{setFade('')}
  },[tab])


  if(tab==0){
    return <div className={"start " + fade}>{shoes[0].title}</div>
  }
  if(tab==1){
    return <div className={"start " + fade}>내용1</div>
  }
  if(tab==2){
    return <div className={`start ${fade}`}>내용2</div>
  }
}

export default Detail;