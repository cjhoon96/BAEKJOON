## ABAP Dictionary에서 생성할 수 있는 Database Object는 ?

**Database table (transparent table)**

**View**

* DATABASE VIEW
* PROJECTION VIEW
* MAINTENANCE VIEW
* HELP VIEW

Data Type

* Single Value
* Structure Type
* Table Type

Domain

Search Help

Lock Object

## 모듈화의 장점이 아닌 것은?

### 모듈화의 장점

* #### Reusablility 재사용성이 좋다.

* #### Readibility 가독성이 좋다.

* #### Maintenance 유지 보수가 용이하다.





# <u>*다음중 Lock Module을 설정할 수 없을 때 어떤 예외(Exception)가 발생할 수 있는가?*</u>

3-3





# *<u>다음중 정의된 Data Type 중 문자 유형(Character type)이 아닌것은?</u>*

C, N, sap_bool, String, Xstring, ?



#### Predefined Elementary ABAP Types with Fixed Length

| Data Type        | Initial Field Length | Valid Field Length | Initial Value | Meaning                                 |
| ---------------- | -------------------- | ------------------ | ------------- | --------------------------------------- |
| Numeric Types    |                      |                    |               |                                         |
| I                | 4                    | 4                  | 0             | Integer (whole number)                  |
| F                | 8                    | 8                  | 0             | Floating point number                   |
| P                | 8                    | 1-16               | 0             | Packed number                           |
| Character types  |                      |                    |               |                                         |
| C                | 1                    | 1 - 65535          | ' … '         | Text Field (alphanumeric characters)    |
| D                | 8                    | 8                  | '00000000'    | Date field (Format: YYYYMMDD)           |
| N                | 1                    | 1 - 65535          | '0 … 0'       | Numeric text field (numeric characters) |
| T                | 6                    | 6                  | '000000'      | Time field (format: HHMMSS)             |
| Hexadecimal type |                      |                    |               |                                         |
| X                | 1                    | 1 - 65535          | X'0 … 0'      | Hexadecimal field                       |

### sap 공식 문서 참조





## 다음 중 fixed value가 저장되는 것은?

### <u>질문</u> fixed value를 저장하는 곳을 말하는 것인가?

=> Domain => Value Range => Single Vals => Fix.Val.

f4 help 를 통해 확인 가능하다.





## 다음 중 ABAP Dictionary에서 생성할 수 없는 것은?

Database table (transparent table)

View

Data Type

* Single Value
* Structure Type
* Table Type

Domain

Search Help

Lock Object

를 생성가능





# *<u>다음 중 화면(Screen)을 포함할 수 있는 프로그램 Type 아닌 것은?</u>*

| Program Type | Long                                | Dynpro |
| ------------ | ----------------------------------- | :----: |
| Type 1       | Executable Program                  |   O    |
| Type M       | Module Pool                         |   O    |
| Type F       | Function group                      |   O    |
| Type I       | Include Program                     |        |
| Type S       | Subroutine Pool                     |   X    |
| Type J       | Interface Pool                      |   X    |
| Type K       | Class Pool                          |   X    |
| Type T       | Type Pool                           |   X    |
| Type X       | Transformation (XSLT or ST Program) |        |
| Type Q       | Database Procedure Proxy            |        |



## 다음 중 Lock Object 생성에 대해 옳은 것은?

***ABAP DICTIONARY*** 에서 생성이 가능하다.

이름의 시작은 EZ / EY 로 시작되어야 한다.

LOCK OBJECT 생성시  ENQUEUE\_<Lock_Object name> , DNQUEUE\_<Lock_Object name> 이름의  두개의 Module이 생성된다.

* ENQUEUE

  FOR SETTING LOCKS

* DEQUEUE

  FOR RELEASING LOCKS

  

  

# *<u>다음 중  DOWN-CAST 내용으로 옳지 않은 것은?</u>*

?= 을 사용

TYPE 이 맞지 않아 ERROR 가 날 경우를 대비해  TRY. \___ CATCH \_\_\_. \___ ENDTRY. 구문을 이용해 EXCEPTIONS을 처리해준다.







## 다음 중 다형성(polymorphism)을 사용하기 위한 전제 조건은? 

