# UNIT 8. Fragments







# Lesson 1. Using Fragments



재사용성을 높이기 위해 사용한다.



* ## HTML Fragments

  HTML Fragments를 사용할 때는 

  HTML View를 사용하는 방식과 유사하게 사용한다.

  
  
  
  
  



* ## XML Fragments

  

  

  #### XMLFrag.fragment.xml
  
  ```xml
  <core:FragmentDefinition
      xmlns="sap.m"
      xmlns:core="sap.ui.core"
  >
      <Input id="idInputFrag" value="Fragment"/>
      <Button id="idBtnFrag" text="Fragment View Button" press="onFragClick"/>
  
  </core:FragmentDefinition>
  ```
  
  #### View.view.xml
  
  ```xml
  <mvc:View
      controllerName="iitp.zclb23010.controller.View"
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
                          <Input id="idInputMain" value="Main"/>
                          <Button id="idBtnMain" text="Main View Button" press="onMainClick"/>
  
                          <!--Fragment View Content-->
                          <core:Fragment id="idXmlFrag" fragmentName="iitp.zclb23010.view.XMLFrag" type="XML"/>
                      </content>
                  </Page>
              </pages>
          </App>
      </Shell>
  </mvc:View>
  ```
  
  #### View.controller.js
  
  ```javascript
  sap.ui.define([
      "sap/ui/core/mvc/Controller"
  ],
      /**
       * @param {typeof sap.ui.core.mvc.Controller} Controller
       */
      function (Controller) {
          "use strict";
  
          return Controller.extend("iitp.zclb23010.controller.View", {
              onInit: function () {
  
              },
              onMainClick: function () {
                  var valMainText = this.getView().byId("idInputMain");
                  alert(valMainText.getValue());
              },
              onFragClick: function () {
                  var valFragText = this.byId(sap.ui.core.Fragment.createId("idXmlFrag", "idInputFrag"));
                  alert(valFragText.getValue());
              }
          });
      });
  ```
  
  
  
  
  
  



* ## JavaScript Fragments

  ```javascript
  sap.ui.jsfragment("_name space_.view._f")
  ```

  
  
  
  
  













# Exercise 7













# Exercise 8

```
<mvc:View
    controllerName="sap..dialogs.controller.View"
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
                            <Button id="idBtn" press="onOpenDialog" text="Open dialog"/>
                            <Text id="idText"/>
                        </l:content>
                    </l:VerticalLayout>
                </Page>
            </pages>
        </App>
    </Shell>
</mvc:View>
```

```
<core:FragmentDefinition
    xmlns:core="sap.ui.core"
    xmlns:f="sap.ui.layout.form"
    xmlns="sap.m">
    <Dialog id="idDialog" title="XML Fragment Dialog">
        <buttons>
            <Button id="idBtnFrag" press="onCloseDialog" text="OK"/>
        </buttons>
        <content>
            <f:SimpleForm id="form">
                <f:content>
                    <Label id="idLbl" text="Name"/>
                    <Input id="idInput"/>
                </f:content>
            </f:SimpleForm>
        </content>

    </Dialog>
</core:FragmentDefinition>
```

```
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment) {
        "use strict";

        return Controller.extend("sap..dialogs.controller.View", {
            onInit: function () {

            },

            onOpenDialog: function () {
                var oView = this.getview();

                //create dialog lazily
                if (!this.byId("idDialog")) {
                    Fragment.load({
                        id: oView.getId(),
                        name: "sap.training.dialogs.view.Dialog",
                        controller: this
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);
                        oDialog.open();
                    });
                } else {
                    this.byId("idDialog").open();
                }
            },

            onCloseDialog: function () {
                this.byId("idDialog").close();
                var oInput = this.byId("idInput");
                var oText = this.byId("idText");
                oText.setText("Hello, " + oInput.getValue());
            }
        });
    });
```

