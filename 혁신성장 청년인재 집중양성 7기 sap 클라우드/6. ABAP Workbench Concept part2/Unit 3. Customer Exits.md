# Unit 3. Customer Exits









# Lesson 1. Describing Enhancement Projects

















* ## Program Exit Search

  Program Exit는 Program에서 

  ```ABAP
  CALL CUSTOMER-FUNCTION
  ```

  구문을 사용하거나



# Lesson 2. Enhancing Programs Using Program Exits



cmod에서 enhancement project를 만들어



* ## 실습

  <img src="img/exit1.png" alt="exit" style="zoom:75%;" />

  <img src="img/exit2.png" alt="exit" style="zoom:75%;" />

  <img src="img/exit3.png" alt="exit" style="zoom:75%;" />

  #### EXIT_SAPBC425_FLIGHT05* 를 입력후 실행하여

  <img src="img/exit4.png" alt="exit" style="zoom:75%;" />

  #### EXIT_SAPBC425_FLIGHT05 이름으로 시작되는 enhancement들을 찾아준다.

  <img src="img/exit5.png" alt="exit" style="zoom:75%;" />

  #### 다시 cmod 로 돌아가 Enhancement Assignment Project TGB05_CS 를 생성한 후 

  <img src="img/exit6.png" alt="exit" style="zoom:75%;" />

  #### 위에서 확인한 Enhancement를 추가해 주고 Components를 클릭한다.

  <img src="img/exit7.png" alt="exit" style="zoom:75%;" />

  #### Function exit 를 더블클릭하여

  <img src="img/exit8.png" alt="exit" style="zoom:75%;" />

  #### EXIT_SAPBC425_FLIGHT05_001 FUNCTION MODULE로 들어간 후 INCLUDE를 더블클릭하여  WARNING 메세지가 뜬후 ENTER를 눌러 진입하여 

  <img src="img/exit9.png" alt="exit" style="zoom:75%;" />

  #### 안에서 코드를 수정한다.

  <img src="img/exit10.png" alt="exit" style="zoom:75%;" />

  #### 이후 SAPBC425_FLIGHT05를 실행해 보면 

  #### 프로그램의 PAI MODULE의 MODULE CUST_CHECK 의 CALL CUSTOMER-FUNCTION '001' 구문이 실행되어  EXIT_SAPBC425_FLIGHT05_001 의 INCLUDE가 실행되는 것을 확인 할 수 있다.

  

# Lesson 3. Enhancing Menus Using Menu Exits

MENU EXIT은 일반적으로 메뉴 선택시 실행될 PROGRAM EXIT과 쌍을 이룬다.

<img src="img/exit11.png" alt="exit" style="zoom:75%;" />

```ABAP
*&---------------------------------------------------------------------*
*&      Module  USER_COMMAND_0200  INPUT
*&---------------------------------------------------------------------*
*       text
*----------------------------------------------------------------------*
MODULE user_command_0200 INPUT.

  CASE save_ok.

    WHEN 'BACK'.
      SET SCREEN 100.

    when 'SAVE'.
      perform save_flights.

    WHEN '+EXT'.
      CALL CUSTOMER-FUNCTION '002'
        EXPORTING
           flight     = sflight00
        EXCEPTIONS
           not_found  = 01
           reserved1  = 02.

  ENDCASE.

ENDMODULE.                             " USER_COMMAND_0200  INPUT
```

* ## 실습

  <img src="img/exit12.png" alt="exit" style="zoom:75%;" />

  <img src="img/exit13.png" alt="exit" style="zoom:75%;" />

  <img src="img/exit14.png" alt="exit" style="zoom:75%;" />

  <img src="img/exit15.png" alt="exit" style="zoom:75%;" />

  <img src="img/exit16.png" alt="exit" style="zoom:75%;" />

  <img src="img/exit17.png" alt="exit" style="zoom:75%;" />

  <img src="img/exit18.png" alt="exit" style="zoom:75%;" />

  <img src="img/exit19.png" alt="exit" style="zoom:75%;" />

  <img src="img/exit20.png" alt="exit" style="zoom:75%;" />

  <img src="img/exit21.png" alt="exit" style="zoom:75%;" />

  <img src="img/exit22.png" alt="exit" style="zoom:75%;" />

  

  

<img src="img/exit.png" alt="exit" style="zoom:75%;" />

# Lesson 4. Enhancing Screen Using Screen Exits

* ## 실습 

  <img src="img/exit23.png" alt="exit" style="zoom:75%;" />

  <img src="img/exit24.png" alt="exit" style="zoom:75%;" />

  <img src="img/exit25.png" alt="exit" style="zoom:75%;" />

  <img src="img/exit26.png" alt="exit" style="zoom:75%;" />

  <img src="img/exit27.png" alt="exit" style="zoom:75%;" />

  <img src="img/exit28.png" alt="exit" style="zoom:75%;" />

  <img src="img/exit29.png" alt="exit" style="zoom:75%;" />

  <img src="img/exit30.png" alt="exit" style="zoom:75%;" />

  <img src="img/exit31.png" alt="exit" style="zoom:75%;" />

  <img src="img/exit32.png" alt="exit" style="zoom:75%;" />

  <img src="img/exit33.png" alt="exit" style="zoom:75%;" />

  <img src="img/exit34.png" alt="exit" style="zoom:75%;" />

  <img src="img/exit35.png" alt="exit" style="zoom:75%;" />

  <img src="img/exit36.png" alt="exit" style="zoom:75%;" />

  <img src="img/exit37.png" alt="exit" style="zoom:75%;" />

  <img src="img/exit38.png" alt="exit" style="zoom:75%;" />

  

