let 사람 ={
  name:'aaa',
  sayHi:function(){
    console.log('안녕 나는 ' + this.name);
  }
}

사람.sayHi()

let 자료 = {
  data : [1,2,3,4,5],
  전부더하기 : function(){
    let add = 0;
    this.data.forEach(function(v){
      console.log('v',v);
      
      add = v + add
    });
    console.log(add);
    
  }
};

자료.전부더하기()


