











***

****

****

# SAP ARCHITECTURE



## PRESENTATION PROCESS

* SAP GUI FOR WINDOW
* SAP GUI FOR JAVA
* SAP GUI FOR HTML



## APPLICATION PROCESS

### (DISPATCHER + WORK PROCESS + LOCAL BUFFER 로 구성)

### DISPATCHER

* CLIENT 요청을 QUEUE 에 저장 / WORK PROCESS 에 할당

### WORK PROCESS

* #### 



## DATABASE PROCESS 

* APPLICATION DATA
* CUSTOMIZED DATA
* R/3 REPOSITORY DATA





****

****

***

# DATA TYPE

|      |      |
| ---- | ---- |
|      |      |

* Complete stadard types

  길이를 지정해 줄 수 없는 Data Type

  | NUMERIC TYPES       |                   |
  | ------------------- | ----------------- |
  | I                   | 정수 자료형 4byte |
  | F                   | 실수 자료형 8byte |
  | **CHARACTER TYPES** |                   |
  | D                   | 8자리 날짜        |
  | T                   | 6자리 시간        |
  |                     |                   |
  | DECFLOAT16          | ?                 |
  | DECFLOAT34          | ?                 |
  | STRING              | ?                 |
  | XSTRING             | ?                 |

* Incomplete standard types

  길이를 정의해 줄 수 있는 Data Type

  | NUMERIC TYPES      |                                                              |
  | ------------------ | ------------------------------------------------------------ |
  | P                  | 소수 값을 가질 수 있는 타입으로 LENGTH 와 DECIMAL 의 길이를 지정 1~16 |
  | **CHARACTER TYPE** |                                                              |
  | C                  | 일반 문자형 1~65535                                          |
  | N                  | 문자형 데이터(숫자) 1~65535                                  |
  | **HEXADECIMAL**    |                                                              |
  | X                  | Hexadecimal(16진수) 타입 1~65535                             |

Size 지정해야 하는 data type (C, N, P, X) 



|      |      |
| ---- | ---- |
|      |      |



****

*****

****

# DATA OBJECTS



## ITAB

* ### STANDARD TABLE

  * 순차적 INDEX를 가진다.
  * READ / MODIFY / DELETE 구문을 사용할때 INDEX 사용
  * NON-UNIQUE 로 선언해야한다. WITH UNIQUE 구문 사용 X

* ### SORTED TABLE

  * KEY 값으로 항상 정렬된 ITAB
  * INDEX / KEY 로 ROW 탐색
  * NON-UNIQUE , UNIQUE 사용 가능
  * SORT 시 오류 
  * APPEND 구문 오류

* ### HASHED TABLE

  * 순차적 INDEX를 갖지 않는다.
  * HASH 값으로 계산된 KEY 값을 통해 탐색
  * UNIQUE 하게 선언
  * primary key로만 구성
  * 오직 1개 라인만 조회
  * left-justified ***<u>fully</u>*** qualified of the key















****

****

****

# ABAP DICTIONARY



## DATABASE  TABLE







## VIEW



## DATA TYPE

* ### DATA ELEMENT

  * 
  * 

  * 필드 라벨들을 저장한다.
  * F1 HELP 을 지원한다.



* ### STRUCTURE  TYPE



* ### TABLE  TYPE







## TYPE GROUP





## DOMAIN





## SEARCH HELP 

* ### ABAP DICTIONARY SEARCH HELP 를 통해 할당 가능 

  (SEARCH HELP 가 존재 하지 않으면 DOMAIN의 FIXED VALUE 가 INPUT HELP 에 연결된다.)

* ### 스크린을 통한 INPUT HELP 

  SCREEN PAINTER 를 통해 개별 필드에 직접 INPUT HELP 를 할당하거나

  PAI 이벤트에서 제한 가능

* Dialog with the user (중간 filter창)

  DIALOG TYPE

  * A

    값 세트에 따른 다이얼로그

    적중 리스트 기준 100개 이상이면 C 유형

    이하면 D 유형

  * C

    값 제한 다이얼로그

    값을 입력 받아야만 리스트 조회

  * D

    값 즉시 조회

    즉시 리스트 조회

* LPos : 컬럼 순서

* SPos : Dialog 컬럼 순서

* Exp : 선택값 return 값 결정

* 데이터는 selection-method. 

  (table, help view, projection view, db view)

  필요 데이터가 두개 이상의 테이블에 존재한다면 테이블 엔트리는 FOREIGN KEY 로 연결된 VIEW 를 사용하여야 한다.

* ### 용도

  * DATA ELEMENT 에 SEARCH HELP 추가

  * TABLE FIELD 에 SEARCH HELP 추가

  * SCREEN FIELD 에 SEARCH HELP 추가



## LOCK OBJECT













