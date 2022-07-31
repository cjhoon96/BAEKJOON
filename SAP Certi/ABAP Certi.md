# 경민이 파일

## ABAP 7.5 ERP PREP 1/3 덤프 문제

****

****

****

# Q1.

### In which controller type can you embed a service call?

#### 서비스 호출을 포함할 수 있는 컨트롤러 유형은 무엇입니까?

#### 1correct

##### Configuration controller

#### ***<u>Component controller</u>***

##### Interface controller

##### View controller

Service calls can only always be embedded in global controllers, that is, in the component controller or in additionally created custom controllers. 

서비스 호출은 항상 글로벌 컨트롤러, 즉 ***<u>Component controller</u>*** 또는 추가로 생성된 사용자 지정 컨트롤러에만 포함될 수 있습니다.

It is not possible, on the other hand, to embed service calls in view controllers.

반면에 View controller에 서비스 호출을 내장하는 것은 불가능하다.

<br/><br/>

****

****

<br/>

<br/>

# Q2.

### The update function modules. Which statement can be used to discard all update requests for the current SAP LUW?

#### 현 SAP LUW 의 모든 UPDATE 요청을 취소하는데 사용할 수 있는 구문은?

#### 2 correct

##### MESSAGE exxx(nnn).

#### <u>*ROLLBACK WORK.*</u>

##### EXIT.

##### DELETE UPDATE.

#### <u>*MESSAGE axxx(nnn).*</u>

LUW는 DIALOG 에서 UPDATE INSERT DELETE 등의 수정을 한 내역을 LOGDATA에 저장하고, UPDATE PROCESS 를 거쳐서 수정할 내역을 GROUPING 하여 DB 프로세스에 저장하는 개념이다.

즉 위 문제에서는 ROLLBACK 처리를 할 수 있는 방법에 대해 묻는 문제로

해당 방법에는

* **MESSAGE A TYPE (DB ROLLBACK / 프로그램 종료)**
* **ROLLBACK WORK (DB ROLLBACK / 프로그램은 실행 유지)**

두가지 방법이 있다.

<br/><br/>

****

****

<br/>

<br/>

# Q3.

### Which of the following statements are correct?

#### 다음중 옳은 것은?

#### 3 correct

#### *<u>An enhancement spot can contain either an explicit enhancement point and enhancemnet section or a new BAdI.</u>*

Enhancement spot 에는 Explicit enhancement point 또는 enhancement section 또는 새로운 BAdI가 포함 될 수 있으나 세가지 모두를 포함할 수는 없다.

#### *<u>An enhancement spot can contain one or more simple or composite enhancements.</u>*

Enhancement spot 은 하나 이상의 simple 또는 composite enhancement 를 포함 할 수 있다.

##### An enhancement spot can contain an explicit enhancement point, explicit enhancement section, and new BAdI.

Enhancement spot 은 explicit enhancement point 와 explicit enhancement section 그리고 새로운 BAdI 가 포함 될 수 있다.

**<u>*(Spot 에는 enhancement point 와 enhancement section은 같이 넣을 수 있지만 new BAdIs는 함께 넣을 수 없다.)*</u>**

#### *<u>An enhancement spot can contain an explicit enhancement point and an enhancement section.</u>*

Enhancement spot 은 explicit enhancement point 와 enhancement section 을 포함 할 수 있다.

##### STD 의 Enhancement 관련 질문

<br/><br/>

****

****

<br/><br/>

# Q4.

### Which of the following features do you have to consider when you use shared objects?

#### shared object들을 사용할 때 고려해야 하는 기능은 다음 중 무엇입니까?

#### 3 correct

#### <u>*Concurrent read accesses are supported*</u>

동시 읽기 액세스가 지원됩니다.

#### <u>*Memory bottlenecks result in runtime errors and have to be caught*</u>

메모리 병목 현상이 발생하면 런타임 오류가 발생하므로 이를 파악해야 함

#### <u>*Data is saved as attributes of objects*</u>

데이터가 개체의 속성으로 저장됩니다.

##### Data is saved as tables of objects

데이터가 개체의 테이블로 저장됩니다.

##### Concurrent write accesses are supported

동시 쓰기 액세스가 지원됩니다. 

<br/>

****

##### 공유 메모리는 한번 write 한 메모리를 여러 유저가 공유하고 읽을 수 있게 하는 것으로 현업에서는 잘 사용 되지 않는다.

##### Shared Objects :

* ##### 다중 reading 가능

* ##### Memory bottlenecks 가 발생할 수 있으므로 exception 처리해야 함.

* ##### lock을 이용한 다중 write 금지

* ##### 객체의 attribute (wa에) 에 Data 저장.

****

<br/><br/>

****

****

<br/>

<br/>

# Q5.

### You are writing a function module that will be called from external system via remote function call (RFC). How do you report an error back to the external caller?

#### 당신은 RFC(원격 함수 호출)를 통해 외부 시스템에서 호출되는 함수 모듈을 작성하고 있다. 외부 호출자에게 오류를 보고하려면 어떻게 해야 하는가?

#### 1 correct

##### Write the error data into an EXPORTING parameters passed by reference.

