/*
제이쿼리 공부

1. 제이쿼리 함수 호출하기
jQuery() -> $()

2. 로딩이벤트 설정하기
(로드구역은 "DOMContentLoaded"를 사용함!)
-> $(document).ready(function(){코드})
-> $(function(){코드})
-> $(()=>{코드})

3. 요소 선택 방법
-> $()

4. css 변경방법(단일, 다중)
-> css({"속성명","값"})
-> css({속성명:"값",속성명:"값"})

5. 이벤트 메서드 사용 방법
-> $(선택자).이벤트메서드(function(){})
-> $(선택자).on(이벤트종류,function(){})

6. text()
: 텍스트를 변경하거나 읽어오는 메서드
: JS의 innerText와 유사함
$(선택자).text(변경글자입력)

7. animate()
: animate({CSS설정},시간,이징,함수)
: 큐(Queue)?
-> 애니메이션과 같은 실행코드를 메모리에 적재하여 실행을 유지할 수 있도록 관리하는 메모리영역
애니메이션 메서드를 연달아 쓰면 순서대로 실행함
$().animate({}).animate({})...

8. html()
: html 태그를 넣거나 읽어오는 메서드
: JS의 innerHTML과 유사함 
$(선택자).html("<div>하하하</div>")

9. index()
: 선택요소의 순번을 알아오는 메서드

10. children("특정요소")
: 선택요소의 직계자식요소를 선택하는 메서드
: 특정요소를 입력하면 직계자식요소중 특정요소만 선택

11. parent()
: 선택요소의 부모요소를 선택하는 메서드

12. prev()
: 선택요소의 이전 형제요소 선택

13. prevAll()
: 선택요소의 이전 형제요소 전부선택 

14. next()
: 선택요소의 다음 형제요소를 선택

15. nextAll()
: 선택요소의 다음 형제요소를 전부 선택

16. siblings("특정요소")
: 선택요소의 나머지 형제요소를 선택
: 특정요소를 입력하면 나머지 형제요소중 특정요소만 선택

17. first()
: 선택요소가 집합일때 그 중 첫번째 요소

18. last()
: 선택요소가 집합일때 그 중 마지막째 요소

19. eq(n)
: 선택요소가 집합일때 그 중 n번째 요소

20. filter(특정요소)
: 특정요소의 내부에서 다시 선택하는 메서드

21. append(추가/이동요소)
: 새로운 요소를 맨 뒤에 추가하거나 기존 요소를 맨 뒤로이동하는 메서드
: JS내장함수 : appendChild()와 유사

22. prepend(추가/이동요소)
: 새로운 요소를 맨 앞에 추가하거나 기존 요소를 맨 앞로이동하는 메서드

23. remove()
: 선택요소를 제거함

24. attr(속성명, 속성값)
: 선택요소의 속성값을 변경
: JS의 setAttribute(속성명,속성값) 과 유사함

25. empty()
: 선택요소의 text 내용을 지움

26. stop()
: 이벤트나 효과를 중간에 멈출때 사용

27. show()
: display를 보이게 함

28. hide()
: display:none 으로 변경 함

29. fadeIn()
: display를 보이게 한 후 opacity를 0에서 1로 변경 애니메이션을 함

30. fadeOut()
: opacity를 1에서 0으로 변경 애니메이션 후 display:none으로 변경

31. fadeToggle()
: display:none 상태를 판단하여 adeIn()/fadeOut() 상태를 전환함

32. fadeTo()
: opacity값을 특정값으로 변경하여 애니메이션함
: opacity값이 0이되어도 display:none되지 않음

33. slideUp()
: 선택요소의 height값을 0으로 변경하는 애니메이션 기능

34. slideDown()
: 선택요소의 height값을 원래의 높이값으로 애니메이션함

35. slideToggle()
: slideUp() / slideDown() 전환

36. offset().방향값
: 보이는 화면 기준 절대값 위치를 알 수 있음
: .top .bottom .left .right

37. position().방향값ㅊ
: 부모자격 박스 기준 절대값 위치를 알 수 있음
: .top .bottom .left .right

*/