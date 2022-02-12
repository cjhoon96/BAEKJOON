# UNIT 9. Models and Data Binding





# Lesson 1. Exploring Models and Data Binding





* ## Models

  ### Client-Side Model

  Client 단 (Web Browser) 에서만 처리되는 모델

  * #### JSON Model

  * #### XML Model

  * #### Resource Model
  
  
  
  ### Server-Side Model
  
  Client의 요청에 따라 Server 측의 실제의 Transaction Data Model
  
  * #### OData Model
  
  
  
  
  
  







* ## Binding Modes

  ### One-Way

  처음 모델이 가진 값을 뷰에 표현하고 나중에 모델이 변경되더라도 업데이트 되지 않는다.

  ### Two-Way

  모델을 뷰에 바인딩함과 동시에 이후 모델이 변경되는 경우를 감지하여 지속적으로 뷰를 업데이트 해준다.

  ### One-Time

  단 한번만 바인딩이 되고 이후로는 연결이 끊어지게 되서 모델이 변경되어도 뷰는 영향을 받지 않는다.

  | Model          | One-Way | Two-Way | One-Time |
  | :------------- | :-----: | :-----: | :------: |
  | Resource Model |   __    |   __    |    X     |
  | JSON Model     |    X    |    X    |    X     |
  | XML Model      |    X    |    X    |    X     |
  | OData Model    |    X    |    X    |    X     |

  

  ### Default Binding Mode of Models

  | Model          | Default Binding Mode |
  | :------------- | :------------------: |
  | Resource Model |       one-time       |
  | JSON Model     |       two-way        |
  | XML Model      |       two-way        |
  | OData Model    |       one-way        |

  

  

  

  

* ## Binding Types

  ### Property Binding

  ### Aggregation Binding

  Key값으로 value로 

  ### Element Binding

  

  

  

  

  

  







* ## JSON Model

  model 폴더에 json 파일을 생성하여 정의하거나 controller onInit 에서 정의하여 사용 

  controller init에서 

  ```js
  onInit: function () {
      var oModel = new sap.ui.model.json.JSONModel();
  
      oModel.setData({
          ket: Value
      });
      //or
      oModel.loadData("model/data.json", "model name");
      
      var oView = this.getView();
      oView.setModel(oModel);
  }
  
  ```

  코드를 이용해 view와 연결해준다.

  model name 은 생략이 가능하며 주로 여러 model을 사용할때 정의해주며 binding 할 경우  ***"{\_model name_>/ ...}"*** 형식으로 사용한다.







