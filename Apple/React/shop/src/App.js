import { createContext, useState } from 'react';
import './App.css';
import { Navbar, Container, Nav} from 'react-bootstrap'
import date from './date.js';
import { Routes, Route, useNavigate, Outlet } from "react-router-dom"
import Detail from './routes/detail.js';
import Card from './component/card.js';
import Cart from './routes/cart.js';
import axios from 'axios'

export let Context1 = createContext()

function App() {
  let [shoes, setShoes] = useState(date);
  let [재고] = useState([10,11,12]);
  let navigate = useNavigate();
  let [click,setClick] = useState(1)
  let [] = useState()

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
        <Nav className="me-auto">
        <button onClick={()=>{ navigate('/') }}>Home</button> 
          <button onClick={()=>{ navigate('/detail') }}>Detail</button> 
        </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
        <div>
          <div className="main-bg" ></div>
            <div className="container">
              <div className="row">
                {
                shoes.map(function(v,i){
                  return <Card shoes={v} i={i} key={i}></Card>
                  })
                }
              </div>
            </div>
            <button onClick={()=>{
              console.log(click);
              if(click+1<4){
                axios.get('https://codingapple1.github.io/shop/data'+[click+1]+'.json').then((resolve)=>{
                  let copy = [...shoes, ...resolve.data]
                  console.log(copy);
                  setShoes(copy)
                  setClick(click+1)
                }).catch(()=>{console.log('실패함');})
              }
              else if(click>=3){
                alert('없음');
              }
            }}>더보기</button>
          </div>
        }></Route>
        <Route path="/detail/:id" element={<Context1.Provider value={{재고, shoes}}><Detail shoes={shoes}></Detail></Context1.Provider>}></Route>
        <Route path="/about" element={<About></About>}>
          <Route path="member" element={<div>member</div>}></Route>
          <Route path="location" element={<div>location</div>}></Route>
        </Route>
        <Route path="*" element={ <div>404 페이지</div> } />
        <Route path='/event' element={<Event></Event>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}

function About(){
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event(){
  return(
    <div>
      <div>오늘의 이벤트</div>
      <Outlet></Outlet>
    </div>
  )
}
export default App;