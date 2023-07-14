const player = {
  name: "suyoung",
  points: 120,
  fat: "little bit",
  tall: false
}

for(let key in player){
  console.log(key); // name, points, fat, tall 값 출력
	console.log(player[key]); // suyoung, 120, little bit, false
}