부모 class 의 component를 상속 받아 확장 또는 redefine 하고 

Up-Cast 를 사용하는 Generic Access를 사용한 경우 











# *<u>다음 중 Enqueue work process의 내용으로 옳은 것은?</u>* 











# <u>*ABAP dictionary에서 데이터베이스 View A와 maintenance view B를 생성했다.*</u> 

2-3-8 참조

### DATABASE VIEW

INNER JOIN

MAINT. STATUS 탭의 ACCESS 를 통해 READ ONLY 와 READ AND CHANGE를 설정 할 수 있다.

### MAINTENANCE VIEW

OUTER JOIN

DATABASE VIEW 와 달리 조인 조건을 직접 입력할 수 없다. => FOREIGN KEY로부터 파생

VIEW의 데이터를 조회, 변경, 생성 할 수 있는 모든 



https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=smkim1541&logNo=220902981184



## CL_GUI_ALV_GRID의 Class 인스턴스에서 발생한 DOUBLE_CLICK 이벤트를 처리하기 위해 필요하지 않은 것은?

EVENT HANDLING CLASS

EVENT HANDLING METHOD

```ABAP
CLASS lcl_event_handler DEFINITION.
  PUBLIC SECTION.
    METHODS
      on_double_click
        FOR EVENT double_click
        OF cl_gui_alv_grid
        IMPORTING es_row_no e_column.

ENDCLASS.

CLASS lcl_event_handler IMPLEMENTATION.
  METHOD on_double_click.
  
  ENDMETHOD.
ENDCLASS. 
```

EVENT HANDLER REGISTRATION

```ABAP
SET HANDLER LCL_EVENT_HANDLER->ON_DOUBLE_CLICK FOR GO_ALV.
```

=> EVENT HANDLER TABLE 이 자동 생성됨









# <u>*다음 중 static constructor를 생성할 때 따라야 하는 규칙으로 옳지 않은 것은?*</u> 

해당 CLASS 또는 SUBCLASS 에 처음 ACCESS 할 때 자동으로 실행된다.

* CREATE OBJECT 가 실행될때
* STATIC ATTRIBUTE 에 ACCESS 할때
* STATIC METHOD 를 호출할때
* EVENT HANDLER METHOD 가 등록될 때

SUPERCLASS 와 SUBCLASS 모두 STATIC CONSTRUCTOR 가 존재하는 경우 SUBCLASS에 처음으로 ACCESS 하는 경우 

SUPERCLASS 의 STATIC CONSTRUCTOR => SUBCLASS 의 STATIC CONSTRUCTOR  순으로 실행된다.  

* ##### 이후 SUPERCLASS와 SUBCLASS 모두에 INSTANCE CONSTRUCTOR가 존재하는 경우 

  *  SUBCLASS 의 INSTANCE CONSTRUCTOR가 실행되어 

  * 내부에서 SUPERCLASS 의 INSTANCE CONSTRUCTOR 를 호출하여 실행되고 

  * 다시 SUBCLASS 의 INSTANCE CONSTRUCTOR 순으로 실행된다. 

    

파라미터나 EXCEPTION을 가질 수 없다.

CLASS 당 단 하나만 존재 할 수 있다.

SUPERCLASS 에 STATIC CONSTRUCTOR  가 존재하더라도 SUBCLASS는 자신만의 STATIC CONSTRUCTOR를 가질 수 있다.





## 다음 중 Process After Input(PAI) 처리 블록에서 수행할 수 있는 것은? 

선택 화면이 표시된 직후 처리된다.

사용자가 ENTER 등을 선택할때 마다 여러번 처리 될 수 있다. 



USER_COMMAND    EXIT  INPUT CHECK , FIELD HELP INPUT HELP 등







# *<u>다은 중 어떤 modularization unit에서 parameter를 사용할 수 없는 것은?</u>* 

????







## ABAP Program에서 CL_GUI_CUSTOM_CONTAINER 클래스의 인스턴스(Object)를 생성하는 ABAP 구문은? 

