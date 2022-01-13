# UNIT 6. Views and Controllers



# Lesson 1. Using Views and Controllers











* ## View Instantiation 

  

  

  



* ## Create View

  ```
  View.Create({
  	id: "idView",
  	viewName: "sap.training.view.Main",
  	type: sap.ui.core.mvc.ViewType.xml
  })
  ```

  View Type에는 

  sap.ui.core.mvc.ViewType.xml

  sap.ui.core.mvc.ViewType.js

  sap.ui.core.mvc.ViewType.html

  sap.ui.core.mvc.ViewType.json

  이 있다.

  

  

  

  

  

* ## Controllers

  

  onInit

  초기화 작업들을 처리한다.

  onExit

  해당 컨트롤러가 종료될때 자동으로 호출되어지는 method이다.

  onAfterRendering

  View가 Rendering 되어진 후 호출되는 method

  onBeforRendering

  View가 Refresh 되어 다시 Rendering 되어질 때 호출되는 method

  

  









* ## JavaScript View

  view 이름은 Main.view.js 로 만든다.

  Controller는 Main.controller.js 로 만든다.





* ## JavaScript Views - Support for Unique IDs

  UI Object들에 접근하기 위해서 ID를 사용한다.

  같은 뷰에서는 ui들에 대한 id들은 같은 id를 사용할 수 없다.

  

  this.getView().byId()











* ## XML Views

  View 파일 명에는 Main.view.xml 이 온다.











* ## HTML View

  

  

  

  

* ## JSON View

  

  

  



* ## View Embedding in an XML View

  

  







* ## zclb23_004







* ## views

  ##### XMLView.view.xml

  ```xml
  <mvc:View
      controllerName="studentb23.sap.training.views.controller.XMLView"
      xmlns:mvc="sap.ui.core.mvc"
      displayBlock="true"
      xmlns="sap.m"
  >
      <Shell id="shell">
          <App id="app">
              <pages>
                  <Page id="page" title="{i18n>title}">
                      <content>
                          <Text id = "idText" text = "Text on XML View"/>
                          <CheckBox id = "idCheckBox" text = "No" select = "onCBSelect"/>
                          <mvc:JSView id = "idJSView" viewName = "studentb23.sap.training.views.view.JSView"/>
                      </content>
                  </Page>
              </pages>
          </App>
      </Shell>
  </mvc:View>
  
  
  ```
  
  ##### XMLView.controller.js
  
  ```javascript
  sap.ui.define([
      "sap/ui/core/mvc/Controller"
  ],
      /**
       * @param {typeof sap.ui.core.mvc.Controller} Controller
       */
      function (Controller) {
          "use strict";
  
          return Controller.extend("studentb23.sap.training.views.controller.XMLView", {
  
              OnCBSelect: function () {
                  var oCheckBox = this.byId("idCheckBox");
  
                  if (oCheckBox.getSelected()) {
                      oCheckBox.setText("Yes");
                  } else {
                      oCheckBox.setText("No");
                  }
              }
          });
      });
  ```
  
  ##### JSView.view.js

  ```javascript
  sap.ui.jsview("studentb23.sap.training.views.view.JSView", {
      getControllerName: function () {
          return "studentb23.sap.training.views.controller.JSView";
      },
  
      createContent: function (oController) {
          
          var oText = new sap.m.Text({
              text: "Text on JavaScript View"
          });
  
          var oCheckBox = new sap.m.CheckBox(this.createId("idCheckBox"), {
              text: "No"
          });
  
          onCheckBox.attachSelect(oController.onCBSelect, oController);
  
          return [oText, oCheckBox]
  
      }
  })
  ```
  
  ##### JSView.controller.js

  ```javascript
  sap.ui.define([
      "sap/ui/core/mvc/Contoller"
  ], function (Contorller) {
      "use strict";
  
      return Contorller.extend("studentb23.sap.training.views.controller.JSView", {
  
          onCBSelect: function () {
              var oCheckBox = this.byId("idCheckBox");
  
              if (oCheckBox.getSelected()) {
                  oCheckBox.setText("Yes");
              } else {
                  oCheckBox.setText("No");
              }
          }
      })
  })
  ```
  
  ##### index.html

  ```html
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>App Title</title>
      
      <script
          id="sap-ui-bootstrap"
          src="resources/sap-ui-core.js"
          data-sap-ui-theme="sap_belize"
          data-sap-ui-libs="sap.m"
          data-sap-ui-resourceroots='{
              "studentb23.sap.training.views": "./"
          }'
          data-sap-ui-oninit="module:sap/ui/core/ComponentSupport"
          data-sap-ui-compatVersion="edge"
          data-sap-ui-async="true"
          data-sap-ui-frameOptions="trusted"
      ></script>
      <script>
          sap.ui.getCore().attachInit(function() {
              sap.ui.require(["sap/ui/core/mvc/View"], function(View) {
  
                  View.create({
                      id: "idXMLView",
                      viewName: "studentb23.sap.training.views.view.XMLView",
                      type: sap.ui.core.mvc.ViewType.XML
                  }).then(function(oView) {
                      oView.placeAt("content");
                  });
              });
          });
      </script>
  
  </head>
  <body class="sapUiBody" id="content">
  </body>
  </html>
  ```
  
  

