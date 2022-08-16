











***

****

****

# SAP ARCHITECTURE

# Q21.

## How is an ABAP program with several dialog steps executed?

여러개의 DIALOG 단계가 존재하는 ABAP 프로그램은 어떻게 실행되는가?

#### Please choose the correct answer.

## *<u>Usually, dialog steps are assigned to different dialog work</u>*

## *<u>processes.</u>*

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

****

****

<BR/>

# Q45.

## You want to move a transport request from the development system to the subsequent system. Which of the following are prerequisites for this?

개발 시스템에서 부속 시스템으로 전송요청을 이동하고자 한다. 다음중 전제조건을 고르시오?

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

<BR/>

****

****

<BR/>

# Q64.

## Each work process…

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

<BR/>

****

****

<BR/>

# Q65.

## Which of the following capabilities is provided by the Application Layer platform of SAP Netweaver?

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

<BR/>

****

****

<BR/>

# Question 126: 

## Which prerequisites must be fulfilled before a repository object can be transported?

REPOSITORY OBJECT 가 전송되기 전에 충족 되어야 하는 사항들을 고르시오

#### 3 correct 

##### An inactive version of the repository object must exist.

REPOSITORY OBJECT 의 INACTIVE VERSION 이 존재 해야한다. 

##### An application component must be assigned to the repository object.

APPLICATION COMPONENT 는 REPOSITORY OBJECT 에 할당 되어야한다.

## *<u>The repository object must be assigned to a change request.</u>*

REPOSITORY OBJECT 는 CHANGE REQUEST 에 할당 되어야한다.

## *<u>A transport layer must be assigned to the package.</u>*

TRANSPORT LAYER 는 PACKAGE 에 할당 되어야한다.

## *<u>The repository object must be assigned to a package.</u>*

REPOSITORY OBJECT 는 PACKAGE 에 할당되어야한다.

<BR/>

****

****

<BR/>

# Question 130: (skip)

### The data buffered on each application server…

#### Please choose the correct answer.

## *<u>Depends on the users.</u>*

##### Is does not the same.

##### Is never the same.

##### Is always the same.

<BR/>

***

****

<BR/>



























****

****

****

# DATA TYPE

# Q8.

## Which data types are incomplete ABAP standard data types?

#### incomplete standard data type 들을 고르시오

#### 3 correct

##### I

##### F

## <u>*C*</u>

## <u>*N*</u>

## <u>*P*</u>

<br/>

****

* Complete stadard types

  길이를 지정해 줄 수 없는 Data Type

  |            |                   |
  | ---------- | ----------------- |
  | D          | 8자리 날짜        |
  | T          | 6자리 시간        |
  | I          | 정수 자료형 4byte |
  | F          | 실수 자료형 8byte |
  | DECFLOAT16 |                   |
  | DECFLOAT34 |                   |
  | STRING     |                   |
  | XSTRING    |                   |

* Incomplete standard types

  길이를 정의해 줄 수 있는 Data Type

  |      |                                                              |
  | ---- | ------------------------------------------------------------ |
  | C    | 일반 문자형 1~65535                                          |
  | N    | 문자형 데이터(숫자) 1~65535                                  |
  | P    | 소수 값을 가질 수 있는 타입으로 LENGTH 와 DECIMAL 의 길이를 지정 1~16 |
  | X    | Hexadecimal(16진수) 타입 1~65535                             |

Size 지정해야 하는 data type (C, N, P, X) 

****

<br/>

<br/>

****

****

<br/>

# Q29.

## When included in a structure, which elementary field types allow the structure to be considered a character-type data object?

STRUCTURE 에 포함될때 CHARACTER TYPE DATA OBJECT로 여겨지는 ELEMENTARY FIELD TYPE 은?

#### 4 correct

## *<u>C</u>*

## *<u>D</u>*

## *<u>N</u>*

##### X

##### XSTRING

##### F

## *<u>T</u>*

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

****

****

<BR/>

# Q39.

## What is the default length of the type C data type?

#### DATA TYPE C  의 기본 길이는 무엇인가?

#### Please choose the correct answer.

##### 1–65535

##### 100

## *<u>1</u>*

##### 10

<BR/>

<BR/>

****

****

<BR/>

# Q50.

## Which of the following ABAP data types are compatible with the generic character-type CLIKE?

다음 ABAP DATA TYPE들 중 GENERIC CHARACTER TYPE CLIKE와 호환 되는 것은?

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

<BR/>

****

****

<BR/>

# Q55.

## Which of the following ABAP statements throws an error at the syntax check?

다음중 ERROR 나 SYNTAX CHECK 를 띄우는 ABAP 구문은?

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

<BR/>

****

****

<BR/>

# Q69. (skip)???????????????????????????

## An ABAP program processes the following expression:

### r = a / b + c

## Which of the following data declarations would cause the runtime environment to use fixed-point arithmetic for the above expression?

RUNTIME 환경이 위 식에서 fixed-point arithmetic 을 사용하도록 하는 DATA 선언은?

#### 2 correct

#### Note: Answers of this question are not verified by our experts, please study yourself and select the appropriate answers.

```abap
DATA: r TYPE p DECMALS 2,
      a TYPE i VLAUE 201,
      b TYPE i VALUE 200,
      c TYPE f.
```

<BR/>

```abap
DATA: r TYPE p,
      a type I VALUE 201,
      b type I VALUE 200,
      c type i.
```

<BR/>

## *<u>ANSWER</u>*

```abap
DATA: r TYPE p DECIMALS 2,
      a TYPE i VALUE 201,
      b TYPE i VALUE 200,
      c TYPE 
```

<BR/>

## *<u>ANSWER</u>*

```abap
DATA: r TYPE f,
      a TYPE i VALUE 201,
      b TYPE i VALUE 200,
      c TYPE f.
```

<BR/>

<BR/>

****

****

<BR/>

# Q71.

### A structure has enhancement category 3, can be enhanced (character-type).

STRUCTURE 은 ENHANCE 될 수 있는 3가지 ENHANCEMENT CATEGORY가 있다.다.

### Which set of elementary types is allowed for the new fields?

다음중 새로운 FIELD에 허용되는 ELEMENT TYPE 들만 모아 놓은 것은 무엇인가?

#### Please choose the correct answer.

C,D,N,X
D,I,string, T

## *<u>C,D,N,T</u>*

F,I,P,X

<BR/>

****

Clike : CNDT and string
csequence : c and string
string이 안되는 이유 : enhancement 옵션이 deep 이 되어야 한다.  (여기서는 character-type 옵션이므로)

#### ENHANCEMENT CATEGORYS

1. Can be Enhanced(deep) - we can enhance this table/structure with a deep structure, reference fields or any other valid field types.

2. Can be Enhanced (Character-Type or Numeric) - we can enhance the tables/structure with fields that are strictly character or numeric types eg: C,N,D,T,I etc.

3. Can be Enhanced (Character Type) - can be enhanced by only including character type fields

4. Cannot Be Enhanced - Restricting Enhancement of the table/structure post creation.

****

<BR/>

<BR/>

****

****

<BR/>

# Q83.

## Which of the following ABAP standard types are incomplete?

다음중ABAP STANDARD TYPE 들 중 INCOMPLETE 인 것들은 무엇인가?

#### 2 correct 

## *<u>X</u>*

##### F

## *<u>N</u>*

##### STRING

<BR/>

****

incomplete : 크기를 선언해야 하는 변수 타입. (C, N, X, P)

****

<BR/>

<BR/>

****

****

<BR/>



# Q84. ??????????????????????????????????? 

## Which of the elementary data types is deep?

다음중 DEEP 타입인 ELEMENT DATA TYPE 들을 고르시오

#### Please choose the correct answer.

##### DECFLOAT34

## *<u>XSTRING</u>*

##### X

##### N

<BR/>

****

runtime 시 크기가 변하는 것 : string, xstring

****

<BR/>

<BR/>

****

****

<BR/>

# Q85. 

## Which elementary field types are considered a character type?

다음 ELEMENT FIELD TYPE들 중 CHARACTER TYPE 으로 취급 되는 것은?

#### 5 correct 

## *<u>C</u>*

## *<u>T</u>*

## *<u>D</u>*

##### I

##### F

##### XSTRING

## *<u>STRING</u>*

## *<u>N</u>*

##### X

<BR/>

****

|               |                                                              |
| ------------- | ------------------------------------------------------------ |
| **clike**     | Character-like (**c**, **n**, and **string** plus the date/time types **d**, **t** and character-like [flat structures](javascript:call_link('abenflat_structure_glosry.htm'))) |
| **csequence** | Text-like (**c**, **string**)                                |

***

<BR/>

<BR/>

****

****

<BR/>

# Q94. 

## Which of the following data types are predefined ABAP data types?

다음중 PREDEFINED ABAP DATA TYPE 들을 고르시오

#### 3 correct 

## *<u>XSTRING</u>*

## *<u>STRING</u>*

##### DECIMALS

## *<u>DECFLOAT34</u>*

##### FLOAT (=>f)

<BR/>

****

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

****

<BR/>

<BR/>

****

****

<BR/>

# Question 96: 

## What is the allowed length of the ABAP Dictionary data type DF16_DEC?

DF16_DEC ABAP DICTIONARY DATA TYPE 의 허용되는 길이는?  

#### Please choose the correct answer.

##### The allowed length is between 0 and 16 digits.

## <u>*The allowed length is between 1 and 15 digits.*</u>

##### The allowed length is between 0 and 15 digits.

##### The allowed length is 16 digits.

<BR/>

****

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

<BR/>

<BR/>

****

****

<BR/>

# Question 113: 

## Which of the following generic types can you use to define a field symbol that will be assigned to a character string?

다음 GENERIC TYPE 들 중 CHARACTER STRING 에 할당될 수 있는 FIELD SYMBOL 을 정의하는데 사용할 수 있는 것은?

#### 3 correct 

## *<u>Type any</u>*

## *<u>Type clike</u>*

##### Type xsequence

## *<u>Type csequence</u>*

##### Type any table

#### <BR/>

****

generic : 어떤 데이터 type도 가리킬 수 있는 형태 
data z1 type ref of data
any 와 data는 동일한 기능을 갖고 있지만, any는 ref to 에 대하여 지원하지 않음.
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

****

<BR/>

<BR/>

****

***

<BR/>

# Question 115: 

### What do global types and local types have in common?

GLOBAL TYPE 과 LOCAL TYPE 의 공통적으로 가지고 있는 것은?

#### Please choose the correct answer.

##### Search help (=>global type)

##### Documentation (=>data element)

##### Field labels (=>data element)