```ABAP
DATA: go_cont TYPE REF TO cl_gui_custom_container.

CREATE OBJECT go_cont
  EXPORTING
    container_name              = 'AREA'
  EXCEPTIONS
    cntl_error                  = 1
    cntl_system_error           = 2
    create_error                = 3
    lifetime_error              = 4
    lifetime_dynpro_dynpro_link = 5
    OTHERS                      = 6.
IF sy-subrc <> 0.
*     MESSAGE ID SY-MSGID TYPE SY-MSGTY NUMBER SY-MSGNO
*     WITH SY-MSGV1 SY-MSGV2 SY-MSGV3 SY-MSGV4.
ENDIF.
```








## 다음 중 데이터 Type 중 deep 데이터 type은? 

***DEEP STRUCTURE 관련 내용으로 추정***

필드중에 한개 이상이 INTERNAL TABLE로 이루어진 STRUCTURE

#### Ex )

```ABAP
TYPES: BEGIN OF ts_data.
         INCLUDE  TYPE zteval_b00.
TYPES:   excep      TYPE char1,
         line       TYPE char4,
         cell       TYPE lvc_t_scol,     ****************
         name       TYPE scustom-name,
         carrname   TYPE scarr-carrname,
         dcusttype  TYPE char30,
         order_date TYPE sbook-order_date,
         loccuram   TYPE sbook-loccuram,
         loccurkey  TYPE sbook-loccurkey,
         avg_num    TYPE p LENGTH 3 DECIMALS 2,
         comment    TYPE icon-id,
         cancelled  TYPE sbook-cancelled,
         custtype   TYPE sbook-custtype.
TYPES: END OF ts_data.
```

ALV 를 만들기 위해 생성한 LOCAL STRUCTURE TYPE







## 다음 중 INNER JOIN으로 구현된 ABAP Dictionary View은? 

DATABASE VIEW 는 오직 INNER JOIN만 가능하다.



SEARCH HELP VIEW 는 LEFT OUTER JOIN을 지원한다.

MAINTENANCE VIEW  OUTER JOIN









# *<u>데이터 업데이트에서 함수 모듈을 호출 하여 수행 할 때 SAP 논리 작업 단위 (LUW)에 대한 모든 업데이트 요청을 삭제하기 위해 사용되는 구문이 아닌 것은?</u>*

메세지 타입 A 나 X  또는

* 메세지 타입 X는 덤프 화면이 떠서 잘 사용하지 않는다.

ROLLBACK WORK.

```ABAP
  MESSAGE a ...
  ROLLBACK WORK.
```









# *<u>다음 중 Runtime System이 ABAP 메모리를 초기화하는 것은?</u>* 

FREE MEMORY ID 'ABC'. ???













## 다음 중 fixed value을 설정할 수 있는 것은? 

### <u>질문</u> fixed value를 저장하는 곳을 말하는 것인가?

=> Domain => Value Range => Single Vals => Fix.Val.

f4 help 를 통해 확인 가능하다.



### **<u>질문</u>**5번이랑 차이가 뭐지?











## 다음은 Screen Program의 PAI flow logic 이다. 

```ABAP
PROCESS AFTER INPUT 
  FIELD A MODULE check_A 
  FIELD A MODULE check_B
  CHAIN. 
    FIELD:C,D MODULE check_CD 
  ENDCHAIN 
  CHAIN. 
  FIELD:C,B. MODULE check_CB 
  ENDCHAIN 
```

## 프로그램 실행 시 check_CB 모듈 처리 중에 메시지 Type E 메시지를 보내면 어떻게 되나요? 

### 예제 )

```ABAP
PROCESS AFTER INPUT.
  MODULE exit AT EXIT-COMMAND.
  FIELD sdyn_conn-carrid.
  MODULE check_input.

  CALL SUBSCREEN sub.
  CHAIN.
    FIELD: sdyn_conn-carrid, "해당 필드들에 입력값이 입력되면 check_sflight
           sdyn_conn-connid, "모듈을 실행해 있는 데이터인지 체크후 없는 경우
           sdyn_conn-fldate. "에러 메시지를 띄운다.
    MODULE check_sflight ON CHAIN-REQUEST.
  ENDCHAIN.
```

