# Unit 2. Fundamental Object-Oriented Syntax





# Lesson 1. Creating Local Classes



* ## Definition of Local Classes

  <img src="img/class1.png" alt="class" style="zoom:75%;" />

  Componenets가 다른 프로그램에서도 사용이 되어야 한다면 Public에 넣어준다.

  Private의 Component들은 해당 class 내에서만 접근 가능하다.

  일반적으로 Methods 와 Events 는 Public에 넣어주며 Data types 와 Atrributes들은

  Private에 넣어준다.
  
  
  
  
  
  

<img src="img/class2.png" alt="class" style="zoom:75%;" />







* ## Declaration of Attributes

  class의 변수들이라고 생각하면 된다.

  <img src="img/class3.png" alt="class" style="zoom:75%;" />





* ## Definition of Attributes, Types, and Constants

  <img src="img/class4.png" alt="class" style="zoom:75%;" />







* ## Visibility of Attributes

  <img src="img/class5.png" alt="class" style="zoom:75%;" />

  ### PUBLIC ATTRIBUTES

  어디서는 access 가능하며 값의 변경이 가능하다.

  예외적으로 선언할때 READ-ONLY를 추가한 경우 값의 변경이 불가능하다.

  

  ### PRIVATE ATTRIBUTES

  값의 변경이 불가능하다. 

  CLASS 내부에서만 변경 가능 

  

  <img src="img/class6.png" alt="class" style="zoom:75%;" />

  DATA는 PRIVATE에 선언하는 것을 권장한다.

  

* ## Static Attributes and Instance Attributes

  ### Instance Attributes

  CLASS 에 의해 생성된 OBJECT 마다 공통적으로 존재하는 Instance Attributes 라 한다.

  Instance Attributes 를 정의할 때는 DATA 구문을 사용한다.

  

  ### Static Attributes 

  CLASS 에 하나만 존재한다 object 마다 같은 것을 공유.

  Static Attributes 를 정의할대는 CLASS-DATA 구문을 사용한다.

  <img src="img/class7.png" alt="class" style="zoom:75%;" />

  

* ## Implementation of Methods

  <img src="img/class8.png" alt="class" style="zoom:75%;" />

  Method 를 사용하기 위해서는 METHODS 구문을 사용해 정의하며 

  Method는 **[IMPORTING| EXPORTING | CHANGING | RETURNING] signature** 들을 가질 수 있다. 

  RETURNING은 CALL BY VALUE를 사용한다. 



* ## Visibility of Methods

  <img src="img/class9.png" alt="class" style="zoom:75%;" />

  ### PUBLIC Methods

  어디서는 access 가능하며 값의 변경이 가능하다.

  

  ### PRIVATE Methods

  값의 변경이 불가능하다. 

  CLASS 내부에서만 변경 가능 





* ## Static Method and Instance Method 

  ### Instance Method 

  Static / Instance component 모두 access 가능하다.

  Instance Method 를 정의할 때는 METHODS 구문을 사용한다.

  

  ### Static Method 

  Static Component 들만 access 가능하다. 

  Static Attributes 를 정의할대는 CLASS-METHODS 구문을 사용한다.

  

* ## Representation of Visibility in UML Class Diagrams

  <img src="img/class10.png" alt="class" style="zoom:75%;" />

  Component 이름 앞에 + 가 있으면 Public, - 가 있으면 Private이며

  _ 밑줄이 그어져 있으면 Static Component이다.

  



