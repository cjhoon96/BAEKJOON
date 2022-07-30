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

****

* hashed internal table : primary key로만 구성
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


