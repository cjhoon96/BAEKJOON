# Unit8 *ABAP Workbench*

## Lesson1 *Introducing the ABAP Workbench*

![crossclient](./img/crossclient.png)

레파지토리에 저장되어 있는 프로그램들은 어느 클라이언트에서 수정을 하나 전부 수정이 된다.

이를 Cross Client 또는 Client independent 라고 한다.

테이블에 저장되어있는 데이터들은 클라이언트 별로 다르다.

이를 Client dependent Client Specific 이라고 한다.

일부 데이터들은 Cross Client로 적용 되며 이는 명시된다.

하나의 프로그램으로 클라이언트별로 회사를 나누어 사용할 수 있다.

또는 1차 2차 3차... 테스트들을 클라이언트 별로 사용할 수 있다.



![structureofrepository](./img/structureofrepository.png)igkkcl

application component

customer component

​	package

​		

모듈가 같은 개념이다. 관리를 위한 시스템





![searchtools](./img/searchtools.png)



![Hierarchy](./img/Hierarchy.png)





![navigator](./img/navigator.png)

Object Navigator

​	t-code: se80

​	object 카테고리와 object 이름을 통해 검색도 가능하다.

​	favorite 기능도 있다. 잘 사용하진 않음

ABAP Dictionary

​	t-code: se11	

Function Builder

​	t-code: se37

Class Builder

​	t-code: se24

ABAP Editor

​	t-code: se38

Menu Painter

​	t-code: se41

Screen Painter

​	t-code: se51

​	Object Navigator에서 스크린 파일을 더블 클릭시 이동 가능하기 때문에 잘 사용하지 않는다.





****

****



## Lesson2 Organizing ABAP Development Projects



![transporting](./img/transporting.png)

Development System 의 개발된 또는 기존 것을 수정한 시스템들을 Change Request에 할당한다.

이후 이를 Production System 에 적용한다.

![changerequest](./img/changerequest.png)

request 번호는 자동 할당 된다. 그 뒤에 만든 user id가 입력된다.

여러개의 파스크 넘버가 있을 수 있다.

여러 팀원들이 존재 하나의 request number에 할당



![requesttest](./img/requesttest.png)

노란칸에 팀원의 이름이 들어가게 된다.

![requesttest1](./img/requesttest1.png)



![package](./img/package.png)

패키지 이름또한 z,y로 시작

패키지 이름, short description 이외는 기본적으로 자동 할당

![transactroute](./img/transactroute.png)



sap에서 제공해주는 프로그램을 수정한 내용을 옮기는 레이어가 SAP 레이어이다.



![changerequest1](./img/changerequest1.png)

change request 를 입력한다.



****

****



## Lesson3 Developing ABAP Programs



![abapprogram1](./img/abapprogram1.png)

체크박스에는 체크하지 않는다.





The features of the ABAP programming language are as follows:

주로 open sql 사용

특별한 경우가 아니면 native sql은 사용하지 않는다.



![abapsyntax](./img/abapsyntax.png)

![abapsyntax1](./img/abapsyntax1.png)

단어와 단어사이는 하나 이상의 공백으로 구분한다.

여러 문장을 한 라인에 사용할 수 있다.

한 문장은 여러라인으로 사용할 수 있다.

마지막에 .로 구분한다.



* PARAMETERS : 파라미터를 입력할 수 있는 selection screen

* DATA :  빈 변수를 초기화

* MOVE : 어떤 변수의 값을 다른 변수에 할당할 때 사용한다.

* ADD : 어떤 값에 어떤 숫자를 더할 때 사용한다.

* WRITE 
  * 화면에 어떤 값을 출력할때 사용한다.
  * 여러개를 출력할때는 WRITE: 뒤에 출력할 내용을 , 로 구분하여 작성한다. 
    * 이 경우 , 뒤에 /을 붙여 줄바꿈을 해줄 수 있다.
  * 이러한 작성방식을 ***Chained statement***라고 한다.



NEW-LINE : 줄을 바꾼다?



##### Program ZABAP_SYNTAX_B23    Of    Package *ZBC400_B23* 

```ABAP
*&---------------------------------------------------------------------*
*& Report ZABAP_SYNTAX_B23
*&---------------------------------------------------------------------*
*&
*&---------------------------------------------------------------------*
REPORT ZABAP_SYNTAX_B23.

DATA gv_result TYPE i.
* gv_result 변수를 int 타입으로 초기화한다.

PARAMETERS pa_num TYPE i.
* pa_num 을 int 타입으로 초기화하고 이 변수에 들어갈 값을 입력할 selection screen을 생성한다.

MOVE pa_num  TO gv_result.
gv_result = pa_num.
* pa_num 에 할당된 값을 gv_result 에 할당한다.

ADD 1 TO gv_result.
gv_result = gv_result + 1.
* gv_result에 1을 더해준다.

WRITE 'Your input: '.
WRITE pa_num.
* 'Your input: ' 와 pa_num 에 할당된 값을 한줄에 출력한다.

NEW-LINE.
* 줄을 바꾼다.

WRITE: 'Result    : ',
        gv_result.
* 'Result    : ' 와 gv_result 에 할당된 값을 한줄에 출력한다.
```