참조로 전달된 EXPORTING parameters에 오류 데이터를 씁니다.

#### *<u>Write the error data into a CHANGING parameters passed by value.</u>*

값으로 전달된 CHANGING parameters에 오류 데이터를 기록합니다.

##### Write the error data into TABLES parameters that is passed by reference.

참조로 전달된 TABLES parameters에 오류 데이터를 기록합니다.

##### Write the error data into a RECEIVING parameter that is passed by value.

값으로 전달되는  RECEIVING parameter에 오류 데이터를 기록합니다.

<br/>

****

##### RFC에서 Changing by value 을 통해 table 형태로 error 전달.

****

<br/><br/>

****

****

<br/><br/>

# Q6. ?????????????????????????????????

### Which must a search help do?

#### Search help 가 해야하는 작업은?

#### 4 correct

#### *<u>Be used from a screen</u>*

screen 에서 활용

#### *<u>Have a dialog with the user</u>*

사용자와의 대화

#### *<u>Allow the user to select a response</u>*

사용자 응답 선택 허용

#### *<u>Determine the values for selection by the user</u>*

사용자가 선택할 값 결정

##### Use a table or a view for data selection

데이터 Selection에 Table 또는 View를 사용

<br/>

****

Search help : 
Dialog with the user (중간 filter창)
LPos 컬럼 순서, SPos : Dialog 컬럼 순서, Exp : 선택값 return 값 결정
데이터는 selection-method. (table, help view, projection view, db view)

****

<br/><br/>

****

****

<br/><br/>

# Q7.

### When should you use a hashed internal table?

#### hashed internal table은 언제 사용해야 합니까?

#### 2 correct

##### When accessing by index

index 로 접근할때

#### *<u>When accessing mainly single records</u>*

주로 단일 record 로 접근할때 

##### When accessing by secondary key

secondary key 로 접근할때

##### When accessing using the left-justified part of the key

#### *<u>When accessing always by primary key</u>*

항상 primary key 로 접근할때 

<BR/>

****

hashed internal table : primary key로만 구성

* 오직 1개 라인만 조회
* index 사용 X
* left-justified fully qualified of the key

****

<br/><br/>

****

****

<br/><br/>

# Q8.

### Which data types are incomplete ABAP standard data types?

#### incomplete standard data type 들을 고르시오

#### 3 correct

##### I

##### F

#### <u>*C*</u>

#### <u>*N*</u>

#### <u>*P*</u>

<br/>

****

* Complete stadard types
  
  길이를 지정해 줄 수 없는 Data Type
  
  |            |              |
  | ---------- | ------------ |
  | D          | 8자리 날짜       |
  | T          | 6자리 시간       |
  | I          | 정수 자료형 4byte |
  | F          | 실수 자료형 8byte |
  | DECFLOAT16 |              |
  | DECFLOAT34 |              |
  | STRING     |              |
  | XSTRING    |              |

* Incomplete standard types
  
  길이를 정의해 줄 수 있는 Data Type
  
  |     |                                                   |
  | --- | ------------------------------------------------- |
  | C   | 일반 문자형 1~65535                                    |
  | N   | 문자형 데이터(숫자) 1~65535                               |
  | P   | 소수 값을 가질 수 있는 타입으로 LENGTH 와 DECIMAL 의 길이를 지정 1~16 |
  | X   | Hexadecimal(16진수) 타입 1~65535                      |

Size 지정해야 하는 data type (C, N, P, X) 

****

<br/>

<br/>

<br/>

****

****

<br/>

<br/>

# Q9.

### How would you find out if an application program offers a program exit?

#### Application program 이 program exit 을 제공하는지 어떻게 알 수 있는가?

#### Select all the correct answers

#### <u>*Use the Repository Information System*</u>

    Repositorty Information System 을 사용

#### <u>*Search for the character string CUSTOMER-FUNCTION*</u>

    "CUSTOMER-FUNCTION" 문자열을 검색한다.

#### <u>*Look for a customer exit in the SAP reference IMG within an*</u>

#### <u>*application area*</u>

    Application 영역 내의 SAP 참조 IMG에서 customer exit 을 찾는다.

##### Use the Application Hierarchy

    Application Hierarchy 사용

<br/>

****

**enhancement 여부 확인 방법**

* **<u>*Repository Information System(SE84)*</u>** > Enhancement > customer exit or enhancement

* **<u>*CUSTOMER-FUNCTION*</u>**, **<u>*CL_EXITHANDLER*</u>** 문자열 검색

* **<u>*SAP reference IMG*</u>** 에서 검색

* **<u>*TADIR / MODSAPT* </u>** 테이블 조회

Application Hierarchy 에서는 찾을 수 없다.

****

<br/>

<br/>

<br/>

****

****

<br/>

<br/>

# Q10.

### You want to develop a program that processes character type data.

#### 당신은 CHARACTER TYPE 데이터를 처리하는 프로그램을 개발하려 한다.

### When you implement the program, you can either use the classical string statements or the newer strings expressions and functions

#### 프로그램을 구현할 때 클래식 문자열 문을 사용하거나 최신 문자열 표현식 및 함수를 사용할 수 있습니다.