## *<u>Technical information</u>* (types, sizes)

<BR/>

<BR/>

****

****

<BR/>

































****

****

****

# DATA OBJECTS



# Q7.

## When should you use a hashed internal table?

#### hashed internal table은 언제 사용해야 합니까?

#### 2 correct

##### When accessing by index

index 로 접근할때

## *<u>When accessing mainly single records</u>*

주로 단일 record 로 접근할때 

##### When accessing by secondary key

secondary key 로 접근할때

##### When accessing using the left-justified part of the key

## *<u>When accessing always by primary key</u>*

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

<br/>

# Q24.

## What does SAP recommend that you use a hashed table?

해시 테이블을 사용하는 것을 SAP에서 권장하는 경우는 무엇인가?

#### Please choose the correct answer.

##### When a table is very large and you want to access the table by index only.

테이블의 크기가 매우 크고 index 만을 통해 테이블에 접근하기를 원하는 경우

## *<u>When a table is very large and you want to access the table by key only</u>*

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

****

****

<BR/>

# Q92. 

## Which of the following ABAP code lines is valid?

다음중 가능한 ABAP CODE 는?

#### 3 correct 

## *<u>CONSTANTS gc_mantr TYPE mantr VALUE ‘100’</u>*

##### SELECT-OPTIONS s_mantr TYPE mantr DEFAULT ‘100’  (type => for가 되어야 한다)

##### DATA gc_mantr TYPE mantr DEFAULT ‘100’ ( 초기값은 default => value)

## *<u>STATICS s_mantr TYPE mantr VALUE ‘100’</u>*

## *<u>PARAMETERS p_mantr TYPE mantr DEFAULT ‘100’</u>*

<br/>

<BR/>

****

****

<BR/>

# Question 109: 

## Which statements are allowed for processing internal tables?

다음 구문중 ITAB 을 처리할 수 있는 구문은?

#### 3 correct 

## *<u>DELETE</u>*

## *<u>MODIFY</u>*

##### SELECT

##### UPDATE

## *<u>INSERT</u>*

<BR/>

****

internal table : DELETE, MODIFY, INSERT, READ, LOOP

****

<BR/>

<BR/>

****

****

<BR/>



















****

****

****

# ABAP DICTIONARY

# Q6. ?????????????????????????????????

## Which must a search help do?

#### Search help 가 해야하는 작업은?

#### 4 correct

## *<u>Be used from a screen</u>*

screen 에서 활용

## *<u>Have a dialog with the user</u>*

사용자와의 DIALOG 를 가지고 있다.

## *<u>Allow the user to select a response</u>*

사용자 응답 선택 허용

## *<u>Determine the values for selection by the user</u>*

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

<br/>

# Q12. 

## Where should the labels for fields be stored?

#### 필드들의 라벨은 어디에 저장되어야 하는가?

#### Please choose the correct answer.

##### Field

##### Table

##### Structure

## *<u>Data element</u>*

##### Domain

lable 를 설정할 수 있는 위치 (Data element)

<BR/>

<BR/>

****

****

<BR/>

# Q15.

## How can you maintain documentation for input fields on your screen?

화면의 INPUT FIELD에 대한 문서를 어떻게 유지 보수 할 수 있는가?

#### Please choose the correct answer.

##### Add documentation to the SCREEN table at PROCESS AFTER INPUT (PAI).

PAI 에서 SCREEN 테이블에 문서를 추가한다.

##### Define text tables for the underlying structure.

underlying structure 를 위한 TEXT 테이블을 정의한다. 

##### Add documentation to the SCREEN table at PROCESS BEFORE OUTPUT (PBO).

PBO 에서 SCREEN 테이블에 문서를 추가한다.

## <u>*Add documentation to the underlying data element.*</u>

    underlying DATA ELEMENT 에 문서를 추가한다.

<BR/>

****

INPUT FIELD 를 위한 문서 document는 F1 HELP 를 말하는 것으로 data element에서 지원하는 기능

****

<BR/>

<BR/>

****

****

<BR/>



# Q33.

## Which of the following statements regarding search helps are true?

다음중 SEARCH HELP 에 대한 설명중 옳은 것은?

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

# Q37.

## Which of the following conditions must be fulfilled when using a GROUP BY clause in a SELECT statement?

SELECT 문에서 GROUP BY 절을 사용할 때 만족해야되는 조건은 무엇인가?

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

****

****

<BR/>

# Q42. 

## Which data element property do you set so that the system logs changes to the content of fields with this data element?

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

<BR/>

****

****

<BR/>

# Q47.

## What will happen at runtime when accessing a buffered table?

BUFFER 된 테이블에 접근할때 RUNTIME 에서 발생하는 것은 무엇인가?

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

<BR/>

****

****

<BR/>

# Q49.

## Where are fixed values for fields stored?

필드의 고정값 은 어디에 저장되는가?

#### Please choose the correct answer.

##### Table

## *<u>Domain</u>*

##### Structure

##### Data element

##### Field

<BR/>

<BR/>

****

****

<BR/>

# Q76.

## Which of the following are true statements?

다음중 옳은 것을 고르시오

#### 3 correct

## *<u>You can also select predefined data types to define the data type of the data element.</u>*

PREDEFINED DATA TYPE 으로 DATA ELEMENT 의 DATA TYPE 을 정의 할 수 있다.

## *<u>Reference data types can be used to define the data type of the data element.</u>*

REFERENCE DATA TYPE 은 DATA ELEMENT 의 DATA TYPE 을 정의하는데 사용될 수 있다.

##### Field labels are defined for the domain.

FIELD LABEL 은 DOMAIN 에서 정의된다.

## *<u>The technical attributes of the data element can be defined by a domain, that is, the data type, the field length, and the number of decimal places.</u>*

DATA ELEMENT 의 기술적 속성은 DOMAIN에 의해 정의며 이는 DATA TYPE , FIELD 의 길이, DECIMAL PLACE 의 길이 가 있다.

<BR/>

****

Field labels : data element에서 셋업
data element의 기술적인 정보는 domain이 가지고 있다 .(data type, field lemgth, decimal places 등등)

![data_element.png](C:/Users/jihoon/TIL/SAP Certi/IMG/data_element.png)

****

<BR/>

<BR/>

****

****

<BR/>

# Q86. 

## Which of the following is a true statement?

다중 사실 인 것은?

#### 2 correct

##### A standard table should always have a unique key.

STANDARD TABEL 은 항상 UNIQUE KEY 를 보유하여야 한다.

## *<u>A hashed table should always have a unique table key.</u>*

HASHED TABLE 은 항상 UNIQUE TABLE KEY를 보유하여야한다.

## *<u>A sorted table can have a unique or a non-unique key.</u>*

SORTED TABLE 은 UNIQUE 또는 NON-UNIQUE KEY 를 가질 수 있다.

##### A standard table should always have a multiple key.

STANDARD TABLE 은 항상 MULTIPLE KEY 를 보유하여야 한다.

<BR/>

****

standard table : unique, non-unique and one or a multiple key
hashed table : unique
sorted table : unique, non-unique

****

<BR/>

<BR/>

****

***

<BR/>

# Q90.

## What can you create using the ABAP Dictionary?

ABAP DICTIONARY 에서 생성할 수 있는 것은?

#### 3 correct  

## *<u>Type pools</u>*

## *<u>Transparent tables</u>*

##### Internal tables

##### Field symbols

## *<u>Domains</u>*

<BR/>

****

Type pools = Type groups.

****

<BR/>

<BR/>

****

****

<BR/>

# Question 101: 

## Which of the following can you assign a search help to?

다음중 SEARCH HELP 를 할당할 수 있는것은? 

#### 3 correct  

## *<u>Data element</u>*

## *<u>Structure component</u>*

## *<u>Check table</u>*

##### Domain

##### Table type

<BR/>

****

search help 를 assign 할 수 있는 곳 : 

* Data element

* Structure component
* Check Table. 

(se11에서 테이블 조회하여 데이터 조회 시 데이터 검색 조건으로 search help 를 선택할 수 있다)

****

<BR/>

<BR/>

***

****

<BR/>

# Question 107: 

## Subroutines provide which types of parameters?

SUBROUTINE 은 어떤 타입의 PARAMETER 들을 제공하는가?

#### 2 correct 

## *<u>Exceptions</u>*

Return values

## *<u>Input/output (changing)</u>*

Input

Output

<BR/>

****

subroutine 에서 제공하는 parameter종류 : changing (input/output), exceptions, USING, TABLES

```ABAP
FORM subr TABLES table_parameters
          USING parameters
          CHANGING parameters
          RAISING exc1|RESUMABLE(exc1) exc2|RESUMABLE(exc2) ... .
```



****

<BR/>

<BR/>

****

****

<BR/>

# Question 116: 

## In which database table type is there a one-to-one relationship between the Dictionary table definition and the relevant physical table in the database?

DICTIONARY TABLE 정의와 DB 의 RELEVANT PHYSICAL TABLE 사이의 관계가 1-1 관계인 DB TABLE 유형은?

#### Please choose the correct answer.

##### Internal table

##### Cluster table (1 : N)

## *<u>Transparent table</u>*

##### Pooled table (1 : N)

<BR/>

****

[DB TABLE 3가지](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=howwithus&logNo=221458527100)

* **TRANSPARENT TABLE**

  * ABAP DICTIONARY 에 하나의 TABLE 이 실제 DB 에서도 하나의 TABLE 로 존재 

    (1-1)

  * TABLE BUFFERING 가능 

* **CLUSTERED TABLE**  

  * ABAP DICTIONARY 에 있는 N개의 CLUSTERED TABLE 은 실물 DB 에 한개의 TABLE CLUSTER 와 동일한 관계를 갖는 TABLE

    (1-N)

  * SECONDARY INDEX 사용 X 

  * PRIMARY KEY 를 통해 접근 하지만 데이터 접근 속도가 느리다.

  * STATISTICAL SQL FUNCTION 사용 불가 (SUM, MAX, MIN 등,,)

  * EX) [BSEG] = BSEC + BSED + BSES + BSET

* **POOLED TABLE**

  * ABAP DICTIONARY 에 생성된 N개의 POOLED TABLE 은 물리적 DB 인 ORACLE DB 에 하나의 TABLE 에 데이터가 저장되어 관리됨

    (1-N)

  * PRIMARY KEY 나 SHOUD BE BUFFERED 기능으로 테이블에 접근 됨

  * 주로 MATCH CODES, LOOKUP TABLES 가 있다. 

  * SECONDARY INDEX 는 사용 X

S/4HANA에서 POOLED TABLE과 CLUSTERED TABLE 은 사라짐