##### Program *ZABAP_INPUT_B23*   Of   Package *ZBC400_B23* 

```ABAP
*&---------------------------------------------------------------------*
*& Report ZABAP_INPUT_B23
*&---------------------------------------------------------------------*
*&
*&---------------------------------------------------------------------*
REPORT ZABAP_INPUT_B23.

parameters: pa_int Type i,
            pa_str Type string.

write: pa_int,
     / pa_str.

new-line.
write '김 철수'.
```





*는 주석처리 기호이다.

line의 일부를 주석처리 할때는 "를 붙여 줄의 마지막에 작성한다.

Key Word 에 커서를 올리고 f1키를 누르면 해당 ABAP KeyWord의 설명과 예제를 살펴볼 수 있다.





* ## ABAP Editor

  메뉴창의 utilities => settings => ABAP Editor => Text - Based Editor 

  를 통해 이전 버전의 에디터로 바꿀 수 있다.

  * ### Options Provided by the New ABAP Editor

    * 



* ## Activation Programs

  ![activate](./img/activate.png)

  프로그램을 생성하고 저장하면 inactive version으로 저장된다. ctrl + f3 나 active 버튼을 클릭함으로서 프로그램을 active version으로 바꿔줘야 실행이 가능하다.

  ![activate1](./img/activate1.png)

  active version 과 inactive version 이 동시에 존재하는 경우 수정하고 있는 유저는 inactive version을 보고 있지만 이외의 유저들은 active version 프로그램만 볼 수 있다.

  

****

****



## Execrcise 12

* ## Business Example 

  You want to create an ABAP program that takes simple user input, modifies the data, and outputs the information to a screen.

  In your package, create an executable program named ***ZBC400_B23_HELLO***.

  Enable the user to enter a name on the selection screen, which will be output later in the list, together with the 'Hello' text.

  * #### Template:

    None

  * #### Solution 

    ***BC400_GSS_HELLO***

    1. Create program ***ZBC400_B23_HELLO*** without a TOP include

    2. in the next dialog box, make sure that the program type is Executable Program. Set the status of th eprogram to a meaningful value.

    3. Define input field pa_name on the selection screen with type string.

    4. Implement the output of the Hello World! text. To do this, use the ABAP WRITE statement.

    5. Make sure that the output appears on a new line. To do so , use the NEW-LINE statement.

    6. Using a chained statement, implement the output text 'Hello' together with the input name from the selection screen.

    7. Check your program for syntax errors. Activate and test it.

       

  ##### Program *ZBC400_B23_HELLO*   Of   Package *ZBC400_B23* 

  ```abap
  *&---------------------------------------------------------------------*
  *& Report ZBC400_23_HELLO
  *&---------------------------------------------------------------------*
  *&
  *&---------------------------------------------------------------------*
  REPORT ZBC400_23_HELLO.
  
  PARAMETERS pa_name type string.
  *write 'Hello World!'.
  *new-line.
  *write: 'Hello',
  *       pa_name.
  
  write: 'Hello World!',
       / 'Hello',
         pa_name.
  ```

  

****

****



## Lesson4 Finalizing ABAP Development Projects



![transaction](./img/transaction.png)

일반적으로 프로그램 이름과 t_code는 같은 이름으로 만든다.

* ## To create a Transaction









![transaction1](./img/transaction1.png)



* ## To add a Transaction to Personal Favorites











* ## T_CODE 생성 과정

  ![transaction2](./img/transaction2.png)

  ![transaction3](./img/transaction3.png)

  ![transaction4](./img/transaction4.png)

  ![transaction5](./img/transaction5.png)

  ![transaction6](./img/transaction6.png)



![releasechange](./img/releasechange.png)

![releasechange](./img/releasechange1.png)



se01을 통해 Transport Organizer 에 접근 후 대상을 클릭하고 f9 버튼이나 용달차 버튼 클릭

한번 release 된 request 는 다시 사용할 수 없다.

release 후 release 한 request를 클릭후 create request를 누르면 기존과 같은 텍스트의 request를 생성할 수 있다.

![releasechange2](./img/releasechange2.png)

Modul pool

Program and dynpro (dialog transaction)





![](./img/)
