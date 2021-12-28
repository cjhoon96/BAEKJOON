## 1. ABAP Dictionary에서 생성할 수 있는 Database Object는 ?

**Database table (transparent table)**

**View**

Data Type

* Single Value
* Structure Type
* Table Type

Domain

Search Help

Lock Object

## 2.모듈화의 장점이 아닌 것은?

### 모듈화의 장점

* #### Reusablility 재사용성이 좋다.

* #### Readibility 가독성이 좋다.

* #### Maintenance 유지 보수가 용이하다.





# <u>*3.다음중 Lock Module을 설정할 수 없을 때 어떤 예외(Exception)가 발생할 수 있는가?*</u>

3-3





# *<u>4. 다음중 정의된 Data Type 중 문자 유형(Character type)이 아닌것은?</u>*

C, N, sap_bool, String, Xstring, ?





## 5. 다음 중 fixed value가 저장되는 것은?

### <u>질문</u> fixed value를 저장하는 곳을 말하는 것인가?

=> Domain => Value Range => Single Vals => Fix.Val.

f4 help 를 통해 확인 가능하다.





## 6. 다음 중 ABAP Dictionary에서 생성할 수 없는 것은?

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





# *<u>7. 다음 중 화면(Screen)을 포함할 수 있는 프로그램 Type 아닌 것은?</u>*

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



## 8. 다음 중 Lock Object 생성에 대해 옳은 것은?

***ABAP DICTIONARY*** 에서 생성이 가능하다.

이름의 시작은 EZ / EY 로 시작되어야 한다.

LOCK OBJECT 생성시  ENQUEUE\_<Lock_Object name> , DNQUEUE\_<Lock_Object name> 이름의  두개의 Module이 생성된다.

* ENQUEUE

  FOR SETTING LOCKS

* DEQUEUE

  FOR RELEASING LOCKS

  

  





# <u>*9. 다음 중 다형성(polymorphism)을 사용하기 위한 전제 조건은?*</u> 













# *<u>10. 다음 중 Enqueue work process의 내용으로 옳은 것은?</u>* 











# <u>*11. ABAP dictionary에서 데이터베이스 View A와 maintenance view B를 생성했다.*</u> 

# <u>*다음 중 static constructor를 생성할 때 따라야 하는 규칙으로 옳지 않은 것은?*</u> 

2-3-8 참조









## 12. 다음 중 Process After Input(PAI) 처리 블록에서 수행할 수 있는 것은? 

선택 화면이 표시된 직후 처리된다.

사용자가 ENTER 등을 선택할때 마다 여러번 처리 될 수 있다. 

INPUT CHECK , FIELD HELP INPUT HELP 등







# *<u>13. 다은 중 어떤 modularization unit에서 parameter를 사용할 수 없는 것은?</u>* 









## 14. ABAP Program에서 CL_GUI_CUSTOM_CONTAINER 클래스의 인스턴스(Object)를 생성하는 ABAP 구문은? 

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








## 15. 다음 중 데이터 Type 중 deep 데이터 type은? 

***DEEP STRUCTURE 관련 내용으로 추정***

필드중에 한개 이상이 INTERNAL TABLE로 이루어진 STRUCTURE

#### Ex )

```ABAP
TYPES: BEGIN OF ts_data.
         INCLUDE  TYPE zteval_b00.
TYPES:   excep      TYPE char1,
         line       TYPE char4,
         cell       TYPE lvc_t_scol,
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







## 16. 다음 중 INNER JOIN으로 구현된 ABAP Dictionary View은? 

DATABASE VIEW 는 오직 INNER JOIN만 가능하다.



HELP VIEW 는 LEFT OUTER JOIN을 지원한다.









## 17. 다음은 ABAP Open SQL 구문입니다. 

```ABAP
SELECT SINGLE carrid connid cityfrom cityto 
  From spfli 
  INTO gs_spfli 
 WHERE carrid = pa_car 
   AND connid = pa_con 