****

<BR/>

<BR/>

****

****

<BR/>

# Question 120: 

## For which of the following purposes can you use the ABAP dictionary?

다음 중 ABAP  DICTIONARY 를 사용하여 할 수 있는 것은 무엇입니까?

#### 2 correct 

##### To maintain program translations

프로그램 변환 유지 관리

## *<u>To activate logging for transparent tables</u>*

TRANSPARENT TABLE LOGGING 활성화 

## *<u>To create lock objects</u>*

LOCK OBJECT 생성

##### To create development classes

개발 CLASS 생성

<br/>

<BR/>

****

****

<br/>

# Question 125: 

## Which of the following ABAP dictionary types can you use to define domains?

다음 ABAP DICTIONARY TYPE 들 중 DOMAIN 을 정의하는데 사용할 수 있는 것은?

#### 3 correct

## *<u>DEC</u>*

## *<u>NUMC</u>*

## *<u>CHAR</u>*

##### FLOAT

##### DATE

<BR/>

****

pre-define data type 을 물어보는 문제 (float 와 date는 없다)

**ACCP**: Posting period. The length is set to 6 places for this data type. The format is YYYYMM. In input and output, the system inserts a point between the year and month, so the template of this data type has the format '____.__'.

**CHAR**: Character string. Fields of type CHAR can have a maximum length of 1333 in tables. If you want to use longer character fields in tables, you must choose data type LCHR. There are no restrictions on the length of such fields in structures.

**CLNT**: Client. Client fields always have three places.

**CUKY**: Currency key. Fields of this type are referenced by fields of type CURR. The length is set to 5 places for this data type.

**CURR**: Currency field. Equivalent to an amount field DEC. A field of this type must refer to a field of type CUKY (reference field). The maximum length for this data type is 31 places.

**DATS**: Date. The length is set to 8 places for this data type. The output template can be defined with the user profile.

**DEC**: Counter or amount field with decimal point, sign, and commas separating thousands. A DEC field has a maximum length of 31 places.

**FLTP**: Floating point number. The length (including decimal places) is set to 16 places for this data type.

**DF34_RAW**: Normalized decimal floating point number. Representation on the database based on type RAW. The values can be sorted and compared according to their numerical value, and they can be used in indexes. Database arithmetic is not available. Decimal floating point numbers of this type have 34 digits in the mantissa, and conform to the IEEE 754r standard. Valid values are numbers between 1E-6143 and 9.999999999999999999999999999999999E+6144, plus the corresponding negative numbers and zero.

**DF34_SCL**: Scaled decimal floating point number. The difference between this type and DF34_RAWis that DF34_SCL has an additional column of the type INT2 for the scale. This column is visible, but its value is written and read automatically. The values having this data type can be sorted and compared according to their numerical value, and they can be used in indexes. Database arithmetic is not available. The system supports up to 34 decimal digits in the coefficient. Decimal floating point numbers of this type are represented internally with 34 decimal places according to the IEEE-754 standard. Valid values are numbers between 1E-6143 and 9.999999999999999999999999999999999E+6144, plus the corresponding negative numbers and zero.

**DF34_DEC**: Decimal floating point number. Representation on the database with type DEC, length and number of decimal places must be specified by the programmer. The values have at most 31 digits on the database, with at most 14 decimal places. The advantage of this type is that database arithmetic is available. The disadvantage is that values are silently rounded to the specified number of decimal places when they are written into the database. An overflow can also occur when writing values into the database. In this case the system throws an ABAP-OO exception.

**DF16_RAW**: Normalized decimal floating point number. Representation based on type RAW. The values can be sorted and compared according to their numerical value, and they can be used in indexes. Database arithmetic is not available. The system supports up to 16 decimal digits in the coefficient. Decimal floating point numbers of this type are represented internally with 16 decimal places according to the IEEE-754r standard. Valid values are numbers between 1E-383 and 9.999999999999999E+384, plus the corresponding negative numbers plus zero.

**DF16_SCL**: Scaled decimal floating point number. The difference between this type and DF16_RAWis that DF16_SCL has an additional column of type INT2 for the scale. This column is visible, but the value is written and read automatically. The values having this data type can be sorted and compared according to their numerical value, and they can be used in indexes. Database arithmetic is not available. The system supports up to 16 decimal digits in the coefficient. Decimal floating point numbers of this type are represented internally with 16 decimal places according to the IEEE-754r standard. Valid values are numbers between 1E-383 and 9.999999999999999E+384, plus the corresponding negative numbers plus zero.

**DF16_DEC**: Decimal floating point number. Representation on the database with type DEC, length and number of decimal places must be specified by the programmer. The values have at most 15 digits on the database, with at most 14 decimal places. The advantage of this type is that database arithmetic is available. The disadvantage is that values are silently rounded to the specified number of decimal places when they are written into the database. An overflow can also occur when writing values into the database. In this case, the system throws an ABAP-OO exception.

**INT1**: 1-byte integer between 0 and 255. The length is set to 3 places for this data type.

**INT2**: 2-byte integer between -32767 and 32767. Fields of this type must be used only for length fields. The system positions these length fields immediately in front of a long field (type LCHR, LRAW). With INSERT or UPDATE on the long field, the database interface enters the length which was actually used in the length field. The length is set to 5 places for this data type.

**INT4**: 4-byte integer between -2147483648 and 2147483647.The length for this data type is limited to 10 places.

**LANG**: Language key. It has its own field format for special functions. This data type always has length 1. The language key is displayed at the user interface with 2 places, but is stored with 1 place in the database. The conversion exit ISOLA converts the display at the user interface for the database and vice versa. This conversion exit is automatically allocated to a domain with data type LANG at activation.

**LCHR**: Character string of any length, but has to be declared with a minimum of 256 characters. You must locate fields of this type at the end of transparent tables (in each table there can be only one such field) and must be preceded by a length field of type INT2. If there is an INSERT or UPDATE in ABAP programs, this length field must be filled with the length actually required. If the length field is not filled correctly, this leads to a data loss in the LCHR field. Fields of this type cannot be used in the WHERE condition of a SELECT statement.

**LRAW**: Uninterpreted byte string of any length, but has to be declared with a minimum length of 256. You must locate fields of this type at the end of transparent tables (in each table there can be only one such field) and must be preceded by a length field of type INT2. If there is an INSERT or UPDATE in ABAP programs, this length field must be filled with the length actually required. If the length field is not filled correctly, this leads to a data loss in the LRAW field. A field of this type cannot be used in the WHERE condition of a SELECT statement.

**NUMC**: Long character field in which only numbers can be entered. The length of this field is limited to a maximum of 255 places.

**PREC**: Obsolete data type. The length is set to 2 places for this data type but internally it is treated like INT2. Dynpro fields of type PREC are restricted to 2 places and must not contain a sign.

**QUAN**: Quantity. Equivalent to an amount field DEC. A field of this type must always refer to a units field with UNIT format (reference field). The maximum length for this data type is 31 places.

**RAW**: Uninterpreted byte string. Fields of type RAW may have only a maximum length of 255 in tables. If longer raw fields are required in tables, you should select data type LRAW.

**RAWSTRING**: Uninterpreted byte string of variable length. In the Dictionary a length can be specified for this type (at least 256 characters). This data type can be used in types (data elements, structures, table types) and domains. You can store binary data of type RAWSTRING in the database. There are restrictions; for a description of them, refer to the documentation of the ABAP statement 'STRING'. In ABAP, this type is implemented as a reference to a storage area of variable size. The system proposes 132 characters as the default for the output length. You cannot attach search helps to components of this type.

**STRING**: Character string with variable length This data type can be used only in types (data elements, structures, table types) and domains. In the dictionary a length can be specified for this type (at least 256 characters). It can be used in database tables only with restrictions. For a description of them, refer to the documentation of the ABAP statement 'STRING'. In ABAP, this type is implemented as a reference to a storage area of variable size. The system proposes 132 characters as default for the output length. You cannot attach search helps to components of this type.

**SSTRING**: Short character string with variable length. In the Dictionary the number of characters can be specified for this type (from 1 to 1333). This data type can be used only in types (data elements, structures, table types) and domains. It can be used in database tables. To do so, refer to the documentation of the ABAP statement 'STRING'. In ABAP, this type is implemented as a reference to a storage area of variable size. String fields of this type can be used in indexes and in the WHERE condition of a SELECT statement. You cannot use them in table keys.

**TIMS**: Time. The length is set to 6 places for this data type. The format is HHMMSS. The template for input and output has the form '__.__.__'.

**UNIT**: Unit. Fields of this type are referenced by fields of type QUAN. The length of this data type is set to 2 or 3 places.

**VARC**: Character field of variable length. Creation of new fields of this data type is no longer supported.

https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-US/cf/21f2e5446011d189700000e8322d00/content.htm?no_cache=true

****

<BR/>

*****

****

<BR/>

# Question 134: 

## What do you have to take into account before you decide to buffer a table?

TABLE BUFFER를 결정하기 전에 고려해야할 사항은 무엇인가? 

#### Please choose the correct answer.

##### The data must always be read from the buffer

DATA 는 항상 BUFFER 로 부터 읽어져야한다.

## *<u>The data read from the buffer may NOT be current</u>*

BUFFER 로 부터 읽은 데이터가 최신의 것이 아닐 수 있다. 

##### The entire table content must be loaded into the table buffer

모든 테이블 CONTENT 는 테이블 BUFFER 에서 LOAD 되어야 한다.

##### The database server must allow table buffering

DB 서버는 테이블 BUFFERING 을 허용해야한다.

<BR/>

****

현재 데이터가 아니기 때문에 불일치가 발생함 . (sync 가 발생해야 함)

****

<BR/>

****

****

<BR/>

















***

****

****

# OBJECT NAVIGATOR

# Q16.

## Which of the following statements about the Object Navigator are true?

OBJECT NAVIGATOR 에 대한 구문중 옳은 것은?

#### 4 correct

## *<u>The ABAP Dictionary can be maintained in the Object Navigator.</u>*

    ABAP DICTIONARY 는 OBJECT NAVIGATOR 에서 유지 보수 될 수 있다.

##### You can create BAdI implementations in the Object Navigator.

BAdI IMPLEMENTATION 을 생성할 수 있다.

##### You can create customer projects (Transaction CMOD) in the Object Navigator.

CUSTOMER PROJECT 를 생성 할 수 있다.

## *<u>Menus can be displayed and edited in the Object Navigator.</u>*

    메뉴가 DISPLAY 되며 수정될 수 있다.

## *<u>Screens can be displayed and edited in the Object Navigator.</u>*

    SCREEN 이 DISPLAY 되며 수정될 수 있다.

