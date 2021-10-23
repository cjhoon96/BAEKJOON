브라우저는 월드와이드웹(WWW)에서 정보를 검색, 표현하고 탐색하기 위한 소프트웨어이다.

 
인터넷에서 특정 정보로 이동할 수 있는 주소 입력창이 있고 서버와 HTTP로 정보를 주고 받을 수 있는 네트워크 모듈도 포함하고 있다.

그리고 서버에서 받은 문서(HTML, CSS, Javascript)를 해석하고 실행하여 화면에 표현하기 위한 해석기(Parser)들을 가지고 있다.

브라우저마다 서로 다른 엔진을 포함하고 있다.


![BrowserComponents](BrowserComponents.png)
* ## UI
    화면에 보이는 모든것
    ex) 좌측 왼쪽으로 가는 내비게이션, x버튼 등,,

* ## Browser engine
    UI와 렌더링 엔진 간의 작업을 처리  
    소스코드를 실행해서 화면에 보여줄 수 있는 엔진    
    브라우저 소프트웨어를 동작 시켜주는 핵심 엔진  

* ## Rendering engine
    화면에 위치를 잡고 색칠을 해주는 엔진  
    요청된 콘텐츠를 표시합  
    예를 들어, 요청된 콘텐츠가 HTML인 경우 렌더링 엔진은 HTML과 CSS를 구문 분석하고 구문 분석된 콘텐츠를 화면에 표시한다.

* ## Networking
    HTTP 요청과 같은 네트워크 호출의 경우 플랫폼 독립 인터페이스 뒤에 있는 플랫폼마다 다른 구현을 사용합니다.

* ## UI Backend
    콤보 상자 및 창과 같은 기본 위젯을 그리는 데 사용됩니다. 이 백엔드는 플랫폼과 관련이 없는 일반 인터페이스를 표시합니다. 그 밑에는 운영 체제 사용자 인터페이스 방식이 사용된다.

* ## JavaScript Interpreter
    JavaScript 코드를 구문 분석하고 실행하는 데 사용  

* ## Data Storage  
    지속성 레이어  
    브라우저는 쿠키와 같은 모든 종류의 데이터를 로컬에 저장해야 할 수 있다.   
    브라우저는 localStorage, IndexedDB, WebSQL 및 FileSystem과 같은 스토리지 메커니즘을 지원한다.  


HTML을 Parsing하여 문자단위로 해석하여 DOM Tree를 만든다.
## ==>  
CSS를 해석해서 역시 CSS Tree(CSS Object Model)을 만듭니다.
## ==>  
DOM Tree와 CSS Tree, 이 두 개는 연관되어 있으므로 Render Tree로 다시 조합된다.
이렇게 조합된 결과는 화면에 어떻게 배치할지 크기와 위치 정보를 담고 있다.
## ==>  
이후에 이렇게 구성된 Render Tree정보를 통해서 화면에 어떤 부분에 어떻게 색칠을 할지 Painting과정을 거치게 된다.


![사파리 브라우저 처리과정](./사파리 브라우저 처리과정.png)



[브라우저의 동작 과정](https://d2.naver.com/helloworld/59361) .

[jsbin.com](jsbin.com)