* ## 실습

  #### ZB23_00049

  ```ABAP
  *&---------------------------------------------------------------------*
  *& Report ZB23_00049
  *&---------------------------------------------------------------------*
  *&
  *&---------------------------------------------------------------------*
  REPORT zb23_00049.
  
  CLASS lcl_vehicle DEFINITION.
    PUBLIC SECTION.
      METHODS:
        set_attributes IMPORTING iv_make  TYPE string
                                 iv_model TYPE string,
        display_attributes.
  
      CLASS-METHODS:
        display_n_o_vehicle.
  
    PRIVATE SECTION.
      DATA: mv_make  TYPE string,
            mv_model TYPE string.
  
      CLASS-DATA: gv_n_o_vehicle TYPE i.
  ENDCLASS.
  
  
  
  CLASS lcl_vehicle IMPLEMENTATION.
    METHOD set_attributes.
      mv_make = iv_make.
      mv_model = iv_model.
  
      ADD 1 TO gv_n_o_vehicle.
  
    ENDMETHOD.
  
    METHOD display_attributes.
      WRITE:/ 'MAKE    : ', mv_Make,
            / 'MODEL   : ', mv_model,
            / 'VEHICLE : ', gv_n_o_vehicle.
    ENDMETHOD.
  
    METHOD display_n_o_vehicle.
      WRITE:/ 'VEHICLE COUNT : ', gv_n_o_vehicle.
    ENDMETHOD.
  ENDCLASS.
  ```

  







# Lesson 2. Creating Objects



* ## Objects as Instances of Classes

  Object를 생성하기 위해서는 Reference Variable이 필요하며

  CREATE OBJECT 구문 뒤에 Reference Variable 이름이 온다.

  

  

  

* ## Definition of Reference Variables

  ```ABAP
  DATA: go_vehicle1 TYPE REF TO lcl_vehicle,
  	  go_vehicle2 LIKE go_vehicle1.
  ```

  TYPE REF TO 구문 뒤에는 CLASS의 이름이 온다.









* ## Creating Objects

  ```ABAP
  CREATE OBJECT GO_VEHICLE1.
  CREATE OBJECT GO_VEHICLE2.
  ```

  Object를 생성하기 위해서는 Reference Variable이 필요하며

  CREATE OBJECT 구문 뒤에 Reference Variable 이름이 온다.







* ## Reference Semantics of Object References

  ```ABAP
  go_vehicle2 = go_vehicle1.
  ```

  CREATE 구문을 사용하지 않고 위와 같이 할당을 하게 되면 둘 모두 같은 REFERENCE를 가르키게 된다.

  즉 둘은 수정 사항 또한 공유 하게 된다.

  <img src="img/class11.png" alt="class" style="zoom:75%;" />



* ## The Garbage Collector

  object를 삭재하기 위해서는 해당 object의 reference variable에 CLEAR 나 FREE 구문을 사용하면 된다.



* ## Multiple Instances

  <img src="img/class13.png" alt="class" style="zoom:75%;" />

  Object를 담기 위한 Internal table을 생성할 때는 TYPE TABLE OF REF TO 구문을 사용하며

  생성된 Object를 Internal table에 넣기 위해서는 APPEND 구문을 사용한다.

  ```ABAP
  DATA: go_vehicle TYPE REF TO lcl_vehicle,
        gt_vehicle TYPE TABLE OF REF TO lcl_vehicle.
  
  START-OF-SELECTION.
  
    CREATE OBJECT go_vehicle.
    go_vehicle->set_attributes(
      EXPORTING
        iv_make = 'BENZ'
        iv_model = 'E300'
    ).
    APPEND go_vehicle TO gt_vehicle.
  
    CREATE OBJECT go_vehicle.
    go_vehicle->set_attributes(
      EXPORTING
        iv_make = 'BMW'
        iv_model = '325I'
    ).
    APPEND go_vehicle TO gt_vehicle.
  
  
    LOOP AT gt_vehicle INTO go_vehicle.
      go_vehicle->display_attributes( ).
    ENDLOOP.
  ```
  
  
  
  <img src="img/class14.png" alt="class" style="zoom:75%;" />
  
  
  
  
  
  







# Lesson 3. Accessing Methods and Attributes



* ## Syntax for  Calling Instance Methods

  <img src="img/class15.png" alt="class" style="zoom:75%;" />

  CALL METHOD를 통해 호출 하거나 CALL METHOD 구문 없이 Method 이름 뒤에 ( \____ ) 로 묶어 줌으로서 메소드를 호출 할 수 있다.

  Instance Method를 호출 할 경우 

  ```ABAP
  CALL METHOD Ref_Vari_name->method_name.
  Ref_Vari_name->method_name( ___ ).
  ```

  와 같이 레퍼런스 배리어블 이름 뒤에 **->** 를 사용해 메소드를 ACCESS 한다.