***

****

****

# OBJECT NAVIGATOR



## T-CODE SE80 

ABAP DICTIONARY 는 OBJECT NAVIGATOR 에서 유지 보수 될 수 있다. 

메뉴가 DISPLAY 되며 수정될 수 있다.

SCREEN 이 DISPLAY 되며 수정될 수 있다.

ABAP 프로그램이 DISPLAY 되며 수정될 수 있다.

structure 관리, 메뉴관리, screen 관리 등



BAdIS 는 SE18, SE19 에서 관리.















****

****

****

# Modularization



## FUNCTION

* ### FUNCTION  GROUP

  FUNCTION GROUP 을 생성시 

  * **1개의 FUNCTION POOL** 과
  * **두개의 INCLUDE 파일** 
    * **TXX** - 전역변수
    * **UXX** - FUNCTION 프로그램

  이 생성된다.





****

****

****

# SAP LUW

LUW는 DIALOG 에서 UPDATE INSERT DELETE 등의 수정을 한 내역을 LOGDATA에 저장하고, UPDATE PROCESS 를 거쳐서 수정할 내역을 GROUPING 하여 DB 프로세스에 저장하는 개념이다.

즉 위 문제에서는 ROLLBACK 처리를 할 수 있는 방법에 대해 묻는 문제로

해당 방법에는

* **MESSAGE A TYPE (DB ROLLBACK / 프로그램 종료)**
* **ROLLBACK WORK (DB ROLLBACK / 프로그램은 실행 유지)**

두가지 방법이 있다.









****

****

****

# SCREEN

DIALOG SCREEN 을 생성후 접근 가능한 INPUT FIELD 를 만든 경우 해당 필드의 이름과 동일 DATA OBJECT 를 정의하면 자동 연동되어 이를 통해 접근 가능하다. 









****

****

****

# ALV GRID



## 별도의 프로그래밍을 거치지 않고 제공할 수 있는 기능

* 컬럼 사이즈 순서 변경
* filter 기능, sorting 기능

프로그래밍 없이 **<u>*개발자가 직접 지정하지 않고도 사용자가*</u>** ALV TOOL BAR 의 기능을 활용하여 조작 할 수 있는 기능을 묻는것으로 보인다.

column 사이즈는 필드의 경계를 드래그 해 변경 할 수 있으며 순서 또한 field 를 드래그해 변경이 가능하다.

filter 기능과 sort 기능은 ALV tool bar 를 통해 조작 가능하다.

















****

****

****

# ENHANCEMENT

* **<u>*Repository Information System(SE84)*</u>** > Enhancement > customer exit or enhancement

  CUSTOMER-EXIT(9)

* **<u>*CUSTOMER-FUNCTION*</u>**, **<u>*CL_EXITHANDLER*</u>** 문자열 검색

* **<u>*SAP reference IMG*</u>** 에서 검색

* **<u>*TADIR / MODSAPT*</u>** 테이블 조회

* CMOD SMOD

  CUSTOMER-EXIT
  
  

## EXPLICIT ENHANCEMENT

미리 지정된 (일반적으로 SAP 에서 정의한) ENHANCEMENT SECTION 

## IMPLICIT ENHANCEMENT

ABAP 프로그램의 약속된 특적 위치에서 정의 없이 ENHANCEMENT 를 적용

- include의 끝 위치
- Class의 Private, Protected 그리고 Public section의 끝 위치
- Class 구현의 끝 위치
- END INTERFACE 구문 바로 앞 위치
- structure 선언 (DATA: BEGIN OF ~ END OF ) 의 끝 위치 (END OF 바로 앞)
- form, functions, methods의 시작과 끝 위치
- method의 파라미터 CHANGING, IMPORTING 그리고 EXPORTING의 끝 위치

ABAP EDITOR 메뉴에서 EDIT > ENHANCEMENT OPERATIONS > SHOW IMPLICIT ENHANCEMENT OPTIONS 에서 확인 가능

## BAdI



* ### 찾는법

  * CL_EXITHANDER / GET_INSTANCE METHODS



## USER EXIT





## CUSTOMER EXIT

* ### 관리

  CMOD 에서 조회 가능하며

  SMOD 에서 프로젝트 관리

* ### 찾는법

  * **<u>*Repository Information System(SE84)*</u>** > Enhancement > customer exit or enhancement
  * **<u>*SAP reference IMG*</u>** 에서 검색
  * 

## ENHANCEMENT SPOT

ENHANCEMENT SPOT 은 EXPLICIT ENHANCEMENT POINT, ENHANCEMENT SECTION, NEW BAdI 가 포함될 수 있다.

ENHANCEMENT POINT 와 ENHANCEMENT SECTION 은 동시에 포함할 수 있지만 BAdI 는 동시에 포함될 수 없다.

