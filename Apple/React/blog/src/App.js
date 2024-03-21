/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let post = '강남 우동 맛집' // 대충 서버에서 가져온 데이터
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
  let [좋아요,좋아요변경] = useState([0,0,0]);
  function 정렬(){
    let copy = [...글제목]
    copy.sort(function(a,b){
      return a>b? 1:-1
    })
    글제목변경(copy)
  }
  let [modal,setModal] = useState('false')
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <button onClick={function(){
          let copy = [...글제목];
          copy[0] = "여자 코트 추천"
          글제목변경(copy)
          }}>성별 바꾸기</button>
      <button onClick={정렬}>정렬하기</button>
      {/* <div className="list">
        <h4>{글제목[0]}<span onClick={함수}>👍</span>{좋아요}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={function(){setModal(!modal)}}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
       */}
      {
      글제목.map(function(a,i){
        return (
        <div className="list" key={i}>
          <h4 onClick={function(){setModal(!modal)}}>{글제목[i]}
            <span onClick={function(){
              let copy = [...좋아요]
              copy[i] = copy[i]+1;
              좋아요변경(copy)
            }}>👍</span>{좋아요[i]}
          </h4>
          <p>2월 17일 발행</p>
        </div>
        )
      })
      }
      {
      modal == true? <Modal></Modal> : null
      } 


    </div>
  );
}

function Modal(){ // 컴포넌트
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    )
  }


export default App;
