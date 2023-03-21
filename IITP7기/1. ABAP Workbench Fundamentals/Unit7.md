# Unit7 Flow of an ABAP Program



# Lesson1 Describing the Processing of ABAP Programs

****

## 개요

SAP NetWeaver Application Server(AS)에서 단순 다이얼로그 프로그램이 어떤 식으로 실행되는지 설명한다.

## 목표

* SAP NetWeaver AS 아키텍처와 ABAP 프로그램 실행에 대해 설명할 수 있어야 한다.
  * SAP NetWeaver Application Server 아키텍처
  * ABAP 런타임 시스템에서 단순 다이얼로그 프로그램이 실행되는 방식 

****



* ## ABAP  System Architecture

  ![abapsystem](./img/abapsystem.png)

  SAP NetWeaver AS의 모듈 아키텍처는  소프트 웨어 중심 클라이언트/서버 원칙을 따른다.

  SAP NetWeaver AS에서는 프리젠테이션, 어플리케이션 로직 및 데이터 저장소를 서로 다른 시스템에 지정하느느 방식으로 시스테 확장성의 기초를 구축합니다.

  * ### SAP NetWeaver Application Server 아키텍처 Layer

    * #### Database Layer

      * 최하위계층이다.
      * 이 계층에서는 RDBMS 를 통해 데이터가 관리된다.
      * 어플리케이션 데이터뿐 아니라, SAP 시스템 작업에 필요한 프로그램과 메타데이터가 포함된다.

    * #### Application Server Layer

      * 중간 계층이다.
      * SAP가 제공하는 어플리케이션, 모든 커스텀 개발 방식 어플리케이션 등의 ABAP 프로그램이 어플리케이션 서버에서 실행된다.
      * ABAP 프로그램은 데이터베이스에서 데이터를 읽고 처리하며 필요한 경우 데이터베이스에 신규 데이터를 저장한다.

    * #### Presentation Server Layer

      * 최상위 계층이다.
      * 각 사용자가 프로그램에 액세스 하고 신규 데이터를 입력하며 작업 프로세스의 결과를 수신 할 수 있는 사용자 인터페이스가 있다.

    수직적으로 한 컴퓨터에 모든 계층을 설치하거나 서로 다른 컴퓨터에 각각의 계층을 설치할 수 있으며 수평적으로는 프리젠테이션 및 어플리케이션 서버 게층을 개수 제한 없이 여러 컴퓨터 간에 배포할 수 있다.

    

****



* ## Expert for an ABAP Program (ABAP 프로그램 구조 요약도)

  ![abapprogram](./img/abapprogram.png)

****



* ## Overview of Program Flow(프로그램 흐름 개요)

  ![programflow](./img/programflow.png)

  일반 사용자**(End User)**에게는 SAP 시스템은 블랙 박스와 같다.

  즉 End User는 program view만 관심 있으며 ABAP 프로그램의 프로세스 흐름을 정확히 알아야 할 필요가 없다. 

  하지만 개발자들은 고유한 프로그램을 개발하기 위해 프로그램 실행시 서버 레벨과 프로세스 흐름 간의 상호 작용을 파악할 수 있어야한다.



****



* ## Interplay Between Server Levels and Program Flow(서버레벨과 프로그램 흐름 간의 상호 작용)

  ![programflow1](./img/programflow1.png)

  사용자가 Enter, 기능키, 메뉴기능, 버튼 선택과 같은 액션을 취하면 제어 권한이 프리젠테이션 서버에서 어플리케이션 서버로 전달된다.

  ABAP 프로그램에서 또다른 사용자 다이얼로그가 실행되면 화면이 전송되고 제어 권한이 프리젠테이션 서버로 다시 한번 돌아간다.

  프로그램은 하나의 블록이 아닌 여러개의 단위로 구성되며 이를 모듈화라고 한다.

  이러한 모듈화 단위의 대부분은 둘 이상의 프로그램에서 사용할 수 있다.

  모듈화 단위를 재사용 단위라고도 하는 이유가 여기에 있다. 

  좋은 프로그램은 데이터베이스 액세스가 이러한 재사용 단위로 캡슐화 되어야 한다.

  재사용 단위를 이용하면 사용자 다이얼로그와 데이터베이스 액세스의 설계를 구분할 수 있어, 서로 다른 사용자 다이얼로그에 같은 데이터베이스 액세스를 사용할 수 있다.

  

  user dialog : 사용자들이 볼 수 있는 스크린



