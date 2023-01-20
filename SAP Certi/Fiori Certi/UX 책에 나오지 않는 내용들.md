# UX 책에 나오지 않는 내용들



## SAP Hybrid App Toolkit

fiori guide chpt 8 참조

* SAP Fiori 의 모바일 기능
* 모바일 장치에서 SAP Fiori 를 사용하는 방법
* SAP HAT(Hybrid App Toolkit) 와 그 구성 요소
* Apache Cordova 기반 hybrid app 생성 / Fiori 모바일 서비스에 배포



* ### Features of a Mobile Application

  SAP Fiori 앱은 휴대폰을 포함한 다양한 기기에서 액세스 할 수 있다.

  그러나 아래의 기능이 없는 이러한 SAP Fiori App 들은 enterprise mobile application 라고는 부를 수 없다.

  

  * #### Native Capabilities (기본 기능들)

    일반적으로 enterprise business application 은 다음 과 같은 device capabilities 에 액세스해야한다.

    * Barcode scanner

      바코드로 표시된 자료를 읽고 식별

    * Camera

      Travel Expense app 에서 첨부하기 위한 receipt 의 사진을 촬영

    * GPS location

      배달 트럭에서 사용하는 배달 앱의 최적 경로를 결정

    브라우저는 이러한 센서에 액세스 할 수 없으므로 브라우저에서 실행되는 SAP Fiori 앱은 이러한 device capabilities 를 사용할 수 없다.

    

  * #### Advanced Caching and Better Performance 

    SAP Fiori 앱에는 SAP UI5 라이브러리 및 SAP UI5 app 파일과 같은 많은 정적 리소스가 포함되어 있다.

    앱이 시작될 때마다 이러한 파일을 로드하면 속도 저하의 원인이 될 수 이싿.

    브라우저가 이러한 정적 파일을 캐시할 수 있지만 항상 최적인 것은 아니다.

    native app 은 이러한 정적 리소스를 완벽하게 제어할 수 있으며 브라우저에서 실행되는 SAP Fiori 앱에 비해 성능이 훨씬 향상될 수 있다.

  

  * #### Push Notification(푸시알림)

    푸시 알림은 미리 정의된 시나리오 발생시 마다 사용자의 화면에 나타나는 메시지이다.

    이러한 정보는 사용자에게 경고 / 중요 / 시간에 민감한 정보를 제공하는데 매우 유용할 수 있다.

  

  * #### Offline Capability(오프라인 기능)

    대부분의 모바일 시나리오에서 SAP Fiori App 을 사용하는 사용자는 패치가 적용된 인터넷 서비스가 있는 곳으로 이동해야 할 수 있다.

    이러한 경우 사용자는 부분적이고 중요한 기능을 최소한으로 포함하고 있는 앱으로 작업하고 인터넷 연결이 다시 설정될 때마다 서버와 동기화 할 수 있는 기능을 기대 할 수 있다.

  

  * #### User Authentication and Single Sign-On(사용자 인증 및 Single Sign-On)

    native app 은 여러 인증 및 SSO 절차를 지원할 수 있다.

    OTP(One-Time Password) 인증 / SAML 2.0 / X.509 인증서 / SAP 로그온 티켓은 native application 에서 지원해야하는 인증 메커니즘 중 일부이다.

  

  * #### Security(보안)

    native application 으로서 SAP Fiori App 에 대한 액세스를 보호하기 위해 ***<u>암호/패턴/생체 인식/얼굴인식</u>*** 과 같은 많은 추가 옵션을 사용할 수 잇다.

    또한 사용자가 기기에 저장한 데이터는 암호화를 통해 보호할 수 있다.

  









* ### Kapsel

  Kapsel 은 SAP 에서 Apache Cordova 용으로 개발한 plugin 의 집합으로 기업에 필요한 기능을 향상 시키기 위해 개발 되었다.

  이러한 Kapsel plugin 의 대부분은 advanced capability 들을 활용하기 위해 SAP Mobile Platform(또는 클라우드 버전) 과의 *<u>**integration**</u>* 이 필요하다.