# Unit 11 Complex Data Objects



# Lesson 1. Using Structured Data Objects

****

## 개요

Structured 데이터 오브젝트(구조화 변수)와 정의를 소개하고 ABAP 디버거에서 분석하는 방법을 설명한다. 

Structured 데이터 오브젝트에 기본적인 ABAP 문을 사용하는 방법에 대해서도 알아본다.

## 목표

* Structured 데이터 오브젝트 정의
* Structured 데이터 오브젝트에 대한 기본적인 ABAP 문 구현
* 디버깅 모드로 Structured 데이터 오브젝트 분석

****



* ## Definition of Structured Data Objects

  ![structure](./img/structure.png)

  ### 유형 설정 시 사용되는 구조

  * ABAP 딕셔너리 구조 (전역 구조 유형)
  * 프로그램에서 로컬로 선언한 구조 유형

  ### 명명 규칙에 추가되는 정의

  * 프로그램 전역 또는 로컬 구조화 유형

    ts_

  * 프로그램 전역 구조화 변수

    gs_

  * 로컬 구조화 변수

    ls_





* ## Definition of Structure with Local Types

  ```ABAP
  *&---------------------------------------------------------------------*
  *& Report ZB23_00008
  *&---------------------------------------------------------------------*
  *&
  *&---------------------------------------------------------------------*
  REPORT zb23_00008.
  
  DATA gs_flight TYPE bc400_s_flight.
  
  * 컬럼 6 + 1 개의 항공사 이름을 가진 타입을 정의 해야함.
  TYPES: BEGIN OF ts_flightinfo,
           carrid     TYPE s_carr_id,
           connid     TYPE s_conn_id,
           fldate     TYPE s_date,
           seatsmax   TYPE s_seatsmax,
           seatsocc   TYPE s_seatsocc,
           percentage TYPE s_flghtocc,
           carrname   TYPE s_carrname,
         END OF ts_flightinfo.
         
  * id name gender 로 구성된 local structure의 정의
  TYPES: BEGIN OF ts_student,
           id     TYPE n LENGTH 8,
           name   TYPE c LENGTH 32,
           gender TYPE c LENGTH 1,
         END OF ts_student.
  ```

   







* ## Access to Structure Components

  ```ABAP
  DATA: gs_student TYPE ts_student.
  
  gs_student-id       = 1.
  gs_student-name     = '홍길동'.
  gs_student-gender   = 'F'.
  gs_student-carrname = '대한항공'.
  
  write: gs_student-id, gs_student-name.
  ```

  | ts_student | id   | name     | gender | carrname   |
  | ---------- | ---- | -------- | ------ | ---------- |
  | gs_student | 1    | '홍길동' | 'F'    | '대한항공' |





* ## Usage of Sturctured Data Objects

  ![structure1](./img/structure1.png)

  ```ABAP
  * 특정한 structure 의 key 값이 같은 것의 데이터를 다른 structure로 옮긴다.
  MOVE-CORRESPONDING gs_student TO gs_target.
  ```

  

  

  

  

* ## 실습

  ```ABAP
  *&---------------------------------------------------------------------*
  *& Report ZB23_00008
  *&---------------------------------------------------------------------*
  *&
  *&---------------------------------------------------------------------*
  REPORT zb23_00008.
  
  * 문제 1)
  * 항공사 ID, 항공사 이름, 고객 ID, 고객 이름으로 구성된 스트럭쳐 타입과 변수를 정의하시오.
  * 관련 테이블은 SCARR, SCUSTOM.
  
  TYPES: BEGIN OF ts_flightinfo,
           carrid   TYPE scarr-carrid,
           carrname TYPE scarr-carrname,
           id       TYPE scustom-id,
           name     TYPE scustom-name,
         END OF ts_flightinfo.
  
  * 문제2)
  * 선언한 변수의 값 AA, America Airline, 109, '홍길동'
  
  DATA gs_flightinfo TYPE ts_flightinfo.
  
  gs_flightinfo-carrid   = 'AA'.
  gs_flightinfo-carrname = 'America Airline'.
  gs_flightinfo-id       = 109.
  gs_flightinfo-name     = '나고객'.
  
  WRITE:/ gs_flightinfo-carrid,
        / gs_flightinfo-carrname,
        / gs_flightinfo-name.
  ```

  

  

  

