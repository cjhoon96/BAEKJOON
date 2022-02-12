# UNIT 3. SAP Business Application Studio Overview





# Lesson 1. Exploring the SAP Application Studio



* ## SAP UI5 Development Tools

  #### SAP Web IDE Full-Stack

  #### SAP Web IDE for SAP HANA

  #### SAP Web IDE Personal Edition

  #### Visual Studio Code

  

  ### SAP Business Application Studio (BAS)

  ### 권장

  

  

  

#### BAS 로 개발된 프로그램을 SAP 클라우드 또는 시스템에 배포한다.







* ## Dev Space 만들기

  <img src="img/bas11.png" alt="bas" style="zoom:75%;" />

  <img src="img/bas12.png" alt="bas" style="zoom:75%;" />

  <img src="img/bas13.png" alt="bas" style="zoom:75%;" />







* ## Project 생성

  <img src="img/bas14.png" alt="bas" style="zoom:75%;" />

  <img src="img/bas15.png" alt="bas" style="zoom:75%;" />

  <img src="img/bas16.png" alt="bas" style="zoom:75%;" />

  <img src="img/bas17.png" alt="bas" style="zoom:75%;" />

  <img src="img/bas18.png" alt="bas" style="zoom:75%;" />

  <img src="img/bas19.png" alt="bas" style="zoom:75%;" />

  <img src="img/bas20.png" alt="bas" style="zoom:75%;" />

  <img src="img/bas21.png" alt="bas" style="zoom:75%;" />

  #### view 파일을 우클릭후 *Open With... => Layout Editor* 를 통해 Layout 을 편집할 수 있다.

  <img src="img/bas22.png" alt="bas" style="zoom:75%;" />

  

  

  

  #### webapp/view/View1.view.xml
  
  ```xml
  <mvc:View
      controllerName="zclb23001.controller.View1"
      xmlns:mvc="sap.ui.core.mvc"
      displayBlock="true"
      xmlns="sap.m"
  >
      <Shell id="shell">
          <App id="app">
              <pages>
                  <Page id="page" title="{i18n>title}">
                      <content>											   //추가
                          <Text id = "idTxt" text = "Hello SAPUI5"> </Text>  //추가
                      </content>											   //추가
                  </Page>
              </pages>
          </App>
      </Shell>
  </mvc:View>
  
  ```
  
  
  
  #### 실행해 보면 view의 content의 내용이 출력된다
  
  
  
  <img src="img/bas23.png" alt="bas" style="zoom:75%;" />
  
  
  
  <img src="img/bas25.png" alt="bas" style="zoom:75%;" />
  
  #### 페이지가 열리지 않는 경우 console창을 열어 npm install을 쳐준다.









* ## 버튼 생성하기

  #### webapp/view/View1.view.xml

  ```xml
  <mvc:View
      controllerName="IITP.zclb23002.controller.View1"
      xmlns:mvc="sap.ui.core.mvc"
      displayBlock="true"
      xmlns="sap.m"
  >
      <Shell id="shell">
          <App id="app">
              <pages>
                  <Page id="page" title="{i18n>title}">
                      <content>
                          <Button id = "idBtn" text = "Click Me!!" press = "onClick"> </Button>
                      </content>
                  </Page>
              </pages>
          </App>
      </Shell>
  </mvc:View>
  ```

  #### webapp/controller/View1.controller.js

  ```javascript
  sap.ui.define([
      "sap/ui/core/mvc/Controller",
      "sap/m/MessageBox"              // sap.m 의 MessageBox 모듈을 사용하기 위해 추가
  ],
      /**
       * @param {typeof sap.ui.core.mvc.Controller} Controller
       */
      function (Controller, MessageBox) {     //
          "use strict";
  
          return Controller.extend("IITP.zclb23002.controller.View1", {
              onInit: function () {
  
              },
  
              onClick: function () {
                  //alert("Button Click");
                  MessageBox.show("Button ")
              }
          });
      });
  
  ```

  <img src="img/bas61.png" alt="bas" style="zoom:75%;" />

  <img src="img/bas60.png" alt="bas" style="zoom:75%;" />

  

  

  

  

  