```

## SELECT 구문의 필드 목록에 있는 필드는 대상 gs_spfli에 어떻게 처리 하나요? 



## 보기 필요







## 18. 다음 중 Runtime System이 ABAP 메모리를 초기화하는 것은? 

FREE MEMORY ID 'ABC'.







## 19. 다음 중 fixed value을 설정할 수 있는 것은? 

### <u>질문</u> fixed value를 저장하는 곳을 말하는 것인가?

=> Domain => Value Range => Single Vals => Fix.Val.

f4 help 를 통해 확인 가능하다.



### **<u>질문</u>**5번이랑 차이가 뭐지?







## 20. 다음은 Screen Program의 PAI flow logic 이다. 

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





## 21. 다음 중 ABAP 프로그램에서 로컬 클래스를 정의할 때 구문 순서가 옳은 것은? 



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









## 22. 프로그램 소스 코드에는 다음과 같이 명령문이 포함되어 있습니다. 

```ABAP
READ TABLE gt_itab INTO gs_struc INDEX 1. 
```

## gt_itab을 정의할 때 internal table type으로 사용할 수 있는 것은? 





## 다음 구문 중 data element인 S_CONN_ID의 data object를 올바르게 정의 되지 않은 것은? 







## 다음 중 Complete ABAP predefined data type인 것은? 







## 다음 중 SAP NetWeaver AS ABAP 버전 7.1x 이상의 구성 요소가 아닌 것은? 









## 다음 중 data object를 생성하는 구문이 아닌 것은? 









## 다음 중 search help를 할당할 수 없는 대상은? 









## 다음 중 elementary search help에 속하는 구성 요소에 해당하는 것은? 











## PARAMETERS 구문에 어떤 추가 항목을 사용하여 selection screen의 Input 필드에 초기값 채울 수 있는 것은? 다음 중 selection screen을 수정할 수 있는 이벤트는? 다음 중 selection screen에서 PARAMETERS 필드의 기본값을 변경할 수 있는 이벤트 블록은? 다음 클래스 정의가 있습니다. CLASS CL_AIRPLANE DEFINITION. PUBLIC SECTION. METHOS: set_passengers. PROTECTED SECTION. CONSTANST c_pos type i. METHODS get_passengers. PRIVATE SECTION. DATA mv_passengers TYPE i. METHODS set_attributes. ENDCLASS. CL_AIRPLANE 클래스의 하위(Sub) 클래스에서 직접 access할 수 있는 구성 요소가 아닌 것은? ABAP Dictionary에서 Table Type을 생성할 때 필요하지 않는 것은? 다음 중 search help에서 inner join을 사용하는 View 유형(type)은? 다음 중 테이블 buffering type이 아닌 것은? dbtab은 transparent table입니다. 다음 중 옳은 것은? DATA myvar TYPE dbtab. 다음 중 transparent table A를 사용하여 internal table을 선언한 것은? 다음 중 lock object를 사용하는 순서로 옳은 것은? 다음 중 transparent table의 technical setting에서 정의에 해당 되지 않는 것은? ABAP dictionary에서 생성된 도메인은 어떻게 사용할 수 있습니까? Super 클래스의 메서드를 Sub 클래스에서 사용할 수 없도록 하기 위해 메서드를 정의하는 곳은? 클래스의 static method 구현에서 액세스할 수 있는 클래스 component는? 다음 중 필드에 잘못된 값을 입력하면 오류 메시지가 표시되고 커서가 해당 필드에 표시하기 위해 사용하는 이 벤트는? Executable program에서 AT SELECTION SCREEN, AT SELECTION-SCREEN OUTPUT, INITIALIZATION, STARTOFSELECTION 이벤트 블록을 사용합니다. ABAP 런타임이 호출하는 순서로 옳은 것은? 새로운 function group을 만들 때 자동으로 생성되는 객체는? Search help에서 Outer join을 사용하는 View type은? 다음 중 검색 도움말(Search Help)에 대한 설명으로 옳지 않은 것은? 다음 중 ABAP Report에서 사용자 입력을 허용하는 구문은? 