* ## Table의 Column의  type 지정 방법

  * ### data element

    **EX )**

    ```ABAP
    carrid	TYPE s_carr_id,
    ```
  
    
  
  * ### built-in data
  
    **EX )**
  
    ```ABAP
    id TYPE n LENGTH 8,
    ```
  
    
  
  * ### <u>*table-column 으로 지정 - 정석*</u>
  
    ##### EX )
  
    ```ABAP
    carrid   TYPE scarr-carrid,
    ```
  
    
  
  테이블의 컬럼을 참조하여 타입을 정하는 것이 정석
  
  컬럼 이름은 테이블의 컬럼 이름과 동일하게 해 주는 것이 정석



* ## Exercise 23

  #### ZBC400_B23_STRUCTURE

  ```ABAP
  *&---------------------------------------------------------------------*
  *& Report ZBC400_B23_STRUCTURE
  *&---------------------------------------------------------------------*
  *&
  *&---------------------------------------------------------------------*
  REPORT zbc400_b23_structure.
  
  PARAMETERS: pa_car  TYPE bc400_s_flight-carrid,
              pa_con  TYPE bc400_s_flight-connid,
              pa_date TYPE bc400_s_flight-fldate.
  
  DATA: gs_carrier TYPE bc400_s_carrier,
        gs_flight  TYPE bc400_s_flight.
  
  TYPES: BEGIN OF ts_carrierflight,
           carrid     TYPE bc400_s_carrier-carrid,
           carrname   TYPE bc400_s_carrier-carrname,
           currcode   TYPE bc400_s_carrier-currcode,
           url        TYPE bc400_s_carrier-url,
           connid     TYPE bc400_s_flight-connid,
           fldate     TYPE bc400_s_flight-fldate,
           seatsmax   TYPE bc400_s_flight-seatsmax,
           seatsocc   TYPE bc400_s_flight-seatsocc,
           percentage TYPE bc400_s_flight-percentage,
         END OF ts_carrierflight.
  
  
  DATA gs_carrierflight TYPE ts_carrierflight.
  
  TRY.
      CALL METHOD cl_bc400_flightmodel=>get_flight
        EXPORTING
          iv_carrid = pa_car
          iv_connid = pa_con
          iv_fldate = pa_date
        IMPORTING
          es_flight = gs_flight.
  
      CALL METHOD cl_bc400_flightmodel=>get_carrier
        EXPORTING
          iv_carrid  = pa_car
        IMPORTING
          es_carrier = gs_carrier.
  
    CATCH cx_bc400_no_data.
      WRITE 'No data found!'.
    CATCH cx_bc400_no_auth.
      WRITE: 'No authority for this carrier!'.
  ENDTRY.
  
  MOVE-CORRESPONDING gs_flight TO gs_carrierflight.
  MOVE-CORRESPONDING gs_carrier TO gs_carrierflight.
  
  
  
  WRITE:/ gs_carrierflight-carrid,
        / gs_carrierflight-carrname,
        / gs_carrierflight-currcode,
        / gs_carrierflight-url,
        / gs_carrierflight-connid,
        / gs_carrierflight-fldate,
        / gs_carrierflight-seatsmax,
        / gs_carrierflight-seatsocc,
        / gs_carrierflight-percentage.
  ```

  









# Lesson 2. Using Internal Tables

## 개요

내부 테이블 (Internal Table) 을 정의하고 ABAP 프로그램에서 사용하는 방법에 대해 설명한다.

또한 ABAP 디버거에서 런타임에 내부 테이블을 분석한다.

## 목표

* Internal Tables 정의
* Internal Tables에 기본적인 ABAP 문 구현
* 디버깅 모드의 Internal Tables 분석

