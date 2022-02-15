# UNIT 12. OData Model





# Lesson 1. Consuming OData Services with SAPUI5





* ## 실습

  Cloud Connector 의 연결 상태를 확인 하여 데이터를 가져 올 수 있는지를 확인한다.

  <img src="/img/OData4.png" alt="OData" style="zoom:80%;" />

  사용할 OData 모델의 주소를 확인한다.

  <img src="/img/OData5.png" alt="OData" style="zoom:80%;" />
  
  #### http://edu.bgis.co.kr:8001/sap/opu/odata/sap/ux_travel_srv/?$format=json
  
  ```json
  {
    "d": {
      "EntitySets": [
        "UX_C_Booking_TP",
        "UX_C_Carrier_TP",
        "UX_C_Connection_TP",
        "UX_C_Flight_TP"
      ]
    }
  }
  ```
  
  실습에서 연결한 **ux_travel_srv** 데이터의 구조를 살펴 보면 내부에 "UX_C_Booking_TP", "UX_C_Carrier_TP", "UX_C_Connection_TP", "UX_C_Flight_TP" 가 있음을 확인할 수 있다.
  
  /UX_C_Carrier_TP 를 통해  OData http://edu.bgis.co.kr:8001/sap/opu/odata/sap/ux_travel_srv/UX_C_Carrier_TP  로 접근한다.
  
  
  
  이 모델의 구조는 
  
  ```json
  [
    {
      "__metadata": {
        "id": "http://edu.bgis.co.kr:8001/sap/opu/odata/sap/ux_travel_srv/UX_C_Carrier_TP('AA')",
        "uri": "http://edu.bgis.co.kr:8001/sap/opu/odata/sap/ux_travel_srv/UX_C_Carrier_TP('AA')",
        "type": "UX_TRAVEL_SRV.UX_C_Carrier_TPType"
      },
      "Carrid": "AA",
      "Carrname": "American Airlines",
      "Currcode": "USD",
      "Url": "http://www.aa.com",
  
      "to_Booking": {
        "__deferred": {
          "uri": "http://edu.bgis.co.kr:8001/sap/opu/odata/sap/ux_travel_srv/UX_C_Carrier_TP('AA')/to_Booking"
        }
      },
      "to_Connection": {
        "__deferred": {
          "uri": "http://edu.bgis.co.kr:8001/sap/opu/odata/sap/ux_travel_srv/UX_C_Carrier_TP('AA')/to_Connection"
        }
      },
      "to_Flight": {
        "__deferred": {
          "uri": "http://edu.bgis.co.kr:8001/sap/opu/odata/sap/ux_travel_srv/UX_C_Carrier_TP('AA')/to_Flight"
        }
      }
    },
      
    ...
    ...
    ...
      
  ]
  ```
  
  의 구조로 Property (field) 로 **Carrid, Carrname, Currname, Currcode, Url**을 가지고 있으며 
  
  **Association** 을 통해 "UX_C_Booking_TP", "UX_C_Connection_TP", "UX_C_Flight_TP" 의 데이터와 연결 되어 있다.
  
  이 데이터들은 **to_Booking / to_Connection / to_Flight** 를 통해 접근 할 수 있으며 
  
  이는  http://edu.bgis.co.kr:8001/sap/opu/odata/sap/ux_travel_srv/UX_C_Carrier_TP('AA')/to_Booking 즉 현 Array Element 의 Carrid(현 데이터의 key 값) 과 일치하는 "UX_C_Booking_TP", "UX_C_Connection_TP", "UX_C_Flight_TP"의 데이터 들을 호출하게 된다.
  
  OData Model 은 JSON Model 을 사용할 때와 동일하게 Property Binding, Element Binding, Aggregation Binding 모두 동일한 방법으로 사용 할 수 있다.
  
  
  
  #### iitp.zclb23_020/webapp/view/View1.view.xml
  
  ```xml
  <mvc:View
      controllerName="iitp.zclb23020.controller.View1"
      xmlns:mvc="sap.ui.core.mvc"
      displayBlock="true"
      xmlns="sap.m"
  >
      <Shell id="shell">
          <App id="app">
              <pages>
                  <Page id="page" title="{i18n>title}">
                      <content>
                          <Table id="idCarrid" items="{/UX_C_Carrier_TP}">
                              <columns>
                                  <Column id="colCarrid">
                                      <header>
                                          <Text id="txtCarrid" text="Airline Code"/>
                                      </header>
                                  </Column>
                                  
                                  <Column id="colName">
                                      <header>
                                          <Text id="txtName" text="Airline Name"/>
                                      </header>
                                  </Column>
                                  
                                  <Column id="colCurrcode">
                                      <header>
                                          <Text id="txtCurrcode" text="Currency Code"/>
                                      </header>
                                  </Column>
                                  
                                  <Column id="colURL">
                                      <header>
                                          <Text id="txtURL" text="URL"/>
                                      </header>
                                  </Column>
                              </columns>
  
                              <items>
                                  <ColumnListItem id="colListCarrier">
                                      <cells>
                                          <Text id="txtCarrCell" text="{Carrid}"/>
                                          <Text id="txtNameCell" text="{Carrname}"/>
                                          <Text id="txtCurrCell" text="{Currcode}"/>
                                          <Text id="txtURLCell" text="{Url}"/>
                                      </cells>
                                  </ColumnListItem>
                              </items>
                          </Table>
                      </content>
                  </Page>
              </pages>
          </App>
      </Shell>
  </mvc:View>
  ```
  
  <img src="/img/OData6.png" alt="OData" style="zoom:67%;" />





