```ABAP
*&---------------------------------------------------------------------*
*&      Module  CHECK_SFLIGHT  INPUT
*&---------------------------------------------------------------------*
*       text
*----------------------------------------------------------------------*
MODULE check_sflight INPUT.
  SELECT SINGLE *
    FROM sflight
    INTO CORRESPONDING FIELDS OF wa_sflight
    WHERE carrid = sdyn_conn-carrid AND
          connid = sdyn_conn-connid AND
          fldate = sdyn_conn-fldate.
  CHECK sy-subrc <> 0.
  CLEAR wa_sflight.
  MESSAGE e007(bc410).
```

보기 필요









## 다음 중 ABAP 프로그램에서 로컬 클래스를 정의할 때 구문 순서가 옳은 것은? 



```ABAP
CLASS lcl_airplane DEFINITION.
  PUBLIC SECTION.

  PROTECTED SECTION.

  PRIVATE SECTION.

ENDCLASS.


CLASS lcl_airplane IMPLEMENTATION.
  METHOD ___.

  ENDMETHOD.
  
ENDCLASS.
```









# *<u>프로그램 소스 코드에는 다음과 같이 명령문이 포함되어 있습니다.</u>* 

```ABAP
READ TABLE gt_itab INTO gs_struc INDEX 1. 
```

# *<u>gt_itab을 정의할 때 internal table type으로 사용할 수 있는 것은?</u>* 















## 다음 구문 중 data element인 S_CONN_ID의 data object를 올바르게 정의 되지 않은 것은? 

```ABAP
DATA: CONN1 TYPE S_CONN_ID,
	  CONN2 TYPE SBOOK-CONNID,
      CONN3 TYPE SFLIGHT-CONNID,
      CONN4 LIKE CONN1.
```

???





## 다음 중 Complete ABAP predefined data type인 것은? 

* ### Complete Data Type

  | Standard Type  | Description                                                  |
  | -------------- | ------------------------------------------------------------ |
  | **D**          | Type for **date**         format: **YYYYMMDD**    **length 8 (fixed)** |
  | **T**          | Type for **time**         format: **HHMMSS**         **length 6 (fixed)** |
  | **I, INT8**    | Type for **integer**    either **length 4** (fixed) (for I) , or **length 8** (fixed for INT 8) |
  | **F**          | Type for **Floating Point Num**    **length 8 (fixed)**      |
  | **STRING**     | Type for **Dynamic Length Character String**                 |
  | **XSTRING**    | Type for **Dynamic Length Byte Sequence (HeXadecimal String)** |
  | **DECFLOAT16** | Types for **DECimal FLOATing Point numbers** with mantissa and exponent    **length 8 bytes with 16 decimal places (fixed)** |
  | **DECFLOAT34** | Types for **DECimal FLOATing Point numbers** with mantissa and exponent    **length 16 bytes with 34 decimal places (fixed)** |


  * ### Incomplete Data Type

    | Standard Type | Description                                                  |
    | ------------- | ------------------------------------------------------------ |
    | **C**         | Type for **Character String** (**C**haracter) for which the length is to be specified |
    | **N**         | Type for **Numerical Character String** (**N**umerical Character) for which the length is to be specified |
    | **X**         | Type for **Byte Sequence** (He**X**adecimal String) for which the length is to be specified |
    | **P**         | Type for **Packed Number** (**P**acked number) for which the length is to be specified (In the definition of a packed number, the number of decimal points might also be specified.)  소숫점 자리수를 적게 사용하고자 할때 사용<br>LENGTH * 2 의 길이로 생기며 마지막은 + - 를 결정하는 칸이 된다. 또 DECIMALS 만큼이 소숫점 아래 자리수로 할당되며 나머지는 정수부분으로 할당된다. |












## 다음 중 SAP NetWeaver AS ABAP 버전 7.1x 이상의 구성 요소가 아닌 것은? 

![test](img/test1.png)

PAS 의 ABAP MS 가 CS로 이동, CS에 ABAP ES 추가 

GW: GATEWAY

MS: MESSAGE SERVER

ICM: INTERNET COMMUNICATION MANAGER

D: DIALOG WORK PROCESS

B: BACKGROUND WORK PROCESS

E: ENQUEUE WORK PROCESS

S: SPOOL WORK PROCESS

 

이전 버전들과의 차이:

중앙 인스턴스  CENSTRAL INSTANCE (CI) 가 PRIMARY APPLICATION SERVER (PAS) 로 변경 되었다.

