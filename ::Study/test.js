const parent = document.querySelector('.parent');

console.log(parent.childNodes);
console.log(parent.children);


N.parentElement
// 노드의 부모 요소 반환한다.

document.createElement()
// 메모리에만 존재하는 새로운 HTML 요소를 생성해 반환합니다.

N.perviousSibling / N.nextSibling
// 노드의 이전 형제 혹은 다음 형제 노드를 반환한다.

E.perviousElementSibling / E.nextElementSibling
// 요소의 이전 형제 혹은 다음 형제 요소 반환한다.

E.children
// 요소의 모든 자식 요소를 반환한다.

E.firstElementChild / E.lastElementChild
// 요소의 첫 번째 자식 혹은 마지막 자식 요소를 반환한다.

E.prepend(삽입할노드) / 대상요소.append(삽입할노드)
// 노드의 요소를 첫번째 / 마지막 자식으로 삽입한다.
// 인수를 여러개 사용할 수 있다.

E.remove()
// 요소를 제거한다.

E.insertAdjacentElement(위치,새로운요소)
// 대상요소의 지정한 위치에 새로운 요소를 삽입한다

N.insertBefore(노드,참조노드)
// 부모노드의 자식인 참조노드의 이전 형제로 노드를 삽입한다

N.contains(주어진노드)
// 주어진노드가 '노드'의 자신을 포함한 후손인지 확인.

N.textContent
// 노드의 모든 텍스트를 얻거나 변경한다.

E.innerHTML
// 요소의 모든 HTML 내용을 하나의 문자로 얻거나, 새로운 HTML을 지정한다.

E.dataset
// 요소의 각 'data-' 속성 값을 얻거나 지정한다.

E.classList
// 요소의 'class' 속성값을 제어한다.
// .add() : class 값을 추가
// .remove() : 기존 class 값을 제거 
// .toggle(): 값을 토글
// .contains(): 값을 확인 - true / false 값으로 반환

E.getAttribute() / E.setAttribute()
// 요소에서 특정 속성 값을 얻거나 지정한다.

---- window위치

window.innerWidth / window.innerHeight
// 전체화면(Viewport 브라우저)의 크기를 얻는다.

window.scrollX / window.scrollY
// 페이지의 좌상단 기준, 현재 화면(Viewport)의 수평 혹은 수직 스크롤 위치 값

window.scrollTo() / E.scrollTo(X좌표, Y좌표)
// 지정된 좌표로 대상(화면, 스크롤 요소)를 스크롤한다.

---- E 크기

E.clientWidth / E.clientHeight
// 테두리선(border)을 제외한 요소의 크기를 얻는다.

E.offsetWidth / E.offsetHeight
// 테두리선(border)을 포함한 요소의 크기를 얻는다.

E.scrollLeft / E.scrollTop
// 스크롤 요소의 좌상단 기준. 현재 스크롤 요소의 수평 혹은 수직 스크롤 위치 값

E.offsetLeft / E.offsetTop
// 페이지의 좌상단 기준, 요소의 위치를 얻는다.

E.getBoundingClientRect()
// 테두리 선(border)을 포함한 요소의 크기와 화면에서의 상대 위치 정보를 얻는다.



-- 이벤트

.addEventListener() / .removeEventListener()
// 대상에 지정한 이벤트가 발생했을 때 지정한 함수(Handler)가 호출된다.
// 대상에 지정한 이벤트를 제거한다.