### What are the main benefits of using string expressions and string functions?

#### 문자열 표현식과 함수를 사용하는 주된 이점은 무엇인가?

#### 2 correct

##### You can improve the performance significantly

성능을 크게 향상시킬 수 있다.

#### <u>*You can reduce the number of intermediate variables*</u>

    매개변수의 수를 줄일 수 있다.

#### <u>*You can write compact syntax instead of a long sequence of*</u>

#### <u>*statements*</u>

    구문을 compact 하게 작성할 수 있다.

##### You can write code that is very easy to read and understand

가독성을 높일 수 있다.

<br/>

****

코딩이 편하다, 중간단계 변수 등이 준다.
속도 X, 가독성이 높아진다 X

****

<br/>

<br/>

****

****

<br/>

<br/>

# Q11.

### You write a report that displays mass data in a table. You decide to use the ALV Grid control (class CL_GUI_ALV_GRID) instead of a classical list display with WRITE statements.

#### 당신은 테이블에 대량의 데이터를 디스플레이하는 report 를 작성할 수 있습니다. 당신은 WRITE 문을 사용한 CLASSICAL LIST 대신 ALV GRID CONTROL(CL_GUI_ALV_GRID) 를 사용하기로 결정하였습니다.

### Which of the following functions can you offer to the user without doing any specific programming

#### 별도의 프로그래밍을 거치지 않고 사용자에게 제공할 수 있는 기능은 무엇인가?

#### 2 correct

#### <u>*Change column width and sequence*</u>

    열 너비 및 순서 변경

##### Convert currency amount columns

통화, 액수 COLUMN들의  변환

#### <u>*Sort and filter the data by any column*</u>

    행 기준 SORT 와 FILTER 기능 구현

##### Display details by double-clicking on a row

ROW DOUBLE-CLICK 이벤트를 통한 세부 항목 DISPLAY

<BR/>

****

ALV 사용시 프로그래밍 없이 가능한 기능
컬럼 사이즈 순서 변경
filter 기능, sorting 기능

프로그래밍 없이 **<u>*개발자가 직접 지정하지 않고도 사용자가*</u>** ALV TOOL BAR 의 기능을 활용하여 조작 할 수 있는 기능을 묻는것으로 보인다.

column 사이즈는 필드의 경계를 드래그 해 변경 할 수 있으며 순서 또한 field 를 드래그해 변경이 가능하다.

filter 기능과 sort 기능은 ALV tool bar 를 통해 조작 가능하다.

****

<br/>

<br/>

****

****

<br/>

<br/>

# Q12.

### Where should the labels for fields be stored?

#### 필드들의 라벨은 어디에 저장되어야 하는가?

#### Please choose the correct answer.

##### Field

##### Table

##### Structure

#### *<u>Data element</u>*

##### Domain

lable 를 설정할 수 있는 위치 (Data element)

<BR/>

<BR/>

****

****

<BR/>

<BR/>

# Q13.

### You build a dialog screen with an input field in an ABAP program.

#### 당신은 ABAP PROGRAM 에서 INPUT FIELD 를 가진 DIALOG SCREEN 을 생성합니다.

### How do you ensure that the contents of the screen field can be accessed in the program?

#### SCREEN FIELD 의 내용이 프로그래에서 접근 가능하게 하려면 어떻게 해야하는가?

#### Please choose the correct answer.

##### Enter the name of a data object in the Paramter ID attribute of

##### the screen field

스크린 필드의 PARAMETER ID 속성에 DATA OBJECT의 이름을 입력

##### Use a MOVE statement in a PAI module to copy the data to a

##### data object

PAI MODULE에서 MOVE 구문을 사용하여 DATA OBJECT 에 DATA 를 COPY 

##### Use the GET statement in the program to transport the data

##### from the screen field

프로그램에서 GET 문을 사용하여 화면 필드에서 데이터 전송

#### <u>*Define a data object in the program with the same name as*</u>

#### *<u>the screen field</u>*

    프로그램에서 화면 필드와 이름이 같은 데이터 개체 정의

<BR/>

****

screen 의 input field 와 프로그램의 변수 연동 방법 

<u>***변수명과 field 명을 동일***</u>하게 맞추면 자동 연동 됨.    

****

<BR/>

<BR/>

<BR/>

****

****

<BR/>

<BR/>

# Q14.

### After which statement will the runtime system initialize the ABAP memory (internal session)

#### 어떤 구문 뒤에 런타임 시스템이 ABAP 메모리를 초기화 하는가?

#### Please choose the correct answer.

##### CALL TRANSACTION

##### SUBMIT… AND RETURN

##### SUBMIT

#### *<u>LEAVE TO TRANSACTION</u>*

<BR/>

****

SAP 메모리 공유 시
instance 프로그램에서 LEAVE TO TRANSACTION 문을 호출하면 이전 존재하는 instance를 모두 초기화 시키고 새로운 instance를 생성하여 프로그램을 실행한다.

****

<BR/>

<BR/>

<BR/>

****

****

<BR/>

<BR/>

# Q15.

### How can you maintain documentation for input fields on your screen?

