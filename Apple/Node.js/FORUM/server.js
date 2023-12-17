const express = require('express')
const app = express()

app.use(express.static(__dirname+'/pubilc'))

app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행중')
})

app.get('/', (요청, 응답) => {
  // sendFile('파일경로') : html 파일을 보내줌
  // __dirname : 절대경로
  응답.sendFile(__dirname+'/index.html')
}) 

app.get('/news',(요청,응답)=>{
  응답.send('데이터')
})

