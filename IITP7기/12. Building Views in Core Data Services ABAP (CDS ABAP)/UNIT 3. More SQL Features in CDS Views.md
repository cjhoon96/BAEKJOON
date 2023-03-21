

# UNIT 3. More SQL Features in CDS Views



# Lesson 1. Using SQL Expressions in CDS Views



* ## Literals

  <img src="img/cds88.png" alt="cds" style="zoom:75%;" />

  <img src="img/cds87.png" alt="cds" style="zoom:75%;" />



* ## Case Distinctions

  <img src="img/cds89.png" alt="cds" style="zoom:75%;" />

  <img src="img/cds90.png" alt="cds" style="zoom:75%;" />

  <img src="img/cds91.png" alt="cds" style="zoom:75%;" />

  <img src="img/cds92.png" alt="cds" style="zoom:75%;" />

  <img src="img/cds93.png" alt="cds" style="zoom:75%;" />

  

  

  



* # Arithmetic Expressions 

  <img src="img/cds94.png" alt="cds" style="zoom:75%;" />

  <img src="img/cds96.png" alt="cds" style="zoom:75%;" />











* ## Type Conversion with CAST Expression

  <img src="img/cds95.png" alt="cds" style="zoom:75%;" />
  
  <img src="img/cds97.png" alt="cds" style="zoom:75%;" />
  
  <img src="img/cds98.png" alt="cds" style="zoom:75%;" />
  
  <img src="img/cds99.png" alt="cds" style="zoom:75%;" />
  
  정수에는 바로 나누기를 할 수 없다. (error 발생)
  
  <img src="img/cds100.png" alt="cds" style="zoom:75%;" />







* ## Exercise 6. 

  <img src="img/cds101.png" alt="cds" style="zoom:75%;" />

  <img src="img/cds102.png" alt="cds" style="zoom:75%;" />

  









# Lesson 2. Using Built-in SQL Functions in CDS Views



* ## Built-in Functions for Calculations

  ### div(arg1, arg2)

  ### mod(arg1, arg2)

  ### division(arg1, arg2, dec)

  

  <img src="img/cds103.png" alt="cds" style="zoom:75%;" />

  <img src="img/cds104.png" alt="cds" style="zoom:75%;" />

  <img src="img/cds105.png" alt="cds" style="zoom:75%;" />

  ### lower(arg)

  ### upper(arg)

  <img src="img/cds106.png" alt="cds" style="zoom:75%;" />

  <img src="img/cds107.png" alt="cds" style="zoom:75%;" />

  <img src="img/cds108.png" alt="cds" style="zoom:75%;" />





* ## Currency and Unit Conversion

  <img src="img/cds109.png" alt="cds" style="zoom:75%;" />

  <img src="img/cds110.png" alt="cds" style="zoom:75%;" />

  <img src="img/cds111.png" alt="cds" style="zoom:75%;" />



* ## Calculations with Dates

  <img src="img/cds112.png" alt="cds" style="zoom:75%;" />

  <img src="img/cds113.png" alt="cds" style="zoom:75%;" />

  

  

  



* ## Exercise 7. 

  ```ABAP
  @AbapCatalog.sqlViewName: 'ZB23FUNC'
  @AbapCatalog.compiler.compareFilter: true
  @AbapCatalog.preserveKey: true
  @AccessControl.authorizationCheck: #CHECK
  @EndUserText.label: 'Exercise Expression'
  define view ZB23_FUNCTIONS
    as select from sbook   as b
      inner join   scustom as c on b.customid = c.id
  {
    key b.carrid,
    key b.connid,
    key b.fldate,
    key b.bookid,
        case b.class
            when 'Y' then 'Economy'
            when 'C' then 'Business'
            when 'F' then 'First'
            else '???'
        end                                             as CLASS,
  
        CURRENCY_CONVERSION(
          AMOUNT => b.forcuram,
          SOURCE_CURRENCY =>  b.forcurkey,
          ROUND => 'X',
          TARGET_CURRENCY => cast( 'USD' as abap.cuky),
          EXCHANGE_RATE_TYPE => 'M',
          EXCHANGE_RATE_DATE => b.order_date,
          ERROR_HANDLING => 'SET_TO_NULL'
        )                                               as AMOUNT @<Semantics.amount.currencyCode:'CURRENCY',
  
        cast('USD' as abap.cuky)                        as CURRENCY @<Semantics.currencyCode: true,
  
        b.luggweight @<Semantics.quantity.unitOfMeasure: 'WUNIT',
  
        b.wunit @<Semantics.unitOfMeasure: true,
  
        b.order_date,
  
        DATS_DAYS_BETWEEN(b.order_date, b.fldate)       as DAYS_AHEAD,
  
        b.agencynum,
        b.counter,
        b.customid,
  
        CONCAT_WITH_SPACE(c.form, c.name, 1)            as NAME,
        //WORKAROUND IN 7.40
        //CONCAT(CONCAT(C.FORM, ''), C.NAME) AS NAME,
  
        c.street,
        c.postcode,
        c.city,
        c.country,
        @EndUserText.label: 'Discount Factor'
        @EndUserText.quickInfo: 'customer Specific Discount Factor'
        DIVISION(cast(c.discount as abap.int4), 100, 2) as discount
  }
  where
    cancelled <> 'X'
  ```

  