* ## Property Binding

  특정 Property(속성) 1개를 연동시키는 binding을 말한다.

  * ### Property Binding 실습1 zclb23_012

    ```js
    sap.ui.define([
        "sap/ui/core/mvc/Controller"
    ],
        /**
         * @param {typeof sap.ui.core.mvc.Controller} Controller
         */
        function (Controller) {
            "use strict";
    
            return Controller.extend("iitp.zclb23012.controller.View", {
                onInit: function () {
                    var oData = {
                        lastName: "Hong",
                        firstName: "Gil-Dong"
                    };
    
                    var oModel = new sap.ui.model.json.JSONModel();	//onInit에서 정의한 데이터를 JSONModel 객체에 
                    oModel.setData(oData);							//할당할 경우 setData 구문을 사용한다.
                    this.getView().setModel(oModel);
                }
            });
        });
    ```

    ```xml
    <mvc:View
        controllerName="iitp.zclb23012.controller.View"
        xmlns:mvc="sap.ui.core.mvc"
        displayBlock="true"
        xmlns="sap.m"
    >
        <Shell id="shell">
            <App id="app">
                <pages>
                    <Page id="page" title="{i18n>title}">
                        <content>
                            <Input id="inpLastName" value="{/lastName}"/>
                            <Input id="inpFirstName" value="{/firstName}"/>
                        </content>
                    </Page>
                </pages>
            </App>
        </Shell>
    </mvc:View>
    ```

    <img src="/img/binding3.png" alt="binding" style="zoom:80%;" />

  * ### Property Binding 실습2 zclb23_013

    ```json
    {
        "lastName": "Hong",
        "firstName": "Gil-Dong",
        "enabled": true
    }
    ```

    ```js
    sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ],
        /**
         * @param {typeof sap.ui.core.mvc.Controller} Controller
         */
        function (Controller, JSONModel) {
            "use strict";
    
            return Controller.extend("iitp.zclb23013.controller.View1", {
                onInit: function () {
                    var oModel = new JSONModel(); 			//model 폴더의 json 파일에서 정의한 경우
                    oModel.loadData("../model/data.json");	//loadData를 사용하여 경로를 통해 json 파일을 가져와 로드한다.
                    				//"model/data.json" 도 가능 
                    this.getView().setModel(oModel);
                }
            });
        });
    ```

    ```xml
    <mvc:View
        controllerName="iitp.zclb23013.controller.View1"
        xmlns:mvc="sap.ui.core.mvc"
        displayBlock="true"
        xmlns="sap.m"
    >
        <Shell id="shell">
            <App id="app">
                <pages>
                    <Page id="page" title="{i18n>title}">
                        <content>
                            <Input id="inpLname" value="{/lastName}"/>
                            <Input id="inpFname" value="{/firstName}"/>
                            <CheckBox id="chk1" text="Check Box1" selected="{/enabled}"/>
                        </content>
                    </Page>
                </pages>
            </App>
        </Shell>
    </mvc:View>
    ```

    

    

    

    

  * ## Exercise 9.

    ```js
    sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ],
        /**
         * @param {typeof sap.ui.core.mvc.Controller} Controller
         */
        function (Controller, JSONModel) {
            "use strict";
    
            return Controller.extend("sap.training.propertybinding.controller.View1", {
                onInit: function () {
                    var oData = {
                        "name": "Peter",
                        "enabled": true
                    };
    
                    var oModel = new JSONModel(); 		//onInit에서 정의한 데이터를 JSONModel 객체에 할당할 경우
                    oModel.setData(oData);				//setData 구문을 사용한다.
                    this.getView().setModel(oModel);
                }
            });
        });
    ```

    

    ```xml
    <mvc:View
        controllerName="sap.training.propertybinding.controller.View1"
        xmlns:mvc="sap.ui.core.mvc"
        displayBlock="true"
        xmlns="sap.m"
        xmlns:l="sap.ui.layout"
    >
        <Shell id="shell">
            <App id="app">
                <pages>
                    <Page id="page" title="{i18n>title}">
                        <l:VerticalLayout id="idVerti">
                            <l:content>
                                <RadioButton id="rdBtn1" groupName="GroupA" selected="{/enabled}" text="Change"/>
                                <RadioButton id="rdBtn2" groupName="GroupA" text="Change"/>
                                <Input id="idInpt" enabled="{/enabled}" value="{/name}" valueLiveUpdate="true"/>
                                <Text id="idTxt" text="{/name}"/>
                            </l:content>
                        </l:VerticalLayout>
                    </Page>
                </pages>
            </App>
        </Shell>
    </mvc:View>
    ```

    <img src="/img/binding1.png" alt="binding" style="zoom:80%;" /><img src="/img/binding2.png" alt="binding" style="zoom:80%;" />

    #### 태그 내부의 각 property 들에 ***{\_경로_}*** 를 통해 binding 하고 있다.

    #### 가장 기본 적인 바인딩