## *<u>ABAP programs can be displayed and edited in the Object</u>*

## *<u>Navigator.</u>*

    ABAP 프로그램이 DISPLAY 되며 수정될 수 있다.

<br/>

****

**<u>*Object Navigator (SE80)*</u>** 기능 : 

structure 관리, 메뉴관리, screen 관리 등,  BAdIS 는 SE18, SE19 에서 관리.  customer exit : Tcode CMOD 에서 확인, SMOD 로 프로젝트

### T-CODE SE80 가 OBJECT NAVIGATOR임을 용어를 기억!!!

****

<br/>

<br/>

****

****

<br/>















****

*****

*****

# PROGRAMS



# Q46.

## What is the event block that all of your code changes belongs to if you do not explicitly code any event blocks in an executable program?

executable program에서 어떤 EVENT BLOCK도 명시적으로 CODING 하지 않은 경우 모든 코드 변경이 속하는 EVENT BLOCK 은 무엇인가?

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

<BR/>

****

****

<BR/>

# Q51.

## What are the advantages of defining texts symbols in executable programs?

EXECUTABLE PROGRAM 을 개발하는데 있어 TEXT SYMBOL을 정의하는 것의 이점은 무엇인가?

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

<br/>

****

****

<BR/>

# Q66.

## You have defined a classical screen (dynpro) with mandatory input fields. You want to exit the screen using the Cancel button even if not all of the mandatory fields have been filled. What is necessary to achieve this?

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

<BR/>

****

****

<BR/>

# Q75.

## Which types of programs or parts of programs can be tested directly from the ABAP Workbench or ABAP Editor?

ABAP WORKBENCH 또는 ABAP EDITOR 에서 직접 테스트 할 수 있는 프로그램의 타입이나 프로그램의 부분은 무엇인가?

#### 4 correct

##### INCLUDE

##### TYPE-POOL

## *<u>METHOD</u>*

##### FUNCTION-POOL

##### PROGRAM

## *<u>CLASS-POOL</u>*

## *<u>REPORT</u>*

## *<u>FUNCTION MODULE</u>*

##### INTERFACE-POOL

<BR/>

****

실행 가능 단위 (se80에서 F8로 실행되는 프로그램) : 

* Method

* function module

* module pool (screen program, online program)

* class-pool

* report

****

<BR/>

<BR/>

****

****

<BR/>

# Q95. 

## Dynpros(DYNAMIC PROGRAMS) can be placed in which program types? 

DYNPRO 는 어떤 프로그램 타입에 배치 될 수 있는가?

#### 3 correct 

## *<u>Function groups</u>*

Class pools

## *<u>Module pools</u>*

## *<u>Executables</u>*

<BR/>

****

화면을 가질 수 있는 것. (screen 을 갖는 것)

****

<BR/>

<BR/>

****

****

<BR/>

# Question 99: 

## Which selection screen elements allow user input in ABAP Reports?

ABAP REPORTS 에서 USER INPUT 을 가능하게 해주는 SELECTION SCREEN ELEMENT 는 무엇인가?

#### 2 correct 

##### SELECTION-SCREEN COMMENT

## *<u>PARAMETERS</u>*

##### SELECTION-SCREEN BLOCK

## *<u>SELECT-OPTIONS</u>*

<BR/>

<BR/>

****

****

<BR/>

# Question 100: 

## Which of the following is correct?

다중 옳은 것은?

#### Please choose the correct answer.

## *<u>The screen attributes can be modified in the PROCESS BEFORE OUTPUT event block.</u>*

화면 속성들은 PBO EVENT BLOCK 에서 수정될 수 있다.

##### The screen attributes can be modified in the PROCESS AFTER INPUT event block.

화면 속성들은 PAI EVENT BLOCK 에서 처리 될 수 있다.

##### None of the above.

옳은 것이 없다.

##### The screen attributes can be modified in the PROCESS BEFORE OUTPUT and PROCESS AFTER INPUT event blocks.

화면 속성은 PBO 와 PAI EVENT BLOCK 들 에서 수정될 수 있다.

<BR/>

****

PBO 와 PAI 이해
PBO : paramter의 속성을 바꾸고, 적합성을 확인하는 곳.
PAI : user가 화면에서 입력받은 데이터를 처리하는 곳 

****

<BR/>

<BR/>

****

***

<BR/>

# Question 112: 

## Which of the following actions can be performed in the Process After Input (PAI) processing block?

PAI 처리 블록에서 처리될 수 있는 것은?

#### Please choose the correct answer.

##### Set the GUI status of the screen.

##### Check the function code.

##### Set the title bar.

## *<u>Check the function code.</u>*

<BR/>

<BR/>

****

****

<BR/>

# Question 118: 

## Each ABAP program starts with an introductory statement. Which statements are correct? 

각 ABAP PROGRAM 들은 소개 문구로 시작된다.

다음중 옳은 것은?

#### 2 correct 

##### The introductory statement must be the first line in the program.

INTRODUCTORY 구문은 프로그램 첫째 줄에 존재해야한다.(첫째줄에 존재해야할 필요는 없다. 프로그램 생성시 첫줄에는 주석들이 들어가 있는 것을 볼 수 있다.)

## *<u>The introductory statement can be modified.</u>* 

INTRODUCTORY 구문은 수정될 수 있다. **(수정할 수 있다.)**

##### The introductory statement must never be modified.

INTRODUCTORY 구문은 수정되어서는 안된다.

## *<u>The introductory statement must be the first statement in the program.</u>* 

INTRODUCTORY 구문은 프로그램의 첫 구문이어야한다.**(INTRODUCTORY 구문들은 구문들 중에서는 제일 먼저 나온다.)**

<BR/>

****

#### introductory statements for programs :

- REPORT
- PROGRAM
- FUNCTION-POOL
- CLASS-POOL
- INTERFACE-POOL
- TYPE-POOL

https://help.sap.com/doc/abapdocu_751_index_htm/7.51/en-US/abenabap_program_statement.htm

****

<BR/>

<BR/>

****

****

<BR/>

# Question 119: 

## In which sequence are the following ABAP Events triggered?

ABAP EVENT 가 실행되는 순서는?

#### Please choose the correct answer.

##### START-OF-SELECTION => AT SELECTION-SCREEN => INITIALIZATION

##### INITIALIZATION => START-OF-SELECTION => AT SELECTION-SCREEN

## *<u>INITIALIZATION => AT SELECTION-SCREEN => START-OF-SELECTION</u>*

##### AT SELECTION-SCREEN => INITIALIZATION => START-OF-SELECTION

<BR/>

****

LOAD-OF-PAGE -> ***<u>INITIALIZATION</u>*** -> AT SELECTION-SCREEN OUTPUT -> ***<u>AT SELECTION-SCREEN</u>*** [ON] [VALUE-REQUEST FOR] -> ***<u>START-OF-SELECTION</u>*** -> TOP-OF-PAGE -> END-OF-SELECTION

****

<BR/>

<BR/>

****

****

<BR/>

# Question 131: 

## Which statements about ABAP are true?

ABAP 에 대한 설명중 옳은 것은?

#### Please choose the correct answer.

##### Each statement cannot begin with a keyword.

##### Each statement must begin with a keyword.

## *<u>Each statement must end with a period.</u>*

##### ABAP keywords and additions must be in uppercase.

<BR/>

****

****

<BR/>





















***

*****

****

# DEBUGGER

# Q22.(skip)

## When starting the Debugger, what circumstance causes the runtime error DEBUGGING_NOT_POSSIBLE?

디버깅을 시작할때 DEBUGGING_NOT_POSSIBLE 런타임 오류가 발생하는 상황은 무엇인가?

#### Please choose the correct answer.

##### When more than six sessions are already associated with this login user

로그인된 사용자로 6개 이상의 세션이 이미 연결되어있는경우

##### When more than five sessions are already associated with this login user

로그인된 사용자로 5개 이상의 세션이 이미 연결되어있는경우

## *<u>Starting a non-exclusive mode in a productive system</u>*

productive system에서 NON-EXCLUSIVE 시작

##### When the number of debugging sessions on the server exceeds the value defined by the profile parameter rdisp/wpdbug_max_no

서버의 디버깅 세션 수가 프로파일 매개 변수 rdisp/wpdbug_max_no에 의해 정의된 값을 초과하는 경우

<BR/>

<BR/>

****

****

<BR/>

# Q36.

## How many work areas are available in the Debugger?

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

****

****

<br/>

# Q38.

## Which of the following can you do with the ABAP debugger?

다음중 ABAP DEBUGGER 로 할 수 있는 것은?

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

<BR/>

****

****

<BR/>

# Question 98: 

## Which of the following values are replaceable in debugger mode?

DEBUGGER MODE 에서 대체 가능한 값은 무엇인가?

#### Please choose the correct answer.

##### Constants

##### Field names

## *<u>Variables</u>*

##### Table names

<BR/>

<BR/>

****

****

<BR/>

# Question 124: 

## Under which circumstances will the classic Debugger start as the Debugger?

디버거로 CLASSIC 디버거가 실행되는 경우는 무엇인가?

#### 2 correct

## *<u>When five modes already exist for this logon session.</u>*

(logon *session이* 초과되었을 때 실행 : 6번째부터)

이 LOGON SESSION 에 이미 5개의 MODE 들이 존재하는 경우

##### If you manually switched to the classic Debugger during your last session.

이전 SESSION 동안 CLASSIC DEBUGGER 로 전환한 경우

##### When the number of debugging sessions exceeds half the number of dialog sessions.

DEBUGGING SESSION 수가 DIALOG SESSION 수의 절반을 초과한 경우

## <u>*When you specify the default as the classic Debugger in the settings of the Object Navigator.*</u> 

(debugging 모드를 classic 으로 셋팅하면 가능하다)

OBJECT NAVIGATOR 의 설정에서 CLASSIC DEBUGGER 를 기본으로 설정한 경우

##### None; the new Debugger will always start as the Debugger.

그런 경우는 존재 할 수 없다. NEW DEBUGGER 가 항상 DEBUGGER 로 실행된다.

<BR/>

****

****

<BR/>

























****

****

****

# Modularization

# Q18.

## Which objects are automatically created when you create a new function group?

새로운 FUNCTION GROUP 을 생성할 시 자동으로 생성되는 OBJECT 는?

#### Please choose the correct answer.

## *<u>A function pool and two include programs</u>*

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

****

****

<BR/>

# Q34.

## You can use the logical expression IS SUPPLIED for any formal parameter passed to which modularization unit?

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

****

****

<BR/>

