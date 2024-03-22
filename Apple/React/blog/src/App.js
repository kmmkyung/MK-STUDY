/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let post = '강남 우동 맛집' // 대충 서버에서 가져온 데이터
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
  let [좋아요,좋아요변경] = useState([0,0,0]);
  let [title,setTitle] = useState(0)
  let [입력값,입력값변경] = useState('');
  function 글제목수정(){
    let copy = [...글제목];
    copy[0] = "여자 코트 추천"
    글제목변경(copy)
  }
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
      <button onClick={글제목수정}>성별 바꾸기</button>
      <button onClick={정렬}>정렬하기</button>
      {
      글제목.map(function(a,i){
        return (
        <div className="list" key={i}>
          <h4 onClick={function(){setModal(!modal), setTitle(i)}}>{글제목[i]}
            <span onClick={function(e){
              e.stopPropagation()
              let copy = [...좋아요]
              copy[i] = copy[i]+1;
              좋아요변경(copy)
            }}>👍</span>{좋아요[i]}
          </h4>
          <p>2월 17일 발행</p>
          <button onClick={function(){
            let copy = [...글제목]
            copy.splice([i],1)
            글제목변경(copy)
          }}>삭제</button>
        </div>
        )
      })
      }
      <input type='text' onInput={(e)=>{입력값변경(e.target.value)}}></input>
      <button onClick={function(){
        let copy = [...글제목]
        copy.unshift(입력값)
        글제목변경(copy)}}>
          추가
      </button>
      {
      modal == true? <Modal 글제목={글제목} 글제목수정={글제목수정} title={title}></Modal> : null
      } 


    </div>
  );
}

function Modal(props){ // 컴포넌트
  return (
    <div className="modal" >
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.글제목수정}>글수정</button>
    </div>
    )
  }


export default App;