DIALOG INSTANCE (DI) 가 ADDITIONAL APPLICATION SERVER (AAS)로 변경 되었다.

ENEQUEU / MESSAGE 서버 프로세스를 중앙 인스턴스에서 분리하는 ABAP CENTRAL SERVICE 도입 









## 다음중 ABAP 디스패쳐의 기능이 아닌 것은?



CLIENT의 요청을 받아 QUEUE 에 저장하고 WORK PROCESS에 할당한다.

* Work Process

  * #### Dialog DWP

    * 사용자의 요청에 의해 dialog 스탭을 수행
    * 쉽게 말해 ABAP 의 구문이 한줄한줄 씩 순차적으로 진행되어 가는 것

    * **ABAP Dispatcher 별로 최소 두개** 이상 있어야 한다.
    * **가장 많이 사용**

  * #### Background BWP

    * 사용자와 상호작용 없이 실행되는 프로그램을 처리한다.
    * 지정한 스케줄 마다 시스템을 실행시켜준다.
    * 하나의 작업이 너무 오래 걸릴때도 사용

  * #### Lock management EWP

    * 공유 메모리의 잠금테이블을 관리
      * 여러 유저에 의해 사용되다 보니 여러 유저에 의해 데이터가 동시에 수정되는 상황이 발생
      * 따라서 특정 유저가 데이터를 수정중일때 다른 유저가 수정할 수 없게 설정을 해준다.
      * ABAP 런타임 환경에서의 논리적 데이터베이스 잠금이 기록된다.

  * #### Update VWP

    * 업데이트 요청을 처리한다. 

  * #### Spool S

    * 프린터를 통해 출력할때 사용









## 다음 중 data object를 생성하는 구문이 아닌 것은? 

DATA, CONSTANCE ,,, ? 











# *<u>다음 중 search help를 할당할 수 없는 대상은?</u>* 









# *<u>다음 중 elementary search help에 속하는 구성 요소에 해당하는 것은?</u>* 











## PARAMETERS 구문에 어떤 추가 항목을 사용하여 selection screen의 Input 필드에 초기값 채울 수 있는 것은? 

DEFAULT 구문을 사용한다.

```ABAP
PARAMETERS: pa_conn  TYPE s_conn_id      DEFAULT '0017'.
```







# *<u>다음 중 selection screen을 수정할 수 있는 이벤트는?</u>* 

AT SELECTION-SCREEN OUTPUT- PBO?







## 다음 중 selection screen에서 PARAMETERS 필드의 기본값을 변경할 수 있는 이벤트 블록은? 

### INITIALIZATION









# <u>*ABAP Dictionary에서 Table Type을 생성할 때 필요하지 않는 것은?*</u> 

LINE TYPE - STRUCTURE TYPE 이 들어감

??????







# <u>*다음 중 search help에서 inner join을 사용하는 View 유형(type)은?*</u> 

DATABASE VIEW

https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=smkim1541&logNo=220902981184







## 다음 데이터 Type 중 predefined된 ABAP standard data type이 아닌 것은?

* ### Complete Data Type

  | Standard Type  | Description                                                  |
  | -------------- | ------------------------------------------------------------ |
  | **D**          | Type for **date**         format: **YYYYMMDD**    **length 8 (fixed)** |
  | **T**          | Type for **time**         format: **HHMMSS**         **length 6 (fixed)** |
  | **I, INT8**    | Type for **integer**    either **length 4** (fixed) (for I) , or **length 8** (fixed for INT 8) |
  | **F**          | Type for **Floating Point Num**    **length 8 (fixed)**      |
  | **STRING**     | Type for **Dynamic Length Character String**                 |
  | **XSTRING**    | Type for **Dynamic Length Byte Sequence (HeXadecimal String)** |
  | **DECFLOAT16** | Types for **DECimal FLOATing Point numbers** with mantissa and exponent    **length 8 bytes with 16 decimal places (fixed)** |
  | **DECFLOAT34** | Types for **DECimal FLOATing Point numbers** with mantissa and exponent    **length 16 bytes with 34 decimal places (fixed)** |


  * ### Incomplete Data Type

    | Standard Type | Description                                                  |
    | ------------- | ------------------------------------------------------------ |
    | **C**         | Type for **Character String** (**C**haracter) for which the length is to be specified |
    | **N**         | Type for **Numerical Character String** (**N**umerical Character) for which the length is to be specified |
    | **X**         | Type for **Byte Sequence** (He**X**adecimal String) for which the length is to be specified |
    | **P**         | Type for **Packed Number** (**P**acked number) for which the length is to be specified (In the definition of a packed number, the number of decimal points might also be specified.)  소숫점 자리수를 적게 사용하고자 할때 사용<br>LENGTH * 2 의 길이로 생기며 마지막은 + - 를 결정하는 칸이 된다. 또 DECIMALS 만큼이 소숫점 아래 자리수로 할당되며 나머지는 정수부분으로 할당된다. |







