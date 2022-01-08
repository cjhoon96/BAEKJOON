# Unit 15. Subscreens





# Lesson 1. Creation Subscreens







```ABAP
CALL SUBSCEEN <subarea>.
  INCLUDING <program_name> <dynpro_number>
```

을 통해 서브스크린을 호출한다.





* ## Special Case -Visibility of Data

  스크린 번호를 가져오기 위해서는 TYPE sy-dynnr을 사용한다.

  SUBSCREEN은 OK_CODE를 가질 수 없다.

  

  SY-CPROG 프로그램명


  SY-DYNNR 스크린 번호

  



```ABAP
ON CHANGE OF ___

ENDON.
```

변경사항이 있을시에만 안의 로직을 탄다.