****



* ## Table Types

  ![internaltables](./img/internaltables.png)

  ### Internal Tables의 일반적 용도

  * 나중에 처리할 수 있도록 데이터베이스 테이블 또는 순차 파일의 데이터 저장
  
  * 화면 또는 프린터 출력을 위해 데이터 준비 
  
    EX ) 정렬
  
  * 메소드, 함수 모듈 또는 서브 루틴 호출과 같은 다른 서비스의 사용을 위해 데이터 준비
  
  
  
  
  
  Database의  테이블을 internal table에 담을 수 있다.
  
  Database의 테이블과 달리 프로그램이 끝나면 없어지는 변수이다.



* # Properties of Internal Tables

  ​	![internaltables1](./img/internaltables1.png)

  * ### Line type

    * Internal Table의 모양이 결정된다.
    * 대개 해당 구조 유형을 지정하지만 데이터 유형에 따른 제한은 없다.

  * ### Primary key

    * Internal Table에 Key를 설정할 수 있다.
      * 중복된 데이터를 삽입 방지
      * 검색 속도의 증가

  * ### Table kind

    * #### Standard

      기본적으로 데이터르르 삽입한 순서대로 쌓임

    * #### Sorted

      데이터 삽입시 특정 정렬 조건에 맞춰 정렬되어 삽입

    * #### Hashed

      런타임 환경에서 해싱 절차를 사용하여 빠른 키 액세스를 위해 데이터 레코드가 관리되며, UNIQUE-KEY 가 필요하다.
      
      Internal Tables의 용량이 매우 크고 키만 사용해서 내부 테이블에 액세스 하려는 경우 사용한다.

    
    
    

* ## Attributes and Uses of Table Kinds

  ![internaltables2](./img/internaltables2.png)

  * ### Index Access

    Read *<Internal Table>* INDEX *n*

  * ### Key Access

    READ *<Internal Table>* WITH *<Key name>* = <Key element>

  * ### Key Uniqueness

    * #### NON-UNIQUE

      중복 가능
    
    * #### UNIQUE
    
      중복 불가능



* ## Internal Table을 정의하는 방법

  ![internaltables2](./img/internaltables3.png)

  ​	![internaltables4](./img/internaltables4.png)

  ![internaltables5](./img/internaltables5.png)

  ![internaltables5](./img/internaltables6.png)

  ```ABAP
  *&---------------------------------------------------------------------*
  *& Report ZB23_00009
  *&---------------------------------------------------------------------*
  *&
  *&---------------------------------------------------------------------*
  REPORT zb23_00009.
  
  * XYZ은 STANDARD INTERNAL TABLE이며, 컬럼은 모두 6개이고, KEY는 3개(NON-UNIQUE)이다.
  DATA xyz TYPE bc400_t_flights.
  
  * 학번, 이름, 성별로 구성되어진 STANDARD INTERNAL TABLE을 정의하되, KEY(NON-UNIQUE)는 학번으로 구성함.
  * 1. LINE TYPE 결정.
  TYPES: BEGIN OF ts_student,
           id       TYPE n LENGTH 8,
           name     TYPE c LENGTH 32,
           gender   TYPE c LENGTH 1,
           carrname TYPE scarr-carrname,
         END OF ts_student.
  
  * 2. INTERNAL TABLE 정의.
  DATA gt_student TYPE STANDARD TABLE OF ts_student
                  WITH NON-UNIQUE KEY id.
  
  * Structure 타입을 이용해 Internal Table 정의하는 방법.
  DATA gt_Flight TYPE STANDARD TABLE OF bc400_s_flight.
  
  * Structure 타입 변수를 이용해 Internal Table 정의하는 방법.
  DATA gt_student2 LIKE STANDARD TABLE OF gs_student.
  
  * Internal Table을 이용해 Structure Type의 변수를 정의하는 방법.
  DATA gs_flight LIKE LINE OF gt_flight.
  
  * Internal Table을 이용해 Internal Table 변수를 정의하는 법.
  DATA ttt LIKE gt_flight.
  
  
  
  
  * 문제 1) ts_student를 이용하여 스트럭쳐 변수 (gs_student)를 선언하시오.
  DATA gs_student TYPE ts_student.
  
  * 문제 2) ts_student를 이용하여 인터널 테이블 (gt_stident)를 선언하시오. Standard,
  *        non-unique key (ID, GENDER)
  DATA gt_student TYPE STANDARD TABLE OF ts_student
                  WITH NON-UNIQUE KEY id gender.
  
  * 문제 3) 1번에서 정의한 Structure를 통해 인터널 테이블 (gt_student2)를 선언하시오
  *       (테이블 종류와 키는 본인 마음대로)
  DATA gt_student2 LIKE STANDARD TABLE OF gs_student.
  
  * 문제 4) 2번의 Internal table과 동일한 형태의 인터널 테이블 (gt_student3)를 선언하시오.
  DATA gt_student3 LIKE gt_student.
  ```




