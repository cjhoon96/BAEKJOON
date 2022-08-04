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

# Q41.

### When is an ENDSELECT not required for a SELECT?

#### SELECT 문에서 ENDSELECT 구문이 필요하지 않은 경우는 무엇인가?

#### 3 correct

##### When the FROM is a view

FROM 절에 사용되는 것이 VIEW 일 경우

## *<u>When you specify into a table</u>*

테이블로 지정하는 경우 

## *<u>When you do a SELECT SINGLE</u>*

SELECT SINGLE 을 하는 경우

## *<u>When you specify a join of tables</u>*

테이블을 JOIN 하는 경우 

## *<u>When you specify appending a table</u>*

테이블 APPENDING 하는 경우

<BR/>

****

select * into table it from abc.  => 기존 데이터를 지우고 입력
select * appending it from abc. => 기존 데이터에 추가해서 입력

****

<BR/>

****

****

<BR/>

# Q42.

### Which data element property do you set so that the system logs changes to the content of fields with this data element?

#### 시스템 로그가 이 DATA ELEMENT 로 된 필드의 내용의 변경에 대한 LOG 를 남기려면 DATA ELEMNT 속성을 설정해야 하는가?

#### Please choose the correct answer.

## *<u>Change document</u>*

##### Documentation

##### PARAMETER ID

##### Input history

<BR/>

****

SE11 > Data element > Further characteristics tab > change document 에서 처리

****

<BR/>

****

****

<BR/>

# Q43.

### What does the enhancement category for a database table or structure do?

#### DB TABLE 이나 STRUCTURE 에 대한 ENHANCEMENT CATEGORY 가 하는 것은 무엇인가?

#### 3 correct

##### Makes a table Unicode-compliant

테이블이 UNICODE 호환 되도록한다.

## *<u>Can identify where program behavior may change</u>*

프로그램 동작이 변경될 수 있는 위치를 식별할 수 있다.

## *<u>Can produce warnings at incompatible points for the structure</u>*

structure 에 대해 호환되지 않는 지점에 대한 경고를 생성할 수 있다.

## *<u>Specifies the types of changes that can be made to the structure</u>*

structure 에 적용할 수 있는 변경의 type 을 지정한다.

<br/>

****

Enhancement Category 사용 이점 : 

프로그램의 영향력 방지. 구조적 모순점에 대한 경고 생성. 

테이블이나 STRUCTURE 생성시 뜨는 WARNING 메시지를 기억하면 편하다.

*<u>**"Enhancement category for --- missing"**</u>*