ENHANCEMENT SPOT 은 하나 이상의 SIMPLE 또는 COMPOSITE ENHANCMENT 를 포함 할 수 있다.





## TABLE / STRUCTURE ENHANCEMENT

* ### INCLUDE STRUCTURE

  공통으로 사용되는 필드들을 테이블에 INCLUDE 하여 사용

* ### APPEND STRUCTURE

  하나의 테이블이나 STRUCTURE 에만 할당할 수 있는 STRUCTURE

  필드명은 YY 또는 ZZ 로 시작

  POOLED CLUSTERED 테이블에 사용 불가

  LCHAR, LRAW 같은 LONG 타입이 존재하는 테이블에서도 사용 불가

  #### 용도

  * STANDARD / CBO 테이블에 신규 필드 추가

  * FOREIGN KEY 추가 및 정의
  * 도움말 추가

* ## TABLE ENHANCEMENT CATEGORY

  테이블 활성시 조회되는 경고창

  APPEND / INCLUDE 기능을 사용하기 위한 유형 선택을 하라는 메시지

  | TYPE                                                   | 내용                                                         |
  | ------------------------------------------------------ | ------------------------------------------------------------ |
  | CANNOT BE ENHANCED                                     | APPEND / INCLUDE 기능 사용 불가                              |
  | CAN BE ENHANCED( CHARACTER TYPE)                       | APPEND / INCLUDE 사용 가능 / CHARACTER 타입을 가진 필드들로 확장 |
  | CAN BE ENHANCED( CHARACTER TYPE OR NUMERIC)            | APPEND / INCLUDE 사용 가능 / CHARACTER 타입과 숫자 타입 을 가진 필드들로 확장 |
  | CAN BE ENHANCED( DEEP) / OR CAN BE ENHANCED (ANY TYPE) | APPEND / INCLUDE 사용 가능 / 모든 데이터 타입을 사용 가능 (SSTRING 타입 지원 X) |

  







****

****

****

# WEB DYNPRO





Service calls can only always be embedded in global controllers, that is, in the ***<u>component controller</u>*** or in additionally created ***<u>custom controllers</u>***. 

서비스 호출은 항상 글로벌 컨트롤러, 즉 ***<u>Component controller</u>*** 또는 추가로 생성된 사용자 지정 컨트롤러에만 포함될 수 있습니다.

It is not possible, on the other hand, to embed service calls in view controllers.

반면에 View controller에 서비스 호출을 내장하는 것은 불가능하다.



## VIEW



## WINDOW

* VIEW 를 모아둔 단위
* 다른 뷰나 컴포넌트에서 재사용 할 수 있는 단위
* INTERFACE VIEW 를 통해 호출



## CONTROLLER

* COMPONENT 에 사용자의 요청이 들어오는 경우 비지니스 로직 호출
* VIEW CONTROLLER 
* GLOBAL CONTROLLER
* CUSTOM CONTROLLER





## CONTEXT

* 다양한 PROPERTY 를 가지는 데이터 저장소

* NODE 와 ATTRIBUTE 로 구성

* ### NODE

  하위에 ATTRIBUTE 를 가짐

  최상위에 있는 것이 루트 노드 

* ### ATTRIBUTE 

  최하위 구성요소



## DATA BINDING

VIEW CONTROLLER 의 CONTEXT-ATTRIBUTE 와 그것의 LAYOUT 에서의 UI ELEMENT 사이의 <u>**데이터 자동 전송**</u>을 설정하는 프로세스























*****

****

****

# SHARED MEMORY



##### 공유 메모리는 한번 write 한 메모리를 여러 유저가 공유하고 읽을 수 있게 하는 것으로 현업에서는 잘 사용 되지 않는다.

##### Shared Objects :

* ##### 다중 reading 가능

* ##### Memory bottlenecks 가 발생할 수 있으므로 exception 처리해야 함.

* ##### lock을 이용한 다중 write 금지

* ##### 객체의 attribute (wa에) 에 Data 저장.





















****

****

****

# RFC



RFC 를 통해 외부 시스템에서 호출되는 함수 모듈을 작성할때 오류내역은 CHANGING PARAMETER 에 TABLE 형태로 전달된다.













***

****

****

# 기타



## 각종 구문

LEAVE TO TRANSACTION 을 통해 이전에 존재하는 INSTANCE 를 모두 초기화 시키고 새로운 INSTANCE를 생성하여 프로그램을 실행 시킬 수 있다.( ABAP 메모리 초기화 )



## STRING EXPRESSIONS / STRING FUNCTION 을 사용하는 이점

* 코딩이 편하다
* 중간단계 변수 등이 준다.
* 긴 구문 대신 구문이 COMPACT 해진다. 
* 속도 향상 X 가독성 X 