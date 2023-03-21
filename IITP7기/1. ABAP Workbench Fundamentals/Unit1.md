# Unit 1 SAP Systems

## 1. Exlplaining the Key Capabilities of SAP NetWeaver

* ### SAP NetWeaver란? 

  : 프레임워크 sap에서 만든 모든 product를 담고 있는 프레임워크

* ### Custom development 의 ABAP Development를 이번 교재를 통해 학습한다.

****

* ### Presentation Layer

  : SAP GUI , Browser



* ### Application Level

  * java

  * abap

  * #### External Systems

    * SAP, non-SAP 시스템들을 연결할 수 있다.



* ### Database Level

  다양한 DB를 사용할 수 있다. Oracle이나 sap의 hana db를 많이 사용



****

****



## 2. Explaining the Architecture of an SAP System, Application Server (AS) ABAP and Application Server (AS) Java

* ### SAP NetWeaver Runtime Environments

  * SAP NetWeaver의 런타임 환경은 abap 서버와 java 서버 두가지 시스템으로 나뉘어진다. 
  * 우리는 본 교육에서 abap 서버를 사용한다.

****

* ### 클라이언트 / 서버

  * #### 하드웨어의 관점

    * 클라이언트 컴퓨터와 서버 컴퓨터가 LAN / WAN 을 통해 연결되어 있다.
    * 확실한 분리가 되어있다.

  * #### Software 관점

    * 서비스를 요청하는 쪽이 클라이언트 응답하는 쪽이 서버
    * 명확한 구분이 없다. 때때로 서버가 클라이언트가 되기도 한다.

* ### 클라이언트 / 서버 구성

  * #### Two-tier

  * #### Three-tier

    * SAP는 Three-tier

  * #### Multi-tier

  * #### Process 관점

* ### Instance of SAP System

  * ###  















* ### /n 

  기본은 초기화면

  뒤에 다른 명령이 붙을 경우 현재의 윈도우에서 프로그램 실행을 의미

  * #### se80

    : object navigator

    * ##### (t코드)

      t코드에 해당되는 프로그램까지 실행

  * #### se11

    : ABAP Dictionary : Initial Screen 

  * #### end

    : log-off 의사를 묻는 컨펌팝업이 뜬다.

  * #### nex

    : 컨펌팝업 없이 log-off

* ### /i 

  창닫기

* ### /o 

  창관리







* #### Maintain User Profile

  * Menubar => system => user profile => user data
  * 칸을 클릭 후 f1을 통해 해당 칸이 나타내는 정보가 무엇인지 볼 수 있다.
    * technical information을 통해 어떻게 작동 되는지를 볼 수 있으며 program name의 프로그램을 클릭하여 해당 프로그램으로 갈 수 있다.
  * f4를 통해 입력할 수 있는 정보를 볼 수 있다.