## 다음 중 테이블 buffering type이 아닌 것은? 

| **Buffering Type**      | **Description**                                              |
| ----------------------- | ------------------------------------------------------------ |
| Full Buffering          | System loads all the data into Buffer whenever single record of the table is accessed. |
| Generic Buffering       | When a record with a specific Generic key is accessed, all other records of that Generic key are also buffered. |
| Single-record Buffering | Only the record that was really accessed is buffered.        |





# *<u>스크린 프로그램에서 FIELD_NAME 필드에 잘못된 값을 입력하면 사용자가 필드에 값을 수정할 수 있도록 화 면의 PAI에서 모듈 CHECK_MODULE를 호출하는 구문은?</u>* 







# <u>*dbtab은 transparent table입니다. 다음 중 옳은 것은?*</u> 

## DATA myvar TYPE dbtab. 

보기 필요







## 다음 중 transparent table A를 사용하여 internal table을 선언한 것은? 

```ABAP
DATA GT_DATA TYPE TABLE OF A
```





###  다음 중 Instance Constructor의 Signature에 해당 하는 것은? 

IMPORTING 파라미터와 EXCEPTIONS만을 사용 가능하다.

나머지의 파라미터가 보기로 나오지 않을까 추정







# *<u>다음과 같이 참조변수(reference variable) 정의되었을 때 참조변수 내용에 액세스하기 위한 구문은?</u>* 

# *<u>DATA: Z1 TYPE REF TO DATA.</u>*









# *<u>다음 중 lock object를 사용하는 순서로 옳은 것은?</u>* 

PROGRAMMING DATABASE UPDATES     UNIT 3







## 다음 중 transparent table의 technical setting에서 정의에 해당 되지 않는 것은? 

* #### DATA CLASS

  ##### Master Table (APPL0)

  한번 데이터가 만들어지면, 거의 수정, 삭제, 변경이 되지 않는 성격의 내용

  ##### Transaction Table (APPL1)

  시스템을 운영하면서 빈번하게 입력, 수정, 삭제가 발생하는 내용

  ##### Customizing Table (APPL2)

  시스템 설정에 관련된 내용

* #### Size Category

  테이블을 만들자 마자의 기본 크기를 결정하는 것이 아니다

  테이블이 꽉 차서 늘려야 하는 경우에 적용된다.



* #### Sharing Type

  

* Buffer 허용/생성 여부 

* #### Buffering Type

* #### Data Changes => Log Changes

  잘 사용하지 않음 접속 내용 관련

  



## ABAP dictionary에서 생성된 도메인은 어떻게 사용할 수 있습니까? 

뭔소리야

Domain은 Data Elements의 Technical Properties(기술적 특성) 를 중앙에서 관리한다.

##### Domain은 프로그램, 테이블 등에서 직접 사용될 수 없다.

도메인을 수정할 때는 항상 조심해야 한다.









## 다음 중 로컬 데이터 type gty_1을 사용하여 data object를 정의한 것은? 

뭐여..

```ABAP
DATA: GT_DATA TYPE GTY_1,
	  GS_DATA TYPE LINE OF GTY_1.
```







# *<u>ABAP Standard type C, D, N, STRING 및 T와 호환이 되는 generic data type은?</u>* 

clike?

https://help.sap.com/doc/abapdocu_751_index_htm/7.51/en-us/abenbuilt_in_types_generic.htm







# *<u>다음 중 사용자가 잘못 입력한 값을 수정할 수 있도록 selection screen에서 Input Check 내용에 해당하는 것은?</u>*