#### 화면의 INPUT FIELD에 대한 문서를 어떻게 유지 보수 할 수 있는가?

#### Please choose the correct answer.

##### Add documentation to the SCREEN table at PROCESS AFTER INPUT (PAI).

PAI 에서 SCREEN 테이블에 문서를 추가한다.

##### Define text tables for the underlying structure.

underlying structure 를 위한 TEXT 테이블을 정의한다. 

##### Add documentation to the SCREEN table at PROCESS BEFORE OUTPUT (PBO).

PBO 에서 SCREEN 테이블에 문서를 추가한다.

#### <u>*Add documentation to the underlying data element.*</u>

    underlying DATA ELEMENT 에 문서를 추가한다.

<BR/>

****

INPUT FIELD 를 위한 문서 document는 F1 HELP 를 말하는 것으로 data element에서 지원하는 기능

****

<BR/>

<BR/>

<BR/>

****

****

<BR/>

<BR/>

# Q16.

### Which of the following statements about the Object Navigator are true?

#### OBJECT NAVIGATOR 에 대한 구문중 옳은 것은?

#### 4 correct

#### *<u>The ABAP Dictionary can be maintained in the Object Navigator.</u>*

    ABAP DICTIONARY 는 OBJECT NAVIGATOR 에서 유지 보수 될 수 있다.

##### You can create BAdI implementations in the Object Navigator.

BAdI IMPLEMENTATION 을 생성할 수 있다.

##### You can create customer projects (Transaction CMOD) in the Object Navigator.

CUSTOMER PROJECT 를 생성 할 수 있다.

#### *<u>Menus can be displayed and edited in the Object Navigator.</u>*

    메뉴가 DISPLAY 되며 수정될 수 있다.

#### *<u>Screens can be displayed and edited in the Object Navigator.</u>*

    SCREEN 이 DISPLAY 되며 수정될 수 있다.

#### *<u>ABAP programs can be displayed and edited in the Object </u>*

#### *<u>Navigator.</u>*

    ABAP 프로그램이 DISPLAY 되며 수정될 수 있다.

<br/>

****

**<u>*Object Navigator (SE80)*</u>** 기능 : 

structure 관리, 메뉴관리, screen 관리 등,  BAdIS 는 SE18, SE19 에서 관리.  customer exit : Tcode CMOD 에서 확인, SMOD 로 프로젝트

### T-CODE SE80 가 OBJECT NAVIGATOR임을 용어를 기억!!!

****

<br/>

<br/>

<br/>

****

****

<br/>

<br/>

# Q17.???????????? WEB DYN 공부 다시

### What process is used to establish the automatic transport of data between the view controller's context-attributes and the UI element in its layout?

#### VIEW CONTROLLER 의 CONTEXT-ATTRIBUTE 와 그것의 LAYOUT 에서의 UI ELEMENT 사이의 데이터 자동 전송을 설정하는 프로세스는 무엇인가?

#### Please choose the correct answer.

##### View assembly

##### Context mapping

##### Data migration

#### *<u>Data binding</u>*

<BR/>

****

WEB Dynpro에서 
Data binding  : view controller 와 UI element 의 연결(화면과 데이터 연결)
context mapping : context 간 연결 (component controllers and view controllers)

****

<BR/>

<BR/>

<BR/>

****

****

<BR/>

<BR/>

# Q18.

### Which objects are automatically created when you create a new function group?

#### 새로운 FUNCTION GROUP 을 생성할 시 자동으로 생성되는 OBJECT 는?

#### Please choose the correct answer.

### *<u>A function pool and two include programs</u>*

##### A function pool and two subroutine pools

##### A function pool and two function modules

##### A function pool and two module pools

<BR/>

****

function group 생성 시 자동 생성되는 프로그램은 

* 1개의 ***<u>function pool</u>*** 과

* ***<u>두개의 include 파일</u>***
  
  * *<u>**TXX-전역변수**</u>*
  
  * *<u>**UXX-function 프로그램**</u>*

이 생성된다.

****

<BR/>

<BR/>

<BR/>

****

****

<BR/>

<BR/>

# Q19.

### What are the prerequisites when creating an append structure for a standard SAP table?

#### STANDARD SAP TABLE 에 APPEND STRUCTURE 기능으로 필드를 추가할 때 선행되야할 요구사항은 무엇인가?

#### 2 correct

### *<u>The enhancement category of the table is NOT set to</u>*

### *<u>‘Not enhaceable’ (can not be enhanced)</u>*

    Enhancement 카테고리가 'Not enhanceable' 로 설정되어있지 않아야 한다.

##### The table cannot have any fields of type FLTP

테이블은 FLTP 타입의 어떠한 필드도 가질 수 없다. 

##### The table must be copied before the append structure can be created

APPEND STRUCTURE 생성이 가능하기 전에 테이블이 복사 되어야 한다. 

### *<u>The fields in the append structure should start with</u>*

### *<u>YY or ZZ</u>*

    필드명은 YY 또는 ZZ 으로 시작되어야한다.

<BR/>

****