```abap
@AbapCatalog.sqlViewName: 'ZCLB12_LITERAL'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Literal CDS'
define view zclb23_cds_literal
  as select from sbook
{
  carrid,
  'Hello'                                      as col_1,
  '12345'                                      as col_2,
  592562                                       as col_3,
  3457                                         as col_4,
  152                                          as col_5,
  1.7                                          as col_6,
  :S_CLASS.Y                                   as col_7,

  case
    when loccuram >= 500 then 'Expensive'
    else 'Cheep'
  end                                          as case_exp,

  case class
      when 'Y' then 'Economy'
      when 'C' then 'Business'
      when 'F' then 'First'
      else ''
  end                                          as class_text,


  2 + 10                                       as col_8,
  3 * 20                                       as col_9,

  cast(loccuram as abap.fltp) * 1.1            as adj_amt,

  case smoker
    when 'X' then cast(loccuram as abap.fltp) * 1.2
    else cast(loccuram as abap.fltp) * 0.9
    end                                        as amount,

  cast(10 as abap.fltp) / cast(2 as abap.fltp) as col_div,

  div(100,3)                                   as col_div1,
  mod(100,3)                                   as col_mod,
  concat(carrid, connid)                       as col_concat,
  concat_with_space(carrid, connid, 2)         as col_concat_space,

  dats_days_between(order_date, fldate)        as col_days,
  dats_add_days(order_date, 3, 'FAIL')         as col_add_days,
  dats_add_months(order_date, 2, 'NULL')       as col_add_mon

}

```







# Lesson 3. Understanding Nested Views





* ## CDS Views based on Other CDS Views

  * ### CDS Views as data source of other CDS Views

    Join of CDS views and join of CDS View with DB table supported

    No Technical limit of nesting depth and complexity

  * ### Improved Re-use

    e.g. calculation done in one basis view that is used in several other views instead of coding (and maintaining) identical expressions

  * ### Improved Readability

    e.g. join of 2 views that contain joins instead of a complicated join of many tables

  

<img src="img/cds114.png" alt="cds" style="zoom:75%;" />

<img src="img/cds115.png" alt="cds" style="zoom:75%;" />









* ## Exercise 8. 

  <img src="img/cds116.png" alt="cds" style="zoom:75%;" />

  <img src="img/cds117.png" alt="cds" style="zoom:75%;" />

  <img src="img/cds118.png" alt="cds" style="zoom:75%;" />











# Lesson 4. Using Aggregations in CDS Views



<img src="img/cds119.png" alt="cds" style="zoom:75%;" />





<img src="img/cds122.png" alt="cds" style="zoom:75%;" />

<img src="img/cds123.png" alt="cds" style="zoom:75%;" />

<img src="img/cds121.png" alt="cds" style="zoom:75%;" />





* ## Exercise 9.

  <img src="img/cds124.png" alt="cds" style="zoom:75%;" />

  <img src="img/cds125.png" alt="cds" style="zoom:75%;" />









# Lesson 5. Using Additional Join Types and UNION (ALL)

<img src="img/cds126.png" alt="cds" style="zoom:75%;" />

* ## Left Outer Join

  왼쪽 테이블이 기준 테이블이 되어 오른쪽 테이블에 없는 데이터라도 결과에 기준 테이블의 데이터가 모두 나오게 된다.

* ## Right Outer Join

  오른쪽 테이블이 기준 테이블이 된다.

  <img src="img/cds127.png" alt="cds" style="zoom:50%;" />

* ## Full Outer Join

  왼쪽/오른쪽 테이블 모두 서로의 데이터가 없어도 결과로 나오게 된다.

  ##### Open SQL 과 ABAP CDS에서  사용할 수 없다.

  <img src="img/cds128.png" alt="cds" style="zoom:50%;" />





<img src="img/cds129.png" alt="cds" style="zoom:50%;" />

<img src="img/cds130.png" alt="cds" style="zoom:50%;" />

<img src="img/cds131.png" alt="cds" style="zoom:50%;" />



* ## Cross Join

  Join Condition 이 없이 가능한 모든 조합으로 join 한다 즉 n*m Row의 데이터 가 생성된다.

  <img src="img/cds132.png" alt="cds" style="zoom:50%;" />

  #### 잘 사용하지 않는다.

  <img src="img/cds133.png" alt="cds" style="zoom:50%;" />





* ## Multiple Joins





* ## UNION

  중복된 데이터는 삭제된다.

  <img src="img/cds134.png" alt="cds" style="zoom:50%;" />

  <img src="img/cds135.png" alt="cds" style="zoom:50%;" />

  필드의 갯수가 동일해야 한다.

  각 필드의 타입은 동일하거나 호환이 되야 한다.

  필드 명이 동일해야 한다.

  <img src="img/cds136.png" alt="cds" style="zoom:50%;" />

  Agency 뒤의 공백은 길이를 동일하게 해주기 위함이다.





* ## UNION ALL

  중복된 데이터를 삭제하지 않는다.

  <img src="img/cds137.png" alt="cds" style="zoom:50%;" />





<img src="img/cds138.png" alt="cds" style="zoom:50%;" />











* ## Exercise 10.

  <img src="img/cds139.png" alt="cds" style="zoom:50%;" />