* ## Aggregation Binding

  Child control을 자동으로 생성하는 경우에 사용되며 데이터 집합(Model)에 존재하는 여러 Key중 데이터 값이 배열([])인 경우 Key를 대상임 참고로 위에서 설명한 Context binding와 List Binding 둘 다 Binding context 개념은 동일하나 Context Binding은 단건 항목에 대해 처리하는 것이고 Lis Binding은 다중 항목에 대해 처리하는 것이라고 볼 수 있음

  모델 데이터에 따라 하위 컨트롤을 자동으로 생성할 수 있습니다.

  예를 들어 \<List> 태그의 propery items 에 {"/data"} 와 같이 binding을 할경우 하위에 있는 모든  데이터를 
  
  ```xml
  <StandardListItem id="stdListItem" title="{name}" description="{city}"></StandardListItem>
  ```

  와 같은 한줄을 통해 모두 binding 할 수 있다.

  

  

  

  * ## Aggregation Binding 실습1 zclb23_014
  
    ```js
    sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ],
        /**
         * @param {typeof sap.ui.core.mvc.Controller} Controller
         */
        function (Controller, JSONModel) {
            "use strict";
    
            return Controller.extend("zclb23014.controller.View1", {
                onInit: function () {
                    let oData = {
                        "companies": [
                            {"name": "SAP SE", "city": "Walldorf"},
                            {"name": "Beam Hdg.", "city": "Hancock"},
                            {"name": "Carot Ltd.", "city": "Cheshire"},
                            {"name": "Acm Inc.", "city": "Belmont"},
                            {"name": "BMW AG", "city": "Muchen"},
                        ]
                    };
                    let oModel = new sap.ui.model.json.JSONModel();
                    oModel.setData(oData);
                    this.getView().setModel(oModel);
                }
            });
        });
    
    ```
  
    ```xml
    <mvc:View
        controllerName="zclb23014.controller.View1"
        xmlns:mvc="sap.ui.core.mvc"
        displayBlock="true"
        xmlns="sap.m"
    >
        <Shell id="shell">
            <App id="app">
                <pages>
                    <Page id="page" title="{i18n>title}">
                        <content>
                            <List id="idList" items="{/companies}"> 
                                <items>
                                    <StandardListItem id="stdListItem" title="{name}" description="{city}"></StandardListItem> <!--종속적인 데이터를 binding 할때는 /를 생략한다.-->
                                </items>
                            </List>
                        </content>
                    </Page>
                </pages>
            </App>
        </Shell>
    </mvc:View>
    ```

    

  * ## Aggregation Binding 실습2 zclb23_015
  
    ```js
    sap.ui.define([
        "sap/ui/core/mvc/Controller"
    ],
        /**
         * @param {typeof sap.ui.core.mvc.Controller} Controller
         */
        function (Controller) {
            "use strict";
    
            return Controller.extend("iitp.zclb23015.controller.View1", {
                onInit: function () {
                    let oData = {
                        "companies": [
                            {"name": "SAP SE", "city": "Walldorf"},
                            {"name": "Beam Hdg.", "city": "Hancock"},
                            {"name": "Carot Ltd.", "city": "Cheshire"},
                            {"name": "Acm Inc.", "city": "Belmont"},
                            {"name": "BMW AG", "city": "Muchen"},
                        ]
                    };
                    let oModel = new sap.ui.model.json.JSONModel();
                    oModel.setData(oData);
                    this.getView().setModel(oModel);
                }
            });
        });
    
    ```
  
    ```xml
    <mvc:View
        controllerName="iitp.zclb23015.controller.View1"
        xmlns:mvc="sap.ui.core.mvc"
        displayBlock="true"
        xmlns="sap.m"
    >
        <Shell id="shell">
            <App id="app">
                <pages>
                    <Page id="page" title="{i18n>title}">
                        <content>
                            <Table id="tabList" items="{/companies}">
                                <columns>
    
                                    <Column id="colName">
                                        <header>
                                            <Text id="colNameTxt" text="Company Name"/>
                                        </header>
                                    </Column>
                                    
                                    <Column id="colCity">
                                        <header>
                                            <Text id="colCityTxt" text="City"/>
                                        </header>
                                    </Column>
    
                                </columns>
    
                                <items>
                                    <ColumnListItem  id="colList">
                                        <cells>
                                            <Text id="celNameTxt" text="{name}"/>
                                            <Text id="celCityTxt" text="{city}"/>
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

    <img src="/img/binding5.png" alt="binding" style="zoom:80%;" />

    

    

  * ## Exercise 10.
  
    ```json
    {
        "data": [
                    {"carrid": "AA", "connid": "0017", "cityFrom": "NewYork", "cityTo": "San Fransisco"},
                    {"carrid": "AZ", "connid": "0555", "cityFrom": "Rome", "cityTo": "Frankfurt"},
                    {"carrid": "DL", "connid": "0106", "cityFrom": "NewYork", "cityTo": "Frankfurt"},
                    {"carrid": "JL", "connid": "0407", "cityFrom": "Tokyo", "cityTo": "Frankfurt"},
                    {"carrid": "LH", "connid": "0400", "cityFrom": "Frankfurt", "cityTo": "NewYork"},
                    {"carrid": "LH", "connid": "2402", "cityFrom": "Frankfurt", "cityTo": "Berlin"},
                    {"carrid": "LH", "connid": "3577", "cityFrom": "Rome", "cityTo": "Frankfurt"},
                    {"carrid": "QF", "connid": "0005", "cityFrom": "Singapore", "cityTo": "Frankfurt"},
                    {"carrid": "SQ", "connid": "0117", "cityFrom": "Kuala Lumpur", "cityTo": "Singapur"},
                    {"carrid": "UA", "connid": "3516", "cityFrom": "NewYork", "cityTo": "Frankfurt"}
                ]    
    }
    ```
  
    ```js
    sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ],
        /**
         * @param {typeof sap.ui.core.mvc.Controller} Controller
         */
        function (Controller, JSONModel) {
            "use strict";
    
            return Controller.extend("sap.training.aggregationbinding.controller.View1", {
                onInit: function () {
                    //var oModel = new JSONModel();
                    // oModel.loadData("../model/data.json");
                    // this.getView().setModel(oModel);
    
                    var oModel = new JSONModel();
                    var oMyData = {
                        "myData": [
                            {
                                "info": "Nothing!",
                                "use": false
                            },
                            {
                                "data": [
                                    {"carrid": "AA", "connid": "0017", "cityFrom": "NewYork", "cityTo": "San Fransisco"},
                                    {"carrid": "AZ", "connid": "0555", "cityFrom": "Rome", "cityTo": "Frankfurt"},
                                    {"carrid": "DL", "connid": "0106", "cityFrom": "NewYork", "cityTo": "Frankfurt"},
                                    {"carrid": "JL", "connid": "0407", "cityFrom": "Tokyo", "cityTo": "Frankfurt"},
                                    {"carrid": "LH", "connid": "0400", "cityFrom": "Frankfurt", "cityTo": "NewYork"},
                                    {"carrid": "LH", "connid": "2402", "cityFrom": "Frankfurt", "cityTo": "Berlin"},
                                    {"carrid": "LH", "connid": "3577", "cityFrom": "Rome", "cityTo": "Frankfurt"},
                                    {"carrid": "QF", "connid": "0005", "cityFrom": "Singapore", "cityTo": "Frankfurt"},
                                    {"carrid": "SQ", "connid": "0117", "cityFrom": "Kuala Lumpur", "cityTo": "Singapur"},
                                    {"carrid": "UA", "connid": "3516", "cityFrom": "NewYork", "cityTo": "Frankfurt"}
                                ]    
                            }
                        ]                        
                    };
                    oModel.setData(oMyData);
                    this.getView().setModel(oModel);
                }
            });
        });
    
    ```
  
    ```js
    <mvc:View
        controllerName="sap.training.aggregationbinding.controller.View1"
        xmlns:mvc="sap.ui.core.mvc"
        displayBlock="true"
        xmlns="sap.m"
        xmlns:f="sap.ui.layout.form"
    >
        <Shell id="shell">
            <App id="app">
                <Carousel pages="{/data}">
                    <pages>
                        <Page id="page" title="{i18n>title}">
                            <f:SimpleForm id="idForm">
                                <f:content>
                                    <Label id="lblCarr" text="Carrier"/>
                                    <Text id="txtCarr" text="{carrid}"/>
                                    <Label id="lblConn" text="Flight number"/>
                                    <Text id="txtConn" text="{connid}"/>
                                    <Label id="lblFrom" text="Departure"/>
                                    <Text id="txtFrom" text="{cityFrom}"/>
                                    <Label id="lblTo" text="Destination"/>
                                    <Text id="txtTo" text="{cityTo}"/>
                                </f:content>
                            </f:SimpleForm>
                            <!-- <List id="idList" items="{/myData/1/data}">-->
                            <List id="idList" items="{/data}">
                                <!-- <StandardListItem id= "idItem" title="{carrid} : {connid}" description="From {cityFrom} to {cityTo}"/> -->
                                <StandardListItem id= "idItem" title="{carrid} {connid}" description="From {cityFrom} to {cityTo}"/>
                            </List>
                        </Page>
                    </pages>
                </Carousel>
            </App>
        </Shell>
    </mvc:View>
    ```

    
  
    ```xml
    <mvc:View
        controllerName="sap.training.aggregationbinding.controller.View1"
        xmlns:mvc="sap.ui.core.mvc"
        displayBlock="true"
        xmlns="sap.m"
        xmlns:f="sap.ui.layout.form"
    >
        <Shell id="shell">
            <App id="app">
                <Carousel pages="{/data}">
                    <pages>
                        <Page id="page" title="{i18n>title}">
                            <f:SimpleForm id="idForm">
                                <f:content>
                                    <Label id="lblCarr" text="Carrier"/>
                                    <Text id="txtCarr" text="{carrid}"/>
                                    <Label id="lblConn" text="Flight number"/>
                                    <Text id="txtConn" text="{connid}"/>
                                    <Label id="lblFrom" text="Departure"/>
                                    <Text id="txtFrom" text="{cityFrom}"/>
                                    <Label id="lblTo" text="Destination"/>
                                    <Text id="txtTo" text="{cityTo}"/>
                                </f:content>
                            </f:SimpleForm>
                            <List id="idList" items="{/myData/1/data}">
                                <!-- <StandardListItem id= "idItem" title="{carrid} : {connid}" description="From {cityFrom} to {cityTo}"/> -->
                                <StandardListItem id= "idItem" title="{carrid} {connid}" description="From {cityFrom} to {cityTo}"/>
                            </List>
                        </Page>
                    </pages>
                </Carousel>
            </App>
        </Shell>
    </mvc:View>
    
    ```
  
    <img src="/img/binding4.png" alt="binding" style="zoom:80%;" />





* ## Element Binding

  데이터 집합(Model)의 특정 Key의 값이 객체({})인 경우 해당 키의 경로를 Binding path로 지정함으로 Control Property또는 Child Control에서 Binding path가 절대경로(Absolute path)가 아닌 상대경로(Relative path) 사용이 가능 하게 됨

  예를 들어

  ```json
  {
      "data":
          [
              {
                  "department": "HR",
                  "employee": [{"name": "Mayer"}, {"name": "Treusch"}, {"name": "Schmitt"}, {"name": "Stark"}]
              },
              
              {
                  "department": "Support",
                  "employee": [{"name": "Muller"}, {"name": "Agassi"}, {"name": "Duck"}, {"name": "Pan"}]
              }
          ]
  }
  ```

  와 같은 JSON Model을 

  table의 items에 "{/data}" 를 binding 하고 하위에 item 들에 {department} 를 바인딩 한 후 

  또 다른 table에 {employee}를 바인딩해 위 테이블의 row를 클릭시 해당 row에 binding 되어 있는 데이터의 상위 항목까지의 path를 가져온 후 

  아래의 table에 binding 함으로써 선택한 row의 department에 해당하는 employee 항목들을 table에 binding 할 수 있다.

  

  * ## Element Binding 실습1 zclb23_016

    ```json
    {
        "data":
            [
                {
                    "department": "HR",
                    "employee": [{"name": "Mayer"}, {"name": "Treusch"}, {"name": "Schmitt"}, {"name": "Stark"}]
                },
                
                {
                    "department": "Support",
                    "employee": [{"name": "Muller"}, {"name": "Agassi"}, {"name": "Duck"}, {"name": "Pan"}]
                }
            ]
    }
    ```

    ```js
    sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ],
        /**
         * @param {typeof sap.ui.core.mvc.Controller} Controller
         */
        function (Controller, JSONModel) {
            "use strict";
    
            return Controller.extend("iitp.zclb23016.controller.View1", {
                onInit: function () {
                    var oModel = new JSONModel();
                    oModel.loadData("../model/data.json");
                    this.getView().setModel(oModel);
                },
    
                onSelectionChange: function (oEvent) {
                    var oItem = oEvent.getParameter("selectedItem");
                    var sPath = oItem.getBindingContext().getPath();
    
                    var oList = this.getView().byId("idList");
    
                    oList.bindElement(sPath);
                }
            });
        });
    ```

    ```xml
    <mvc:View
        controllerName="iitp.zclb23016.controller.View1"
        xmlns:mvc="sap.ui.core.mvc"
        displayBlock="true"
        xmlns="sap.m"
        xmlns:core="sap.ui.core"
    >
        <Shell id="shell">
            <App id="app">
                <pages>
                    <Page id="page" title="{i18n>title}">
                        <content>
                            <ComboBox id="idComBox" items="{/data}" selectionChange="onSelectionChange">
                                <items>
                                    <core:Item id="itemDept" text="{department}"></core:Item>
                                </items>
                            </ComboBox>
    
                            <List id="idList" items="{employee}">
                                <items>
                                    <StandardListItem id="stdList" title="{name}">
                                    </StandardListItem>
                                </items>
                            </List>
                        </content>
                    </Page>
                </pages>
            </App>
        </Shell>
    </mvc:View>
    ```

    <img src="/img/binding6.png" alt="binding" style="zoom:80%;" /><img src="/img/binding7.png" alt="binding" style="zoom:80%;" />

    

    

    

  * ## Exercise 11.

    ```json
    {
        "data": [
            { 
                "carrier": {
                    "carrId": "LA", 
                    "carrName" : "Lufuthansa", 
                    "currCode": "EUR", 
                    "url": "http://www.lufuthansa.com"
                },
                "connections": [
                    {
                        "connId": "0400", 
                        "cityFrom": "Frankfurt", 
                        "cityTo": "New York"
                    }, 
                    {
                        "connId": "0401", 
                        "cityFrom": "New York", 
                        "cityTo": "Frankfurt"
                    }, 
                    {
                        "connId": "0455", 
                        "cityFrom": "San Francisico", 
                        "cityTo": "Frankfurt"
                    }, 
                    {
                        "connId": "2402", 
                        "cityFrom": "Frankfurt", 
                        "cityTo": "Berlin"
                    }
                ]
            }, 
            
            {
                "carrier": {
                    "carrId": "JL", 
                    "carrName" : "Japan Airlines", 
                    "currCode" : "JPY", 
                    "url": "http://www.jal.co.jp"
                },    
                "connections": [
                    {
                        "connId": "0407", 
                        "cityFrom": "Tokyo", 
                        "cityTo": 
                        "Frankfurt"
                    }, 
                    {
                        "connId": "0408", 
                        "cityFrom": "Frankfurt", 
                        "cityTo": "New York"
                    }
                ]
            },
            {
                "carrier": {
                    "carrId": "AZ", 
                    "carrName": "Alitalia", 
                    "currCode": "EUR", 
                    "url": "http://www.alitalia.it"
                },
                "connections": [
                    {
                        "connId": "0555", 
                        "cityFrom": "Rom", 
                        "cityTo": "Frankfurt"
                    }, 
                    {
                        "connId": "0788", 
                        "cityFrom": "Rom", 
                        "cityTo": "Tokyo"
                    }, 
                    {
                        "connId": "0789", 
                        "cityFrom": "Toyyo", 
                        "cityTo": "Rom"
                    },
                    {
                        "connId": "0790", 
                        "cityFrom": "Rom", 
                        "cityTo": "Osaka"
                    } 
                ]
            }, 
            { 
                "carrier": {
                    "carrId": "DL", 
                    "carrName": "Delta Airlines", 
                    "currCode": "USD",
                    "url": "http://www.delta-air.com"
                }, 
                "connections": [
                    {
                        "connId": "0106", 
                        "cityFrom": "New York", 
                        "cityTo": "Frankfurt"
                    },
                    {
                        "connId": "1699", 
                        "cityFrom": "New York", 
                        "cityTo": "San Francisco"
                    },
                    {
                        "connId": "1984", 
                        "cityFrom": "San Francisco", 
                        "cityTo": "New York"
                    }                
                ]
            }
        ]
    }  
    ```

    ```js
    sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ],
        /**
         * @param {typeof sap.ui.core.mvc.Controller} Controller
         */
        function (Controller, JSONModel) {
            "use strict";
    
            return Controller.extend("sap.training.elementbinding.controller.View1", {
                onInit: function () {
                    var oModel = new JSONModel();
                    oModel.loadData("../model/data.json");
                    this.getView().setModel(oModel);
                },
                onCarrierSelectionChange: function(oEvent) {
                    var oListItem = oEvent.getParameter("listItem");
                    var sPath = oListItem.getBindingContext().getPath();
                    var oTable = this.byId("idConnTable");
                    oTable.bindElement(sPath);
                }
            });
        });
    ```

    ```xml
    <mvc:View
        controllerName="sap.training.elementbinding.controller.View1"
        xmlns:mvc="sap.ui.core.mvc"
        displayBlock="true"
        xmlns="sap.m"
    >
        <Shell id="shell">
            <App id="app">
                <pages>
                    <Page id="page" title="{i18n>title}">
                        <content>
                            <Table id="idTable" items="{/data}" headerText="Carriers" mode="SingleSelectMaster" selectionChange="onCarrierSelectionChange">
                                <columns>
                                    <Column id="colCarr">
                                        <header><Text id="carrTxt" text="Carrier ID"/></header>
                                    </Column>
                                    <Column id="colName">
                                        <header><Text id="nameTxt" text="Carrier Name"/></header>
                                    </Column>
                                    <Column id="colCurr">
                                        <header><Text id="currTxt" text="Currency"/></header>
                                    </Column>
                                    <Column id="colURL">
                                        <header><Text id="urlTxt" text="URL"/></header>
                                    </Column>
                                </columns>
    
                                <items>
                                    <ColumnListItem id="idListItem">
                                        <cells>
                                            <Text id="carrid" text="{carrier/carrId}"/>
                                            <Text id="carrname" text="{carrier/carrName}"/>
                                            <Text id="currcode" text="{carrier/currCode}"/>
                                            <Text id="URL" text="{carrier/url}"/>
                                        </cells>
                                    </ColumnListItem>
                                </items>
                            </Table>
    
                            <Table id="idConnTable" items="{connections}" headerText="Flight connections">
                                <columns>
                                    <Column id="colConn">
                                        <header><Text id="connTxt" text="Connection ID"/></header>
                                    </Column>
                                    <Column id="colFrom">
                                        <header><Text id="fromTxt" text="City From"/></header>
                                    </Column>
                                    <Column id="colTo">
                                        <header><Text id="toTxt" text="City To"/></header>
                                    </Column>
                                </columns>
    
                                <items>
                                    <ColumnListItem id="idConnListItem">
                                        <cells>
                                            <Text id="connid" text="{connId}"/>
                                            <Text id="cityFrom" text="{cityFrom}"/>
                                            <Text id="cityTo" text="{cityTo}"/>
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

    <img src="/img/binding8.png" alt="binding" style="zoom:80%;" />

    <img src="/img/binding9.png" alt="binding" style="zoom:80%;" />

    <img src="/img/binding10.png" alt="binding" style="zoom:80%;" />

    

    

    

    

    

    













