STD table 의 enhancement
table 의 enhancement category 셋업에 Not Enhanceable 옵션이 check되어있으면 enhancement 할 수 없다.
field 추가 할 때 field 명은 YY 또는 ZZ 로 시작해야 한다..

[[SAP ABAP] Include Structure, Append Structure : 네이버 블로그](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=howwithus&logNo=221459201252)

****

<BR/>

<BR/>

<BR/>

****

****

<BR/>

<BR/>

# Q20.

### You want to define two database tables with different structures. Both tables should contain the fields CHANGE_DATE and CHANGE_TIME.

#### 당신은 다른 STRUCTURE 로 두개의 DB TABLE을 정의하고자 한다. 두 테이블 모두 CHANGE_DATE 와 CHANGE_TIME FIELD 를 포함 하여야한다.

### How do you implement this in order to minimize the maintenance effort?

#### 어떻게 구현하여야 유지보수 작업을 최소화 시킬 수 있겠는가?

#### Please choose the correct answer.

##### Define an append structure with these two fields and assign this append structure to both database tables.

두개의 필드로 APPEND STRUCTRE 를 정의한 후 해당 DB TABLE 모두에 배치

### *<u>Define a structure with these two fields and include this</u>*

### <u>*structure in both database tables.*</u>

    이 두개의 필드로 구성된 STRUCTURE 를 정의한 후 두개의 DB TABLE에 INCLUDE 한다.

##### Define the two fields in each database table separately.

각 DB TABLE 에 별도로 두개의 필드를 정의

##### Define the two fields in one database table and copy them to the other database table.

두개의 필드를 하나의 DT TABLE 에만 정의한 후 그들을 다른 DB TABLE 에 복사

<BR/>

****

이 문제는 INCLUDE STRUCTURE 과 APPEND STRUCTURE 의 기능적 차이를 묻는 문제로

APPEND STRUCTURE 은 하나의 테이블이나 구조에만 할당할 수 있으므로 

두개의 테이블 모두에 추가해야되는 현 상황에 맞지 않다.

테이블에 동시에 두개의 컬럼을 추가하고 관리 측면을 최대한 낮게 가져가는 방법, 
structure에 컬럼 두개를 만들어서 table에 include 시킨다.

****

<BR/>

<BR/>

<BR/>

****

****

<BR/>

<BR/>

# Q21.

### How is an ABAP program with several dialog steps executed?

#### 여러개의 DIALOG 단계가 존재하는 ABAP 프로그램은 어떻게 실행되는가?

#### Please choose the correct answer.

### *<u>Usually, dialog steps are assigned to different dialog work</u>*

### *<u>processes.</u>*

    보통 DIALOG 단계들은 별도의 DIALOG WORK PROCESS 들을 할당 받는다.

##### The program is always executed in just one dialog work process with roll out.

프로그램은 항상 ROLL OUT 을 통해 단 하나의 DIALOG WORK PROCESS 에서 실행된다.

##### The ABAP dispatcher takes over the entire execution without assigning any work process.

ABAP 디스패처는 어떤 WORK PROCESS 도 할당하지 않고 전체 실행을 인계한다.

##### The program is always executed in just one dialog work process without roll out

프로그램은 항상 ROLL OUT 없이 단 하나의 DIALOG WORK PROCESS 에서 실행된다.

<BR/>

****

abap dispature : work process load balancing
dialog work process : roll-in, roll-out 계속 발생.

****

<BR/>

<BR/>

<BR/>

****

****

<BR/>

<BR/>

# Q22.(skip)

### When starting the Debugger, what circumstance causes the runtime error DEBUGGING_NOT_POSSIBLE?

#### 디버깅을 시작할때 DEBUGGING_NOT_POSSIBLE 런타임 오류가 발생하는 상황은 무엇인가?

#### Please choose the correct answer.

When more than six sessions are already associated with this login user

로그인된 사용자로 6개 이상의 세션이 이미 연결되어있는경우
When more than five sessions are already associated with this login user

로그인된 사용자로 5개 이상의 세션이 이미 연결되어있는경우

Starting a non-exclusive mode in a productive system

productive system에서 NON-EXCLUSIVE 시작

When the number of debugging sessions on the server exceeds the value defined by the profile parameter rdisp/wpdbug_max_no

서버의 디버깅 세션 수가 프로파일 매개 변수 rdisp/wpdbug_max_no에 의해 정의된 값을 초과하는 경우

<BR/>

<BR/>

****

****

<BR/>

<BR/>

# Q23.

### Which statement will interrupt the processing of the current screen and branch to new screen?

#### 다음중 현 SCREEN 의 프로세스를 일시 정지 시키고 새로운 SCREEN 으로 분기 될 구문은 무엇인가?

#### Please choose the correct answer.

### *<u>CALL SCREEN \<NNNN></u>*

##### LEAVE TO SCREEN \<NNNN>

##### None of the above

##### SET SCREEN \<NNNN>

<BR/>

****

screen 이동방법, 
leave to screen 200 : 현재 화면에서 나와서 200 으로 간다.
call screen 200 : 200으로 갔다가 다시 호출 위치로 돌아온다.

##### 중지가 아닌 일시 정지의 의미를 갖는 interrupt 기억

****