[[SAP/ABAP] 테이블, 구조 생성 시 warning (Enhancement category for table missing)](https://sssinga.tistory.com/227)

****

# Q44.

### Which of the following must you do to be able to use a Business Add-in(BAdI)?

#### BADi를 사용하기 위해 해야할 것은 무엇인가?

#### 2 correct

##### Modify the adapter class (adapter class : BAdIs를 얻어오기 위한 것)

ADPTER CLASS 수정

## *<u>Write code for methods</u>*

METHOD 에대한 CODE 작성

##### Activate the enhancement project (customer exit)

ENHANCEMENT PROJECT  ACTIVATE 하기

## *<u>Create the BADI implementation</u>*

BAdI IMPLEMENTATION 생성

<BR/>

****

BAdIs : method에 프로그램 코딩, 

****

<br/>

# Q45.

### You want to move a transport request from the development system to the subsequent system. Which of the following are prerequisites for this?

#### 개발 시스템에서 부속 시스템으로 전송요청을 이동하고자 한다. 다음중 전제조건을 고르시오?

#### 2 correct

## *<u>All objects included in the transport request must be activated.</u>*

전송 요청에 포함된 모든 OBJECT를 활성화

## *<u>The transport request must be released</u>*

전송 요청이 RELEASE 되어야 한다.

##### All tasks of the transport request must be assigned to the same user. (여러 user를 등록하여 요청)

전송 요청의 모든 TASK 들은 동일한 사용자에게 할당되어야 한다. 

##### The extended program check must show no warnings. (warnings 이 있어도 request 요청 됨)

<BR/>

****

change request 설명
activate, CDC에 요청해야 함.

****

<BR/>

# Q46.

### What is the event block that all of your code changes belongs to if you do not explicitly code any event blocks in an executable program?

#### executable program에서 어떤 EVENT BLOCK도 명시적으로 CODING 하지 않은 경우 모든 코드 변경이 속하는 EVENT BLOCK 은 무엇인가?

#### Please choose the correct answer.

## *<u>START-OF-SELECTION</u>*

##### INITIALIZATION

##### LOAD-OF-PROGRAM

##### AT SELECTION-SCREEN OUTPUT

<BR/>

****

executable program 에서 명시하지 않아도 무조건 발동 : start-of-selection

****

<BR/>

# Q47.

### What will happen at runtime when accessing a buffered table?

#### BUFFER 된 테이블에 접근할때 RUNTIME 에서 발생하는 것은 무엇인가?

#### Please choose the correct answer.

##### All SELECT statements will read data from the buffer.

모든 SELECT 문은 BUFFER 에서 데이터를 읽어온다.

##### Following an update to a buffered record, all table buffers in the system will be updated. (synchronization 이벤트 실행 시 만)

버퍼된 RECORD로 UPDATE 하면 시스템의 모든 BUFFER 가 UPDATE 된다. 

##### If table data is read using indexes, the table buffer will not be filled. (X)

테이블 데이터가 INDEX 를 통해 READ 되는 경우 테이블 BUFFER 는 채워지지 않는다.

## *<u>If data is read from the table buffer, the existing indexes are not used.</u>*

데이터가 TABLE BUFFER 로 부터 READ 되는 경우 기존 인덱스는 사용되지 않는다.

<BR/>

****

by-pass buffer
ABAP join
select .. .by pass buffer.
select … for update
native SQL
index 는 DB에 있는 상황이므로, buffer table 정보를 읽으면 index를 사용하지 않는다.

****

<BR/>

# Q48.

### You want to add a field ZZPRICE to the SAP standard transparent table EKKO.

#### 당신은 ZZPRICE 필드를 SAP STANDARD TRANSPARENT TABLE EKKO 에 추가하기를 원한다.

### Which of the following actions result in an enhancement of the SAP standard?

#### 다음 행동중 SAP STANDARD 의 ENHANCEMENT 에대한

#### 2 correct

##### Insert ZZPRICE at the end of the table

테이블의 마지막에 ZZPRICE 삽입

##### Insert ZZPRICE into an SAP structure for the table

TABLE 을 위한 SAP STRUCTURE 에 ZZPRICE 삽입

## *<u>Create an append structure and add ZZPRICE to it.</u>*

APPEND STRUCTURE 생성 후 이에 ZZPRICE 추가

## *<u>Add ZZPRICE to the customizing include for the table</u>*

TABLE 을 위한 CUSTOMIZING INCLUDE 에 ZZPRICE 추가

<BR/>

****

append structure 컬럼 추가
ci_include (customizing include) 사용

****

<BR/>

# Q49.

### Where are fixed values for fields stored?

#### 필드의 고정값 은 어디에 저장되는가?

#### Please choose the correct answer.

##### Table

## *<u>Domain</u>*

##### Structure

##### Data element

##### Field

<BR/>

****

****

<BR/>

# Q50.

### Which of the following ABAP data types are compatible with the generic character-type CLIKE?

#### 다음 ABAP DATA TYPE들 중 GENERIC CHARACTER TYPE CLIKE와 호환 되는 것은?

#### 3 correct

## *<u>N</u>*

## *<u>STRING</u>*

##### XSTRING

## *<u>C</u>*

##### DECFLOAT

<BR/>

****

clike character-type : c, d, n, t, string and character-type flat structures
csecuence text-type : c, string    When the FROM is a view

****

<BR/>

****

****

<BR/>

# Q51.

### What are the advantages of defining texts symbols in executable programs?

#### EXECUTABLE PROGRAM 을 개발하는데 있어 TEXT SYMBOL을 정의하는 것의 이점은 무엇인가?

#### 2 correct

##### The same text symbol can be used by other programs

같은 TEXT SYMBOL 이 다른 프로그램에서도 사용 될 수 있다.

## *<u>They facilitate multilingual functionality</u>*

다국어 기능을 지원한다.

##### Then can store up to 256 characters

256자까지 저장할 수 있다.

## *<u>They are easier to maintain than literals</u>*

LITERAL 보다 유지 보수 하기 쉽다.

<BR/>

****

multilingual functionality
132 characters
공유불가, 유지보수 쉽다.

****

<BR/>

****

****

<BR/>

# Q52.

### When would you call the RFC function module synchronously?

#### 어느경우 RFC FUNCTION MODULE을 동기적으로 호출하는가?

#### 2 correct

## *<u>During two-way communication</u>*

TWO-WAY  통신 중인 경우

## *<u>During queue processing</u>*

QUEUE 처리중인 경우

##### During unidirectional communication

UNIDIRECTIONAL 통신 중인 경우

##### During interactive communication

INTERACTIVE 통신 중인 경우

<BR/>

****

RFC function module 이 언제 sync 방식으로 작동하는가?
Q-RFC 무조건 동기방식. 

****

<BR/>

****

****

<BR/>

# Q53.

### The statements CALL BADI and GET BADI are used for which type of BAdIs?

#### CALL BAdI 와 GET BAdI 구문은 어느 타입의 BAdI 를 위해 사용되는가?

#### Please choose the correct answer.

##### Classical BAdI

##### None of the above

## *<u>New BAdI</u>*

##### Classical DDic

<BR/>

****

class BAdIs 찾는 방법
: find CL_EXITHANDLER

NEW BAdIs 찾는 방법
: get BAdIs

****

<BR/>

****

****

<BR/>

# Q54. (Skip)

### Which of the following are valid combinations of event visibility and handler method visibility?

#### 다음중 이벤트의 VISIBILITY 와 HANDLER METHOD 의 VISIBILITY 의 유효한 조합은 무엇인가?

#### 2 correct

##### Private event and public handler

##### Protected event and public handler

## *<u>Public event and protected handler</u>*

## *<u>Private event and private handler</u>*

<BR/>

****

****

<BR/>

# Q55.

### Which of the following ABAP statements throws an error at the syntax check?

#### 다음중 ERROR 나 SYNTAX CHECK 를 띄우는 ABAP 구문은?

#### Please choose the correct answer.

##### DATA variable(5) TYPE p.

## *<u>DATA variable(5) TYPE t.</u>*

##### DATA variable.

##### DATA variable(5) TYPE n.

<BR/>

****

t type은 6 user-defined alphanumeric characters.

****

<BR/>

****

****

<BR/>

# Q56.

### What can you do with the code inspector?

CODE INSPECTOR 로 할 수 있는 것은?

#### 2 correct

## Create your own inspections, object sets and check variants

자체 검사, 개체 세트 및 변형 확인

## Create an object set to represent the programs and objects to be inspected

검사할 프로그램 및 개체를 나타내는 OBJECT 집합을 생성

##### Create only local inspections, objects sets and check variants (global 가능)

로컬 검사와 OBJECT 집합만을 생성하며 변수 검사 수행

##### Choose from only the performance, security and user interface check categories

성능, 보안, 사용자 인터페이스 검사 카테고리에서만 선택

<BR/>

****

프로그램 coding check : (tcode : SCI)
다국어 처리, 변수 선언 후 미사용. local, global 생성
setup : inspection name, object set name, check variant name

****

<BR/>

# Q57.

### Which comparison operators can you use in a logical expression related to the WHERE clause of the SELECT statement?

SELECT 문의 WHERE 절과 관련된 논리식에서 사용할 수 있는 비교 연산자는?

3 correct 

EQ (equals)
LIKE (fits pattern)

## *<u>CP (contains pattern) </u>*

## – 특정 문자열 pattern 을 가진 문자열

## *<u>CO (contains only) </u>*

## – 오직 그 문자를 반드시 포함한 문자열

GT (greater than)
<BR/>

****

CP, CO 는 String function.

****

<BR/>

****

****

<BR/>

# Q58.

### Which controller types can exist within a Web Dynpro component?

WEB DYNPRO COMPONENT 내에 존재할 수 있는 CONTROLLER TYPE 은?

3 correct 

## *<u>Window controller</u>*

## *<u>View controller</u>*

User controller

## *<u>Component controller</u>*

Application controller

<BR/>

****

추가로 configuration controller, custom controller

****

<BR/>

****

****

<BR/>

# Q59.

### What is the SAP recommended naming convention for append structures of standard SAP tables?

표준 SAP 테이블의 APPEND STRUCTURE 에 대해 SAP 에서 권장하는 네이밍 룰은 무엇인가?

 Please choose the correct answer.



The name of the append structure must start with ZA.
APPEND STRUCTURE 의 이름은 ZA 로 시작

The components of an append structure should start with Z or Y.
APPEND STRUCTURE의 구성요소는 Z 나 Y 로 시작되어야 한다.

The name of the append structure must start with ZZ or YY.

APPEND STRUCTURE의 이름은 ZZ 나 YY로 시작해야한다.

## *<u>The components of an append structure should start with ZZ or YY.</u>*

APPEND STRUCTURE의 구성요소는 ZZ나 YY로 시작해야한다.

<BR/>

****

structure name 은 ZAS

테이블명 : 정해지지 않았음.

****

<BR/>

****

****

<BR/>

# Q60.

### You enhance an SAP standard global class by defining a post-method for an SAP method. The original SAP method has an EXPORT parameter named PARM1.

너는 SAP 메소드에 대한 POST-METHOD 를 정의하여 SAP STANDARD GLOBAL CLASS 를 ENHANCE 하려고 한다. 기존 SAP METHOD 는 PARM1 이라는 EXPORT 파라미터를 가지고 있다.

### Which parameters does the post-method have?

POST-METHOD 는 어떤 파라미터를 가지고 있는가?

Please choose the correct answer



A RETURNING parameter named PARM1
An EXPORT parameter named PARM1
An OMPORT parameter named PARM1

## *<u>A CHANGING parameter named PARM1</u>*

<BR/>

****

implicit enhancement : SAP에서 명하시지 않아도 넣을 수 있는 것.
                    <=실행전에 넣을 수 있는 method : pre-method
SAP에서 제공해주는 std method
                    <=실행 후에 넣을 수 있는 method : post-method
export parameter 가 post-method 가 change되었을 때, changing parameter 로 바뀜.
(pre-method도 동일)

****

<BR/>

****

****

<BR/>

# Q61.

### dbtab is a transparent table. What is declared by the following statement? DATA myvar TYPE dbtab.

DBTAB 은 TRANSPARENT TABLE 이다. 다음 문장에 의해 선언되는것은?

Please choose the correct answer.

An elementary field

## *<u>A structure variable</u>*

A reference to an internal table
An internal table

<BR/>

****

****

<BR/>

# Q62.

### You have 2 objects:

### O1 of type class C1 and O2 of type class C2.

### Class C2 is a subclass of class C1. Which of the following statements implements an upcast?

#### CLASS C2 는 C1 의 SUBCLASS 이다. 다음중 UPCAST 를 구현한 구문은?

Please choose the correct answer.

MOVE O1 TO O2.
MOVE O1 ?TO O2.

## *<u>O1 = O2.</u>*

O2 ?= O1 (downcast).

<BR/>

****

O2 : subclass , O2 => O1 이 되어야 upcast, O1 =>  O2 는 downcast,
Move A to B : A => B
B = A : A => B

****

<BR/>

# Q63.

### Which of the following is a true statement?

다음중 옳은 것은?

2 correct 

## *<u>An access key is required to enhance an SAP application using a user exit.</u>*

USER EXIT 을 사용하여 SAP APPLICATION 을 ENHANCE 하려면 ACCESS KEY 가 필요하다.

##### An access key is required to implement an implicit enhancement point. (언제든지)

ACCESS KEY 는 IMPLICIT ENHANCEMENT POINT 를 구현하기 위해 필요하다.

##### An access key is required to implement business add-ins.

BAdI 를 구현하기 위해 ACCESS KEY 가 필요하다.

## An access key is required to modify SAP repository objects.

SAP REPOSITORY OBJECT 를 수정하기 위해 ACCESS KEY 가 필요하다.

<BR/>

****

access key : SAP standard modification, User Exit.

****

<BR/>

# Q64.

### Each work process…

각 WORK PROCESS 들은 

#### 3 correct

##### Can make database changes spanning multiple database LUWs.

여러 DB LUW에 걸쳐 DB 를 수정할 수 있다.

##### Uses a pool of database connections established when the SAP NetWeaver Application Server ABAP started.

SAP NETWEAVER APPLICATION SERVER ABAP 이 시작될때 설정된 DB CONNECTION 의 PULL 을 사용한다.

## *<u>Is independent of other work processes.</u>*

다른 WORK PROCESS 들과 독립 되어있다.

## *<u>Can only make database changes within a single database LUW.</u>*

SINGLE DB LUW 내에서만 DB 를 수정할 수 있다.

## *<u>Uses a database connection to a work process established when the SAP NetWeaver Application Server ABAP started.</u>*

SAP NETWEAVER APPLICATION SERVER ABAP 이 시작될때 설정된 WORK PROCESS 에 대한 DB CONNECTION 을 사용한다.

<BR/>

****

DB connection은 각 work process 가 한 개씩 맺고, work process는 서로 독립적이다. 

****

<BR/>

****

****

<BR/>

# Q65.

### Which of the following capabilities is provided by the Application Layer platform of SAP Netweaver?

다음중 SAP NETWEAVER 의 어플리케이션 LAYER PLATFORM 에서 제공되는 기능이 아닌것은?

#### Please choose the correct answer.

## *<u>Database and operating system abstraction</u>*

DB 와 운영체제 추상화

##### Business process management

BUSINESS PROCESS 관리

##### Multi-channel access

MULTI-CHANNEL 연결 

##### Master data management

MASTER DATA 관리

<BR/>

****

SAP GUI
SAP Application : Application Layer platform
SAP Database

****

<BR/>

****

****

<BR/>

# Q66.

### You have defined a classical screen (dynpro) with mandatory input fields. You want to exit the screen using the Cancel button even if not all of the mandatory fields have been filled. What is necessary to achieve this?

당신은 필수 입력 필드를 가진 classical screen (dynpro) 를 정의하였다. 당신은 필수 입력 필드가 모두 채워지지 않더라도 Cancel button 을 사용하여 화면을 나가기를 원한다.

이를 위해 무엇을 해야하는가?

#### Please choose the correct answer.

## *<u>Assign function type E to the Cancel button and handle it in a module with the addition AT EXIT-COMMAND.</u>*

Cancel 버튼에 FUNCTION TYPE  E 를 할당하고 AT EXIT-COMMAND 가 추가된 모듈에서 처리한다.

##### Set the function code assigned to the Cancel button to CANCEL and handle it in a module with the addition AT EXIT-COMMAND.

취소 버튼에 할당된 FUNCTION CODE 를 CANCEL 로 설정하고 EXCIT-COMMAND 가 추가된 모듈에서 처리한다.

##### Use the LOOP AT SCREEN. ... ENDLOOP statement to set the "required" property of the input fields to zero.

LOOP AT SCREEN. \_\_\_ ENDLOOP 구문을 사용하여 입력 필드의 필수 속성을 '0'으로 할당한다.

##### Set the function type assigned to the Cancel button to S and handle it in a module with the addition AT EXIT-COMMAND.

취소 버튼에 할당된 FUNCTION TYPE을 S 로 설정하고 AT EXIT-COMMAND 가 추가된 모듈에서 처리한다.

****

Function type : E
Module exit AT Exit-command

****

<BR/>

****

****

<BR/>

# Q67.

### Which of the following steps are required to set up a shared memory area?

다음중 SHARED MEMORY AREA 를 설정하는 데 필요한 단계는?

#### 3 correct

##### Declare a catalog object

CATALOG OBJECT 선언

##### Enable multiple versions of an area root class

AREA ROOT CLASS 의 MULTIPLE VERSION 사용 가능으로 설정

## Call the attach_for_write method of area root class

AREA ROOT CLASS 의 ATTACH\_FOR\_WRITE 메소드 호출

## Generate an area root class

AREA ROOT CLASS 생성

## Set the root object

ROOT OBJECT 설정 

****

읽는 메소드 : attach for read
set root class object to area

[SHARED MEMORY - ABAP : 네이버 블로그](https://m.blog.naver.com/aaaa123krkr/220767969301)

****

<BR/>

****

****

<BR/>

# Q68.

### What is unique about a singleton?

SINGLETON 에 대한 특징은?

#### 2 correct

##### It cannot be defined as FINAL.

FINAL 로 정의될 수 없다.

##### It must be instantiated using a public instance constructor.

PUBLIC INSTANCE CONTRUCTOR 를 사용하여 인스턴스화 해야한다.

##### It must be instantiated using a protected instance constructor.

PROTECTED INSTANCE CONTRUCTOR 를 사용하여 인스턴스화 해야한다.

##### It must be instantiated using a private instance constructor.

PRIVATE INSTANCE CONTRUCTOR 를 사용하여 인스턴스화 해야한다.

##### It must be instantiated using a static protected constructor.

STATIC PROTECTED CONTRUCTOR 를 사용하여 인스턴스화 해야한다.

##### It must be instantiated using a static public constructor.

STATIC PUBLIC CONTRUCTOR 를 사용하여 인스턴스화 해야한다.

## *<u>It must be defined as FINAL.</u>*

FINAL 로 정의 되어야 한다.

## *<u>must be instantiated using a static private constructor.</u>*

STATIC PRIVATE CONTRUCTOR 를 사용하여 인스턴스화 해야한다.

****

singleton : create object를 할 수 없고, method를 통해서 object를 생성할 수 있다.
***<u>final을 사용하여 상속 방지</u>***
***<u>constructor를 static으로 선언</u>***.

****

<BR/>

****

****

<BR/>

# Q69. (skip)???????????????????????????

### An ABAP program processes the following expression:

### r = a / b + c

### Which of the following data declarations would cause the runtime environment to use fixed-point arithmetic for the above expression?

RUNTIME 환경이 위 식에서 fixed-point arithmetic 을 사용하도록 하는 DATA 선언은?

#### 2 correct

#### Note: Answers of this question are not verified by our experts, please study yourself and select the appropriate answers.

```abap
DATA: r TYPE p DECMALS 2,
      a TYPE i VLAUE 201,
      b TYPE i VALUE 200,
      c TYPE f.
```

```abap
DATA: r TYPE p,
      a type I VALUE 201,
      b type I VALUE 200,
      c type i.
```

```abap
DATA: r TYPE p DECIMALS 2,
      a TYPE i VALUE 201,
      b TYPE i VALUE 200,
      c TYPE 
```

```abap
DATA: r TYPE f,
      a TYPE i VALUE 201,
      b TYPE i VALUE 200,
      c TYPE f.
```

<BR/>

****

****

<BR/>

# Q70.

### How would you define a method of an ABAP class to prevent this method from being available in a subclass?

ABAP 클래스의 METHOD 를 정의하되 이 METHOD 를 SUBCLASS 에서 사용 할수 없도록 하려면 어떻게 해야하는가?

#### Please choose the correct answer.

##### Final

## *<u>Private</u>*

##### Protected

##### Abstract

****

자식 클래스에서 부모의 method를 못보게 하는 방법 private

****

<BR/>

****

****

<BR/>

Question 71: 
A structure has enhancement category 3, can be enhanced (character-type).
Which set of elementary types is allowed for the new fields?
Please choose the correct answer.
Response: 
    C,D,N,X
    D,I,string, T
    C,D,N,T
    F,I,P,X
Clike : CNDT and string
csequence : c and string
string이 안되는 이유 : enhancement 옵션이 deep 이 되어야 한다.  (여기서는 character-type 옵션이므로)

Question 72: 
Which components of the class can be accessed in the implementation of a static method in that class?
There are 2 correct answers to this question
Response: 
    Instance attributes
    Types
    All events
    Constants
static method에서 접근 할 수 있는 것. : static attribute , Types, constants

Question 73: 
What does a Web Dynpro component contain?
There are 3 correct answers to this question.
Response: 
    Multiple views within a window
    A context
    Component controller
    UI elements
    Exactly one interface controller
context : 각 controller 마다 모두 존재.
UI element : View controller에 전재.
interface controller , component controller : 무조건 하나

Question 74: 
What are the advantages of modularization?
There are 3 correct answers to this question
Response: 
    Transparency
    Performance
    Maintainability
    Profitability across DBMS
    Reusability
모듈화 : class, function, subroutine 
profitability across DBMS : DB에 접속 독립성 => 모듈화와 무관

Question 75: 
Which types of programs or parts of programs can be tested directly from the ABAP Workbench or ABAP Editor?
There are 4 correct answers to this question.
Response: 
    INCLUDE
    TYPE-POOL
    METHOD
    FUNCTION-POOL
    PROGRAM
    CLASS-POOL
    REPORT
    FUNCTION MODULE
    INTERFACE-POOL
실행 가능 단위 (se80에서 F8로 실행되는 프로그램) : Method, function module, module pool (screen program, online program), class-pool, report)

Question 76: 
Which of the following are true statements?
There are 3 correct answers to this question.
Response: 
    You can also select predefined data types to define the data type of the data element.
    Reference data types can be used to define the data type of the data element.
    Field labels are defined for the domain.

Field labels : data element에서 셋업
data element의 기술적인 정보는 domain이 가지고 있다 .(data type, field lemgth, decimal places 등등)

Question 77: 
Each component has an interface; of what does this interface consist?
There are 2 correct answers to this question.
Response: 
    Interface controller
    Data Container
    Interface view
    Interface context
Web dynpro 가 가지고 있는 것 : Interface controller, interface view.

Question 78: 
What types of changes to the repository does SAP provide?
There are 3 correct answers to this question.
Response: 
    SAP Notes
    Deployments from SDN.SAP.COM
    Transports
    Support Packages
    Enhancement Packages
SAP Notes : bugs patch. 
STD를 변경할 때 제공되는 것 : SAP Notes, Support package(SAP Notes의 집합), Enhancement Packages, 추가로 upgrade version.

Question 79: 
Which of the following are features of the Context in Web Dynpro?
There are 2 correct answers to this question
Response: 
    Every Web Dynpro controller has multiple Contexts
    Every Web Dynpro controller has one Context
    Data is shared between controllers through Context mapping
    Data is transferred from one Context to another by firing plugs
Context는 각 controller 별로 한 개씩 갖는다.
context mapping : context 간 Data sharing or Data Transferring.
firing plugs : 각 view(화면)간 이동을 위해 필요한 것.

Question 80: 
To which context object is the attribute LEAD_SELECTION_INDEX related?
Please choose the correct answer.
Response: 
    Element
    Node
    Attribute
    Supply function
Web dynpro : LEAD_SELECTION_INDEX => Node (화면에서 선택한 라인정보)
화면은 data binding에 의해서 context와 연결되어 있음.