# Q74.

## What are the advantages of modularization?

MODUL 화의 장점은?

#### 3 correct

## *<u>Transparency</u>*

Performance

## *<u>Maintainability</u>*

Profitability across DBMS

## *<u>Reusability</u>*

<BR/>

****

모듈화의 장점은 

* TRANSPARENCY 투명성

* MAINTAINABILITY 유지보수성

* REUSABILITY 재사용성

모듈화 : class, function, subroutine 
profitability across DBMS : DB에 접속 독립성 => 모듈화와 무관

****

<BR/>

<BR/>

****

****

<BR/>

# Question 111: 

## What must before you can create a new transportable function modules?

TRANSPORTABLE FUNCTION MODULE 을 생성하기 위해 해야하는 것은?

#### 3 correct 

##### Exception class

## *<u>Function group</u>*

## *<u>Package</u>*

## *<u>Transport request</u>*

##### Module pool

<BR/>

****

function module 의 CDS 처리 선행 내용.

****

<BR/>

<BR/>

****

****

<BR/>

































****

****

****

# SAP LUW

# Q2.

## The update function modules. Which statement can be used to discard all update requests for the current SAP LUW?

##### 현 SAP LUW 의 모든 UPDATE 요청을 취소하는데 사용할 수 있는 구문은?

#### 2 correct

##### MESSAGE exxx(nnn).

## <u>*ROLLBACK WORK.*</u>

##### EXIT.

##### DELETE UPDATE.

## <u>*MESSAGE axxx(nnn).*</u>

<BR/>

****

LUW는 DIALOG 에서 UPDATE INSERT DELETE 등의 수정을 한 내역을 LOGDATA에 저장하고, UPDATE PROCESS 를 거쳐서 수정할 내역을 GROUPING 하여 DB 프로세스에 저장하는 개념이다.

즉 위 문제에서는 ROLLBACK 처리를 할 수 있는 방법에 대해 묻는 문제로

해당 방법에는

* **MESSAGE A TYPE (DB ROLLBACK / 프로그램 종료)**
* **ROLLBACK WORK (DB ROLLBACK / 프로그램은 실행 유지)**

두가지 방법이 있다.

****

<br/><br/>

****

****

<br/>











****

****

****

# SCREEN

# Q13.

## You build a dialog screen with an input field in an ABAP program.

#### 당신은 ABAP PROGRAM 에서 INPUT FIELD 를 가진 DIALOG SCREEN 을 생성합니다.

## How do you ensure that the contents of the screen field can be accessed in the program?

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

## <u>*Define a data object in the program with the same name as*</u>

## *<u>the screen field</u>*

    프로그램에서 화면 필드와 이름이 같은 데이터 개체 정의

<BR/>

****

screen 의 input field 와 프로그램의 변수 연동 방법 

<u>***변수명과 field 명을 동일***</u>하게 맞추면 자동 연동 됨.    

****

<BR/>

<BR/>

****

****

<BR/>

# Q23.

## Which statement will interrupt the processing of the current screen and branch to new screen?

다음중 현 SCREEN 의 프로세스를 일시 정지 시키고 새로운 SCREEN 으로 분기 될 구문은 무엇인가?

#### Please choose the correct answer.

## *<u>CALL SCREEN \<NNNN></u>*

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

****

****

<BR/>





















****

****

***

# ALV GRID

# Q11.

## You write a report that displays mass data in a table. You decide to use the ALV Grid control (class CL_GUI_ALV_GRID) instead of a classical list display with WRITE statements.

당신은 테이블에 대량의 데이터를 디스플레이하는 report 를 작성할 수 있습니다. 당신은 WRITE 문을 사용한 CLASSICAL LIST 대신 ALV GRID CONTROL(CL_GUI_ALV_GRID) 를 사용하기로 결정하였습니다.

## Which of the following functions can you offer to the user without doing any specific programming

별도의 프로그래밍을 거치지 않고 사용자에게 제공할 수 있는 기능은 무엇인가?

#### 2 correct

## <u>*Change column width and sequence*</u>

    열 너비 및 순서 변경

##### Convert currency amount columns

통화, 액수 COLUMN들의  변환

## <u>*Sort and filter the data by any column*</u>

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

# Q25.

## Which does the field catalog allow you to do?

FIELD CATALOG 의 기능은?

#### 3 correct

## *<u>Add a field to the display</u>*

    DISPLAY 할 FIELD 추가

## *<u>Change the display order of a column</u>*

    COLUMN 의 DIPLAY 순서 변경

##### Specify the sort order of the display table

DISPLAY 되는 TABLE의 정렬 순서 지정

## *<u>Change the title of a column</u>*

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

****

****

<BR/>















****

*****

*****

# OOP

# Q26.

## You Created the following ABAP Code:

```abap
DATA x TYPE REF TO DATA
DATA y TYPE REF TO OBJECT
ASSIGN x TO <fs>
ASSIGN y TO <fs>
```

## You want to add a declaration of \<fs> to the Code.

당신은 FIELD-SYBOL \<fs> 의 선언문을 코드에 추가하기를 원한다.

## Which of the Following Declarations are Valid?

다음중 유효한 선언문은 무엇인가?

#### 2 correct

## *<u>FIELD-SYMBOLS \<fs> TYPE ANY</u>*

##### FIELD-SYMBOLS \<fs> TYPE REF TO ANY

## *<u>FIELD-SYMBOLS \<fs></u>*

##### FIELD-SYMBOLS TYPE REF TO DATA

<br/>

****

Field-symbols : 특정 변수로 point 할 수 있는 변수.
X와 Y의 Type 이 다르기 때문(DATA type과 Object type)에 두가지를 모두 받을 수 있는 Any로 type 설정. 지정 하지 않은 경우 default 가 Type ANY.

****

<BR/>

<BR/>

****

****

<BR/>

# Q31.

## You add the CREATE PROTECTED addition to a class definition.

class 정의에 CREATE PROTECTED 를 추가한다.

## From where you can instantiate the class?

어떤 클래스에서 인스턴스화 할 수 있는가?

#### 3 correct

## *<u>From the class itself</u>*

##### From any protected class

## *<u>From a friend class</u>*

## *<u>From a child class</u>*

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

****

****

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

****

****

<BR/>

# Q54. (Skip)

## Which of the following are valid combinations of event visibility and handler method visibility?

다음중 이벤트의 VISIBILITY 와 HANDLER METHOD 의 VISIBILITY 의 유효한 조합은 무엇인가?

#### 2 correct

##### Private event and public handler

##### Protected event and public handler

## *<u>Public event and protected handler</u>*

## *<u>Private event and private handler</u>*

<BR/>

<BR/>

****

****

<BR/>

# Q54. (Skip) 

## Which of the following are valid combinations of event visibility and handler method visibility?

다음중 이벤트의 VISIBILITY 와 HANDLER METHOD 의 VISIBILITY 의 유효한 조합은 무엇인가?

#### 2 correct

##### Private event and public handler

##### Protected event and public handler

## *<u>Public event and protected handler</u>*

## *<u>Private event and private handler</u>*

<BR/>

<BR/>

****

****

<BR/>

# Q62.

## You have 2 objects:

## O1 of type class C1 and O2 of type class C2.

## Class C2 is a subclass of class C1. Which of the following statements implements an upcast?

CLASS C2 는 C1 의 SUBCLASS 이다. 다음중 UPCAST 를 구현한 구문은?

#### Please choose the correct answer.

##### MOVE O1 TO O2.

##### MOVE O1 ?TO O2.

## *<u>O1 = O2.</u>*

##### O2 ?= O1 (downcast).

<BR/>

****

O2 : subclass , O2 => O1 이 되어야 upcast, O1 =>  O2 는 downcast,
Move A to B : A => B
B = A : A => B

****

<BR/>

<BR/>

****

****

<BR/>

# Q68.

## What is unique about a singleton?

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

<BR/>

****

****

<BR/>

# Q70.

## How would you define a method of an ABAP class to prevent this method from being available in a subclass?

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

<BR/>

****

****

<BR/>

# Q72.

## Which components of the class can be accessed in the implementation of a static method in that class?

어떤 COMPONENT 들이 해당 클래스의 STATIC METHOD 의 IMPLEMENTATION 에 접근할 수 있는가?

#### 2 correct

Instance attributes

## *<u>Types</u>*

All events

## *<u>Constants</u>*

<BR/>

****

static method에서 접근 할 수 있는 것. : static attribute , Types, constants

****

<BR/>

<BR/>

****

****

<BR/>

# Q82. 

## Which statement is used to generically define the data reference variable z1?

일반적으로 데이터 REFERENCE VARIABLE Z1 을 정의 할때 사용되는 구문은 무엇인가?

#### Please choose the correct answer. 

##### data z1 type any

##### data z1 type ref to PA0001

## *<u>data z1 type ref to data</u>*

##### data z1 type any table

#### <BR/>

****

generic : 어떤 데이터 type도 가리킬 수 있는 형태 
data z1 type ref of data
any 와 data는 동일한 기능을 갖고 있지만, any는 ref to 에 대하여 지원하지 않음.
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

****

<BR/>

<BR/>

****

****

<BR/>

# Q88. 

## What is unique about a functional method? 

FUNCTION METHOD 에 대한 설명으로 옳은 것은?

#### 5 correct 

## *<u>It can contain an importing parameter.</u>*

IMPORTING PARAMETER 를 가질 수 있다.

## *<u>It can contain an exporting parameter.</u>*

exporting parameter 를 가질 수 있다.

##### It can be used in SELECT statements.

SELECT 구문에서 사용될 수 있다.

## *<u>It must contain a returning parameter.</u>*

returning parameter 를 가질 수 있다.

##### It must be a singleton.

SINGLETON 이어야한다.

## *<u>It can contain a changing parameter.</u>*

changing parameter 를 가질 수 있다.

## *<u>It can be used in logical expressions.</u>*

논리 연산에서 사용될 수 있다.

<BR/>

****

functional method : 

* method 의 parameter 중 retuning parameter를 가지고 있는 method. 

* open sql에서 사용할 수 없다. 
* logical expressions 에서는 사용 가능 ( a = b + zcl_abcd.f_method(ab))

****

<BR/>

<BR/>

****

****

<BR/>

# Question 97: 

## What must you do to create a singleton class?

SINGLETON CLASS 를 생성하기 위해 해야하는 것은?

#### 3 correct 

##### Implement the IF_UMM_SINGLETON interface in the class

클래스에 IF_UMM_SINGLETON 인터페이스 구현

## *<u>Define the class as final</u>*

클래스를 FINAL로 정의합니다.

