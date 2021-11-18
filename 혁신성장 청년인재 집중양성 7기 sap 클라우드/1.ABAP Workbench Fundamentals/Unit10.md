# Unit10 Modularization Techniques in ABAP



## Lesson1. Explaining Modularizagion

 ![modularization](./img/modularization.png)

* ## Modularization 의 세가지 장점

  Program B 는  A 에 비해 가독성이 좋으며 유지 보수가 수월하고 Source code block 을 재사용할 수 있다.

  #### More transparent + Easier to maintain !!!



* ## Local Program Modularization

  ![localprogram](./img/localprogram.png)

  각 프로그램의 Subroutine과 Local_class는 각 프로그램내에서만 사용할 수 있다.





****



* ## Global Modularization

  ![globalmodule](./img/globalmodule.png)

  Function group 의 Function module과 Global_class 의 Method 들은 여러 프로그램들에서 사용 가능하다.



****

* ## Data Encapsulation

  ![separating](./img/separating.png)

  프로그램은 Global Modularization 의 데이터를 다이렉트로 access 할 수 없다.

  ![datatrans](./img/datatrans.png)

   Function Module은 CALL FUNCTION  '' 구문을 통해 인터페이스를 이용하여 access하며

   Method는 CALL METHOD 구문을 통해  Signature을 이용하여 access한다.

  













****

****



## Lesson2. Defining and Calling Subroutines

* ## Modularization Using Subroutines within Programs

  ![subroutine](./img/subroutine.png)

  메인프로그램에서 선언된 데이터는 글로벌 베리어블(전역변수) 데이터이므로 메인 프로그램에서 그대로 사용 가능하다.

  서브 루틴에서도 변수를 선언할 수 있다. 이를 로컬 베리어블(지역변수)이라고 하며 이는 메인 프로그램에서 사용 할 수 없다. 

  서브 루틴은 FORM 과 ENDFORM 구문으로 둘러싸여진다.

  * ### Subroutine 생성 방법

    ![subroutine1](./img/subroutine1.png)`

    ![subroutine2](./img/subroutine3.png)

    

    ```
    *&---------------------------------------------------------------------*
    *& Report ZABAP_SUBROUTIN_B23
    *&---------------------------------------------------------------------*
    *&
    *&---------------------------------------------------------------------*
    REPORT zabap_subroutin_b23.
    
    DATA: gv_result TYPE i.
    
    PARAMETERS: pa_int TYPE i.
    
    PERFORM calc_sum.
    
    WRITE:/ 'Result : ', gv_rslt.
    *&---------------------------------------------------------------------*
    *& Form calc_sum
    *&---------------------------------------------------------------------*
    *& text
    *&---------------------------------------------------------------------*
    *& -->  p1        text
    *& <--  p2        text
    *&---------------------------------------------------------------------*
    FORM calc_sum .
      DO pa_int TIMES.
        gv_rslt = gv_rslt + 1.
      ENDDO.
    ENDFORM.
    ```

    호출하는 Perform 을 먼저 선언 후 더블 클릭으로도 접근 가능

  ![globalvariable](./img/globalvariable.png)

  ![interface](./img/interface.png)

  ![interface1](./img/interface1.png)





인터페이스 정의 X

```ABAP
PERFORM calc_parm.


WRITE:/ 'Result : ', gv_rslt.



DATA: gv_a    TYPE i,
      gv_b    TYPE i,
      gv_c    TYPE i,
      gv_d    TYPE i,
      gv_e    TYPE i,
      gv_f    TYPE i.

gv_b = 5.
gv_d = 10.

WRITE:/ 'A : ', gv_a,
      / 'C : ', gv_c.

gv_f = 11.

write:/ 'E : ', gv_e.

