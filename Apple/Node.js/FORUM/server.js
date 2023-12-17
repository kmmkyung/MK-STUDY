const express = require('express')
const app = express()

// pubilc이라는 폴더 쓸거임~ 이라는 선언
app.use(express.static(__dirname+'/pubilc'))

////////////////////////////////// 서버와 몽고디비 연결
const { MongoClient } = require('mongodb')

let db
const url = 'mongodb+srv://admin:20131876@cluster0.jl1pweh.mongodb.net/?retryWrites=true&w=majority'
new MongoClient(url).connect().then((client)=>{
  console.log('DB연결성공')
  db = client.db('forum')
  app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행중')
})
}).catch((err)=>{
  console.log(err)
})

app.get('/', (요청, 응답) => {
  // sendFile('파일경로') : html 파일을 보내줌
  // __dirname : 절대경로
  응답.sendFile(__dirname+'/index.html')
}) 

app.get('/news',(요청,응답)=>{
  db.collection('post').insertOne({title:'어쩌구'})
})