## *<u>Set the class instantiation to private</u>*

클래스 인스턴스화를 PRIVATE 으로 설정합니다.

##### Define the class as abstract

클래스 추상화

## *<u>Instantiate the class in a static method of the class itself</u>*

클래스 자체의 정적 메서드로 클래스 인스턴스화

<BR/>

<BR/>

****

****

<BR/>

# Question 117: 

## Which of the following rules must you follow when you create a static constructor?

다음 RULE 들 중 STATIC CONSTRUCTOR 생성시 따라야 하는 것은?

#### 3 correct 

## *<u>You can ONLY define static constructors in the public section</u>*

PUBLIC SECTION 만 STATIC CONSTRUCTOR를 정의 할 수 있다.

## *<u>You must name the method CLASS_CONSTRUCTOR</u>*

METHOD 이름을 CLASS_CONSTRUCTOR 라고 하여야 한다.

##### You must name the method CONSTRUCTOR (X)

METHOD 명을 CONSTRUCTOR 라고 하여야한다.

## *<u>You CANNOT use parameters or exceptions</u>*

PARAMETER 나 EXCEPTION 을 사용할 수 없다.

##### You can use ONLY importing parameters or exceptions (instance constructor)

IMPORTING PARAMETER 와 EXCEPTION 만 가질 수 있따.

<BR/>

****

#### STATIC CONSTRUCTOR 특징

* 모든 클래스는 CLASS_CONSTRUCTOR 라는 STATIC CONSTRUCTOR 를 가지고 있다.

* PUBLIC SECTION에서만 정의 가능하다.

* 파라미터 인터페이스를 가질 수 없다.

* 클래스가 사용되기 이전에 자동으로 호출된다.

  

https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=aaaa123krkr&logNo=220760302480

****

<BR/>

<BR/>

****

****

<BR/>

# Question 128: 

## What is the predefined reference variable used in ABAP OOP to address the object itself?

OBJECT 자기 자신을 가르키는 ABAP OOP 에서 사용되는 PREDEFINED REFERENCE VARIABLE 은 무엇인가?

#### Please choose the correct answer.

## *<u>ME</u>*

##### SELF

##### THIS

##### SUPER

<BR/>

****

OOP에서 자기 자신 호출 

****

<BR/>

****

****

<BR/>

# Question 129:

## What can be part of the signature of an instance constructor?

INSTANCE CONSTRUCTOR 의 SIGNATURE 가 포함할 수 있는 것은?

#### 2 correct 

## *<u>Exceptions</u>*

## *<u>Import parameters</u>*

##### Changing parameters

##### Export parameters

<BR/>

****

class contructor 는 아무것도 없어야 한다.

****

<BR/>

****

****

<BR/>

















****

****

****

# 권한

# Q28.

## When you add programming logic to your ABAP program that checks authorizations, which of the following do you have to create?

ABAP PROGRAM 에 권한 부여를 확인하는 LOGIC을 추가할때 다음중 생성해야하는 것은?

#### 2 correct

## *<u>An authorization object</u>*

##### An authorization Access

## *<u>An authorization role</u>*

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

****

****

<br/>

# Q30.

## What happens when an authorization check fails?

권한 체크에 실패한 경우 어떤일이 발생하는가?

#### Please choose the correct answer.

## *<u>The system field SY-SUBRC is set to a value other than zero.</u>*

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

****

****

<BR/>























****

****

****

# ENHANCEMENT

# Q3.

## Which of the following statements are correct?

##### 다음중 옳은 것은?

#### 3 correct

## *<u>An enhancement spot can contain either an explicit enhancement point and enhancemnet section or a new BAdI.</u>*

Enhancement spot 에는 Explicit enhancement point 또는 enhancement section 또는 새로운 BAdI가 포함 될 수 있으나 세가지 모두를 포함할 수는 없다.

## *<u>An enhancement spot can contain one or more simple or composite enhancements.</u>*

Enhancement spot 은 하나 이상의 simple 또는 composite enhancement 를 포함 할 수 있다.

##### An enhancement spot can contain an explicit enhancement point, explicit enhancement section, and new BAdI.

Enhancement spot 은 explicit enhancement point 와 explicit enhancement section 그리고 새로운 BAdI 가 포함 될 수 있다.

**<u>*(Spot 에는 enhancement point 와 enhancement section은 같이 넣을 수 있지만 new BAdIs는 함께 넣을 수 없다.)*</u>**

## *<u>An enhancement spot can contain an explicit enhancement point and an enhancement section.</u>*

Enhancement spot 은 explicit enhancement point 와 enhancement section 을 포함 할 수 있다.

##### STD 의 Enhancement 관련 질문

<br/><br/>

****

****

<br/>

# Q9.

## How would you find out if an application program offers a program exit?

#### Application program 이 program exit 을 제공하는지 어떻게 알 수 있는가?

#### Select all the correct answers

## <u>*Use the Repository Information System*</u>

    Repositorty Information System 을 사용

## <u>*Search for the character string CUSTOMER-FUNCTION*</u>

    "CUSTOMER-FUNCTION" 문자열을 검색한다.

## <u>*Look for a customer exit in the SAP reference IMG within an application area*</u>

    Application 영역 내의 SAP 참조 IMG에서 customer exit 을 찾는다.

##### Use the Application Hierarchy

    Application Hierarchy 사용

<br/>

****

**enhancement 여부 확인 방법**

* **<u>*Repository Information System(SE84)*</u>** > Enhancement > customer exit or enhancement

* **<u>*CUSTOMER-FUNCTION*</u>**, **<u>*CL_EXITHANDLER*</u>** 문자열 검색

* **<u>*SAP reference IMG*</u>** 에서 검색

* **<u>*TADIR / MODSAPT*</u>** 테이블 조회

Application Hierarchy 에서는 찾을 수 없다.

****

<br/>

<br/>

****

****

<br/>

# Q19.

## What are the prerequisites when creating an append structure for a standard SAP table?

STANDARD SAP TABLE 에 APPEND STRUCTURE 기능으로 필드를 추가할 때 선행되야할 요구사항은 무엇인가?

#### 2 correct

## *<u>The enhancement category of the table is NOT set to</u>*

## *<u>‘Not enhaceable’ (can not be enhanced)</u>*

    Enhancement 카테고리가 'Not enhanceable' 로 설정되어있지 않아야 한다.

##### The table cannot have any fields of type FLTP

테이블은 FLTP 타입의 어떠한 필드도 가질 수 없다. 

##### The table must be copied before the append structure can be created

APPEND STRUCTURE 생성이 가능하기 전에 테이블이 복사 되어야 한다. 

## *<u>The fields in the append structure should start with</u>*

## *<u>YY or ZZ</u>*

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

****

****

<BR/>

# Q20.

## You want to define two database tables with different structures. Both tables should contain the fields CHANGE_DATE and CHANGE_TIME.

당신은 다른 STRUCTURE 로 두개의 DB TABLE을 정의하고자 한다. 두 테이블 모두 CHANGE_DATE 와 CHANGE_TIME FIELD 를 포함 하여야한다.

### How do you implement this in order to minimize the maintenance effort?

#### 어떻게 구현하여야 유지보수 작업을 최소화 시킬 수 있겠는가?

#### Please choose the correct answer.

##### Define an append structure with these two fields and assign this append structure to both database tables.

두개의 필드로 APPEND STRUCTRE 를 정의한 후 해당 DB TABLE 모두에 배치

## *<u>Define a structure with these two fields and include this</u>*

## <u>*structure in both database tables.*</u>

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

****

****

<BR/>

# Q43.

## What does the enhancement category for a database table or structure do?

DB TABLE 이나 STRUCTURE 에 대한 ENHANCEMENT CATEGORY 가 하는 것은 무엇인가?

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

<BR/>

<BR/>

****

****

<BR/>

# Q44.

## Which of the following must you do to be able to use a Business Add-in(BAdI)?

BADi를 사용하기 위해 해야할 것은 무엇인가?

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

<BR/>

****

****

<BR/>

# Q48.

## You want to add a field ZZPRICE to the SAP standard transparent table EKKO.

당신은 ZZPRICE 필드를 SAP STANDARD TRANSPARENT TABLE EKKO 에 추가하기를 원한다.

## Which of the following actions result in an enhancement of the SAP standard?

다음 행동중 SAP STANDARD 의 ENHANCEMENT 에대한

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

<BR/>

****

****

<BR/>

# Q53.

## The statements CALL BADI and GET BADI are used for which type of BAdIs?

CALL BAdI 와 GET BAdI 구문은 어느 타입의 BAdI 를 위해 사용되는가?

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

<BR/>

****

****

<BR/>

# Q59.

## What is the SAP recommended naming convention for append structures of standard SAP tables?

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

<BR/>

****

****

<BR/>

# Q63.

## Which of the following is a true statement?

다음중 옳은 것은?

#### 2 correct 

## *<u>An access key is required to enhance an SAP application using a user exit.</u>*

USER EXIT 을 사용하여 SAP APPLICATION 을 ENHANCE 하려면 ACCESS KEY 가 필요하다.

##### An access key is required to implement an implicit enhancement point. (언제든지)

ACCESS KEY 는 IMPLICIT ENHANCEMENT POINT 를 구현하기 위해 필요하다.

##### An access key is required to implement business add-ins.

BAdI 를 구현하기 위해 ACCESS KEY 가 필요하다.

## *<u>An access key is required to modify SAP repository objects.</u>*

SAP REPOSITORY OBJECT 를 수정하기 위해 ACCESS KEY 가 필요하다.

<BR/>

****

access key : SAP standard modification, User Exit.

****

<BR/>

<BR/>

****

****

<BR/>

# Q71.

### A structure has enhancement category 3, can be enhanced (character-type).

STRUCTURE 은 ENHANCE 될 수 있는 3가지 ENHANCEMENT CATEGORY가 있다.다.

### Which set of elementary types is allowed for the new fields?

다음중 새로운 FIELD에 허용되는 ELEMENT TYPE 들만 모아 놓은 것은 무엇인가?

#### Please choose the correct answer.

C,D,N,X
D,I,string, T

## *<u>C,D,N,T</u>*

F,I,P,X

<BR/>

****

Clike : CNDT and string
csequence : c and string
string이 안되는 이유 : enhancement 옵션이 deep 이 되어야 한다.  (여기서는 character-type 옵션이므로)

#### ENHANCEMENT CATEGORYS

1. Can be Enhanced(deep) - we can enhance this table/structure with a deep structure, reference fields or any other valid field types.

2. Can be Enhanced (Character-Type or Numeric) - we can enhance the tables/structure with fields that are strictly character or numeric types eg: C,N,D,T,I etc.