<BR/>

<BR/>

<BR/>

****

****

<BR/>

<BR/>

# Q24.

### What does SAP recommend that you use a hashed table?

#### 해시 테이블을 사용하는 것을 SAP에서 권장하는 경우는 무엇인가?

#### Please choose the correct answer.

##### When a table is very large and you want to access the table by index only.

테이블의 크기가 매우 크고 index 만을 통해 테이블에 접근하기를 원하는 경우

### *<u>When a table is very large and you want to access the </u>*

### *<u>table by key only</u>*

    테이블의 크기가 매우 크고 key 만을 통해 테이블에 접근하기를 원하는 경우

##### When a table must be accessible by both index and key

테이블이 index와 key 모두를 통해 접근이 가능해야 하는 경우

##### When a table must be sorted automatically by key in ascending order *<u>(sorted table</u>*)

테이블이 key를 통해 자동으로 정렬 돼야 하는 경우 ***<u>(sorted table)</u>***

<BR/>

---

hashed internal table : primary key로만 구성

- 오직 1개 라인만 조회
- index 사용 X
- left-justified fully qualified of the key

---

<BR/>

<BR/>

<BR/>

****

****

<BR/>

<BR/>

# Q25.

### Which does the field catalog allow you to do?

#### FIELD CATALOG 의 기능은?

#### 3 correct

### *<u>Add a field to the display</u>*

    DISPLAY 할 FIELD 추가

### *<u>Change the display order of a column</u>*

    COLUMN 의 DIPLAY 순서 변경

##### Specify the sort order of the display table

DISPLAY 되는 TABLE의 정렬 순서 지정

### *<u>Change the title of a column</u>*

    COLUMN 의 TITLE 변경

#### Produce a striped pattern for the display lines (layout 기능)

표시선에 대한 STRIPED 패턴 생성

<BR/>

****

ALV 컬럼 제어 기능 : 

field catalog 

* 컬럼 추가

* 특정 컬럼 숨기기

* 출력 순서 변경

* 컬럼 title 변경

****

<BR/>

<BR/>

<BR/>

****

****

<BR/>

<BR/>

# Q26.

### You Created the following ABAP Code:

```abap
DATA x TYPE REF TO DATA
DATA y TYPE REF TO OBJECT
ASSIGN x TO <fs>
ASSIGN y TO <fs>
```

### You want to add a declaration of \<fs> to the Code.

#### 당신은 FIELD-SYBOL \<fs> 의 선언문을 코드에 추가하기를 원한다.

### Which of the Following Declarations are Valid?

#### 다음중 유효한 선언문은 무엇인가?

#### 2 correct

### *<u>FIELD-SYMBOLS \<fs> TYPE ANY</u>*

##### FIELD-SYMBOLS \<fs> TYPE REF TO ANY

### *<u>FIELD-SYMBOLS \<fs></u>*

##### FIELD-SYMBOLS TYPE REF TO DATA

<br/>

****

Field-symbols : 특정 변수로 point 할 수 있는 변수.
X와 Y의 Type 이 다르기 때문(DATA type과 Object type)에 두가지를 모두 받을 수 있는 Any로 type 설정. 지정 하지 않은 경우 default 가 Type ANY.

****

<BR/>

<BR/>

<BR/>

****

****

<BR/>

<BR/>

# Q27.

### Which hook method exists for all controller types?

#### 다음 HOOK METHOD 중 모든 CONTROLLER TYPE 에서 존재하는 것은?

#### Please choose the correct answer.

##### wddoonopen( )  -- window

##### wddoonclose( ) – window

### *<u>wddoinit( )</u>*

##### wddobeforenavigation( )  -- component

<BR/>

****

WEB Dynpro 의 controller 종류
: component, window, view, custom, configuration controller
모두 가지고 있는 hook method : wddoinit( ), wddoexit( )

![Q27_1.jpg](.\IMG\Q27_1.jpg)
![Q27_2.jpg](.\IMG\Q27_2.jpg)
![Q27_3.jpg](.\IMG\Q27_3.jpg)

****

<BR/>

<BR/>

<BR/>

****

****

<BR/>

<BR/>

# Q28.

### When you add programming logic to your ABAP program that checks authorizations, which of the following do you have to create?

#### ABAP PROGRAM 에 권한 부여를 확인하는 LOGIC을 추가할때 다음중 생성해야하는 것은?

#### 2 correct

### *<u>An authorization object</u>*

##### An authorization Access

### *<u>An authorization role</u>*

##### An authorization profile

****

authorization check : 

