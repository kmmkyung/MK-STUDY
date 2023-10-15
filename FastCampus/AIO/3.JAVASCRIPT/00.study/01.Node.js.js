/*
[Node.js]
1. Node.js란?
Node.js는 Chrome V8 JavaScript 엔진으로 빌드된 Javascript *런타임이다.
런타임 <- 프로그래밍 언어가 동작하는 환경

2. 그래서 왜 필요한가?
웹브라우저에서는 HTML, CSS, JS만 동작한다.
저걸로만 개발해서 완성할 수 있는데 조금 비효율적이기 때문에 개발을 도와주는 여러 모듈을 설치해서 개발할것이다.
모듈은 실제 브라우저에서 직접적으로 동작할수가 없어 Node.js 환경에서 변환해서 사용

3. 설치
node --version(--v)
: 설치된 버전 알 수 있음

[NPM]
1. NPM이란?
NPM(Node Package Manager)는 전 세계의 개발자들이 만든 다양한 기능(패키지, 모듈)들을 관리

2. 프로젝트 만들기
npm init
-y를 붙이면 기본 질문을 생략하고 만들 수 있다!

3. 패키지 설치
npm install 패키지명
node-modules : 설치한 패키지(그 패키지가 의존하는 패키지들)가 들어간다.
package-lock.json : 패키지들의 관계를 명시해 놓은 파일
3-1. 번들러(bundler) : parcel(여러가지 있음)
번들러: 설치한 여러 패키지들을 실제 뤱사이트에 올라갈 수 있는 하나의 구조로 묶어주는 역활을 한다.
묶어주는 역활만 하지 웹페이지에서 실제 동작하는것이 아님 <- --save-dev(-D)를 붙여 설치
ex) npm install parcel -D

3-2. -D를 붙이면 어떤 일이 일어나나?
dependencies : 일반 의존성 : 브라우저에서 직접적으로 동작할 패키지들이 들어감
devDependencies : 개발용 의존성 : 개발할때만 사용하는 패키지 <- -D를 붙이면 여기로 들어간다.

3-3. 설치하면 import로 불러와서 사용할 수 있다.
import 키워드를 javascript 에서 사용하면 그 파일은 module이라는 개념으로 불리게 된다.
module 파일은 html에서 연결할때 'type=module' 이라는 속성이 필요하다.

3-4. parcel를 이용해서 개발서버 오픈하기
Live server는 고도화된 개발을 할 때는 쓰기 조금 어렵기 때문
명령어와 링크연결하면 개발사버를 열 수 있다.
package.json 파일에 [디버그]-["scripts"]-["test"] 가 있는데 "test"를 dev라는 이름으로 바꾸기(안바꿔도, 다른 이름으로 해도 괜찮음)
값은 "parcel 열어야 할 파일 링크" 적기
오픈 명령어 : npm run 명령어(npm run dev)
*/
/*
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
},
*/
/*
  "scripts": {
    "dev": "parcel ./index.html"
  },
*/

/*
3-5. parcel를 이용해서 JavaScript 파일로 변환한 내용은 어디에...?
dist 파일 안에 저장된다

3-6. 실제 사용자가 볼 화면으로 배포하기!
[디버그]-["scripts"] 아래에 명령어 추가
"build": "parcel build ./index.html"
npm run build 

4. 유의적 버전(Semantic Versioning, SemVer)
패키지 등을 설치할때 해당 패키지가 설치되고 마침표(.)로 구분된 3가지 숫자로 버전이 명시된다.
ex) node : v18.17.1 <- 의미는 Major.Minor.Patch(메이저 마이너 패치)
Major : 기존 버전과 호환되지 않는 새로운 버전 
Minor : 기존 버전과 호환되는 기능이 추가된 버전
Patch : 기존 버전과 호환되는 버그 및 오타 등이 수정된 버전

최신버전 확인하기
npm info 패키지명 -> latest에서 확인
다른 버전으로 설치
npm install 패키지명@버전
ex) npm install lodash@4.17.20

패키지 버전 앞에 ^(캐럿)이 붙어있는 경우?
Major 버전 안에서 가장 최신 버전으로 업데이트가 가능한 경우( -> Minor, Patch 업데이트 가능 )
업데이트 하기 
npm update 패키지명

패키지 버전 앞에 ~(틸드) 가 붙어있는 경우?
Minor 버전 안에서 가장 최신 버전으로 업데이트 가능한 경우( ->  Patch 업데이트 가능 )
*/