3. Can be Enhanced (Character Type) - can be enhanced by only including character type fields

4. Cannot Be Enhanced - Restricting Enhancement of the table/structure post creation.

****

<BR/>

<BR/>

****

****

<BR/>

# Q78.

## What types of changes to the repository does SAP provide?

SAP 는 REPOSITORY 변환하는데 있어 어떤 유형들을 제공하는가?

#### 3 correct

## *<u>SAP Notes</u>*

##### Deployments from SDN.SAP.COM

##### Transports

## *<u>Support Packages</u>*

## *<u>Enhancement Packages</u>*

<BR/>

****

SAP Notes : bugs patch. 
STD를 변경할 때 제공되는 것 : 

* SAP Notes

* Support package(SAP Notes의 집합)

* Enhancement Packages

* 추가로 upgrade version.

****

<BR/>

<BR/>

****

****

<BR/>

# Question 104: 

## Which of the following enhancements calls a customer function module.

다음중 CUSTOMER FUNCTION MODULE 을 호출 하는 ENHANCEMENT 들을 고르시오.

#### 2 correct 

## *<u>Customer exit</u>*

## *<u>Business Transaction event</u>*

##### User exit

##### Business Add-in (BADIs)

<BR/>

****

User exit : subroutine
BAdIS : class method.

****

<BR/>

<BR/>

****

****

<BR/>

# Question 105: 

## How can you find customer exits in an ABAP program?

ABAP PROGRAM 에서 CUSTOMER EXIT들을 어떻게 찾을 수 있는가?

#### 2 correct 

##### Search for ‘CL_EXTHANDLER’ in the program.

CL_EXTHANDLER 를 검색

## *<u>Search for customer exits in the Repository Information System</u>*

REPOSITORY INFORMATION SYSTEM 에서 CUSTOMER EXIT 을 검색

## *<u>Search for ‘CALL CUSTOMER’ in the program</u>*

CALL CUSTOMER 을 검색

##### Search for customer exits in the program documentation

프로그램 문서에서 CUSTOMER EXITS 검색

<BR/>

****

CL_EXTHANDLER: BAdIs
IMG document 에서 CUSTOMER EXIT 검색

**enhancement 여부 확인 방법**

* **<u>*Repository Information System(SE84)*</u>** > Enhancement > customer exit or enhancement
* **<u>*CUSTOMER-FUNCTION*</u>** 문자열 검색
* **<u>*CL_EXITHANDLER*</u>** 문자열 검색
* **<u>*SAP reference IMG*</u>** 에서 검색
* **<u>*TADIR / MODSAPT*</u>** 테이블 조회

Application Hierarchy 에서는 찾을 수 없다.

****

<BR/>

<br/>

****

****

<BR/>

# Question 110: 

## can you search for suitable classic Business Add-Ins(BAdIs)?

적합한 CLASSIC BAdIS 검색할 수 있는가? 

#### 2 correct 

##### Search in the Repository Information System and choose Enhancements=>Customer Exits 

Repository Information System에서 검색하여 Enhancements=>Customer Exits를 선택합니다. 

## *<u>Search for suitable entries in the relevant component in the Implementation Guide (IMG)</u>*

실행 지침서(IMG)에서 관련 구성 요소에서 적합한 항목 검색

## *<u>Search in an application program for the method GET_INSTANCE of class CL_EXITHANDLER</u>*

응용 프로그램에서 클래스 CL_EX의 GET_INSTANCE 메서드를 검색합니다.IT 핸들러

##### Use the SAP menu Tools -> ABAP Workbench -> Development -> Business Object Builder

SAP MENU TOOLS  -> ABAP Workbench -> Development -> Business Object Builder 사용

<BR/>

<br/>

****

****

<BR/>

# Question 122: 

## You want to use a BAdI to extend the functions of an SAP program. Which of the following tasks is necessary?

당신은 SAP 프로그램의 함수를 확장하기 위해 BAdI를 사용하기를 원한다. 다음중 필수인 것은?

#### Please choose the correct answer.

##### Call the BAdI

BAdI 호출

##### Create an enhancement project using a customer exit.

CUSTOMER EXIT 를 사용하여 ENHANCEMENT 프로젝트 생성

##### Define an interface for the BAdI.

BAdI 를 위한 INTERFACE 정의

## *<u>Implement a class that implements the BAdI interface.</u>*

BAdI INTERFACE 를 구현하는 CLASS 구현

<BR/>

****

CL_EXITHANDLER 통해 class 를 구현

****

<BR/>

****

****

<BR/>

# Question 133: 

### SAP enhancements for customer exits are managed by which transaction?

CUSTOMER EXIT 을 위한 SAP ENHANCEMENT 는 어느 TRANSACTION에서 관리 되는가? 

#### Please choose the correct answer.

## *<u>Transaction SMOD</u>*

##### Application CMOD

##### Transaction CMOD

##### Neither transaction listed here

<BR/>

*****

CMOD 는 프로젝트
SMOD 는 정의 관리(조회 등)

*****

<BR/>

*****

****

<BR/>































****

****

****

# WEB DYNPRO

# Q1.

## In which controller type can you embed a service call?

#### 서비스 호출을 포함할 수 있는 컨트롤러 유형은 무엇입니까?

#### 1correct

##### Configuration controller

## ***<u>Component controller</u>***

##### Interface controller

##### View controller

<BR/>

****

Service calls can only always be embedded in global controllers, that is, in the component controller or in additionally created custom controllers. 

서비스 호출은 항상 글로벌 컨트롤러, 즉 ***<u>Component controller</u>*** 또는 추가로 생성된 사용자 지정 컨트롤러에만 포함될 수 있습니다.

It is not possible, on the other hand, to embed service calls in view controllers.

반면에 View controller에 서비스 호출을 내장하는 것은 불가능하다.

****

<br/>

<BR/>

****

****

<br/>

# Q17.???????????? WEB DYN 공부 다시

## What process is used to establish the automatic transport of data between the view controller's context-attributes and the UI element in its layout?

VIEW CONTROLLER 의 CONTEXT-ATTRIBUTE 와 그것의 LAYOUT 에서의 UI ELEMENT 사이의 데이터 자동 전송을 설정하는 프로세스는 무엇인가?

#### Please choose the correct answer.

##### View assembly

##### Context mapping

##### Data migration

## *<u>Data binding</u>*

<BR/>

****

WEB Dynpro에서 
Data binding  : view controller 와 UI element 의 연결(화면과 데이터 연결)
context mapping : context 간 연결 (component controllers and view controllers)

****

<BR/>

<BR/>

****

****

<BR/>

# Q27.

## Which hook method exists for all controller types?

다음 HOOK METHOD 중 모든 CONTROLLER TYPE 에서 존재하는 것은?

#### Please choose the correct answer.

##### wddoonopen( )  -- window

##### wddoonclose( ) – window

## *<u>wddoinit( )</u>*

## wddobeforenavigation( )  -- component

<BR/>

****

WEB Dynpro 의 controller 종류
: component, window, view, custom, configuration controller
모두 가지고 있는 hook method : wddoinit( ), wddoexit( )

![Q27_1.jpg](C:/Users/jihoon/TIL/SAP Certi/IMG/Q27_1.jpg)
![Q27_2.jpg](C:/Users/jihoon/TIL/SAP Certi/IMG/Q27_2.jpg)
![Q27_3.jpg](C:/Users/jihoon/TIL/SAP Certi/IMG/Q27_3.jpg)

****

<BR/>

<BR/>

****

****

<BR/>

# Q32.

## What is data binding?

DATA BINDING 이란 무엇인가?

#### Please choose the correct answer.

##### Connecting an outbound plug on one view to the inbound plug of another view

하나의 VIEW 에 있는 OUTBOUND PLUG 를 다른 VIEW 의 INBOUND PLUG 에 연결

## *<u>Connecting the values of user interface</u>*

## *<u>elements to the context attributes of</u>*

## *<u>the corresponding controller</u>*

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

# Q58.

## Which controller types can exist within a Web Dynpro component?

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

<BR/>

****

****

<BR/>

# Q73.

## What does a Web Dynpro component contain?

WEB DYNPRO COMPONENT 가 포함하는 것은?

#### 3 correct

## *<u>Multiple views within a window</u>*

 A context

## *<u>Component controller</u>*

UI elements

## *<u>Exactly one interface controller</u>*

<BR/>

****

[Web Dynpro 개념 정리 : 네이버 블로그](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=megabzr&logNo=220342641347)

context : 각 controller 마다 모두 존재.
UI element : View controller에 존재.
interface controller , component controller : 무조건 하나

A CONTEXT 라고 되어있어서 틀린것으로 보임

****

<BR/>

<BR/>

****

****

<BR/>

# Q77.

## Each component has an interface; of what does this interface consist?

각 component 는 interface 를 가지고 있다. 이 interface 들은 무엇으로 구성되어있는가?

#### 2 correct

## *<u>Interface controller</u>*

##### Data Container

## *<u>Interface view</u>*

##### Interface context

<br/>

****

Web dynpro 가 가지고 있는 것 : Interface controller, interface view.

****

<br/>

<BR/>

****

****

<BR/>

# Q79.

## Which of the following are features of the Context in Web Dynpro?

다음중 WEB DYNPRO 의 CONTEXT 특징은 무엇인가?

#### 2 correct 

##### Every Web Dynpro controller has multiple Contexts

모든 WEB DYNPRO CONTROLLER 는 여러 CONTEXT 들을 가지고 있다.

## *<u>Every Web Dynpro controller has one Context</u>*

모든 WEB DYNPRO CONTROLLER 들은 하나의 CONTEXT 를 가지고 있다.

## *<u>Data is shared between controllers through Context mapping</u>*

DATA 는 CONTEXT MAPPING 을 통해 CONTROLLER들 사이에서 공유된다.

##### Data is transferred from one Context to another by firing plugs

DATA 는 FIREING PLUG 방식으로 하나의 CONTEXT 로 부터 다른 CONTEXT 로 이동된다.

<BR/>

****

Context는 각 controller 별로 한 개씩 갖는다.
context mapping : context 간 Data sharing or Data Transferring.
firing plugs : 각 view(화면)간 이동을 위해 필요한 것.

****

<BR/>

<BR/>

****

****

<BR/>

# Q80.

## To which context object is the attribute LEAD_SELECTION_INDEX related?

LEAD_SELECTION_INDEX 속성과 관련된 CONTEXT OBJECT 는?

#### Please choose the correct answer.

##### Element

## *<u>Node</u>*

##### Attribute

##### Supply function

<BR/>

****