* ## Static Method Calls

  <img src="img/class16.png" alt="class" style="zoom:75%;" />

  CALL METHOD를 통해 호출 하거나 CALL METHOD 구문 없이 Method 이름 뒤에 ( \____ ) 로 묶어 줌으로서 메소드를 호출 할 수 있다.

  Instance Method를 호출 할 경우 

  ```ABAP
  CALL METHOD Class_name=>method_name.
  Class_name=>method_name( ___ ).
  ```

  와 같이 Class 이름 뒤에 **=>** 를 사용해 메소드를 ACCESS 한다.





* ## Functional Method Calls

  <img src="img/class17.png" alt="class" style="zoom:75%;" />

  RETURNING 파라미터가 있는 METHOD를 FUNCTIONAL METHOD라 부른다.

  RETURNING 파라미터는 하나만 받을 수 있다.

  RETURNING 파라미터가 있는 경우 EXPORTING과 CHANGING 파라미터를 받을 수 없다.

  RETURNING 파라미터는 RECEIVING 파라미터로 받는다.

  또는 변수에 바로 할당이 가능하다. 	

  * **하나의 파라미터만 선언할 수 있기 때문**

  
  
  <img src="img/class18.png" alt="class" style="zoom:75%;" />





* ## Access to Public Attributes

  <img src="img/class19.png" alt="class" style="zoom:75%;" />





* ## Exercise 4

  ```ABAP
  *&---------------------------------------------------------------------*
  *& Report ZBC401_B23_MAIN
  *&---------------------------------------------------------------------*
  *&
  *&---------------------------------------------------------------------*
  REPORT zbc401_b23_main.
  
  CLASS lcl_airplane DEFINITION.
    PUBLIC SECTION.
      METHODS:
        set_attributes
          IMPORTING
            iv_name      TYPE string
            iv_planetype TYPE saplane-planetype,
        display_attributes.
  
      CLASS-METHODS:
        display_n_o_airplanes,
        get_n_o_airplanes
          RETURNING
            VALUE(rv_count) TYPE i.
  
  
    PRIVATE SECTION.
      CONSTANTS: c_pos_1 TYPE i VALUE 30.
      DATA: mv_name      TYPE string,
            mv_planetype TYPE saplane-planetype.
  
      CLASS-DATA: gv_n_o_airplanes TYPE i.
  
  ENDCLASS.
  
  
  CLASS lcl_airplane IMPLEMENTATION.
    METHOD set_attributes.
      mv_name = iv_name.
      mv_planetype = iv_planetype.
      gv_n_o_airplanes = gv_n_o_airplanes + 1.
    ENDMETHOD.
  
    METHOD display_attributes.
      WRITE:/ icon_ws_plane AS ICON,
            / 'NAME      : ', AT c_pos_1 mv_name,
            / 'PLANETYPE : ', AT c_pos_1 mv_planetype.
    ENDMETHOD.
  
    METHOD display_n_o_airplanes.
      SKIP.
      WRITE:/ 'NUMBER OF AIRPLANES : ',
              AT c_pos_1 gv_n_o_airplanes LEFT-JUSTIFIED.
    ENDMETHOD.
  
    METHOD get_n_o_airplanes.
      rv_count = gv_n_o_airplanes.
    ENDMETHOD.
  ENDCLASS.
  
  
  DATA: go_plane TYPE REF TO lcl_airplane,
        gt_plane TYPE TABLE OF REF TO lcl_airplane,
        gv_count TYPE i.
  
  START-OF-SELECTION.
  
    lcl_airplane=>display_n_o_airplanes( ).
    gv_count = lcl_airplane=>get_n_o_airplanes( ).
    WRITE:/ gv_count.
    CREATE OBJECT go_plane.
    APPEND go_plane TO gt_plane.
    go_plane->set_attributes(
      EXPORTING
        iv_name = 'LH Berlin'
        iv_planetype = 'A321'
    ).
  
    CREATE OBJECT go_plane.
    APPEND go_plane TO gt_plane.
    go_plane->set_attributes(
      EXPORTING
        iv_name = 'AA New York'
        iv_planetype = '747-400'
    ).
  
    CREATE OBJECT go_plane.
    go_plane->set_attributes(
      EXPORTING
        iv_name = 'US Hercules'
        iv_planetype = '747-200F'
    ).
    APPEND go_plane TO gt_plane.
    LOOP AT gt_plane INTO go_plane.
      go_plane->display_attributes( ).
    ENDLOOP.
  
    lcl_airplane=>display_n_o_airplanes( ).
    WRITE:/ lcl_airplane=>get_n_o_airplanes( ).
  ```

  



