// type alias
// 타입 별칭 만들기
// type 타입변수명 = 타입종류
// 타입을 변수에 담으려면 선언을 type 키워드를 사용하면 된다.
// 일반 자바스크립트 변수와 차별을 주기 위해 관습적으로 대문자로 시작한다.

// let 동물 :string | number | undefined;
// 코드짜다보면 타입을 길게 나열하는 경우가 많다.
// 1. 보기 싫거나 2. 또 사용하고 싶으면 변수에 담아쓰면 된다.

// type Animal = string | number | undefined;
// let 동물 :Animal;

// object 타입도 저장이 가능하다.
// type 사람 = {
//   name : string,
//   age : number,
// }

// let teacher :사람 = { name : 'john', age : 20 } 

// // readonly
// // object에서 타입 속성을 바뀌지 않게 막고싶으면 읽기전용으로 만들 수 있다.
// // 속성 앞에 입력해주면 된다.
// // 
// const 변수로 선언하면 재할당시 에러가 난다.
// 하지만 object자료로 집어넣으면 재할당만 막을 뿐 속성변경까지는 관여하지 않기 때문에 속성은 변경가능하다.

// const 출생지역 = 'seoul'; 
// 출생지역 = 'busan'; //const 변수는 여기서 에러남 

// const 출생지역 = { city : 'seoul' }
// 출생지역.city = 'busan'; // 오류 안남

// type CountryCity = { readonly city : string }
// const 출생지역 : CountryCity = { city : 'seoul' }
// 출생지역.city = 'busan'; // readonly 라서 오류남

