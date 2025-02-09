// console
// 콘솔에 메시지나 객체를 출력
log : 일반 메세지
warn : 경고 메시지
error : 에러 메시지
dir : 속성을 볼 수 있는 객체를 출력

// Cookie(쿠키) : 사용자가 특정한 웹 사이트에 방문했을 때, 사용자 컴퓨터에 저장하는 기록파일
// 도메인 단위로 저장
// 포준안 기준. 사이트당 최대 20개 및 4KB로 제한, 영구저장 불가능
domain : 유효 도메인 설정
path : 유효 경로 설정
expires : 만료 날자 설정
max-age : 만료 타이머 설정

// Storage(스토리지)
// 도메인 단위로 저장
// 5MB 제한, 세션 또는 영구 저장 가능
sessionStorage : 브라우저 세션이 유지되는 동안에만 데이터 저장
localStorage : 따로 제거하지 않으면 영구적으로 데이터 저장
.getItem() : 데이터 조회
.setItem() : 데이터 추가
.removeItem() : 데이터 제거
.clear() : 스토리지 초기화

// Location : 현재 페이지 정보를 반환하거나 제어
.href : 전체 URL 주소
.protocol : 프로토콜
.hostname : 도메인 이름
.pathname : 도메인 이후 경로
.host : 포트 번호를 포함한 도메인 이름
.port : 포트 번호
.hash : 해서 정보(페이지의 ID)
.assign(주소) : 해당 '주소'로 페이지 이동
.replace(주소) : 해당 '주소'로 페이지 이동, 현재 페이지 히스토리 제거
.reload(강력) : 페이지 새로고침, 'true'인수는 '강력'새로고침

// History : 브라우저 히스토리(세션기록)정보를 반환하거나 제어
.length : 등록된 히스토리 개수
.scrollRestoration : 히스토리 탐색시 스크롤 위치 복원여부 확인 및 저장
.state : 현재 히스토리에 등록된 데이터(상태)
.back() : 뒤로 가기
.forward() : 앞으로 가기
.go(위치) : 현재 페이지 기준 특정 히스토리 '위치'로 이동
.pushState(상테,제목,주소) : 현재 히스토리의 상태 및 주소를 교체
//> 모든 브라우저(사파리 제외)는 '제목' 옵션을 무시한다.
.replaceState(상태,제목,주소) : 히스토리에 기록을 남기지 않고 상태 및 주소를 교체
