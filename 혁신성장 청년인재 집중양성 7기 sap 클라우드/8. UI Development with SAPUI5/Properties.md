|        ABAP         |                            ODATA                            |
| :-----------------: | :---------------------------------------------------------: |
|      Structure      |                         Entity Type                         |
|  Structure Fields   |                   Entity Type Properties                    |
|        Table        |                         Entity Set                          |
|                     |                                                             |
|        Join         |                         Association                         |
|     **차이점**      |                                                             |
| a, b 모두 가져온다. | b를 가져오라고 하는 경우만 가져온다.<br>navigation으로 호출 |





* ## Properties

  * Edm Core Type

  * Precision

  * Scale

  * Max Length

  * Unit Prop.

    단위을 연결해 준다.











/UX_TRAVEL_SRV/UX_C_Carrier_TP('AF') === > 키가 하나인 경우 검색 조건에 값만 입력해 줘도 상관 없다

/UX_TRAVEL_SRV/UX_C_Connection_TP(Carrier='AA',Connid='0400') === > 키가 여러개인 경우 필드 까지 입력해 주어야 한다.





GET - 조회(단건 다건 모두 처리)

POST - 생성

PUT - 수정

DELET - 삭제