* ## Data Binding Type System

  ## Simple Types

  binding 할때

  ```js
  {
      path: '/employee/soalary', 
  	type: 'sap.ui.model.type.Float', 
  	formatOptions: {minFractionDigits: 2, maxFractiondigits: 2}
      constraints: {minimum: 0}
  }
  ```

  오 같이 사용할수 있다.

  * #### formatOptions

    ***formatOptions*** 은 값이 UI에 포맷되고 표시되는 방법을 정의한다.

  * #### constraints 

    ***constraints*** 은 UI에 입력된 입력 값의 모양을 정의합니다. 구문 분석하는 동안 이러한 제약 조건에 대해 값이 검증됩니다. 예를 들어, 정수 유형에는 입력 값을 구문 분석할 때 자동으로 유효성 검사되는 최대값에 대한 제약 조건이 있습니다.

  ***formatValue() parseValue() validateValue() ???***

  

  * ### sap.ui.model.type.Integer

  * ### sap.ui.model.type.Float

  * ### sap.ui.model.type.String

  * ### sap.ui.model.type.Boolean

  * ### sap.ui.model.type.Date

  * ### sap.ui.model.type.Time

  * ### sap.ui.model.type.DateTime

  * ### sap.ui.model.type.Currency

  * ### sap.ui.model.type.FileSize

  의 type 들이 있으며 각 type별 사용할 수 있는 formatOptions 와 constraints 설정들과 method 들은 https://sapui5.hana.ondemand.com/#/api/sap.ui.model.type 에서 확인 할 수 있다.

  

  

  