# 여기서부터 다시

* ## Usage of Internal Tables

  ![internaltables5](./img/internaltables7.png)

  |      |      |      |
  | ---- | ---- | ---- |
  |      |      |      |
  |      |      |      |
  |      |      |      |
  |      |      |      |
  |      |      |      |

  

  * ### COLLECT 

    * 같은 키값을 찾아서 숫자를 더해준다

    * 키값이 없는 경우 삽입된다.
    * #### 키 필드 이외에는 모두 숫자여야 가능하다.







* ## Processing Sets of Records (Overview)

  ![internaltables8](./img/internaltables8.png)

  * Loop문

    ```ABAP
    DO.
      sy-index.
    ENDDO.
    
    LOOP AT
      sy-tabix.
    ENDLOOP.
    
    SELECT ...
      sy-dbcnt
    endselect.
    ```

  * Loop 실습
  
    ```ABAP
    *&---------------------------------------------------------------------*
    *& Report ZB23_00009
    *&---------------------------------------------------------------------*
    *&
    *&---------------------------------------------------------------------*
    REPORT zb23_00011.
    
    TYPES: BEGIN OF ts_student,
             id       TYPE n LENGTH 8,
             name     TYPE c LENGTH 32,
             gender   TYPE c LENGTH 1,
             carrname TYPE scarr-carrname,
           END OF ts_student.
    
    DATA gt_student TYPE SORTED TABLE OF ts_student WITH NON-UNIQUE KEY id. "Internal Table
    DATA gw_student LIKE LINE  OF gt_student. "Work Area
    * Work Area를 채운후 Work Area를 Internal Table에 넣는다.
    
    
    * APPEND
    gw_student-id     = 4.
    gw_student-name   = '홍길동'.
    gw_student-gender = 'M'.
    APPEND gw_student TO gt_student.
    
    
    gw_student-id     = 2.
    gw_student-name   = '김미리'.
    gw_student-gender = 'F'.
    INSERT gw_student INTO TABLE gt_student.
    cl_demo_output=>display_data( gt_student ).
    
    
    CLEAR gw_student.        " 이전에 입력해 둔 내용을 삭제하고 다시 사용한다. (trash data를 지운다.)
    gw_student-id     = 3.
    gw_student-name   = '김철수'.
    INSERT gw_student INTO TABLE gt_student.
    cl_demo_output=>display_data( gt_student ).
    
    
    CLEAR gw_student.
    gw_student-id     = 0.
    gw_student-name   ='나영희'.
    gw_student-gender = 'F'.
    INSERT gw_student INTO TABLE gt_student.
    
    * 변경.
    * 3번 학생의 이름을 나변경으로 바꾸고 성별을 m으로 바꾸고 싶음.
    * 1) 3번을 읽고, 유효하면 변경한다.
    
    READ TABLE gt_student INTO gw_student WITH KEY id = 3.
    IF sy-subrc = 0.
      gw_student-name   = '나변경'.
      gw_student-gender = 'M'.
      MODIFY TABLE gt_student FROM gw_student.
    ENDIF.
    
    
    cl_demo_output=>display_data( gt_student ).
    
    * 루프문 추가
    * 루프문의 카운트와 모든 학생 이름을 출력
    LOOP AT gt_student INTO gw_student.
      WRITE: sy-tabix, gw_student-name.
    ENDLOOP.
    
    ULINE.
    
    LOOP AT gt_student INTO gw_student WHERE gender = 'M'.
      WRITE: sy-tabix, gw_student-name, gw_student-gender.
    ENDLOOP.
    
    
    LOOP AT gt_student INTO gw_student.
      gw_student-name = '나새롬'.
      MODIFY gt_student FROM gw_student INDEX sy-tabix.
    ENDLOOP.
    
    cl_demo_output=>display_data( gt_student ).	
    ```
  
    



