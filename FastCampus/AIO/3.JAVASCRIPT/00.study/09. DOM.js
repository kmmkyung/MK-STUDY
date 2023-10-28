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