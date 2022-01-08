# Unit 7. Data Retrieval without Logical Databases





# Lesson 1. Reading Data from Multiple Database Tables



* ## Reading Data from Multiple Database Tables

  ### Database View in the ABAP Dictionary

  * FROM 절에 데이터 베이스 대신 VIEW를 넣는다.
  * 유지 보수가 가능하다.
  * 재사용성이 좋다.
  * 하나의 SELECT문 만으로 데이터를 가져올 수 있다.

  

  ### INNER JOIN / OUTER JOIN

  #### INNER JOIN

  * 일반 적인 뷰와 같이 하나의 SELECT문 만으로 복합적인 데이터베이스로 부터 데이터를 가져올 수 있다.

  #### OUTER JOIN

  #### LEFT OUTER JOIN

  * JOIN CONDITION에 만족하는 데이터 뿐 아니라 왼쪽에 있는 테이블을 기준으로 오른쪽에 JOIN CONDITION에 만족하는 데이터가 없더라도 데이터를 가져온다. 

  * ##### 주의점 

    * 다른 JOIN문과 혼용 할 수 없다ㅏ.
    * ON CONDITION은 AND만이 올 수 있다.
    * WHERE절에 오른 쪽 TABLE의 필드가 올 수 없다. 

  

  ### FOR ALL ENTRIES

  * 데이터를 다른 INTERNAL TABLE로 부터 가져올때 FOR ALL ENTRIES IN <INTERNAL_TABLE> 를 사용한다.

    ```ABAP
    *&---------------------------------------------------------------------*
    *& Report ZB23_00046
    *&---------------------------------------------------------------------*
    *&
    *&---------------------------------------------------------------------*
    REPORT zb23_00046.
    
    DATA: BEGIN OF gs_custom,
            id      TYPE scustom-id,
            name    TYPE scustom-name,
            city    TYPE scustom-city,
            country TYPE scustom-country,
          END OF gs_custom,
          gt_custom LIKE TABLE OF gs_custom.
    
    DATA: gt_book TYPE TABLE OF sbook.
    SELECT-OPTIONS: so_id FOR gs_custom-id DEFAULT 4 TO 10.
    
    SELECT *
      INTO CORRESPONDING FIELDS OF TABLE gt_custom
      FROM scustom
      WHERE id IN so_id.
    
    IF sy-subrc = 0.
      SELECT *
        INTO CORRESPONDING FIELDS OF TABLE gt_book
        FROM sbook
          up to 10 rows
         FOR ALL ENTRIES IN gt_custom
       WHERE customid = gt_custom-id.
    ENDIF.
    ```

  * 데이터를 가져올 INTERNAL TABLE에 데이터가 있는지 확인해야한다.

  * 데이터를 SORT해서 중복된 데이터가 있는지 확인해야 한다.

    ```ABAP
    *&---------------------------------------------------------------------*
    *& Report ZB23_00046
    *&---------------------------------------------------------------------*
    *&
    *&---------------------------------------------------------------------*
    REPORT zb23_00046..
    
    DATA: gt_flight TYPE TABLE OF sflight,
          gt_spfli  TYPE TABLE OF spfli.
    SELECT * INTO TABLE gt_flighT
      FROM sflight
      WHERE carrid BETWEEN 'DL' AND 'LH'.
    
    IF sy-subrc = 0.
      SELECT *
        INTO TABLE gt_spfli
        FROM spfli
         FOR ALL ENTRIES IN gt_flight
       WHERE carrid = gt_flight-carrid
         AND connid = gt_flight-connid.
    ENDIF.
    
    cl_demo_output=>display_data( gt_SPFLI ).
    ```

    <img src="img/data1.png" alt="data" style="zoom:75%;" />

    중복이 존재하는 것을 볼 수 있다.

    ```ABAP
    DELETE ADJACENT DUPLICATES FROM gt_flight
      COMPARING carrid connid.
    ```

    문을 사용해 중복을 제거해 주고 탐색해야 한다.

    해당 구문을 사용할때에는 sort를 먼저 해주고 사용해야 한다.

    ```ABAP
    *&---------------------------------------------------------------------*
    *& Report ZB23_00046
    *&---------------------------------------------------------------------*
    *&
    *&---------------------------------------------------------------------*
    REPORT zb23_00046.
    
    *DATA: BEGIN OF gs_custom,
    *        id      TYPE scustom-id,
    *        name    TYPE scustom-name,
    *        city    TYPE scustom-city,
    *        country TYPE scustom-country,
    *      END OF gs_custom,
    *      gt_custom LIKE TABLE OF gs_custom.
    
    DATA: gt_flight TYPE TABLE OF sflight,
          gt_spfli  TYPE TABLE OF spfli.
    SELECT * INTO TABLE gt_flighT
      FROM sflight
      WHERE carrid BETWEEN 'DL' AND 'LH'.
    
    IF sy-subrc = 0.
      SORT gt_flight BY carrid connid.ㅊ
      SELECT *
        INTO TABLE gt_spfli
        FROM spfli
         FOR ALL ENTRIES IN gt_flight
       WHERE carrid = gt_flight-carrid
         AND connid = gt_flight-connid.
    ENDIF.
    
    cl_demo_output=>display_data( gt_flight ).
    ```

    

  

  ### Nested Select Statements

  * SELECT ... ENDSELECT문 내부에 SELECT ... ENDSELECT문을 사용하는 경우
  * 권장하지 않는다.

  ### Subqueries

  * 

  

  



<img src="img/data.png" alt="data" style="zoom:75%;" />





# Lesson 2. Implementing Aggregate Fucntion and Grouping in a SELECT Statement













# Lesson 3. Implementing HAVING and ORDER BY Clauses in SELECT Statements