const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const logout = document.querySelector('.title-logout');
const greeting = document.querySelector("#greeting");
const Listli = document.querySelectorAll('#todo-list li')

const saveUsername = localStorage.getItem("USERNAME_KEY");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

// 1. saveUsername에 값이 없으면 form을 보여주고
// submit이벤트를 통해 logunsubmit 함수 호출해줘!
if(saveUsername === null){
  // show the form
  loginForm.classList.remove(HIDDEN_CLASS)
  loginForm.addEventListener("submit",loginSubmit);
}
// 만약 saveUsername에 값이 있으면 3번으로 바로 이동!
else{
  // show the greeting
  UserPrinting(saveUsername)
}

// 2. loginSubmit 함수 호출!
// 2-1 입력하면 리셋되는 이벤트를 막아줘
// 2-2 입력했으니 form태그를 숨겨줘
// 2-3 local에 USERNAME_KEY로 username의 value값을 저장해줘
// 2-4 저장한 username value값을 UserPrinting 전달해 함수호출해줘
// 2-5 로그아웃 버튼 보이기
////// loginSubmit 함수 //////
function loginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASS);
  const username = loginInput.value;
  localStorage.setItem("USERNAME_KEY", username);
  UserPrinting(username)
}

// 3. UserPrinting 함수 호출
// h1태그 보이게 해줘
// 저장한 username value값을 넣어 인사해줘
function UserPrinting(username){
  greeting.classList.remove(HIDDEN_CLASS)
  greeting.innerText = `Hello ${username} 🌺`;
  logoutBtn(username)
}

// 4. 로그아웃
function logoutBtn(username){
  const logout =  document.createElement('button');
  const from = document.querySelector('.title');
  from.appendChild(logout)
  // logout.classList.remove(HIDDEN_CLASS)
  logout.innerText=`${username} Logout`
  logout.addEventListener('click',()=>{
    localStorage.removeItem("USERNAME_KEY")
    localStorage.removeItem("todos")
    location.reload()
  })
}