const Eng = ["A", "B", "C", "D", "E", "F", "G"];

for(let alphabet of Eng ){
  console.log(alphabet); // A,B,C,D,E,F,G
}

for(let alphabet of Eng ){
  if(alphabet == "D"){
    break
  }
  else{
    console.log(alphabet);
  }
}
// A,B,C

for(let txt of "text to long" ){
  console.log(txt); // t,e,x,t, ,t,o, ,l,o,n,g
}