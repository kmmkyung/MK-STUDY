/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let post = '강남 우동 맛집' // 대충 서버에서 가져온 데이터
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
  let [좋아요,좋아요변경] = useState(0);
  function 함수(){
    좋아요변경(좋아요++)
  }
  function 정렬(){
    let copy = [...글제목]
    copy.sort(function(a,b){
      return a>b? 1:-1
    })
    글제목변경(copy)
  }
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
      <div className="list">
        <h4>{글제목[0]}<span onClick={함수}>👍</span>{좋아요}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