* ## Connecting Cloud Applications to On-premise Systems

  https://localhost:8443/ 에 접속 후 로그인을 하고

  <img src="img/bas29.png" alt="bas" style="zoom:75%;" />

  ##### https://localhost:8443/ 

  #### Define Subaccount 의 First Subaccount 의 칸을 작성한다.

  <img src="img/bas27.png" alt="bas" style="zoom:75%;" />

  #### SAP BTP 에서 Go To Your Trial Account 로 가서 

  <img src="img/bas28.png" alt="bas" style="zoom:75%;" />

  #### 내 계정의 Region 을 확인 한 뒤

  <img src="img/bas30.png" alt="bas" style="zoom:75%;" />

  ##### https://localhost:8443/ 

  #### Search Help 를 통해 작성한다.

  <img src="img/bas31.png" alt="bas" style="zoom:75%;" />

  #### BTP의 어카운트를 클릭하여 들어가 Tenant ID를 확인 후 

  <img src="img/bas32.png" alt="bas" style="zoom:75%;" />

  ##### https://localhost:8443/ 

  #### Subaccount 에 작성해 준다.

  #### 밑에 두 칸은 BTP의 ID/PW를 작성해 준 후 SAVE 한다.

  <img src="img/bas33.png" alt="bas" style="zoom:75%;" />

  #### Cloud To On-Premise 로 가 Mapping Virtual To Internal System 과 Resource를 생성해 준다.

  <img src="img/bas34.png" alt="bas" style="zoom:75%;" />

  

  <img src="img/bas40.png" alt="bas" style="zoom:75%;" />

  <img src="img/bas41.png" alt="bas" style="zoom:75%;" />

  <img src="img/bas42.png" alt="bas" style="zoom:75%;" />

  <img src="img/bas43.png" alt="bas" style="zoom:75%;" />

  

  ### Destination 생성 

  

  <img src="img/bas44.png" alt="bas" style="zoom:75%;" />

  <img src="img/bas45.png" alt="bas" style="zoom:75%;" />

  <img src="img/bas46.png" alt="bas" style="zoom:75%;" />

  <img src="img/bas47.png" alt="bas" style="zoom:75%;" />

  ### Name

  #### Destination의 이름 

  ### Type

  #### Destination이 http / mail / RFC 타입인지 작성한다.

  ### URL

  #### localhost의 Mapping Virtual To Internal System의 Virtual host를 확인후 작성한다.

  

  #### 

  <img src="img/bas48.png" alt="bas" style="zoom:75%;" />

  #### 응답을 기다리는 최대 시간을 millisecond로 작성한다.

  <img src="img/bas49.png" alt="bas" style="zoom:75%;" />
  
  #### HTML 5 어플리케이션 런타임을 적용하면 호스트 또는 경로 레벨에서 이 대상을 동적으로 사용할 수 있다.
  
  <img src="img/bas50.png" alt="bas" style="zoom:75%;" />
  
  #### HTML 5 어플리케이션 런타임이 백엔드 요청에서 SAP-CLIENT와 해당 값을 헤더로 전파
  
  <img src="img/bas51.png" alt="bas" style="zoom:75%;" />
  
  #### 대상을 SAP Business Application Studio에 공개
  
  <img src="img/bas52.png" alt="bas" style="zoom:75%;" />
  
  #### dev_abap - 확장성 시나리오 지원, SAP UI5 ABAP 저장소로의 개발 또는 배포 
  
  #### odata_abap - SAP Gateway의 ODATA기능
  
  #### 공백 없이 쉼표로 구분한다.
  
  
  
  <img src="img/bas53.png" alt="bas" style="zoom:75%;" />
  
  <img src="img/bas54.png" alt="bas" style="zoom:75%;" />
  
  <img src="img/bas55.png" alt="bas" style="zoom:75%;" />
  
  <img src="img/bas56.png" alt="bas" style="zoom:75%;" />
  
  <img src="img/bas57.png" alt="bas" style="zoom:75%;" />
  
  <img src="img/bas58.png" alt="bas" style="zoom:75%;" />

  #### 처음에는 오류 나는 경우가 많다.

  <img src="img/bas59.png" alt="bas" style="zoom:75%;" />

  

  

  

  210.16.199.140

  edu.bgis.co.kr

  8001

  
  
  
  
  
  
  
  
  
  
  <img src="img/bas.png" alt="bas" style="zoom:75%;" />

​       