* ## Custom Type

  

  

  

* ## Handling Incorrect User Input

  pase

  

  

  * ## 실습

    #### iitp.zclb23_017

    

    #### model/type/chkTeamNo.js
    
    ```javascript
    sap.ui.define([
        "sap/ui/model/SimpleType",
        "sap/ui/model/ValidateException"
    ], function(SimpleType, ValidateException) {
        return SimpleType.extend("iitp.zclb23017.model.type.chkTeamNo", {
            formatValue: function (oValue) {
                return oValue;
            },
    
            parseValue: function (oValue) {
                return oValue;
            },
    
            validateValue: function (oValue) {
                if (oValue == "D001" || oValue == "D002" || oValue == "D003") {
    
                } else {
                    throw new ValidateException();
                }
            }
        })
    })
    ```
    
    ```xml
    <mvc:View
        controllerName="iitp.zclb23017.controller.View1"
        xmlns:mvc="sap.ui.core.mvc"
        displayBlock="true"
        xmlns="sap.m"
    >
        <Shell id="shell">
            <App id="app">
                <pages>
                    <Page id="page" title="{i18n>title}">
                        <content>
                            <Input  id="idInput" 
                                    maxLength="4" 
                                    value="{path: '/teamNo', type: 'iitp.zclb23017.model.type.chkTeamNo'}" 
                                    validationError="onError" 
                                    validationSuccess="onSuccess"/>
                            <Text id="idMsgTxt"/>
                        </content>
                    </Page>
                </pages>
            </App>
        </Shell>
    </mvc:View>
    ```
    
    ```javascript
    sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "iitp/zclb23017/model/type/chkTeamNo"
    ],
        /**
         * @param {typeof sap.ui.core.mvc.Controller} Controller
         */
        function (Controller) {
            "use strict";
    
            return Controller.extend("iitp.zclb23017.controller.View1", {
                onInit: function () {
                    var oData = {
                        teamNo: 'D001'
                    };
    
                    var oModel = new sap.ui.model.json.JSONModel();
                    oModel.setData(oData);
                    this.getView().setModel(oModel);
                },
    
                onError: function (oEvent) {
                    var oElement = oEvent.getSource();
                    oElement.setValueState("Error");
                    var oException = oEvent.getParameter("exception");
                    var oText = this.byId("idMsgTxt");
                    oText.setText("The Team No is Wrong!");
    
                },
    
                onSuccess: function (oEvent) {
                    var oElement = oEvent.getParameter("element");
                    oElement.setValueState(sap.ui.core.ValueState.None);
                    var oText = this.byId("idMsgTxt");
                    oText.setText("");
                }
            });
        });
    ```
    
    

  



