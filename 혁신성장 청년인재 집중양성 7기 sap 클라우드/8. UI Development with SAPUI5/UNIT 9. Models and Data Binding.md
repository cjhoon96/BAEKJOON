# UNIT 9. Models and Data Binding





# Lesson 1. Exploring Models and Data Binding





* ## Models

  

  

  

  

  







* ## Binding Modes

  ### One-Way

  

  ### Two-Way

  

  ### One-Time

  

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

  

  ### Element Binding

  

* 

  

  

  

* # Exercise 11.













































* ## Data Binding Type System

  

  

  

  

  

  

  

  

  * ## 실습

    #### iitp.zclb23_017

    

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

    

    

    

    

    

    