* ## 과제 zdayb2304

  ```xml
  <mvc:View
      controllerName="iitp.cjh.zdayb2304.controller.View1"
      xmlns:mvc="sap.ui.core.mvc"
      displayBlock="true"
      xmlns="sap.m"
      xmlns:core="sap.ui.core"
      xmlns:t="sap.ui.table"
      xmlns:f="sap.ui.layout.form"
  >
      <Shell id="shell">
          <App id="app">
              <pages>
                  <Page id="page" title="{i18n>title}">
                      <content>
                          <t:Table    id="MainTable" 
                                      rows="{/UX_C_Carrier_TP}" 
                                      rowSelectionChange="onRowChange" 
                                      selectionMode="Single"
                                      selectionBehavior="Row"
                                      visibleRowCount="5"
                                      title="Carrier">
                              <t:columns>
                                  <t:Column id="colCarrid">
                                      <t:label>
                                          <Text id="lblCarrid" text="Airline Code"/>
                                      </t:label>
                                      <t:template>
                                          <Text id="tplCarrid" text="{Carrid}"/>
                                      </t:template>
                                  </t:Column>
                                  
                                  <t:Column id="colCarrname">
                                      <t:label>
                                          <Text id="lblCarrname" text="Airline Name"/>
                                      </t:label>
                                      <t:template>
                                          <Text id="tplCarrname" text="{Carrname}"/>
                                      </t:template>
                                  </t:Column>
                                  
                                  <t:Column id="colCurrcode">
                                      <t:label>
                                          <Text id="lblCurrcode" text="Currency Code"/>
                                      </t:label>
                                      <t:template>
                                          <Text id="tplCurrcode" text="{Currcode}"/>
                                      </t:template>
                                  </t:Column>
                                  
                                  <t:Column id="colUrl">
                                      <t:label>
                                          <Text id="lblUrl" text="URL"/>
                                      </t:label>
                                      <t:template>
                                          <Text id="tplUrl" text="{Url}"/>
                                      </t:template>
                                  </t:Column>
                              </t:columns>
                          </t:Table>
                          
                          <t:Table    id="SubTable" 
                                      rows="{to_Connection}"
                                      rowSelectionChange="onConnChange" 
                                      selectionMode="Single"
                                      selectionBehavior="Row"
                                      visibleRowCount="5"
                                      title="Flight Connection">
                              <t:columns>
                                  <t:Column id="colConnid">
                                      <t:label>
                                          <Text id="lblConnid" text="Connection ID"/>
                                      </t:label>
                                      <t:template>
                                          <Text id="tplConnid" text="{Connid}"/>
                                      </t:template>
                                  </t:Column>
                                  
                                  <t:Column id="colCityfrom">
                                      <t:label>
                                          <Text id="lblCityfrom" text="City From"/>
                                      </t:label>
                                      <t:template>
                                          <Text id="tplCityfrom" text="{Cityfrom}"/>
                                      </t:template>
                                  </t:Column>
                                  
                                  <t:Column id="colAirpfrom">
                                      <t:label>
                                          <Text id="lblAirpfrom" text="Airport From"/>
                                      </t:label>
                                      <t:template>
                                          <Text id="tplAirpfrom" text="{Airpfrom}"/>
                                      </t:template>
                                  </t:Column>
                                  
                                  <t:Column id="colCityto">
                                      <t:label>
                                          <Text id="lblCityto" text="City To"/>
                                      </t:label>
                                      <t:template>
                                          <Text id="tplCityto" text="{Cityto}"/>
                                      </t:template>
                                  </t:Column>
                                  
                                  <t:Column id="colAirpto">
                                      <t:label>
                                          <Text id="lblAirpto" text="Airport To"/>
                                      </t:label>
                                      <t:template>
                                          <Text id="tplAirpto" text="{Airpto}"/>
                                      </t:template>
                                  </t:Column>
                              </t:columns>
                          </t:Table>
                          <Panel id="infoPanel" expandable="true" expand="true" headerText="Connection Information">
                              <f:SimpleForm id="smpleForm">
                                  <f:content>
                                      <core:Title id="titleFlInfo" text="Flight Info"/>
                                      <Label id="lblCarr" text="Airline Code"/>
                                      <Text id="txtCarrid" text="{Carrid}"/>
                                      <Label id="lblConn" text="Connection ID"/>
                                      <Text id="txtConnid" text="{Connid}"/>
                                      
                                      <core:Title id="titleDeparture" text="Departure Info"/>
                                      <Label id="lblFrom" text="City From"/>
                                      <Text id="txtCityFrom" text="{Cityfrom}"/>
                                      <Label id="lblAirfrom" text="Airport From"/>
                                      <Text id="txtAirpfrom" text="{Airpfrom}"/>
                                      
                                      <core:Title id="titleDestination" text="Destination Info"/>
                                      <Label id="lblTo" text="City To"/>
                                      <Text id="txtCityTo" text="{Cityto}"/>
                                      <Label id="lblAirto" text="Airport To"/>
                                      <Text id="txtAirpto" text="{Airpto}"/>
                                  </f:content>
                              </f:SimpleForm>
                          </Panel>
                      </content>
                  </Page>
              </pages>
          </App>
      </Shell>
  </mvc:View>
  
  ```

  ```js
  sap.ui.define([
      "sap/ui/core/mvc/Controller",
      "sap/ui/model/Filter"
  ],
      /**
       * @param {typeof sap.ui.core.mvc.Controller} Controller
       */
      function (Controller, Filter) {
          "use strict";
  
          return Controller.extend("iitp.cjh.zdayb2304.controller.View1", {
              onInit: function () {
                  // var carrUrl = "/sap/opu/odata/sap/UX_TRAVEL_SRV/UX_C_Carrier_TP";
                  // var connUrl = "/sap/opu/odata/sap/ux_travel_srv/UX_C_Connection_TP"
                  // var oModelCarr = new ODataModel(carrUrl);
                  // var oModelConn = new OdataModel(connUrl);
              },
  
              onRowChange: function (oEvent) {
                  // var oContext = oEvent.getSource().getBindingContext();
                  // var oContext = oEvent.getParameters().rowContext;
                  // var oModel = oEvent.getSource().getModel();
                  // var selCarrid = oModel.getProperty("Carrid", oContext);
                  // console.log(oContext);
                  // console.log(oModel)
                  // var oFilter = new Filter(
                  //     "Carrid",
                  //     "EQ",
                  //     selCarrid
                  // );
  
                  // var oTable = this.getView().byId("SubTable");
                  // oTable.getBinding("rows").filter(oFilter);
                  var sPath = oEvent.getParameters().rowContext.getPath();
                  var oTable = this.byId("SubTable");
                  oTable.bindElement(sPath)
              },
  
              onConnChange: function (oEvent) {
                  var oContext = oEvent.getParameters().rowContext.getPath();
                  var oTarget = this.byId("infoPanel");
                  oTarget.bindElement(oContext);
              }
          });
      });
  
  ```

  <img src="/img/OData9.png" alt="OData" style="zoom:67%;" />

  

  

  

  

  