보기 필요







## Super 클래스의 메서드를 Sub 클래스에서 사용할 수 없도록 하기 위해 메서드를 정의하는 곳은? 

private section







## 클래스의 static method 구현에서 액세스할 수 있는 클래스 component는? 

Static Component 들만 access 가능하다. 









## 다음 중 필드에 잘못된 값을 입력하면 오류 메시지가 표시되고 커서가 해당 필드에 표시하기 위해 사용하는 이벤트는? 

at selection screen - pai





## Executable program에서 

```ABAP
AT SELECTION-SCREEN, AT SELECTION-SCREEN OUTPUT, INITIALIZATION, START-OF-SELECTION 
```

## 이벤트 블록을 사용합니다. ABAP 런타임이 호출하는 순서로 옳은 것은? 

INITIALIZATION -> AT SELECTION-SCREEN OUTPUT -> AT SELECTION-SCREEN -> START-OF-SELECTION







## 새로운 function group을 만들 때 자동으로 생성되는 객체는? 

LZFMTOP(자동생성)

LZFMUXX(자동생성_작동작성)









## Search help에서 Outer join을 사용하는 View type은? 

HELP VIEW





## 다음 설명 중 옳은 것은?

#### 세상에나,,,





## Transparent table에 필드 유형 CURR(CURRENCY)를 추가하려고 할 때 해야 할 것은?. 

CURRENCY/QUANTITY FIELD에 통화와 금액을 연결해 주는 과정?

REFERENCE TABLE, REF.FIELD





## 다음 설명 중 옳은 것은?

#### 세상에나,,,





##  필수 입력 필드가 있는 화면(Screen)에서 모든 필수 입력 필드를 채워지지 않고 취소 버튼을 사용하여 화면을 종료하려고 할 때 처리 방법은? 

PBO의 FUNCTION KEY에서 CANCEL의 FUNCTION TYPE을 E TYPE (EXIT COMMAND)으로 준 후

```ABAP
MODULE <MODULE NAME> AT EXIT-COMMAND.
```

으로 처리한다.

LEAVE PROGRAM.







## 다음 ABAP 구문 검사에서 오류가 발생하는 것은? 

보기 필요







## 다음 중 ALV의 필드 카탈로그(field catalog)에 대한 내용으로 옳지 않은 것은? 

참조할 범위가 너무 광범위









# <u>*SAP 시스템의 모든 ABAP repository 객체(object)에서 직접 액세스할 수 있는 데이터 타입은 어디에 정의 정의 되어야 하는가?*</u> 







## 다음 중 필드의 label이 저장되는 것은? 

alv?









### 다음 중 ABAP 편집기(Editor)와 ABAP 디버거(debugger) 모두에서 수행할 수 있는 것은?











## 다음 중 검색 도움말에 대한 설명으로 옳지 않은 것은?









## 다음 중 generic character-type CLIKE와 호환되는 ABAP 데이터 타입이 아닌 것은?

**c**, **n**, and **string** plus the date/time types **d**, **t** and character-like 









## 다음 중 ABAP Report에서 사용자 입력을 허용하는 구문은? 

???? parameter / select-options?















## 다음 클래스 정의가 있습니다. 

```ABAP
CLASS CL_AIRPLANE DEFINITION. 
  PUBLIC SECTION. 
    METHOS: set_passengers. 
  PROTECTED SECTION. 
    CONSTANST c_pos type i. 
    METHODS get_passengers. 
  PRIVATE SECTION. 
    DATA mv_passengers TYPE i. 
    METHODS set_attributes. 

ENDCLASS. CL_AIRPLANE 
```

## 클래스의 하위(Sub) 클래스에서 직접 access할 수 있는 구성 요소가 아닌 것은? 

PUBLIC SECTION 과 PROTECED SECTION에서 선언한 내용들







## 다음은 ABAP Open SQL 구문입니다. 

```ABAP
SELECT SINGLE carrid connid cityfrom cityto 
  From spfli 
  INTO gs_spfli 
 WHERE carrid = pa_car 
   AND connid = pa_con 
```

## SELECT 구문의 필드 목록에 있는 필드는 대상 gs_spfli에 어떻게 처리 하나요? 



## 보기 필요