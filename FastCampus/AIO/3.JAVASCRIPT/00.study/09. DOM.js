// DOM(Document Object Model)
// DOM이란 HTML 문서를 객체로 표현한 것, JS에서 HTML을 제어할 수 있게 해준다.

// Node vs Element
// - 노드 : HTML 요소, 텍스트, 주석 등 모든 것을 의미
// - 요소 : HTML 요소를 의미

// N.parentElement
// 노드의 부모 요소를 반환

// E.closest()
// 자신을 포함한 조상 요소 중 'CSS 선택자'와 일치하는, 가장 가까운 요소를 반환
// 요소를찾지 못하면 null 반환

// N.previousSibling / N.nextSibling
// 노드의 이전 형제 / 다음 형제 노드를 반환

// E.previousElementSibling / E.nextElementSibling
// 요소의 이전 형제 / 다음 형제 요소를 반환

// E.children
// 요소의 모든 자식 요소 반환

// E.firstElementChild / E.lastElementChild
// 요소의 첫 번째 자식 / 마지막 자식 요소 반환


///// 생성, 조회, 수정
document.createElement()
// 메모리에만 존대하는 새로운 HTML 요소를 생성

E.prepend() / E.append()
// 노드를 요소의 첫 번째 / 마지마 자식으로 삽입

E.remove()
// 요소를 제거

E.insertAdjacentElement()
// 대상 요소의 지정한 위치에 새로운 요소 삽입
// 위치값: beforebegin / afterend - 대상 요소의 이전 형제 / 다음 형제
// 위치값: afterbegin / beforeend- 대상 요소의 내부 앞 / 뒤
// 대상요소.insertAdjacentElement(위치, 새로운 요소)

N.insertBefore()
// 부모노드의 자식인 참조노드의 이전 형제로 노드를 삽입
// 부모노드.insertBefore(노드,참조노드)

N.contains()
// 주어진 노드가 노드 자신을 포함한 후손인지 확인
// 노드.contains(주어진 노드)

N.textContent()
// 노드의 모든 텍스트를 얻거나 변경

E.innerHTML
// 요소의 모든 HTMl 내용을 하나의 문자로 얻거나, 새로운 HTML을 지정

E.dataset
// 요소의 각 'data-' 속성 값을 얻거나 지정

E.tagName
// 요소의 태그 이름을 반환

E.id
// 요소의 'id' 속성 값을 얻거나 지정

E.className
// 요소의 'class' 속성 값을 얻거나 지정



