











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

BUSINESS PROCESS 관리 , MULTI-CHANNEL 연결 , MASTER DATA 관리

### DISPATCHER

* CLIENT 요청을 QUEUE 에 저장 / WORK PROCESS 에 할당

### WORK PROCESS

* 각 WORK PROCESS 들은 독립되어있다.
* SAP NETWEAVER APPLICATION SERVER ABAP 이 시작될때 설정된 WP 에 대한 DB CONNECTION 을 사용한다.
* DB connection은 각 work process 가 한 개씩 맺고, work process는 서로 독립적이다. 

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







## CHANGE REQUEST 

* ACTIVATE 되어 있어야한다.
* PACKAGE RELEASE 되어있어야한다.







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





## GENERIC TYPE

## clike character-type :

c, d, n, t, string and character-type flat structures

## csecuence text-type : 

c, string    When the FROM is a view

[ABAP Data Types](https://www.abaptutorial.com/abap-programming/abap-data-types/)***<u>(꼭 보기)</u>***



## DEEP TYPE (RUNTIME 시 길이가 변하는것) 

* STRING 
* XSTRING

##### 이거도 모르겠다 자료가 안나와 ㅅㅂ,, 그래도 ENHANCEMENT CATALOG 문제에서도 비슷한 언급이 있었던 것으로 보아 STRING 관련된 타입이 DEEP TYPE 이 맞는듯,,,









##### PREDEFINED NUMERIC TYPES

* B
* S
* I
* INT8
* P
* DECFLOAT16
* DECFLOAT34
* F

##### PREDEFINED CHARACTER-LIKE TYPES

* C
* N
* STRING

##### PREDEFINED BYTE-LIKE TYPES

* X
* XSTRING

##### PREDEFINED DATE TYPES AND TIME TYPES

* D
* T



































## SQL DATA TYPE?

DF16_DEC : = Decfloat16
DF34_DEC : 1 and 31 digits = Decfloat34

**Numeric Types**

| **Type** | **Valid Places \**m\**** | **Initial Value** | **Meaning**                                                  | **ABAP Type**                                                |
| -------- | ------------------------ | ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| INT1     | 3                        | 0                 | 1-byte integer, 0 to 255                                     | [**b**](javascript:call_link('abenbuiltin_types_numeric.htm')) |
| INT2     | 5                        | 0                 | 2-byte integer, -32,768 to 32,767                            | [**s**](javascript:call_link('abenbuiltin_types_numeric.htm')) |
| INT4     | 10                       | 0                 | 4-byte integer, -2,147,483,648 to +2,147,483,647             | [**i**](javascript:call_link('abenbuiltin_types_numeric.htm')) |
| INT8     | 19                       | 0                 | 8-byte integer, -9,223,372,036,854,775,808 to +9,223,372,036,854,775,807 | [**int8**](javascript:call_link('abenbuiltin_types_numeric.htm')) |
| DEC      | 1-31                     | 0                 | Packed number in [BCD](javascript:call_link('abenbcd_glosry.htm')) format | [**p**](javascript:call_link('abenbuiltin_types_numeric.htm')), length **m [DIV](javascript:call_link('abenarith_operators.htm')) 2 + 1** |
| DF16_DEC | 1-15                     | 0                 | [Decimal floating point number](javascript:call_link('abendecfloat_glosry.htm')) stored in [BCD](javascript:call_link('abenbcd_glosry.htm')) format | [**decfloat16**](javascript:call_link('abenbuiltin_types_numeric.htm')) |
| DF16_RAW | 16                       | 0                 | [Decimal floating point number](javascript:call_link('abendecfloat_glosry.htm')) stored in binary format | [**decfloat16**](javascript:call_link('abenbuiltin_types_numeric.htm')) |
| DF34_DEC | 1-31                     | 0                 | [Decimal floating point number](javascript:call_link('abendecfloat_glosry.htm')) stored in [BCD](javascript:call_link('abenbcd_glosry.htm')) format | [**decfloat34**](javascript:call_link('abenbuiltin_types_numeric.htm')) |
| DF34_RAW | 34                       | 0                 | [Decimal floating point number](javascript:call_link('abendecfloat_glosry.htm')) stored in binary format | [**decfloat34**](javascript:call_link('abenbuiltin_types_numeric.htm')) |
| FLTP     | 16                       | 0                 | Floating point number                                        | [**f**](javascript:call_link('abenbuiltin_types_numeric.htm')) |



**Character-Like Types**

| **Type** | **Valid Places \**m\****                  | **Initial Value** | **Meaning**                                                  | **ABAP Type**                                                |
| -------- | ----------------------------------------- | ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CHAR     | 1-30000, maximum of 1333 for table fields | **m** blanks      | Character string                                             | [**c**](javascript:call_link('abenbuiltin_types_character.htm')), length **m** |
| LCHR     | 256-32000                                 | None              | Long character string                                        | [**c**](javascript:call_link('abenbuiltin_types_character.htm')), length **m** |
| SSTRING  | 1-1333                                    | Empty string      | Character string                                             | [**string**](javascript:call_link('abenbuiltin_types_character.htm')) |
| STRING   | 256-...                                   | Empty string      | Character string ([CLOB](javascript:call_link('abenclob_glosry.htm'))) | [**string**](javascript:call_link('abenbuiltin_types_character.htm')) |



**Byte-Like Types**

| **Type**  | **Valid Places \**m\****                | **Initial Value** | **Meaning**                                                  | **ABAP Type**                                                |
| --------- | --------------------------------------- | ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| RAW       | 1-32000 maximum of 255 for table fields | None              | Byte string                                                  | [**x**](javascript:call_link('abenbuiltin_types_byte.htm')), length **m** |
| LRAW      | 256-32000                               | None              | Long byte string                                             | [**x**](javascript:call_link('abenbuiltin_types_byte.htm')), length **m** |
| RAWSTRING | 256-...                                 | Empty string      | Byte string ([BLOB](javascript:call_link('abenblob_glosry.htm'))) | [**xstring**](javascript:call_link('abenbuiltin_types_byte.htm')) |



**Special Types**

Predefined data types with special semantic attributes.



**Date Types/Time Types**

| **Type** | **Valid Places \**m\**** | **Initial Value** | **Meaning**                         | **ABAP Type**                                                |
| -------- | ------------------------ | ----------------- | ----------------------------------- | ------------------------------------------------------------ |
| DATS     | 8                        | 00000000          | Date in the format YYYYMMDD         | [**d**](javascript:call_link('abenbuiltin_types_date_time.htm')) |
| TIMS     | 6                        | 000000            | Time in the format HHMMSS           | [**t**](javascript:call_link('abenbuiltin_types_date_time.htm')) |
| ACCP     | 6                        | 6 blanks          | Posting period in the format YYYYMM | [**n**](javascript:call_link('abenbuiltin_types_character.htm')), length 6 |



**Character-Like Types with Special Semantics**

| **Type** | **Valid Places \**m\**** | **Initial Value** | **Meaning**                                                  | **ABAP Type**                                                |
| -------- | ------------------------ | ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| NUMC     | 1-255                    | **m** zeroes      | [Numeric text](javascript:call_link('abennumeric_text_glosry.htm')) | [**n**](javascript:call_link('abenbuiltin_types_character.htm')), length **m** |
| CLNT     | 3                        | 000               | Client                                                       | [**c**](javascript:call_link('abenbuiltin_types_character.htm')), length 3 |
| LANG     | 1                        | Blank             | Language key                                                 | [**c**](javascript:call_link('abenbuiltin_types_character.htm')), length 1 |



**Currency Fields and Quantity Fields**

| **Type** | **Valid Places \**m\**** | **Initial Value** | **Meaning**                                                  | **ABAP Type**                                                |
| -------- | ------------------------ | ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CURR     | 1-31                     | 0                 | [Currency field](javascript:call_link('abencurrency_field_glosry.htm')) in [BCD](javascript:call_link('abenbcd_glosry.htm')) format | [**p**](javascript:call_link('abenbuiltin_types_numeric.htm')), length **m [DIV](javascript:call_link('abenarith_operators.htm')) 2 + 1** |
| CUKY     | 5                        | 5 blanks          | [Currency key](javascript:call_link('abencurrency_key_glosry.htm')) for [currency fields](javascript:call_link('abencurrency_field_glosry.htm')) | [**c**](javascript:call_link('abenbuiltin_types_character.htm')), length 5 |
| QUAN     | 1-31                     | 0                 | [Quantity field](javascript:call_link('abenquantity_glosry.htm')) in [BCD](javascript:call_link('abenbcd_glosry.htm')) format | [**p**](javascript:call_link('abenbuiltin_types_numeric.htm')), length **m [DIV](javascript:call_link('abenarith_operators.htm')) 2 + 1** |
| UNIT     | 2-3                      | 2 or 3 blanks     | [Unit key](javascript:call_link('abenunit_glosry.htm')) of a [quantity field](javascript:call_link('abenquantity_glosry.htm')) | [**c**](javascript:call_link('abenbuiltin_types_character.htm')), length **m** |



**Obsolete Types**

| **Type** | **Valid Places \**m\**** | **Initial Value** | **Meaning**                                                  | **ABAP Type**                                                |
| -------- | ------------------------ | ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| DF16_SCL | 16                       | 0                 | [Decimal floating point number](javascript:call_link('abendecfloat_glosry.htm')) stored in binary format with scaling specified (obsolete) | [**decfloat16**](javascript:call_link('abenbuiltin_types_numeric.htm')) |
| DF34_SCL | 34                       | 0                 | [Decimal floating point number](javascript:call_link('abendecfloat_glosry.htm')) stored in binary format with scaling specified (obsolete) | [**decfloat34**](javascript:call_link('abenbuiltin_types_numeric.htm')) |
| PREC     | 2                        | 0                 | Obsolete data type                                           | [**s**](javascript:call_link('abenbuiltin_types_numeric.htm')) |
| VARC     | 1-...                    | None              | Obsolete data type                                           | [**c**](javascript:call_link('abenbuiltin_types_character.htm')), length **m** |















****

*****

****

# DATA OBJECTS



## ITAB

* ### STANDARD TABLE

  * unique, non-unique and one or a multiple key
  * 순차적 INDEX를 가진다.
  * READ / MODIFY / DELETE 구문을 사용할때 INDEX 사용
  * NON-UNIQUE 로 선언해야한다. WITH UNIQUE 구문 사용 X

* ### SORTED TABLE

  * unique, non-unique
  * KEY 값으로 항상 정렬된 ITAB
  * INDEX / KEY 로 ROW 탐색
  * NON-UNIQUE , UNIQUE 사용 가능
  * SORT 시 오류 
  * APPEND 구문 오류

* ### HASHED TABLE

  * unique
  * 순차적 INDEX를 갖지 않는다.
  * HASH 값으로 계산된 KEY 값을 통해 탐색
  * UNIQUE 하게 선언
  * primary key로만 구성
  * 오직 1개 라인만 조회
  * left-justified ***<u>fully</u>*** qualified of the key




## PARAMETERS 

* PARAMETERS P_XXX TYPE XXX DEFAULT ‘100’
* DEFAULT 를 통해 기본값을 줄 수 있다.

## SELECT-OPTIONS

* 생성하기 위해서는 SELECT-OPTIONS S_XX FOR XXX. 구문을 사용한다.
* DEFAULT 구문을 추가하여 기본값을 줄 수 있다.



## DATA

* DATA gc_XXX TYPE XXX 
* VALUE 를 통해 초깃값을 설정해 줄 수 있다.

## CONSTANTS

* 상수를 생성해준다. 
* VALUE 를 통해 기본값을 줄 수 있다.











****

****

****

# ABAP DICTIONARY

## 생성할 수 있는 것들

* DB TABLE (TRANSPARENT TABLE) 
* VIEW
* DATA TYPE
* TYPE GROUP(TYPE POOL
* DOMAIN
* SEARCH HELP
* LOCK OBJECT

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

   
  
* ### TABLE BUFFER 

  * 데이터가 TABLE BUFFER 로 부터 READ 되는 경우 기존 인덱스는 사용되지 않는다.

    by-pass buffer
    ABAP join
    select .. .by pass buffer.
    select … for update
    native SQL

    index 는 DB에 있는 상황이므로, buffer table 정보를 읽으면 index를 사용하지 않는다.

    




## VIEW



## DATA TYPE

* ### DATA ELEMENT

  * 
  
  * 기술적인 정보는 기본적으로 DOMAIN이 가지고 있다. (DATA TYPE, FIELD LENGTH, DECIMAL PLACES LENGTH 등등)
  
  * 하지만 PREDEFINED DATA TYPE 이나 REFERENCE DATA TYPE 을 통해 DATA TYPE 을 정의해 줄 수 도 있다.
  
    ![data_element.png](.\IMG\data_element.png)
  
  * 필드 라벨들을 저장한다.
  
  * F1 HELP 을 지원한다.
  
  * SE11 > DATA ELEMENT > FUTHER CHARACTERISTICS TAB > CHANGE DOCUMENT 를 통해 **필드 내용의 변경에 대한 LOG**를 남기도록 설정 가능하다. 



* ### STRUCTURE  TYPE



* ### TABLE  TYPE







## TYPE GROUP





## DOMAIN

고정값 과 같은 TECHNICAL 속성을 정의한다. 



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

* ### SEARCH HELP 를 ASSIGN 할 수 있는 곳

  * DATA ELEMENT
  * STRUCTURE COMPONENT
  * CHECK TABLE




## LOCK OBJECT

### 락을 잡으려 하다가 못 잡을 때 발생하는 에러

* foreign_lock : 다른 사람이 락을 잡고 있을 때, 발생하는 에러
* system_failure : 시스템 상의 다른 이유로 발생하는 에러











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

*****

*****

# PROGRAMS

https://www.erpdb.info/sap-abap-program-types/

https://papago.naver.com/?sk=auto&tk=ko&st=Class%20and%20Interface%20PoolsLocate%20this%20document%20in%20the%20navigation%20structure%0AThis%20section%20discusses%20the%20structure%20and%20special%20features%20of%20class%20and%20interface%20pools%20for%20global%20classes.%0A%0AGlobal%20Classes%20and

75번 답이 

METHOD / CLASS-POOL / REPORT / FUNCTION MODULE 인지 의문

CLASS-POOL 대신 PROGRAM 이 답에 포함 되야 하는가????

| TYPE  |                  명칭                  | SCREEN | EXCUTABLE | 특이사항                                                     |
| :---: | :------------------------------------: | :----: | :-------: | ------------------------------------------------------------ |
| **1** | **EXCUTABLE PROGRAM / REPORT PROGRAM** | **O**  |   **O**   |                                                              |
| **M** |            **MODULE-POOL**             | **O**  |   **O**   |                                                              |
| **F** |           **FUNCTION GROUP**           | **O**  |   **X**   | FUNCTION MODULE 들의 집합과 같은 개념으로 내부 **FUNCTION MODULE 은 실행 가능한 반면** FUNCTION GROUP 단일로는 실행이 불가능하다.<BR/>타 프로그램에서 호출을 통해 사용할 수 있다.<BR/>SE37 / SE80 에서 생성가능 |
| **K** |             **CLASS-POOL**             | **X**  |  **O?**   | T-CODE SE24 (CLASS BUILDER) 에서 실행 가능하다는 기존 풀이가 있었으나 아무리 찾아봐도 실행 불가라고 나온다.<BR/>CLASS BUILDER 에서 생성 유지 보수가 가능하다고 나온다. |
| **J** |           **INTERFACE-POOL**           | **X**  |   **X**   |                                                              |
| **S** |          **SUBROUTINE-POOL**           | **X**  |   **X**   |                                                              |
| **I** |          **INCLUDE PROGRAM**           | **?**  |   **X**   |                                                              |





## REPORT PROGRAM

* 명시하지 않아도 무조건 발동 되며 어떤 EVENT BLOCK 도 명시 되어있지 않은 경우 모든 코드는 **<u>START-OF-SELECTION</u>** EVENT BLOCK 에 속한다.





## PBO 와 PAI 이해

* **PBO(PROCESS BEFORE OUTPUT)** : paramter의 속성을 바꾸고, 적합성을 확인하는 곳.
* **PAI(PROCESS AFTER INPUT)** : user가 화면에서 입력받은 데이터를 처리하는 곳 



## TEXT SYMBOL

프로그램 개발할때 SELECTION SCREEN 의 INPUT FIELD LABEL 의 TEXT 를 설정해 주던 창을 기억하면 쉽게 이해 할 수 있다.

* 다국어 기능을 지원
* LITERAL 보다 유지 보수가 쉽다.
* 다른 프로그램에서 공유하여 사용할 수 없다.
* 132 자 까지 가능하다.



화면 생성 후 필수 입력 필드가 모두 채워지지 않더라도 CANCEL BUTTON 으로 화면을 벗어나기 위해서는 CANCEL 버튼에 FUNCTION TYPE E 를 할당, AT EXIT-COMMAND 가 추가된 모듈에서 LOGIC을 처리해 줘야한다.

 









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





## 추가로 문제를 풀면서 확인 요망

## 값을 바꿀 수 있는 것

* VARIABLE 

## 바꿀 수 없는 것

* CONSTANTS
* FIELD NAME
* TABLE NAMES





****

****

****

# Modularization

## 모듈화의 장점

* TRANSPARENCY 투명성
* MAINTAINABILITY 유지보수성

* REUSABILITY 재사용성

모듈화 : class, function, subroutine 
profitability across DBMS : DB에 접속 독립성 => 모듈화와 무관



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



### SINGLE DB LUW  내에서만  DB 를  수정할 수 있다.







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

  GLOBAL CLASS 에서 정의한 DATA TYPE 은 SAP 프로그램 전체에서 CLASS 를 통하여 활용할 수 있따.

  



* ## STATIC METHOD 

  * STATIC METHOD 에서는 **<u>STATIC ATTRIBUTE / TYPES / CONSTANTS</u>** 만 접근 가능하다.



## DOWNCAST

* 부모 Class의 Object를 자식 class의 Object에 할당 

* Down-Cast를 사용할 때는 ?= 를 사용하여 할당한다. 

* Up-Cast를 한 상태에서는 자식 class의 component는 자체적으로 access할 수 없다. 
  따라서 Down-Cast를 사용하여 access 한다.

* Down-Cast를 할 경우 TYPE 이 맞지 않는 경우 ERROR가 날 수 있다

  따라서 TRY \_\_\_ CATCH \_\_\_ ENDTRY 구문을 이용해 

  CX_SY_MOVE_CAST_ERROR EXCEPTIONS을 처리해준다.

* move를 사용 시 에러가 발생하면 CX_SY_MOVE_CAST_ERROR exception 이 발생함.







## REFERENCE VARIABLE

generic : 어떤 데이터 type도 가리킬 수 있는 형태 
data z1 type ref of data
<u>**any 와 data는 동일한 기능을 갖고 있지만, any는 ref to 에 대하여 지원하지 않음**</u>.
table key 가 지정되지 않은 table-type 도 generic type 임.

#### [SAP 공식문서](https://help.sap.com/doc/abapdocu_751_index_htm/7.51/en-us/abenbuilt_in_types_generic.htm)

The only generic types that can be used after [**TYPE REF TO**](javascript:call_link('abaptypes_references.htm')) are **data**, for the generic typing of data references, and **object**, for the generic typing of object references.

| **Type**           | **Description**                                              |
| ------------------ | ------------------------------------------------------------ |
| **any**            | Any data type                                                |
| **any table**      | Internal table with any table category                       |
| **c**              | Text field with a generic length                             |
| **clike**          | Character-like (**c**, **n**, and **string** plus the date/time types **d**, **t** and character-like [flat structures](javascript:call_link('abenflat_structure_glosry.htm'))) |
| **csequence**      | Text-like (**c**, **string**)                                |
| **data**           | Any data type                                                |
| **decfloat**       | [Decimal floating point number](javascript:call_link('abendecfloat_glosry.htm')) (**decfloat16**, **decfloat34**) |
| **hashed table**   | [Hashed table](javascript:call_link('abenhashed_table_glosry.htm')) |
| **index table**    | [Index table](javascript:call_link('abenindex_table_glosry.htm')) |
| **n**              | [Numeric text](javascript:call_link('abennumeric_text_glosry.htm')) with generic length |
| **numeric**        | Numeric ((**b**, **s**), **i**, **int8**, **p**, **decfloat16**, **decfloat34**, **f**) |
| **object**         | Any object type (root class of the inheritance hierarchy)    |
| **p**              | Packed number with generic length and generic number of [decimal places](javascript:call_link('abendecimal_place_glosry.htm')) |
| **simple**         | Elementary data type including [enumerated types](javascript:call_link('abenenumerated_type_glosry.htm')) and structured types with exclusively character-like flat components |
| **sorted table**   | [Sorted table](javascript:call_link('abensorted_table_glosry.htm')) |
| **standard table** | [Standard table](javascript:call_link('abenstandard_table_glosry.htm')) |
| **table**          | Standard table                                               |
| **x**              | Byte field with generic length                               |
| **xsequence**      | Byte-like (**x**, **xstring**)                               |

















## EVENT 와 HANDLER VISIBILITY 가능한 조합

#### 확실하지 않다 추가로 문제가 나올때 마다 답과 비교, 분석, 수정 요망

* PUBLIC EVENT <> PROTECTED HANLER
* PRIVATE EVENT <> PRIVAT HANDLER









## SINGLETON

* CREATE OBJECT 할 수 없다.

* METHOD 를 통해서 OBJECT 를 생성할 수 있다.

* FINAL 로 정의 하여 상속을 방지한다.

* STATIC PRIVATE CONSTRUCTOR 를 사용하여 인스턴스화 해야한다.

  * CLASS 인스턴스화를 PRIVATE 으로 설정

  * 클래스 자체의 정적 메서드로 클래스 인스턴스화





## FUNCTIONAL METHOD

* IMPORTING / EXPORTING / RETURNING / CHANGING PARAMETER 를 가질 수 있다.
* open sql에서 사용할 수 없다. 
* logical expressions 에서는 사용 가능 ( a = b + zcl_abcd.f_method(ab))























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
  



## CUSTOMER FUNCTION MODULE

* CUSTOMER EXIT
* BUSINESS TRANSACTION EVENT

의 ENHANCEMENT때 호출된다. 





## EXPLICIT ENHANCEMENT

미리 지정된 (일반적으로 SAP 에서 정의한) ENHANCEMENT SECTION 

## IMPLICIT ENHANCEMENT

ABAP 프로그램의 약속된 특적 위치에서 정의 없이 ENHANCEMENT 를 적용

ABAP EDITOR 메뉴에서 EDIT > ENHANCEMENT OPERATIONS > SHOW IMPLICIT ENHANCEMENT OPTIONS 에서 확인 가능

- include의 끝 위치
- Class의 Private, Protected 그리고 Public section의 끝 위치
- Class 구현의 끝 위치
- END INTERFACE 구문 바로 앞 위치
- structure 선언 (DATA: BEGIN OF ~ END OF ) 의 끝 위치 (END OF 바로 앞)
- form, functions, methods의 시작과 끝 위치
- method의 파라미터 CHANGING, IMPORTING 그리고 EXPORTING의 끝 위치

실행전에 넣을 수 있는 method : pre-method

실행 후에 넣을 수 있는 method : post-method

export parameter 가 post-method 가 change되었을 때, changing parameter 로 바뀜.
(pre-method도 동일)







## BAdI

* ### 선행되어야 하는 것

  * METHOD 에 대한 CODE 작성
  * BAdI IMPLEMENTATION 생성

* ### 찾는법

  * ### CLASSICAL BAdIs 찾는 방법
  
    : find CL_EXITHANDLER / GET_INSTANCE METHODS
  
    
  
  * ### NEW BAdIs 찾는 방법
  
    : get BAdIs / CALL BAdI







## USER EXIT

* SUBROUTINE 사용



## CUSTOMER EXIT

* ### 관리

  CMOD 에서 조회 가능하며

  SMOD 에서 프로젝트 관리

* ### 찾는법

  * **<u>*Repository Information System(SE84)*</u>** > Enhancement > customer exit or enhancement
  * **<u>*SAP reference IMG*</u>** 에서 검색
  * 
  
* CUSTOMER FUNCTION MODULE 이 호출 된다.









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

  STRUCTURE NAME 은 ZAS 권장??? 확실치 않음

  POOLED CLUSTERED 테이블에 사용 불가

  LCHAR, LRAW 같은 LONG 타입이 존재하는 테이블에서도 사용 불가

  #### 용도

  * STANDARD / CBO 테이블에 신규 필드 추가

  * FOREIGN KEY 추가 및 정의
  * 도움말 추가

* ### TABLE ENHANCEMENT CATEGORY

  테이블 활성시 조회되는 경고창을 떠올리면 이해하기 쉽다.

  APPEND / INCLUDE 기능을 사용하기 위한 유형 선택을 하라는 메시지

  * 프로그램 동작이 변경 될 수 있는 위치를 식별할 수 있으며
  * STRUCTURE 에 대해 호환되지 않는 지점에 대한 경고를 생성할 수 있다.
  * STRUCTURE 에 적용할 수 있는 변경의 TYPE 을 지정한다.

  | TYPE                                                   | 내용                                                         |
  | ------------------------------------------------------ | ------------------------------------------------------------ |
  | CANNOT BE ENHANCED                                     | APPEND / INCLUDE 기능 사용 불가                              |
  | CAN BE ENHANCED( CHARACTER TYPE)                       | APPEND / INCLUDE 사용 가능 / CHARACTER 타입을 가진 필드들로 확장 / CNDT 가능 STRING 은 DEEP 이 되어야 가능하다. |
  | CAN BE ENHANCED( CHARACTER TYPE OR NUMERIC)            | APPEND / INCLUDE 사용 가능 / CHARACTER 타입과 숫자 타입 을 가진 필드들로 확장 |
  | CAN BE ENHANCED( DEEP) / OR CAN BE ENHANCED (ANY TYPE) | APPEND / INCLUDE 사용 가능 / 모든 데이터 타입을 사용 가능 (SSTRING 타입 지원 X) |

  Enhancement Category 사용 이점 : 

  프로그램의 영향력 방지. 구조적 모순점에 대한 경고 생성. 

  테이블이나 STRUCTURE 생성시 뜨는 WARNING 메시지를 기억하면 편하다.

  *<u>**Enhancement category for --- missing**</u>*

  [[SAP/ABAP] 테이블, 구조 생성 시 warning (Enhancement category for table missing)](



## ACCESS KEY

* SAP STANDARD MODIFICATION , USER EXIT , SAP REPOSITORY OBJECT 수정 에 필요
* BADI , IMPLICIT ENHANCEMENT 구현에는 필요 없다.







## SAP REPOSITORY 변경 유형 

## (솔직히 무슨 내용인지 모르겠다,, 그냥 그런갑다,,,) 

STD를 변경할 때 제공되는 것 : 

* SAP Notes

  : bugs patch. 

* Support package(SAP Notes의 집합)

* Enhancement Packages

* 추가로 upgrade version.





















































****

****

****

# WEB DYNPRO



[Web Dynpro 개념 정리 : 네이버 블로그](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=megabzr&logNo=220342641347) ***<u>(꼭보기)</u>***

Service calls can only always be embedded in global controllers, that is, in the ***<u>component controller</u>*** or in additionally created ***<u>custom controllers</u>***. 

서비스 호출은 항상 글로벌 컨트롤러, 즉 ***<u>Component controller</u>*** 또는 추가로 생성된 사용자 지정 컨트롤러에만 포함될 수 있습니다.

It is not possible, on the other hand, to embed service calls in view controllers.

반면에 View controller에 서비스 호출을 내장하는 것은 불가능하다.



## VIEW

* INTERFACE VIEW

## WINDOW

* VIEW 를 모아둔 단위
* 다른 뷰나 컴포넌트에서 재사용 할 수 있는 단위
* INTERFACE VIEW 를 통해 호출



## CONTROLLER

* COMPONENT 에 사용자의 요청이 들어오는 경우 비지니스 로직 호출

* ### COMPONENT CONTROLLER

  서비스 호출이 가능하다.

  무조건 하나

* ### INTERFACE CONTROLLER

  무조건 하나

* ### WINDOW CONTROLLER 

* ### VIEW CONTROLLER 

  * UI ELEMENT 를 포함

* ### GLOBAL CONTROLLER

* ### CUSTOM CONTROLLER

  서비스 호출이 가능하다.

* ### CONFIGURATION

## CONTROLLER METHOD

모두 가지고 있는 hook method : wddoinit( ), wddoexit( )

![Q27_1.jpg](C:/Users/jihoon/TIL/SAP Certi/IMG/Q27_1.jpg)
![Q27_2.jpg](C:/Users/jihoon/TIL/SAP Certi/IMG/Q27_2.jpg)
![Q27_3.jpg](C:/Users/jihoon/TIL/SAP Certi/IMG/Q27_3.jpg)



## CONTEXT

* 다양한 PROPERTY 를 가지는 데이터 저장소

* NODE 와 ATTRIBUTE 로 구성

* CONTEXT 는 각 CONTROLLER 별로 한개씩 갖는다.

* CONTEXT MAPPING : 

  CONTEXT 간 DATA SHARING OR DATA TRANSFERING.

* ### NODE

  하위에 ATTRIBUTE 를 가짐

  최상위에 있는 것이 루트 노드 

  LEAD\_SELECTION\_INDEX => 화면에서 선택한 라인 정보를 담고 있다.

* ### ATTRIBUTE 

  최하위 구성요소



## DATA BINDING 

VIEW CONTROLLER 의 CONTEXT-ATTRIBUTE 와 그것의 LAYOUT 에서의 UI ELEMENT 사이의 <u>**데이터 자동 전송**</u>을 설정하는 프로세스

USER INTERFACE ELEMENT 의 값을 해당 CONTROLLER 의 CONTEXT ATTRIBUTE에 연결



### FIREING PLUGS : 각 VIEW 간 이동을 위해 필요



## [TABLE 넣는 방법](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=aaaa123krkr&logNo=220782696432)

* UI ELEMENT 를 TABLE TYPE 으로 생성하고 CREATE_BINDING OPTION 에서 DATA BINDING 해준다.



## LAYOUT MANAGER

* WEB DYNPRO 의 화면 구성을 처리한다. 

* ### TYPE

  * flowlayout
  * rowlayout
  * gridlayout
  * formlayout
  * matrixlayout













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



## SHARED MEMORY AREA 를 설정에 필요한 단계

* AREA ROOT CLASS 생성

* AREA ROOT CLASS 의 ATTACH\_FOR\_WRITE 메소드 호출

  (LOCK 을 거는 구문)

* ROOT OBJECT 설정

[SHARED MEMORY - ABAP : 네이버 블로그](https://m.blog.naver.com/aaaa123krkr/220767969301)



읽는 메소드 : attach for read













****

****

****

# RFC



RFC 를 통해 외부 시스템에서 호출되는 함수 모듈을 작성할때 오류내역은 CHANGING PARAMETER 에 TABLE 형태로 전달된다.



## RFC 가 SYNC 방식으로 작동 하는 경우

* Q-RFC 인 경우 (무조건 동기 방식)[QUEUE]
* TWO-WAY COMMUNICATION 을 하는 동안











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





## 비교 연산자 CO CP

* ### CP (CONTAINS PATTERN)

  특정 문자열 PATTERN 을 가진 문자열

* ### CO (CONTAINS ONLY)

  오직 그 문자를 반드시 포함한 문자열

* **<u>위 둘은 WHERE 절에 사용 불가</u>**









## 각종 기능

## CODE INSPECTOR  (tcode : SCI)

* 자체 검사, 개체 세트 및 변형 확인
* 검사할 프로그램 및 개체를 나타내는 OBJECT 집합 생성
* LOCAL 뿐 아니라 GLOBAL INSPECTION 을 생성할 수 있다.
* 다국어 처리, 변수 선언 후 미사용. local, global 생성
* setup : inspection name, object set name, check variant name











## 예외? ??

### 락을 잡으려 하다가 못 잡을 때 발생하는 에러

* foreign_lock : 다른 사람이 락을 잡고 있을 때, 발생하는 에러
* system_failure : 시스템 상의 다른 이유로 발생하는 에러





























****

****

****

# 노답,,

# Q93. (skip)(그냥 한번 봐둬라.. ) 

* ## 217번이랑 같은 문제인데 답이 다름

* ## 217번은 다맞았다고 되어있다.

## What is the difference between a Unicode and non-Unicode program? 

UNICODE 와 NON-UNICODE PROGRAM 의 차이는?

#### Please *<u>select all</u>* the correct answers that apply. 

## *<u>Byte-type data objects cannot be assigned to character-type data objects.</u>*

바이트 형식 데이터 개체를 문자 형식 데이터 개체에 할당할 수 없습니다.

##### Byte-type data objects cannot be compared to character-type data objects.

바이트 형식 데이터 개체는 문자 형식 데이터 개체와 비교할 수 없습니다.

## *<u>Offset positioning in a Unicode structure is restricted to flat data objects.</u>*

유니코드 구조에서 간격띄우기 위치는 플랫 데이터 개체로 제한됩니다.

##### Offset positioning in a Unicode structure is restricted to character data objects.

유니코드 구조에서 간격띄우기 위치는 문자 데이터 개체로 제한됩니다.

<BR/>

<BR/>

****

****

<BR/>
