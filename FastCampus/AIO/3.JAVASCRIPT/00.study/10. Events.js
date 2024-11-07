///// Event
.addEventListener('event',function(){})
// 대싱에 이벤트 청취(Listen)를 등록
// 대상에 지정한 이벤트가 발생했을 때 지정한 함수(Handler)가 호출

.removeEventListener('event',function(){})
// 대싱에 등록했던 이벤트 청취(Listen)를 제거
// 메모리 관리를 위해 등록한 이벤트를 제거하는 과정이 필요할 수 있음

event.preventDefault();
// 브라우저가 갖고 있는 기본 동작 방지

event.stopPropagation();
// 이벤트 버블링 정지

///// 이벤트 객체 : 대상에서 발생한 이벤트 정보를 담고 있음
.target
// 이벤트가 발생한 해당 요소

.currentTarget
// 이벤트가 등록된 요소

///// 3번쨰 인수
.addEventListener('event',function(){},{capture:true})
// 이벤트 캡쳐링 : 이벤트가 버블링 되는 과정에서 해당하는 이벤트의 콜백함수를 먼저 실행
// = 상위 요소의 이벤트보다 먼저 실행
// 3번째 인수로 {capture:true}를 주게 되면 캡쳐링이 일어난다

.addEventListener('event',function(){},{once:true})
// 이벤트 함수를 한번만 실행

.addEventListener('event',function(){},{passive:true})
// 요소의 기본 동작과 핸들러 실행 분리 
// 처리할 내용의 동작이 많을 때 이벤트와 상관없이 기본 동작을 부드럽게 실행
// 만약 휠 이벤트를 할때마다 콘솔창에 문자를 출력하면 실행이 느려지겠지만 이 속성을 사용하면
// 콘솔창 문자와 기본 동작이 분리되어 스크롤은 더뎌지지 않고 부드럽게 움직임

//// 이벤트 위임
// : 비슷한 패턴의 여러 요소에서 이벤트를 실행해야 할 경우,
// 단일 조상 요소에서 제어하는 이벤트 위임 패턴을 사용할 수 있다.
// 자식요소에서 for반복말고 조상에서 closest을 사용
조상요소.addEventListener('event',function(){
  자식요소 = event.target.closest('자식요소')
  // closest : 본인을 포함해 가장 가까운 조상 요소를 찾음
  if(자식요소){} // 자식요소를 찾으면 실행
})

///// 마우스 & 포인터 이벤트
click // 클릭했을 때
dblclick // 더블 클릭했을 때
contextmenu // 우클릭했을 때
mousedown // 버튼을 누를 때
mouseup // 버튼을 땔 때
mouseenter // 포인터가 요소 위로 들어갈 때
mouseleave // 포인터가 요소 밖으로 나갈 때
mousemove // 포인터가 움직일 때
wheel // 휠 버튼을 회전시킬 때

///// 키보드 이벤트
keydown // 키를 누를 때
keyup // 키를 땔 때

.addEventListener('keydown',function(event){
  if(!event.isComposing) // 문자가 입력 완료 된후
  {}
})
// enter키 tab키와 같이 input에서 입력을 완료할 때나 키보드 이벤트를 주고 한글을 입력하면 이벤트가 2번 실행된다.
// 키보드로 CJK을 입력할때 브라우저가 처리하는 과정 필요하기 떄문 = 2번 처리
isComposing
// CJK 문자를 처리하는 과정을 boolean으로 반환
// true = 문자가 처리되고 있는 중 / false = 문자 처리완료 후

///// 포커스 & 폼 이벤트
focus // 요소가 포커스를 얻었을 때
blur // 요소가 포커스를 잃었을 때
input // 값이 변경되었을 때
change // 상태가 변경되었을 때
submit // 제출 버튼을 선택했을 때
reset // 리셋 버튼을 눌렀을 때

// 기타
window.addEventListener('popstate',function(){})
// 사용자가 브라우저 페ㅐ이지에서 히스토리를 남기는 동작을 할 때마다 발생하는 이벤트