* ## Exercise 12.

  ```
  ```

  ```
  ```

  ```
  ```

  

  

  

  

  

  

  

  

* ## Formatter Function 

  complex 안해줘도 지장 없음(현 버전)

  

  

  

  * ## Filter

    

    #### iitp.zclb23_018/view/View1.view.js

    ```xml
    <mvc:View
        controllerName="iitp.zclb23018.controller.View1"
        xmlns:mvc="sap.ui.core.mvc"
        displayBlock="true"
        xmlns="sap.m"
        xmlns:core="sap.ui.core"
    >
        <Shell id="shell">
            <App id="app">
                <pages>
                    <Page id="page" title="{i18n>title}">
                        <content>
                            <Table id="idTablePernr" items="{/emp}">
                                <columns>
                                    <Column id="colPernr">
                                        <header><Text id="txtPernr" text="Personal No"/></header>
                                    </Column>
                                    
                                    <Column id="colName">
                                        <header><Text id="txtName" text="Personal Name"/></header>
                                    </Column>
                                </columns>
    
                                <items>
                                    <ColumnListItem id="colItem1" press="onPress" type="Active">
                                        <cells>
                                            <Text id="celTxtPernr" text="{pernr}"/>
                                            <Text id="celTxtName" text="{eName}"/>
                                        </cells>
                                    </ColumnListItem>
                                </items>
                            </Table>
                            <Table id="idTableSkill" items="{/skill}">
                                <columns>
                                    <Column id="colPernr_s">
                                        <header><Text id="txtPernr_s" text="Personal No"/></header>
                                    </Column>
    
                                    <Column id="colSid">
                                        <header><Text id="txtSid" text="Skill ID"/></header>
                                    </Column>
                                    
                                    <Column id="colSkill">
                                        <header><Text id="txtSkill" text="Skill Name"/></header>
                                    </Column>
                                </columns>
    
                                <items>
                                    <ColumnListItem id="colItem2">
                                        <cells>
                                            <Text id="celPernr_s" text="{pernr}"/>
                                            <Text id="celTxtSid" text="{sid}"/>
                                            <Text id="celTxtSkill" text="{sName}"/>
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

    #### iitp.zclb23_018/controller/View1.controller.js

    ```javascript
    sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/Filter"
    ],
        /**
         * @param {typeof sap.ui.core.mvc.Controller} Controller
         */
        function (Controller,Filter) {
            "use strict";
    
            return Controller.extend("iitp.zclb23018.controller.View1", {
                onInit: function () {
                    var oData = {
                        emp: [
                            {pernr: "P01", eName: "HongGd"},
                            {pernr: "P02", eName: "KimCS"},
                            {pernr: "P03", eName: "KimYS"},
                            {pernr: "P04", eName: "SimCI"}
                        ],
    
                        skill: [
                            {pernr: "P01", sid: "S1", sName: "ABAP"},
                            {pernr: "P01", sid: "S2", sName: "SAPUI5"},
                            {pernr: "P01", sid: "S3", sName: "Fiori"},
    
                            {pernr: "P02", sid: "S1", sName: "ABAP"},
                            {pernr: "P02", sid: "S2", sName: "SAPUI5"},
                            {pernr: "P02", sid: "S4", sName: "JavaScript"},
    
                        
                            {pernr: "P03", sid: "S1", sName: "ABAP"},
                            {pernr: "P03", sid: "S3", sName: "Fiori"},
    
                            {pernr: "P04", sid: "S1", sName: "ABAP"},
                            {pernr: "P04", sid: "S2", sName: "SAPUI5"},
                            {pernr: "P04", sid: "S3", sName: "Fiori"},
                            {pernr: "P04", sid: "S4", sName: "JavaScript"},
                        ]
                    };
    
                    var oModel = new sap.ui.model.json.JSONModel();
                    oModel.setData(oData);
                    this.getView().setModel(oModel);
                },
    
                onPress: function (oEvent) {
                    var selectItemContext = oEvent.getSource().getBindingContext();
                    var oModel = this.getView().getModel();
                    var selPernr = oModel.getProperty("pernr", selectItemContext);
    
                    var oFilter = new Filter(
                        "pernr",
                        "EQ",
                        selPernr
                    );
    
                    var oTable = this.getView().byId("idTableSkill");
                    oTable.getBinding("items").filter(oFilter);
                }
            });
        });
    ```

    <img src="/img/formatter1.png" alt="formatter" style="zoom:67%;" />

    <img src="/img/formatter2.png" alt="formatter" style="zoom:67%;" />

    

  * ## Calculated Fields For Data Binding

    

    

    

    

    

    

    

    

  * ## Custom Formatter Functions

    

    

    

    

    

    

  * ## Expression Binding

    

    

    

    

    

    

    

  * ## Device API and Device Model

    

    

    

    

    

    