*&---------------------------------------------------------------------*
*& Form calc_parm
*&---------------------------------------------------------------------*
*& text
*&---------------------------------------------------------------------*
*& -->  p1        text
*& <--  p2        text
*&---------------------------------------------------------------------*
FORM calc_parm .
  gv_a = 2 * gv_b.
  gv_c = 2 * gv_d.
  gv_e = 2 * gv_f.
ENDFORM.
```

인터페이스 정의

```ABAP
DATA: gv_a TYPE i,
      gv_b TYPE i,
      gv_c TYPE i,
      gv_d TYPE i,
      gv_e TYPE i,
      gv_f TYPE i.

gv_b = 19.
gv_d = 5.
gv_f = 1.
PERFORM calc_parm1 USING gv_a gv_b.
WRITE:/ 'A : ', gv_a.
perform calc_parm1 using gv_c gv_d.
WRITE:/ 'C : ', gv_c.
perform calc_parm1 using gv_e gv_f.
WRITE:/ 'e : ', gv_e.


*&---------------------------------------------------------------------*
*& Form calc_parm1
*&---------------------------------------------------------------------*
*& text
*&---------------------------------------------------------------------*
*&      --> GV_A
*&      --> GV_B
*&---------------------------------------------------------------------*
FORM calc_parm1  USING    pv_f1 TYPE i
                          pv_f2 TYPE i.
pv_f1 = pv_f2 * 2.

ENDFORM.
```



인터페이스를 정의해서 사용하는 것을 권장 

액츄얼 파라미터 포멀 파라미터의 개수는 같아야한다.









pa_date (생연월일)      2000-11-01

pa_date+0(4)

결과 21년 0월 17

```ABAP
*&---------------------------------------------------------------------*
*& Report ZABAP_CALCDAY_B23
*&---------------------------------------------------------------------*
*&
*&---------------------------------------------------------------------*
REPORT zabap_calcday_b23.

*인풋 필드에 날짜를 받음
*현재 날짜를 기준으로  얼마나 지났는지 계산

PARAMETERS pa_date TYPE d.
DATA: gv_today TYPE d,
      gv_rslt  TYPE string.

gv_today = sy-datum.


PERFORM calc_date USING pa_date gv_today gv_rslt.

WRITE:/ gv_rslt.


*&---------------------------------------------------------------------*
*& Form calc_date
*&---------------------------------------------------------------------*
*& text
*&---------------------------------------------------------------------*
*&      --> PA_DATE
*&      --> GV_TODAY
*&      --> GV_RSLT
*&---------------------------------------------------------------------*
FORM calc_date  USING    pv_date
                         pv_today
                         pv_rslt.

  DATA: gv_y TYPE i,
        gv_m TYPE i,
        gv_d TYPE i.

  gv_d = pv_today+6(2) - pv_date+6(2).

  IF gv_d < 0.
    gv_d = gv_d + 30.
    gv_m = -1.
  ENDIF.

  gv_m = gv_m + pv_today+4(2) - pv_date+4(2).

  IF gv_m < 0.
    gv_m = gv_m + 12.
    gv_y = gv_y - 1.
  ENDIF.

  gv_y = gv_y + pv_today+0(4) - pv_date+0(4).

  pv_rslt = gv_y && '년' && gv_m && '월' && gv_d && '일'.


ENDFORM.
```



![](./img/)





****

****



* ## Lesson3. Calling Function Moules

  

  

   

  

   

  

   

  

  ****

  ****

  

* ## Lesson4. Creating Function Moules

  

  

   

  

   

  

   

  

  ****

  ****

  

* ## Lesson5. Describing Business Application Programming Interfaces (BAPIs)

   

  

   

  

   

  

   

  

  ****

  ****

  

* ## Lesson6. Calling Methods of Global Classes

   

  

   

  

   

  

   

  

  ****

  ****

  

* ## Lesson7. Creating Global Classes and Static Methods

   

  

   

  

   

  

   

  

  ****

  ****



* ## Lesson8. Using Local Classes







문자열 스플릿

문자열+i(j)

i번째 부터 j 개 자름