











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

* #### D

  보통 1개의 DIALOG PROCESS 가 처리할 수 있는 것은 10 명의 ACTIVE USER

  rdisp/wp_no_dia 조절

  rdisp/max_wprun_time 파라미터에서 PROCESS 가 실행되는 MAX TIME 정의

  초과시 종료

  * 디스패처가 WORK PROCESS 와 USER REQUEST 를 연결
  * REQUEST 는 DIALOG REQUEST QUEUE 에 저장
  * 가용한 DIALOG WP 에 FIFO 방식으로 분배 / 연결
  * DIALOG WP 는 USER CONTEXT 를 ROLL IN 
    * **ROLL IN** : SHARED MEMORY 에 저장되어 있던 USER CONTEXT 를 DIALOG WP 의 ROLL AREA 로 가져옴
  * DIALOG WP 는 DISPATCHER 에 결과 RETURN
  * USER CONTEXT 를 SHARED MEMORY 에 ROLL OUT
    * **ROLL OUT** : DIALOG WP 의 ROLL AREA => SHARED MEMORY 의 USER CONTEXT 저장

  * **여러개의 SCREEN 으로 구성 되어 있는 경우 <u>각각 다른 DIALOG WP</u>** 에 의해 수행
  * **DIALOG STEP 은 하나의 PROCESS** 만 처리
  * **각각의 DIALOG STEPS 는 다른 WORK PROCESS 에 의해 진행**된다.
  * abap dispature : work process load balancing
  * **dialog work process : roll-in, roll-out 계속 발생.**

* #### B

  가급적 시스템당 2개

* #### S

  출력시 필요

  시스템당 1개이상

* #### V

  UPDATE 

  시스템당 1개 이상

* #### E

  ENQUEUE/SAP LEVEL 의 LOCK 

  시스템당 1개



## DATABASE PROCESS 

* APPLICATION DATA
* CUSTOMIZED DATA
* R/3 REPOSITORY DATA





****

****

***

# DATA TYPE

https://stepwith.tistory.com/entry/SAP-ABAP-%EA%B0%95%EC%A2%8C-18-Data-TypeBuilt-in-Data-Types

* ## Complete stadard types

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

* ## Incomplete standard types

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



### Numeric types: I, F, P.

### Character types: C, D, N, T.

### Hexadecimal types: X

