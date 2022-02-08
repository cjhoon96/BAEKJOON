# UNIT 8. Fragments







# Lesson 1. Using Fragments



같은 화면이 많이 사용되는 경우 재사용성을 높이기 위해 사용한다.

fragment는 view 폴더에 생성한다.



* ## HTML Fragments

  HTML Fragments를 사용할 때는 

  HTML View를 사용하는 방식과 유사하게 사용한다.

  
  
  
  
  



* ## XML Fragments

  ##### \<core:View>태그 대신<core: FragmentDefinition> 태그를 이용해 하며  

  ##### \<core:Fragment> 태그를 이용하며 fragmentName property에 경로와 파일명 fragment의 파일 명까지 할당하며 type에 xml 타입의 fragment임을 명시하여호출한다.  

  
  
  ##### controller에서 fragment 내부의 태그를 조회 혹은 변경할시 <br>
  
  ```javascript
  var targetId = sap.ui.core.Fragment.createId("view에서 호출할때 지정한 fragment id" , "fragment 내부의 조회/변경 할 id");
  ```
  
  ##### 를 이용해 js에서 접근할 수 있는 id 를 생성해 준 후 byId를 통해 접근 가능하다.
  
  
  
  ##### 또한 view 파일에는 연결할 controller를 명시한 반면 fragment에는 연결할 controller가 명시되어 있지 않으므로 dialog 태그와 같이 popup을 띄울때에는 load 시 controller 를 명시해 줘야 한다.
  
  * ### 실습 - main view에 instantation
  
    #### iitp.zclb23_010
  
    #### XMLFrag.fragment.xml
  
    ```xml
    <core:FragmentDefinition
        xmlns="sap.m"
        xmlns:core="sap.ui.core"
    > 													<!--View와 동일하게 사용할 라이브러리를 선언해 준다.-->
        <Input id="idInputFrag" value="Fragment"/>
        
        <!--controller에 연결이 되어 있진 않지만 부모에 해당하는 View.view.xml로 거슬러 올라가게 된다 (고 이해 추가 질문 예정)-->
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
                    <!--위의 실습에서는 부모에 해당하는 View.view.xml로 거슬러 올라가는 과정인 반면-->
                    <!--지금은 controller 에서 fragment에 직접 접근해야 하는 상황이다.-->
                    <!--따라서 sap.ui.core.Fragment.createId를 통해 idXmlFrag의 idInputFrag를 id로 갖는-->
                    <!--input 필드를 찾아 접근할 수 있는 id를 생성한 후 byId로 접근하고 있다.-->
                    var valFragText = this.byId(sap.ui.core.Fragment.createId("idXmlFrag", "idInputFrag"));
                    alert(valFragText.getValue());
                }
            });
        });
    ```
  
    <img src="/img/fragment1.png" alt="fragment" style="zoom:67%;" />
  
  
  
  * ### 실습- dialog 태그를 이용한 popup 창으로 활용
  
    #### iitp.zclb23_010
  
    #### PopupFrag.fragment.xml
  
    ```xml
    <core:FragmentDefinition
        xmlns="sap.m"
        xmlns:core="sap.ui.core"
    >
    
        <Dialog id="digPopup" title="Popup View">
            <Button id="btnClose" text="Close" press="onClose"></Button>
            <Text id="txtPopup" text="Popup View Element"></Text>
        </Dialog>
    
        
    </core:FragmentDefinition>
    ```
  
    #### View.view.xml
  
    ```xml
    <mvc:View
        controllerName="zclb23011.controller.View"
        xmlns:mvc="sap.ui.core.mvc"
        displayBlock="true"
        xmlns="sap.m"
    >
        <Shell id="shell">
            <App id="app">
                <pages>
                    <Page id="page" title="{i18n>title}">
                        <content>
                            <Button id="btnPopup" text="Popup" press="onPopup"/>
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
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/Fragment"
    ],
        /**
         * @param {typeof sap.ui.core.mvc.Controller} Controller
         */
        function (Controller, Fragment) {
            "use strict";
    
            return Controller.extend("iitp.zclb23011.controller.View", {
                onInit: function () {
    
                },
    
                onPopup: function () {
                    var oView = this.getView();
                    //if 문을 사용하여 Fragment가 중복해서 load 되는 것을 방지함으로서 데이터를 효율적으로 사용하게 한다.
                    //이후 popup 창을 띄울 경우 아래의 코드를 그대로 가져다 사용하면 된다.
                    if (!this.byId("digPopup")) {
                        Fragment.load({
                            id: oView.getId(),						//fragment가 사용할 id를 지정한다. 여기선 메인 뷰와 동일하게 설정
                            name: "iitp.zclb23011.view.PopupFrag",
                            type: "XML",
                            controller: this						//controller가 현 파일 View.controller.js임을 명시
                        }).then(
                            function (oPopup) {
                                oView.addDependent(oPopup)
                                oPopup.open();
                            }
                        );
                        
                    } else {
                        this.byId("digPopup").open();
                    }
                },
    
                onClose: function () {
                    this.byId("digPopup").close();
                }
            });
        });
    ```
  
  * ### sap.ui.core.Frament.load(mOptions)
  
    sap.ui.core.Frament의 method load는 Promise type의 값을 return 하는데 이는 비동기 처리에 사용되는 객체이다.
  
    Promise 의 3가지 상태에는 
  
    * Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
  
    * Fulfilled(이행) : 비동기 처리가 완료 되어 결과값을 반환해준 상태
  
    * Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태
  
      가 있다.
  
    load 문 뒤의 .then 구문은 Fulfilled(이행) 상태에서 실행 되는 구문으로 즉 Fragment를 load 하는데 성공한 경우 메인 뷰에 팝업창을 open하게 된다.
  
    addDependent 는 fragment 의 수명 주기를 결정하는 구문으로 상위 항목인 View.view.xml의 라이플 사이클 이벤트를 상속받도록 한다.
  
    [Promise 관련 자료](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)
  
    mOptions에는
  
    * id	
  
    * name
  
    * type
  
    * controller
  
    * definition 
  
    * containingView
  
      가 들어간다.
  
    





# 여기부터!!!

* ## JavaScript Fragments

  ```javascript
  sap.ui.jsfragment("_name space_.view._f")
  ```

  
  
  
  
  













# Exercise 7













# Exercise 8

```xml
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

```xml
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

```javascript
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