* ## 과제 zdayb2304_combo

  ```xml
  <mvc:View
      controllerName="iitp.cjh.zdayb2304combo.controller.View1"
      xmlns:mvc="sap.ui.core.mvc"
      displayBlock="true"
      xmlns="sap.m"
      xmlns:core="sap.ui.core"
      xmlns:t="sap.ui.table"
      xmlns:f="sap.ui.layout.form"
  >
      <Shell id="shell">
          <App id="app">
              <pages>
                  <Page id="page" title="{i18n>title}">
                      <content>
                          <ComboBox id="comboBox" items="{/UX_C_Carrier_TP}" selectionChange="onChange">
                              <items>
                                  <core:ListItem id="item" text="{Carrid}"></core:ListItem>
                              </items>
                          </ComboBox>
                          
                          <t:Table    id="SubTable" 
                                      rows="{to_Connection}"
                                      rowSelectionChange="onConnChange" 
                                      selectionMode="Single"
                                      selectionBehavior="Row"
                                      visibleRowCount="5"
                                      title="Flight Connection">
                              <t:columns>
                                  <t:Column id="colConnid">
                                      <t:label>
                                          <Text id="lblConnid" text="Connection ID"/>
                                      </t:label>
                                      <t:template>
                                          <Text id="tplConnid" text="{Connid}"/>
                                      </t:template>
                                  </t:Column>
                                  
                                  <t:Column id="colCityfrom">
                                      <t:label>
                                          <Text id="lblCityfrom" text="City From"/>
                                      </t:label>
                                      <t:template>
                                          <Text id="tplCityfrom" text="{Cityfrom}"/>
                                      </t:template>
                                  </t:Column>
                                  
                                  <t:Column id="colAirpfrom">
                                      <t:label>
                                          <Text id="lblAirpfrom" text="Airport From"/>
                                      </t:label>
                                      <t:template>
                                          <Text id="tplAirpfrom" text="{Airpfrom}"/>
                                      </t:template>
                                  </t:Column>
                                  
                                  <t:Column id="colCityto">
                                      <t:label>
                                          <Text id="lblCityto" text="City To"/>
                                      </t:label>
                                      <t:template>
                                          <Text id="tplCityto" text="{Cityto}"/>
                                      </t:template>
                                  </t:Column>
                                  
                                  <t:Column id="colAirpto">
                                      <t:label>
                                          <Text id="lblAirpto" text="Airport To"/>
                                      </t:label>
                                      <t:template>
                                          <Text id="tplAirpto" text="{Airpto}"/>
                                      </t:template>
                                  </t:Column>
                              </t:columns>
                          </t:Table>
                          <Panel id="infoPanel" expandable="true" expand="true" headerText="Connection Information">
                              <f:SimpleForm id="smpleForm">
                                  <f:content>
                                      <core:Title id="titleFlInfo" text="Flight Info"/>
                                      <Label id="lblCarr" text="Airline Code"/>
                                      <Text id="txtCarrid" text="{Carrid}"/>
                                      <Label id="lblConn" text="Connection ID"/>
                                      <Text id="txtConnid" text="{Connid}"/>
                                      
                                      <core:Title id="titleDeparture" text="Departure Info"/>
                                      <Label id="lblFrom" text="City From"/>
                                      <Text id="txtCityFrom" text="{Cityfrom}"/>
                                      <Label id="lblAirfrom" text="Airport From"/>
                                      <Text id="txtAirpfrom" text="{Airpfrom}"/>
                                      
                                      <core:Title id="titleDestination" text="Destination Info"/>
                                      <Label id="lblTo" text="City To"/>
                                      <Text id="txtCityTo" text="{Cityto}"/>
                                      <Label id="lblAirto" text="Airport To"/>
                                      <Text id="txtAirpto" text="{Airpto}"/>
                                  </f:content>
                              </f:SimpleForm>
                          </Panel>
                      </content>
                  </Page>
              </pages>
          </App>
      </Shell>
  </mvc:View>
  ```

  ```js
  sap.ui.define([
      "sap/ui/core/mvc/Controller",
      "sap/ui/model/Filter"
  ],
      /**
       * @param {typeof sap.ui.core.mvc.Controller} Controller
       */
      function (Controller, Filter) {
          "use strict";
  
          return Controller.extend("iitp.cjh.zdayb2304combo.controller.View1", {
              onInit: function () {
                  // var carrUrl = "/sap/opu/odata/sap/UX_TRAVEL_SRV/UX_C_Carrier_TP";
                  // var connUrl = "/sap/opu/odata/sap/ux_travel_srv/UX_C_Connection_TP"
                  // var oModelCarr = new ODataModel(carrUrl);
                  // var oModelConn = new OdataModel(connUrl);
              },
  
              onChange: function (oEvent) {
                  var sPath = oEvent.getParameter("selectedItem").getBindingContext().getPath();
                  var oTable = this.byId("SubTable");
                  oTable.bindElement(sPath)
              },
  
              onConnChange: function (oEvent) {
                  var oContext = oEvent.getParameters().rowContext.getPath();
                  var oTarget = this.byId("infoPanel");
                  oTarget.bindElement(oContext);
              }
          });
      });
  
  
  ```

  <img src="/img/OData10.png" alt="OData" style="zoom:67%;" />

  

  

  

  

  

