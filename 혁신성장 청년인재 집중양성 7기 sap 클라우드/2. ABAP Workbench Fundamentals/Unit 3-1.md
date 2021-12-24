# Unit 1. Introduction to the ABAP Dictionary



# Lesson 1. Describing the ABAP Dictionary

****

## 개요

ABAP 딕셔너리 기능 범위 소개

## 목표

* ABAP 딕셔너리의 기능 이해

****



* ## Functional Overview of the ABAP Dictionary

  ABAP 프로그램에서 또는 함수 모듈, 오브젝트 메소드 등의 인터페이스에서 사용할 데이터 요소, 구조, 테이블 유형과 같은 사용자 정의 유형을 생성한다.

  테이블, 인덱스, 뷰 와 같은 ABAP 딕셔너리의 데이터베이스 오브젝트를 생성한다.

  프로그램 개발을 지원하는 여러 서비스를 찾는다.



****



* ## Database Objects in the ABAP Dictionary<br>(ABAP 딕셔너리의 데이터베이스 오브젝트)

  * 테이블 및 데이터 베이스 뷰를 정의한다 시스템에서는 ABAP 딕셔너리의 정의를 이용해 기본 데이터 베이스에서 이러한 테이블 및 뷰를 생성한다.

    테이블이나 데이터베이스 뷰의 정의를 변경하면 데이터베이스에도 변경 사항이 자동으로 적용된다.

  * ABAP 딕셔너리에서 인덱스를 정의하여 테이블 데이터 액세스 속도를 높일 수 있다.

    인덱스는 테이블 활성화 시 데이터베이스에서 자동 생성되기도 한다.

  **Database를 직접 handling 할 일은 없다. ABAP Dictionary를 통해 handling 한다.**



****



* ## Type Definitions in th ABAP Dictionary<br>(ABAP 딕셔너리의 유형 정의)

  * #### Data Elements

    데이터의 Type, Length, Decimal 을 정의함으로써 기본 유형을 기술한다.

  * #### Structures 

    모든 Type을 포함할 수 있는 컴포넌트로 구성된다.

    * Nested Structure : 스트럭쳐 안에 다른 스트럭쳐가 포함되어진 스트럭쳐
    * Deep Structure: 스트럭쳐의 크기가 삽입된 데이터에 따라 크기가 변경되는 스트럭쳐

  * #### Table Types

    Internal Table의 Structure를 기술한다.

  ##### 글로벌 Data Type을 정의할 수 있다.

  

* ## Services of the ABAP Dictionary<br>(ABAP 딕셔너리의 서비스)

  * #### F4 : Input helps for screen fields 

    화면 입력 도움말 입력 - 가능한 값들을 보여준다.

  * #### F1 : Field help for screen fields 

    화면 필드의 필드 도움말

  * #### Input Check

    입력 값의 일관성을 유지할 수 있게 해주는 입력 점검은 외래 키를 사용하여 화면 필드에 간편하게 정의할 수 있다.

  * #### Set and Release Locks

    ABAP 딕셔너리는 잠금 설정 및 해제를 지원한다. 잠금을 설정하거나 해제하려면 ABAP 딕셔너리 에서 잠금 오브젝트를 생성해야 한다.

  * #### Data Buffering

    데이터 버퍼링을 사용하면 데이터베이스 오브젝트(테이블, 뷰 등)에 대한 데이터베이스 데이터 액세스 성능이 향상될 수 있다.

  * #### Logging

    로깅을 사용하면 테이블 엔트리 변경 사항을 자동으로 기록할 수 있다.

  

****



* ## Linking to the Development and Runtime Environment (개발 및 런타임 환경에 연결)

  ABAP Tools, ABAP / Screen Interpreter, Database Interface 모두 ABAP Dictionary를 참조한다.

  ABAP Dictionary에 문제가 발생하면 관련 모든 프로그램에 문제가 발생한다.  







# 학습평가

* ### Screen fields can be assigned a field help (f1 help) by creating documentation for the data element.

  * #### <u>True</u>

  * **False**





* ### 다음 중 ABAP 딕셔너리에서 제공되는 유형 범주는 무엇인가?

  * #### <u>Data Element</u>

  * #### <u>Structure</u>

  * **Index**

  * #### <u>Table Type</u>



* ### 딕셔너리에서 가져오기 기능을 사용하여 ABAP 딕셔너리에 정의된 필드를 화면에 배치하는 ABAP 툴은 무엇인가?

  #### <u>스크린 페인터</u>

* ### 

  