# Lesson 4. Implementing Constructors in Local Classes





* ## Instance Consturctor

  <img src="img/class20.png" alt="class" style="zoom:75%;" />

  시스템에서 Object가 생성되는 시점에 자동적으로 호출되는 METHOD를 CONSTRUCTOR(SPECIAL METHOD) 라고 한다.

  IMPORTING 파라미터와 EXCEPTIONS만을 사용 가능하다.

  하나만의 INSTANCE CONSTRUCTOR를 선언, 생성할 수 있다.

  PUBLIC 세션에 생성한다.

  METHOD 이름은 CONSTURUCTOR을 사용해야 한다.

  

  <img src="img/class21.png" alt="class" style="zoom:75%;" />

  ```ABAP
  *&---------------------------------------------------------------------*
  *& Report ZB23_00049
  *&---------------------------------------------------------------------*
  *&
  *&---------------------------------------------------------------------*
  REPORT zb23_00049.
  
  CLASS lcl_vehicle DEFINITION.
    PUBLIC SECTION.
      METHODS:
        constructor IMPORTING iv_make  TYPE string
                              iv_model TYPE string,
                              
        display_attributes.
  
      CLASS-METHODS:
        display_n_o_vehicle.
  
    PRIVATE SECTION.
      DATA: mv_make  TYPE string,
            mv_model TYPE string.
  
      CLASS-DATA: gv_n_o_vehicle TYPE i.
  ENDCLASS.
  
  
  
  CLASS lcl_vehicle IMPLEMENTATION.
    METHOD constructor.
      mv_make = iv_make.
      mv_model = iv_model.
      ADD 1 TO gv_n_o_vehicle.
    ENDMETHOD.
  
    METHOD display_attributes.
      WRITE:/ 'MAKE    : ', mv_Make,
            / 'MODEL   : ', mv_model.
    ENDMETHOD.
  
    METHOD display_n_o_vehicle.
      WRITE:/ 'VEHICLE COUNT : ', gv_n_o_vehicle.
    ENDMETHOD.
  ENDCLASS.
  
  
  DATA: go_vehicle TYPE REF TO lcl_vehicle,
        gt_vehicle TYPE TABLE OF REF TO lcl_vehicle.
  
  
  START-OF-SELECTION.
    CREATE OBJECT go_vehicle
      EXPORTING
        iv_make  = 'BENZ'
        iv_model = 'E300'.
    APPEND go_vehicle TO gt_vehicle.
  
    CREATE OBJECT go_vehicle
      EXPORTING
        iv_make  = 'BMW'
        iv_model = '325I'.
    APPEND go_vehicle TO gt_vehicle.
  
  
    LOOP AT gt_vehicle INTO go_vehicle.
      go_vehicle->display_attributes( ).
    ENDLOOP.
  ```

  기존의 SET_ATTRIBUTES METHOD를 대체한다.