Web dynpro : LEAD_SELECTION_INDEX => Node (화면에서 선택한 라인정보)
화면은 data binding에 의해서 context와 연결되어 있음.

****

<BR/>

<BR/>

****

****

<BR/>

# Q89. 

## Identify the types of layout managers. 

LAYOUT MANAGER 의 TYPE들을 고르시오

#### 4 correct 

##### ColumnLayout

## *<u>FlowLayout</u>*

##### TreeLayout

## *<u>RowLayout</u>*

## *<u>GridLayout</u>*

## *<u>MatrixLayout</u>*

<br/>

****

Web Dynpro : layout manager 가 화면 구성을 처리 

* flowlayout
* rowlayout
* gridlayout
* formlayout
* matrixlayout

****

<br/>

<BR/>

****

****

<br/>

# Q91. 

## You want to include an element of type ‘Table’ in your web dynpro.

당신은 WEB DYNPRO 에 TABLE 타입의 ELEMENT 를 추가하고싶다.

## What actions add the corresponding columns to the table automatically?

자동으로 테이블에 관련된 COLUMN 들을 추가하는 방법을 고르시오

#### Please choose the correct answer.

## *<u>Right click the table and select the ‘CREATE_BINDING’ option</u>*

##### Include the method BIND_TABLE of IF_WD_CONTEXT_NODE.

##### Bind the table attribute ‘DATA_SOURCE’ to the context node

##### Generate a ‘BIND_TABLE’ method using the web dynpro method wizard.

<BR/>

****

[TABLE 넣는 방법](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=aaaa123krkr&logNo=220782696432)

****

<BR/>

<BR/>

****

****

<BR/>

# Question 121: 

### What is the Web Dynpro programming model is based on?

WEB DYNPRO 프로그래밍 모델은 무엇을 기반으로 하는가?

#### Please choose the correct answer.

## *<u>Model View Controller (MVC)</u>*

##### Business Server Pages (BSPs)

##### Internet Transaction Server (ITS)

##### Classic Dynpro programming

<br/>

***

MVC paradigm 을 가지고 개발 (business logic)
view : 화면 layout
controller : 사용자입력 check, 화면 흐름 제어, 데이터 흐름제어 등.

****

<br/>

****

****

<br/>

# Question 127: 

## What does a view do?

#### 4 correct

## *<u>Contains other views</u>*

## *<u>Can be contained in a window</u>*

##### Contains windows

## *<u>If entered by an inbound plug, can cause an event handler method to be called</u>*

## *<u>Contains a view controller</u>*

<BR/>

****

WEB dynpro view : windows contains views
view contains a view controller (다른 view를 포함할 수 있다)

****

<BR/>

****

****

<BR/>























*****

****

****

# SHARED MEMORY

# Q4.

## Which of the following features do you have to consider when you use shared objects?

#### shared object들을 사용할 때 고려해야 하는 기능은 다음 중 무엇입니까?

#### 3 correct

## <u>*Concurrent read accesses are supported*</u>

동시 읽기 액세스가 지원됩니다.

## <u>*Memory bottlenecks result in runtime errors and have to be caught*</u>

메모리 병목 현상이 발생하면 런타임 오류가 발생하므로 이를 파악해야 함

## <u>*Data is saved as attributes of objects*</u>

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

# Q67.

## Which of the following steps are required to set up a shared memory area?

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

<BR/>

****

****

<BR/>



















*****

*****

***

# RFC



# Q5.

## You are writing a function module that will be called from external system via remote function call (RFC). How do you report an error back to the external caller?

당신은 RFC(원격 함수 호출)를 통해 외부 시스템에서 호출되는 함수 모듈을 작성하고 있다. 외부 호출자에게 오류를 보고하려면 어떻게 해야 하는가?

#### 1 correct

##### Write the error data into an EXPORTING parameters passed by reference.

참조로 전달된 EXPORTING parameters에 오류 데이터를 씁니다.

## *<u>Write the error data into a CHANGING parameters passed by value.</u>*

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

<br/>

# Q52.

## When would you call the RFC function module synchronously?

어느경우 RFC FUNCTION MODULE을 동기적으로 호출하는가?

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

<BR/>

****

****

<BR/>









****

****

****

# 기타



# Q10.

## You want to develop a program that processes character type data.

##### 당신은 CHARACTER TYPE 데이터를 처리하는 프로그램을 개발하려 한다.

## When you implement the program, you can either use the classical string statements or the newer strings expressions and functions

##### 프로그램을 구현할 때 클래식 문자열 문을 사용하거나 최신 문자열 표현식 및 함수를 사용할 수 있습니다.

## What are the main benefits of using string expressions and string functions?

##### 문자열 표현식과 함수를 사용하는 주된 이점은 무엇인가?

#### 2 correct

##### You can improve the performance significantly

성능을 크게 향상시킬 수 있다.

## <u>*You can reduce the number of intermediate variables*</u>

    매개변수의 수를 줄일 수 있다.

## <u>*You can write compact syntax instead of a long sequence of*</u>

## <u>*statements*</u>

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

# Q14.

## After which statement will the runtime system initialize the ABAP memory (internal session)

어떤 구문 뒤에 런타임 시스템이 ABAP 메모리를 초기화 하는가?

#### Please choose the correct answer.

##### CALL TRANSACTION

##### SUBMIT… AND RETURN

##### SUBMIT

## *<u>LEAVE TO TRANSACTION</u>*

<BR/>

****

SAP 메모리 공유 시
instance 프로그램에서 LEAVE TO TRANSACTION 문을 호출하면 이전 존재하는 instance를 모두 초기화 시키고 새로운 instance를 생성하여 프로그램을 실행한다.

****

<BR/>

<BR/>

****

****

<BR/>

# Q40.

## Which of the following are valid control level changes within a loop over an internal table?

다음중 ITAB 의 LOOP 에서 유효한 CONTROL LEVEL 변경은 무엇인가?

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

<BR/>

****

****

<BR/>

# Q41.

## When is an ENDSELECT not required for a SELECT?

SELECT 문에서 ENDSELECT 구문이 필요하지 않은 경우는 무엇인가?

#### 3 correct

##### When the FROM is a view

FROM 절에 사용되는 것이 VIEW 일 경우

## *<u>When you specify into a table</u>*

INTO 를 테이블로 지정하는 경우 

## *<u>When you do a SELECT SINGLE</u>*

SELECT SINGLE 을 하는 경우

##### When you specify a join of tables

테이블을 JOIN 하는 경우 

## *<u>When you specify appending a table</u>*

테이블 APPENDING 하는 경우

<BR/>

****

select * into table it from abc.  => 기존 데이터를 지우고 입력
select * appending it from abc. => 기존 데이터에 추가해서 입력

****

<BR/>

<BR/>

****

****

<BR/>

# Q56.

## What can you do with the code inspector?

CODE INSPECTOR 로 할 수 있는 것은?

#### 2 correct

## *<u>Create your own inspections, object sets and check variants</u>*

자체 검사, 개체 세트 및 변형 확인

## *<u>Create an object set to represent the programs and objects to be inspected</u>*

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

<BR/>

****

****

<BR/>

# Q57.

## Which comparison operators can you use in a logical expression related to the WHERE clause of the SELECT statement?

SELECT 문의 WHERE 절과 관련된 논리식에서 사용할 수 있는 비교 연산자는?

#### 3 correct 

## <u>*EQ (equals)*</u>

## <u>*LIKE (fits pattern)*</u>

CP (contains pattern)

– 특정 문자열 pattern 을 가진 문자열

CO (contains only)

– 오직 그 문자를 반드시 포함한 문자열

## *<u>GT (greater than)</u>*

<BR/>

****

CP, CO 는 String function.

****

<BR/>

<BR/>

****

****

<BR/>

# Q61.

## dbtab is a transparent table. What is declared by the following statement? 

## DATA myvar TYPE dbtab.

DBTAB 은 TRANSPARENT TABLE 이다. 다음 문장에 의해 선언되는것은?

#### Please choose the correct answer.

##### An elementary field

## *<u>A structure variable</u>*

##### A reference to an internal table

##### An internal table

<BR/>

<BR/>

****

****

<BR/>

# Q81. 

## You call a lock module Which exceptions could the lock module raise when a logical lock CANNOT be set?

LOCK MODULE 을 호출 하려한다. LOFGICAL LOCK 이 설정될 수 없을때 LOCK MODULE 은 어떤 예외를 띄우는가?

#### 2 correct 

##### CX_SY_OPEN_SQL_ERROR

## *<u>FOREIGN_LOCK</u>*

##### CX_SY_DATA_ACCESS_ERROR

## *<u>SYSTEM_FAILURE</u>*

<BR/>

****

락을 잡으려 하다가 못 잡을 때 발생하는 에러
foreign_lock : 다른 사람이 락을 잡고 있을 때, 발생하는 에러
system_failure : 시스템 상의 다른 이유로 발생하는 에러

****

<BR/>

<BR/>

****

****

<BR/>

# Question 102: 

## Where can you define data types that can be accessed directly by all ABAP repository objects in an SAP system?

SAP SYSTEM 내 모든 ABAP REPOSITORY OBJECT에서 바로 접근 할 수 있는 DATA TYPE 을 정의 할 수 있는 곳은?  

#### 2 correct 

##### In a method

##### In a function module

## *<u>In a global class</u>*

## *<u>In the ABAP dictionary</u>*

<BR/>

****

ABAP 프로그램에서 data type을 직접 접근할 수 있도록 데이터타입을 정의할 수 있는 위치?

****

<BR/>

<BR/>

****

****

<BR/>

# Question 108: 

## You have to overwrite spaces in a string with the letter ‘A’.

당신은 'A' 문자로 된 문자열로 공백들을 덮어써야한다.

## Which of the following statements can you use?

다음주 사용할 수 있는 구문은?

#### 3 correct 

##### CONDENSE

## *<u>OVERLAY</u>*

##### SHIFT LEFT

## *<u>REPLACE</u>*

## *<u>TRANSLATE</u>*

<BR/>

<BR/>

****

***

<BR/>





























































****

****

****

# 노답,,

# 217번이랑 같은 문제인데 답이 다름

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

# Question 114: (거의 안 나올 수 있다)

### How can Unicode checks be made?

UNICODE  CHECK 를 하는 방법은?

#### 2 correct 

## *<u>By running Transaction UCCHECK</u>*

## *<u>In any system (after release 6.10) by specifying the program has Unicode checks active</u>*

##### Only in a Unicode system or as part of a conversion to a Unicode system

##### Cannot be enforced

<BR/>

<BR/>

****

****

<BR/>