   TABL ZSBOOKING_B23 was not activated
   Check table ZSBOOKING_B23 (CL-B-23/21-12-16/16:17)
   Enhancement category for table missing
   Enhancement category for include or subtype missing
   Field name DAYS is reserved (Do not use structure as include in DB table)
   ZSBOOKING_B23-LOCCURAM (specify reference table AND reference field)









 \- ALV Layout 에 ZEBRA 기능 추가 

- Row, Column 선택이 가능 하도록 한다. 
- 출발 전 예약 일수 필드의 컬럼 명은 Days 로 나타나도록 한다. 
- ***ALV 출력시 Default 로 Customer Name(고객 성명)이 오름차순(Ascending)으로 정렬되어 보이도록 한다.***
- Standard Toolbar 의 BACK 버튼 클릭 시 이전 화면으로 돌아간다.

- Standard Toolbar 의 EXIT 버튼 클릭 시 해당 프로그램을 종료한다. - Standard Toolbar 의 Cancel 버튼 클릭 시 이전 화면으로 돌아간다. 

- Exception(Icon) 필드 추가 Exception Field 이름은 Status 로 보여준다. 출발 전 예약 일수(Days)필드의 값이 50 일 이하이면 붉은색 아이콘 , 50 일보다 크고 100 일 이하이면 노락색 아이콘 , 100 일 보다 크면 연두색 아이콘으로 표시한다. (Hint: ALV 의 Layout Structure 의 EXCP_FNAME, EXCP_LED 필드 설정) 

- 예약 취소된 라인에 대하여 붉은색으로 표시한다. (Hint: ALV 의 Layout Structure 의 INFO_FNAME 필드 설정, Color 상수값: C610)

 ***\- 출발 전 예약 일수(Days)필드 의 값이 150 일 이상인 라인의 Days 컬럼의 배경색을 연두색으로 보여준다. (Hint: ALV 의 Layout Structured 의 CTAB_FNAME 필드 설정: Color 상수값: C510)***

 **- 기존의 Cancelled 필드에는 ‘X’값이 출력 되고 있다. 해당 필드를 ‘X’ 대신에 Cancel Icon (Icon Name: ICON_CANCEL)으로 보여준다. (Hint: 기존 필드는 숨김 처리(Field Catalog 의 NO_OUT 필드 설정), 신규 필드를 추가 후 Field Catalog 의 ICON 필드 설정**