* ## Exercise 5

  ```ABAP
  *&---------------------------------------------------------------------*
  *& Report ZBC401_B23_MAIN
  *&---------------------------------------------------------------------*
  *&
  *&---------------------------------------------------------------------*
  REPORT zbc401_b23_main.
  
  CLASS lcl_airplane DEFINITION.
    PUBLIC SECTION.
      METHODS:
        constructor
          IMPORTING
            iv_name      TYPE string
            iv_planetype TYPE saplane-planetype
          EXCEPTIONS
            wrong_planetype,
        display_attributes.
  
      CLASS-METHODS:
        display_n_o_airplanes,
        get_n_o_airplanes
          RETURNING
            VALUE(rv_count) TYPE i.
  
  
    PRIVATE SECTION.
      CONSTANTS: c_pos_1 TYPE i VALUE 30.
      DATA: mv_name      TYPE string,
            mv_planetype TYPE saplane-planetype,
            mv_weight    TYPE saplane-weight,
            mv_tankcap   TYPE saplane-tankcap.
  
  
      CLASS-DATA: gv_n_o_airplanes TYPE i.
  
  ENDCLASS.
  
  
  CLASS lcl_airplane IMPLEMENTATION.
    METHOD constructor.
      mv_name = iv_name.
      mv_planetype = iv_planetype.
      SELECT SINGLE weight tankcap
        INTO (mv_weight, mv_tankcap)
        FROM saplane
       WHERE planetype = mv_planetype.
      IF sy-subrc <> 0.
        RAISE wrong_planetype.
      ELSE.
        ADD 1 TO gv_n_o_airplanes.
      ENDIF.
    ENDMETHOD.
  
    METHOD display_attributes.
      WRITE:/ icon_ws_plane AS ICON,
            / 'NAME      : ', AT c_pos_1 mv_name,
            / 'PLANETYPE : ', AT c_pos_1 mv_planetype,
            / 'WEIGHT    : ', AT c_pos_1 mv_weight LEFT-JUSTIFIED,
            / 'TANKCAP   : ', AT c_pos_1 mv_tankcap LEFT-JUSTIFIED.
    ENDMETHOD.
  
    METHOD display_n_o_airplanes.
      SKIP.
      WRITE:/ 'NUMBER OF AIRPLANES : ',
              AT c_pos_1 gv_n_o_airplanes LEFT-JUSTIFIED.
    ENDMETHOD.
  
    METHOD get_n_o_airplanes.
      rv_count = gv_n_o_airplanes.
    ENDMETHOD.
  ENDCLASS.
  
  
  DATA: go_plane TYPE REF TO lcl_airplane,
        gt_plane TYPE TABLE OF REF TO lcl_airplane,
        gv_count TYPE i.
  
  START-OF-SELECTION.
    lcl_airplane=>display_n_o_airplanes( ).
    gv_count = lcl_airplane=>get_n_o_airplanes( ).
    WRITE:/ gv_count.
  
    CREATE OBJECT go_plane
      EXPORTING
        iv_name         = 'LH Berlin'
        iv_planetype    = 'A321'
      EXCEPTIONS
        wrong_planetype = 1.
    IF sy-subrc = 0.
      APPEND go_plane TO gt_plane.
    ENDIF.
  
    CREATE OBJECT go_plane
      EXPORTING
        iv_name         = 'AA New York'
        iv_planetype    = '747-400'
      EXCEPTIONS
        wrong_planetype = 1.
    IF sy-subrc = 0.
      APPEND go_plane TO gt_plane.
    ENDIF.
  
    CREATE OBJECT go_plane
      EXPORTING
        iv_name         = 'US Hercules'
        iv_planetype    = '747-200F'
      EXCEPTIONS
        wrong_planetype = 1.
    IF sy-subrc = 0.
      APPEND go_plane TO gt_plane.
    ENDIF.
  
    LOOP AT gt_plane INTO go_plane.
      go_plane->display_attributes( ).
    ENDLOOP.
  
    lcl_airplane=>display_n_o_airplanes( ).
    WRITE:/ lcl_airplane=>get_n_o_airplanes( ).
  ```

  





# Lesson 5. Implementing Class Constructors in Local classes



* ## Static Constructor

  <img src="img/class22.png" alt="class" style="zoom:75%;" />

  해당 class 에 처음 access 할때 자동으로 실행된다. 이 경우에 해당하는 경우는 다음과 같다.

  * CREATE OBJECT 가 실행될때
  * STATIC ATTRIBUTE 에 ACCESS 할때
  * STATIC METHOD 를 호출할때
  * EVENT HANDLER METHOD 가 등록될 때

  파라미터나 EXCEPTION을 가질 수 없다.

  CLASS 당 단 하나만 존재 할 수 있다.

  

  

* ## Self-Reference

  <img src="img/class23.png" alt="class" style="zoom:75%;" />

  





Instance component

* attribute

  data

* method

  methods



<img src="img/class.png" alt="class" style="zoom:75%;" />