[Authorization Check(권한 점검) : 네이버 블로그](https://m.blog.naver.com/softwon1/221873016346)

Authorization object를 생성 후 *<u>**T-CODE PFCG**</u>* (Role Maintenance) 에서 Role 생성 후 할당

즉 권한 부여 확인을 위해서는 

* *<u>**Authorization object**</u>*

* *<u>**Role**</u>* 

을 생성해 주어야한다.

**** 

<br/>

<br/>

<br/>

****

****

<br/>

<br/>

# Q29.

### When included in a structure, which elementary field types allow the structure to be considered a character-type data object?

#### STRUCTURE 에 포함될때 CHARACTER TYPE DATA OBJECT로 여겨지는 ELEMENTARY FIELD TYPE 은?

#### 4 correct

### *<u>C</u>*

### *<u>D</u>*

### *<u>N</u>*

##### X

##### XSTRING

##### F

### *<u>T</u>*

##### I

##### STRING

<BR/>

****

Numeric types: I, F, P.
Character types: C, D, N, T.
Hexadecimal types: X

[ABAP Data Types](https://www.abaptutorial.com/abap-programming/abap-data-types/)

****

<BR/>

<BR/>

<BR/>

****

****

<BR/>

<BR/>

# Q30.

### What happens when an authorization check fails?

#### 권한 체크에 실패한 경우 어떤일이 발생하는가?

#### Please choose the correct answer.

### *<u>The system field SY-SUBRC is set to a value other than zero.</u>*

    SYSTEM FIELD SY-SUBRC 가 '0' 이 아닌 값으로 설정된다

##### A CX_AUTH_FAILED type exception is raised.

CX_AUTH_FAILED 유형의 예외가 발생한다. 

##### The program is terminated.

프로그램이 종료된다.

##### A type E message is displayed.

유형 E 메시지가 표시된다.

<BR/>

****

* 0 : 사용자는 권한을 가지고 있다.

* 4 : 사용자는 권한을 가지고 있지 않다.

* 8 : 권한 체크에 기술된 필드의 수가 정확하지 않다.

* 12 : 권한 오브젝트가 존재하지 않는다.

즉 권한 체크 로직을 실행한 직후 SY-SUBRC 를 통해 권한 여부에 따라 처리하는 로직을 추가로 작성해 주어야 한다.

****

<BR/>

<BR/>

<BR/>

****

****

<BR/>

<BR/>

# Q31.

### You add the CREATE PROTECTED addition to a class definition.

#### class 정의에 CREATE PROTECTED 를 추가한다.

### From where you can instantiate the class?

#### 어떤 클래스에서 인스턴스화 할 수 있는가?

#### 3 correct

# *<u>From the class itself</u>*

##### From any protected class

# *<u>From a friend class</u>*

# *<u>From a child class</u>*

##### From a parent class

<BR/>

****

* CREATE PUBLIC이 추가된 클래스
  
  패키지 개념의 프레임워크 내에서 클래스가 보이는 모든 위치에서 인스턴스화할 수 있습니다.  

* CREATE PROTECTED가 추가된 클래스
  
  * SUBCLASS METHOD
  
  * CLASS 자체의 METHOD 
  
  * FRIEND CLASS METHOD
  
  에서만 인스턴스화할 수 있습니다.  

* CREATE PRIVATE가 추가된 클래스
  
  클래스 자체의 메서드 또는 친구의 메서드에서만 인스턴스화할 수 있습니다. 

****

<BR/>

<BR/>

<BR/>

****

****

<BR/>

<BR/>

# Q32.

### What is data binding?

#### DATA BINDING 이란 무엇인가?

#### Please choose the correct answer.

##### Connecting an outbound plug on one view to the inbound plug of another view

하나의 VIEW 에 있는 OUTBOUND PLUG 를 다른 VIEW 의 INBOUND PLUG 에 연결

# *<u>Connecting the values of user interface</u>*

# *<u>elements to the context attributes of</u>*

# *<u>the corresponding controller</u>*

    USER INTERFACE ELEMENT 의 값을 해당 CONTROLLER 의 CONTEXT ATTRIBUTE에 연결

##### Connecting a context node in one controller to a context node in another controller

하나의 CONTROLLER 에 있는 CONTEXT NODE 를 다른 CONTROLLER 에 있는 CONTEXT NODE 에 연결

##### Connecting one Web Dynpro component to another Web Dynpro component

하나의 WEB DYNPRO COMPONENT 를 다른 WEB DYNPRO COMPONENT 에 연결

<BR/>

<BR/>

****

****

<BR/>

<BR/>

# Q33.

### Which of the following statements regarding search helps are true?

#### 다음중 SEARCH HELP 에 대한 설명중 옳은 것은?

#### 3 correct

## *<u>Help views can also be used for the selection method for search help.</u>*

    HELP VIEW 들은 SEARCH HELP 를 위한 SELECTION METHOD 에 사용될 수 있다.

##### You can use a maintenance view for the search help selection method.

MAINTENANACE VIEW 를 SEACH HELP SELECTION METHO 에 사용할 수 있다.

## *<u>You can use transparent tables for the search help selection method.</u>*

    TRANSPARENT TABLE 을 SEARCH HELP SELECTION METHOD 에 사용할 수 있다.

## *<u>You can use a database view for the search help</u>*

## *<u>selection method.</u>*

    DB VIEW 를 SEARCH HELP SELECTION METHOD 에 사용할 수 있다.

<BR/>

<BR/>

****

****

<BR/>

<BR/>

# Q34.

### You can use the logical expression IS SUPPLIED for any formal parameter passed to which modularization unit?

#### 어떤 모듈화 단위에서 전달되는 FORMAL PARAMETER 에 논리식 IS SUPPLIED 을 사용할 수 있는가?

#### 3 correct

## *<u>Instance method</u>*

##### Subroutine (FORM routine)

## *<u>Static method</u>*

## *<u>Function module</u>*

<BR/>

****

if AA is supplied.  (import parameter 의 값이 전송 되었는가?)
   write : aa.
else
   write ‘Nothing’.
endif.

subroutine에서 사용하면 syntax 에러 발생

****

<BR/>

<BR/>

<BR/>

****

****

<BR/>

<BR/>

# Q35.    ?????????????????????? downcast 다시

### You need to perform a downcast. What should you do?

#### DOWNCAST를 수행하려면 무엇을 해야하는가?

#### 2 correct

##### Use the operator “=“.

"=" 연산자 사용

## *<u>Perform the downcast only if an upcast has already</u>*

## *<u>been done for the object reference.</u>*

    UPCAST 가 OBJECT 참조 완료되어야 DOWNCAST 가능하다.

##### Assign a subclass reference to a superclass reference.

##### (upcasting에 대한 설명)

SUBCLASS 참조를 SUPERCLASS 참조에 할당한다.

## *<u>Catch the exception CX_SY_MOVE_CAST_ERROR.</u>*

<BR/>

****

downcast : ?= 로 처리
move를 사용 시 에러가 발생하면 CX_SY_MOVE_CATE_ERROR exception 이 발생함.

부모 Class의 Object를 자식 class의 Object에 할당 
Down-Cast를 사용할 때는 ?= 를 사용하여 할당한다. 
Up-Cast를 한 상태에서는 자식 class의 component는 자체적으로 access할 수 없다. 
따라서 Down-Cast를 사용하여 access 한다.

Down-Cast를 할 경우 TYPE 이 맞지 않는 경우 ERROR가 날 수 있다

따라서 TRY \_\_\_ CATCH \_\_\_ ENDTRY 구문을 이용해 EXCEPTIONS을 처리해준다.

****

<BR/>

<BR/>

<BR/>

****

****

<BR/>

<BR/>

# Q36.

### How many work areas are available in the Debugger?

디버거에서 사용할 수 있는 WORK AREA 는 몇개인가?

Please choose the correct answer.

##### 7

##### 9

## *<u>12</u>*

##### 15

<br/>

****

debug tab 수

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

<br/>

<br/>

<br/>

****

****

<br/>

<br/>

# Q37.

### Which of the following conditions must be fulfilled when using a GROUP BY clause in a SELECT statement?

#### SELECT 문에서 GROUP BY 절을 사용할 때 만족해야되는 조건은 무엇인가?

#### 2 correct

##### The fields after GROUP BY must have a character type. (숫자도 올 수 있음)

GROUP BY 절 뒤의 FIELD 는 CHARCTER TYPE 이어야한다.

##### The SELECT statement must also have a WHERE clause. (where 절 없어도 됨)

SELECT 문은 WHERE 절도 있어야한다.

## *<u>The table in the FROM clause must be a transparent</u>*

## *<u>table.</u>*

    FROM 절의 TABLE 은 TRANSPARENT TABLE 이어야한다.

## *<u>All fields in the SELECT clause that are not part of an</u>*

## *<u>aggregate function must be listed after GROUP BY.</u>*

    SELECT 문에서 집계 함수의 대상이 아닌 모든 FIELD 들은 GROUP BT 뒤에 작성해야만 

    한다. 

<BR/>

****

table 종류 :
transparent table
cluster table : group by 절에 사용할 수 없다.
pool table : group by 절에 사용할 수 없다.

[[SAP ABAP] DB Table 3가지 : 네이버 블로그](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=howwithus&logNo=221458527100)

****

<BR/>

<BR/>

<BR/>

****

****

<BR/>

<BR/>

# Q38.

### Which of the following can you do with the ABAP debugger?

#### 다음중 ABAP DEBUGGER 로 할 수 있는 것은?

#### 3 correct

##### Analyze SQL traces. (SQL trace에서 하는 기능)

SQL TRACE 분석

## *<u>Analyze memory usage.</u>*

메모리 사용량 분석

#### Change source code. (debugging 하는 중 source code를 못바꾼다.)

SOURCE CODE 수정

## *<u>Analyze internal tables</u>*

ITAB 분석

## *<u>Compare data objects.</u>*

DATA OBJECT 비교

<BR/>

****

****

<BR/>

# Q39.

### What is the default length of the type C data type?

#### DATA TYPE C  의 기본 길이는 무엇인가?

#### Please choose the correct answer.

##### 1–65535

##### 100

## *<u>1</u>*

##### 10

<BR/>

****

****

<BR/>

# Q40.

### Which of the following are valid control level changes within a loop over an internal table?

#### 다음중 ITAB 의 LOOP 에서 유효한 CONTROL LEVEL 변경은 무엇인가?

#### 2 correct

## *<u>END of \<f></u>*

##### COLLECT

## LAST  (아마 AT LAST, 또는 AT FIRST 로 문제가 나왔을 것이다.)

##### SUM

<BR/>

****

control level processing (internal table)

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

****

<BR/>

****

****

<BR/>
