# UNIT 10.





* ## Configuration Steps

  <img src="img/FIORI11.png" alt="FIORI" style="zoom:75%;" />

  <img src="img/FIORI12.png" alt="FIORI" style="zoom:75%;" />

  <img src="img/FIORI13.png" alt="FIORI" style="zoom:75%;" />

  **[1] Create Semantic Object in SAP Fiori Server (Front-end) server**

  **[2] Create Launchpad Role in SAP Fiori Server (Front-end) server**

  **[3] Create Business Catalog**

  **[4] Create Business Group**

  **[5] Create App’s PFCG Role in SAP Fiori Server (Front-end) server**

  * **[A] Create PFCG Role for Fiori Launchpad accessibility**

  * **[B] Create PFCG Role for SAPUI5 Application**

  - **[C] Role assignment to user-id**

   

  

  

   



* ## T-CODE

  SEMANTIC OBJECT : /UI2/SEMOBJ

  LUNCHPAD DESIGNER : /UI2/FLPD_CUST

  

  







* ## Dynamic Tile

  <img src="img/FIORI14.png" alt="FIORI" style="zoom:75%;" />









BAS에서 Front end 프로그램인 프로젝트를 생성한 후 프로젝트를 우클릭 open in terminal을 통해 terminal 창을 연다.

```ABAP
npm install

npm run build

abap-deploy

./dist 			"=> enter

sap gui 		"아이디와 비밀번호 입력

application name : zfiorib23_nav_a, zfiorib23_nav_b

description : Navigation a, Navigation b
```

위의 과정을 실행한 경우 처음 오류가 날 수 있다. 

이후 SAP GUI SE80 T-CODE를 들어가 확인해 보면

<img src="img/FIORI15.png" alt="FIORI" style="zoom:75%;" />

BSP Library에 추가된 것을 확인할 수 있다.