[ABAP Data Types](https://www.abaptutorial.com/abap-programming/abap-data-types/)















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

* ### TRANSPARENT TABLE

  * ABAP DICTIONARY 에 하나의 TABLE 이 실제 DB 에서도 1대 1로 대응 된다.

  * 1:1
  * GROUP BY 절 사용 가능
  * SECONDARY INDEX 허용 
  * BUFFERING 가능

* ### CLUSTERED TABLE

  * ABAP DICTIONARY 에 있는 N개의 CLUSTERED TABLE 은 DB 에 한개의 TABLE CLUSTER 과 N : 1 의 관계를 갖고 있다.
  * N : 1
  * 여러개의 ABAP DICTIONARY 에 있는 CLUSTERED TABLE 로 부터 유지 관리 되어진다.
  * SECONDARY INDEX 사용 X
  * PRIMARY KEY 통해 접근 
  * 접근 속도 느림
  * GROUP BY 절 사용 불가
  * JOIN 불가

* ### POOLED TABLE

  * ABAP DICTIONARY 에 생성된 N개의 POOLED TABLE 은 물리적 DB 인 ORACLE DB 에 하나의 TABLE 에 대이터가 관리 된다.
  * N : 1
  * PRIMARY KEY 나 SHOUD BE BUFFERED 기능으로 접근 되어진다.
  * SECONDARY INDEX 사용 X
  * GROUP BY 절 사용 X
  * JOIN 사용 X

  https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=howwithus&logNo=221458527100

   



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





















***

*****

****

# DEBUGGER

## 기능

* MEMORY 사용량 분석
* ITAB 분석
* DATA OBJECT 비교
* 소스 코드 수정 불가
* SQL TRACE 분석 불가 (SQL TRACE 에서 가능)

디버깅을 시작할때 DEBUGGING_NOT_POSSIBLE 런타임 오류가 발생하는 상황은 productive system에서 NON-EXCLUSIVE 모드가 시작된 경우

## DEBUGGER TAB 

총 12개

* DESKTOP1 

* DESKTOP2 

* DESKTOP3 

* STANDARD 

* STRUCTURES 

* TABLES 

* OBJECTS 

* DETAILDISPLAY 

* DATA EXPLORER 

* BREAK./WATCHPOINT 

* DIFF 

* SCRIPT









****

****

****

# Modularization

## IS SUPPLIED 

* IMPORTING PARAMETER 에 값이 들어왔는지를 확인한다.
* FUNCTION 과 CLASS 의 METHOD 에서만 사용 가능
* SUBROUTINE 에서 사용 불가 !!

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



## SCREEN 이동방법

* ### leave to screen 200 : 

  현재 화면에서 나와서 200 으로 간다.

* ### call screen 200 : 

  200으로 갔다가 다시 호출 위치로 돌아온다. 

  (중지가 아닌 일시 정지의 의미를 갖는 interrupt )







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







## FIELD CATALOG

* 컬럼 추가
* 특정 컬럼 숨기기

* 출력 순서 변경

* 컬럼 title 변경











****

****

****

# OOP



## FIELD SYMBOL

### 선언문

* 명시적인 선언 (FULLY TYPE)

  ```ABAP
  DATA: LT_MARA LIKE STADARD TABLE OF MARA WITH HEADER LINE.
  
  FIELD-SYMBOLS : <FS> LIKE MARA.
  FIELD-SYMBOLS : <FS> TYPE MARA.
  FIELD-SYMBOLS : <FS> LIKE LINE OF MARA.
  ```

* 일반 적인 선언 (GENERIC TYPE)

  ```ABAP
  FIELD-SYMBOLS : <FS>.
  FIELD-SYMBOLS : <FS> TYPE ANY.
  FIELD-SYMBOLS : <FS> TYPE ANY TABLE.
  ```

  TYPE 을 명시 해 주지 않을 경우 ANY 로 자동 설정

### 할당

https://stepwith.tistory.com/entry/SAP-ABAP-%EA%B0%95%EC%A2%8C-25-Field-Symbol







## CLASS

* ## LOCAL CLASS

  

  

  

  * CREATE PUBLIC이 추가된 클래스

    패키지 개념의 프레임워크 내에서 클래스가 보이는 모든 위치에서 인스턴스화할 수 있습니다.  

  * CREATE PROTECTED가 추가된 클래스

    * SUBCLASS METHOD

    * CLASS 자체의 METHOD 

    * FRIEND CLASS METHOD

    에서만 인스턴스화할 수 있습니다.  

  * CREATE PRIVATE가 추가된 클래스

    클래스 자체의 메서드 또는 친구의 메서드에서만 인스턴스화할 수 있습니다. 

  

  

* ## GLOBAL CLASS

  

  







## DOWNCAST

* 부모 Class의 Object를 자식 class의 Object에 할당 

* Down-Cast를 사용할 때는 ?= 를 사용하여 할당한다. 

* Up-Cast를 한 상태에서는 자식 class의 component는 자체적으로 access할 수 없다. 
  따라서 Down-Cast를 사용하여 access 한다.

* Down-Cast를 할 경우 TYPE 이 맞지 않는 경우 ERROR가 날 수 있다

  따라서 TRY \_\_\_ CATCH \_\_\_ ENDTRY 구문을 이용해 

  CX_SY_MOVE_CAST_ERROR EXCEPTIONS을 처리해준다.

* move를 사용 시 에러가 발생하면 CX_SY_MOVE_CAST_ERROR exception 이 발생함.







****

****

****

# 권한

## authorization check : 

[Authorization Check(권한 점검) : 네이버 블로그](https://m.blog.naver.com/softwon1/221873016346)

Authorization object를 생성 후 *<u>**T-CODE PFCG**</u>* (Role Maintenance) 에서 Role 생성 후 할당

즉 권한 부여 확인을 위해서는 

* *<u>**Authorization object**</u>*

* *<u>**Role**</u>* 

을 생성해 주어야한다.



## 권한 체크 LOGIC

권한 체크 LOGIC 은 결과로 SY-SUBRC 의 값을 변경한다.

* 0 : 사용자는 권한을 가지고 있다.

* 4 : 사용자는 권한을 가지고 있지 않다.

* 8 : 권한 체크에 기술된 필드의 수가 정확하지 않다.

* 12 : 권한 오브젝트가 존재하지 않는다.

즉 권한 체크 로직을 실행한 직후 SY-SUBRC 를 통해 권한 여부에 따라 처리하는 로직을 추가로 작성해 주어야 한다.















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

* COMPONENT CONTROLLER

  서비스 호출이 가능하다.

* WINDOW CONTROLLER 

* VIEW CONTROLLER 

* GLOBAL CONTROLLER

* CUSTOM CONTROLLER

  서비스 호출이 가능하다.

* CONFIGURATION

## CONTROLLER METHOD

모두 가지고 있는 hook method : wddoinit( ), wddoexit( )

![Q27_1.jpg](C:/Users/jihoon/TIL/SAP Certi/IMG/Q27_1.jpg)
![Q27_2.jpg](C:/Users/jihoon/TIL/SAP Certi/IMG/Q27_2.jpg)
![Q27_3.jpg](C:/Users/jihoon/TIL/SAP Certi/IMG/Q27_3.jpg)



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

USER INTERFACE ELEMENT 의 값을 해당 CONTROLLER 의 CONTEXT ATTRIBUTE에 연결





















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



## CONTROL LEVEL PROCESSING(internal table)

용어 기억!!!

```abap
LOOP AT it INTO wa.
  AT FIRST. (맨 앞에서..)
    코딩
  ENDAT.

  AT END OF carrid. (특정 값이 끝났을 때..)
    코딩
  ENDAT.

  AT NEW carrid.
    코딩
  ENDAT.    

  AT LAST. (맨 마지막에서..)
    코딩
  ENDAT.

ENDLOOP.
```

위 구문을 사용하기 위해서 sorting(정렬) 된 상태여야 한다.





## SELECT APPENDING  ITAB

* 기존의 ITAB 의 데이터를 덮어 씌우는 INTO 절과 달리

  데이터를 APPEND 하는 방식

  

## SELECT ... ENDSELECT

* INTO TALBE 인경우 사용 불가
* SELECT SINGLE 을 하는 경우 사용 불가
* APPENDING 구문 사용 하는 경우 사용 불가