* ## 실습 ZB23_QUIZ_04

  SELECTION SCREEN 에서 화폐단위를 입력 받아

  해당 화폐단위를 사용하는 항공사 정보를 모두 출력함

  (출력정보: 항공사 코드, 항공사 이름, 화폐단위, URL)

  사용함 함수 : GET_CARRIER_LIST

  #### ZB23_QUIZ_04

  ```ABAP
  *&---------------------------------------------------------------------*
  *& Report ZB23_QUIZ_04
  *&---------------------------------------------------------------------*
  *&
  *&---------------------------------------------------------------------*
  REPORT zb23_quiz_05.
  
  PARAMETERS pa_unit TYPE scarr-currcode.
  
  DATA: gt_carrier TYPE STANDARD TABLE OF scarr,
        gw_carrier LIKE LINE OF gt_carrier.
  
  CALL FUNCTION 'GET_CARRIER_LIST'
    IMPORTING
      t_list = gt_carrier.
  
  
  LOOP AT gt_carrier INTO gw_carrier WHERE currcode = pa_unit.
    WRITE: gw_carrier-carrid, gw_carrier-carrname, gw_carrier-currcode, gw_carrier-url.
  ENDLOOP.
  ```

  

* ## 실습 ZB23_QUIZ_05

  기존에 구현한 프로그램을 Copy 후 기능을 개선함\

  개선할 내용

  * 검색 조건에 입력하는 화폐단위를 제외한 항공사 리스트 출력.

  * 화폐단위 코드와 옆에 화폐단위에 대한 영어 텍스트도 함께 나오도록함

    (관련함수: DD_GET_CURRENCIES)

  * 출력 결과예시

    AA Americal Airline USD United States Dollars

    http://www.aa.com

  #### ZB23_QUIZ_05

  ```ABAP
  *&---------------------------------------------------------------------*
  *& Report ZB23_QUIZ_04
  *&---------------------------------------------------------------------*
  *&
  *&---------------------------------------------------------------------*
  REPORT zb23_quiz_05.
  
  PARAMETERS pa_unit TYPE scarr-currcode.
  
  DATA: gt_carrier TYPE STANDARD TABLE OF scarr,
        gw_carrier LIKE LINE OF gt_carrier,
        gt_rslt    TYPE STANDARD TABLE OF tcurt,
        gw_rslt    LIKE LINE OF gt_rslt.
  
  CALL FUNCTION 'GET_CARRIER_LIST'
    IMPORTING
      t_list = gt_carrier.
  
  CALL FUNCTION 'DD_GET_CURRENCIES'
  
    TABLES
      currencies = gt_rslt.
  
  IF gt_carrier IS NOT INITIAL.
  
    LOOP AT gt_carrier INTO gw_carrier WHERE currcode <> pa_unit.
      READ TABLE gt_rslt INTO gw_rslt WITH KEY waers = gw_carrier-currcode.
      WRITE: gw_carrier-carrid, gw_carrier-carrname, gw_carrier-currcode, gw_rslt-ltext, gw_carrier-url.
    ENDLOOP.
  
  ELSE.
    WRITE:'no data'.
  ENDIF.
  ```

  



​	![](./img/)





