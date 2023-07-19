const nameAll = {
	people : '2',
	firstname : function(){
		return 'kim su young'
	},
	lastname : () => {
		console.log('kim min kyung');
	}
}

console.log(nameAll.firstname()); // kim su young
nameAll.lastname(); //kim min kyung
//함수 자체가 담겼기 때문에 실행()을 해야 한다!