* ## Program Flow in Detail - Selection Screen and List (세부 프로그램 흐름 - 선택 화면과 리스트)

  ![programflow2](./img/programflow2.png)

  ABAP 프로그램은 프로그램을 생성하면 Database Table의 레파지토리 내부에 생성된다.

  사용자가 시스템에 로그온할 때마다 화면이 표시된다. 사용자는 이 화면에서 메뉴 경로를 통해 ABAP 프로그램을 시작할 수 있다.

  ![programflow3](./img/programflow3.png)

  프로그램이 실행 되면 레파지토리에서 프로그램을 읽어 와서 Selection Screen, Data Objects, ABAP Processing Block 등을 가져온다.

  이 경우 시스템은 프로그램 컨텍스트를 어플리케이션 서버로 로드한다.

  프로그램 컨텍스트에는 변수및 복합 데이터 오브젝트에 대한 메모리 영역, 사용자 다이얼로그 화면의 정보, ABAP 처리 블록이 포함된다.

  런타임 시스템은 데이터베이스의 특수한 부분인 저장소에서 이와 같은 모든 프로그램 정보를 가져온다.

  샘플 프로그램은 사용자 다이얼로그로 사용되는 **SelectionScreen(선택화면), Data Objects(데이터 오브젝트로 사용되는 변수와 구조), ABAP Processing Block(하나의 ABAP 처리블록)**으로 구성된다.

  데이터 조회에 사용되는 리스트는 런타임에 동적으로 생성되며, ABAP Runtime System이 후속 프로그램 흐름을 제어한다.

  ![programflow4](./img/programflow4.png)

  프로그램에 Selection Screen 이 포함되어 있으므로 ABAP  런타임 시스템에서 선택 화면을 프리젠테이션 서버로 보넨다.

  프리젠테이션 서버는 사용자가 입력 필드에 데이터를 입력하는 동안 프로그래 흐름을 제어한다.

  사용자는 선택화면에서 프로그램이 작업을 계속하는데 필요한 선택 기준을 입력할 수 있다.

  입력 후 실행을 선택해 후속 프로그램 처리를 트리거할 수 있다.

  입력된 데이터는 자동으로 프로그램의 해당 데이터 오브젝트에 배치되며 ABAP 런타임 시스템에서 제어를 다시 시작한다.

  사용자가 입력한 항목의 유형이 올바르지 않을 경우 자동으로 오류 메시지가 트리거 된다.

  ![programflow5](./img/programflow5.png)

  Reusable Unit은 데이터베이스 액세스르르 캐슐화 하는 Processing Block 에서 호출된다.

  Reusable Unit는 개별 프로그램의 특수한 처리 블록이다.

  Reusable Unit가 호출되면 이 Unit 이 포함된 프로그램도 함께 저장소에서 읽어 어플리케이션 서버에 로드한다.

  호출에서 요청된 데이터는 Reusable Unit이 실행된 후 호출된 프로그램으로 전송된다

  실행은 동기식으로 이루어진다.

  즉 호출 프로그램은 Reusable Unit이 완전히 처리될때까지 대기한다.

  ![programflow6](./img/programflow6.png)

  예시에서는 데이터베이스에 대한 읽기 권한이 Reusable Unit에서 프로그래밍되고 이에 따라 액세스할 데이터베이스 테이블에 대한 정보와 읽을 테이블의 행이 데이터베이스로 전달된다.

  ![programflow7](./img/programflow7.png)

  데이터베이스가 요청된 데이터 레코드를 프로그램에 리턴하고 Runtime System 에서 이 데이터가 해당하는 데이터 오브젝트에 배치되도록 한다.

  단일 레코드에 액세스 하는 경우 일반적으로 데이터 오브젝트는 모든 필수 데이터데이스 필드에 관련 컴포넌트를 포함하는 구조이다.

  ![programflow8](./img/programflow8.png)

  Reusable Unit의 처리 가 완료 되고 제어 권한이 호출 프로그램에 반환된다. 

  호출 프로그램은 호출 직후 다시 실행된다.

  시스템이 Reusable Unit을 종료하면 데이터베이스에서 읽은 데이터는 호출 프로그래에 대한 해당 데이터 오브젝트에 기록되며 추가로 처리될 수 있다.

  ![programflow9](./img/programflow9.png)

  Reusable Unit가 호출되면 ABAP 처리 블록은 결과가 표시될 리스트를 구조화하는 명령문을 수신한다.

  처리 블록이 작업을 마치면 런타임 시스템에서 해당 리스트를 화면 형태로 프리젠테이션 서버에 전송한다.



****

****



# 학습평가

* ### 각 사용자 프로그램에 액세스하여 신규 데이터를 입력하고 작업 프로세스의 결과를 수신할 수 있는 사용자 인터페이스가 포함되는 계층은 무엇인가?

  * **어플리케이션 서버 계층**

  * #### <u>프리젠테이션 서버 계층</u>

  * **어플리케이션 로직 계층**

  * **SAP NetWeaver 어플리케이션**

* ### 다음중 하나의 블록이 아닌 여러 개의 단위로 구성되는 프로그램을 나타내는 개념은 무엇인가?

  * **고립성**

  * #### <u>모듈 방식</u>

  * **일반성**

  * **다중성**







데이터를 순수하게 읽어오고 때로 가공하는 프로그램















![](./img/)