* ## 과제 zdayb2305

  ```xml
  <mvc:View
      controllerName="iitp.zdayb2305.controller.View1"
      xmlns:mvc="sap.ui.core.mvc"
      displayBlock="true"
      xmlns="sap.m"
      xmlns:core="sap.ui.core"
      xmlns:t="sap.ui.table"
      xmlns:f="sap.ui.layout.form"
  >
      <Shell id="shell">
          <App id="app">
              <pages>
                  <Page id="page" title="{i18n>title}">
                      <content>
                          <t:Table    id="MainTable" 
                                      rows="{/Product}" 
                                      rowSelectionChange="onRowChange" 
                                      selectionMode="Single"
                                      selectionBehavior="Row"
                                      visibleRowCount="10"
                                      title="Carrier">
                              <t:columns>
                                  <t:Column id="colProduct">
                                      <t:label>
                                          <Text id="lblProduct" text="Product"/>
                                      </t:label>
                                      <t:template>
                                          <Text id="tplProduct" text="{Product}"/>
                                      </t:template>
                                  </t:Column>
                                  
                                  <t:Column id="colProductName">
                                      <t:label>
                                          <Text id="lblProductName" text="Product Name"/>
                                      </t:label>
                                      <t:template>
                                          <Text id="tplProductName" text="{ProductName}"/>
                                      </t:template>
                                  </t:Column>
                                  
                                  <t:Column id="colPrice">
                                      <t:label>
                                          <Text id="lblPrice" text="Price"/>
                                      </t:label>
                                      <t:template>
                                          <Text id="tplPrice" text="{Price}"/>
                                      </t:template>
                                  </t:Column>
                                  
                                  <t:Column id="colCurrency">
                                      <t:label>
                                          <Text id="lblCurrency" text="Currency"/>
                                      </t:label>
                                      <t:template>
                                          <Text id="tplCurrency" text="{Currency}"/>
                                      </t:template>
                                  </t:Column>
                              </t:columns>
                          </t:Table>
                          <Panel id="infoPanel" expandable="true" expand="true" headerText="Product Information">
                              <f:SimpleForm id="smpleForm">
                                  <f:content>
                                      <core:Title id="titleProdInfo" text="Product Info"/>
                                      <Label id="lblPrdct" text="Product"/>
                                      <Text id="txtProduct" text="{Product}"/>
                                      <Label id="lblPrdctName" text="Product Name"/>
                                      <Text id="txtProductName" text="{ProductName}"/>
                                      <Label id="lblPrc" text="Price"/>
                                      <Text id="txtPrice" text="{Price}"/>
                                      <Text id="txtCurrency" text="{Currency}"/>
                                      
                                      <core:Title id="titleImg" text="Product Image"/>
                                      <Label id="lblProductPictureURL" text="Photo"/>
                                      <Image id="Photo" src="{ProductPictureURL}"></Image>
                                  </f:content>
                              </f:SimpleForm>
                          </Panel>
                      </content>
                  </Page>
              </pages>
          </App>
      </Shell>
  </mvc:View>
  
  ```

  ```js
  sap.ui.define([
      "sap/ui/core/mvc/Controller"
  ],
      /**
       * @param {typeof sap.ui.core.mvc.Controller} Controller
       */
      function (Controller) {
          "use strict";
  
          return Controller.extend("iitp.zdayb2305.controller.View1", {
              onInit: function () {
  
              },
  
              onRowChange: function (oEvent) {
                  var oContext = oEvent.getParameters().rowContext.getPath();
                  var oTarget = this.byId("infoPanel");
                  oTarget.bindElement(oContext);
              }
          });
      });
  
  ```

  <img src="/img/OData7.png" alt="OData" style="zoom:67%;" />

  <img src="/img/OData8.png" alt="OData" style="zoom:67%;" />
