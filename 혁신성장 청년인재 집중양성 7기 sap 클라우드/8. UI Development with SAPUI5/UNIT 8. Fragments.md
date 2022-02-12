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
                    <!--기본적으로 fragment 안의 id는 그대로 사용되지만 -->
                    <!--fragment 안의 id 규칙-->
                    <!--fragment ID 가 지정되지 않은 경우 ID 앞에 view ID만 붙는다.-->
    				<!--fragment ID가 지정되면 ID 앞에 view ID와 fragment ID가 모두 붙습니다.-->
                    var valFragText = this.byId(sap.ui.core.Fragment.createId("idXmlFrag", "idInputFrag"));
                    alert(valFragText.getValue());
                }
            });
        });
    ```
  
    <img src="/img/fragment1.png" alt="fragment" style="zoom:67%;" />
  
  
  
  * ### 실습- dialog 태그를 이용한 popup 창으로 활용
  
    #### iitp.zclb23_011
  
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
  
    







* ## JavaScript Fragments

  ```javascript
  sap.ui.jsfragment("sap.training.fragments.view.MyJsFrag", {
      			 //name space   project   폴더  fragment name
      createContent: function (oController) {
          var oInput = new sap.m.Input(this.createId("idInput"));
          
          var oButton = new sap.m.Button({
              text: "Say Hello (JavaScript Fragment)",
              press: [oController.onJsButtonPress, oController]
          });
  
          var oText = new sap.m.Text(this.createId("idText"));
  
          return new sap.ui.layout.HorizontalLayout({
              content: [oInput, oButton, oText]
          });
      } 
  })
  ```
  
  
  
  
  
  













# Exercise 7

### sap.training.fragments

#### MyJsFrag.fragment.js

```js
sap.ui.jsfragment("sap.training.fragments.view.MyJsFrag", {

    createContent: function (oController) {
        var oInput = new sap.m.Input(this.createId("idInput"));
        
        var oButton = new sap.m.Button({
            text: "Say Hello (JavaScript Fragment)",
            press: [oController.onJsButtonPress, oController]
        });

        var oText = new sap.m.Text(this.createId("idText"));

        return new sap.ui.layout.HorizontalLayout({
            content: [oInput, oButton, oText]
        });
    } 
})
```

#### MyXmlFrag.fragment.xml

```xml
<core:FragmentDefinition 
    xmlns="sap.m" 
    xmlns:core="sap.ui.core" 
    xmlns:l="sap.ui.layout"
>
    <l:HorizontalLayout id="idHori">
        <l:content>
            <Input id="idInput"/>
            <Button id="idBtnXML" text="Say Hello (XML Fragment)" press="onXmlButtonPress"/>
            <Text id="idText"/>
        </l:content>
    </l:HorizontalLayout>
</core:FragmentDefinition>
```

#### View.view.xml

```xml
<mvc:View xmlns:layout="sap.ui.layout"
    controllerName="sap.training.fragments.controller.View"
    xmlns:mvc="sap.ui.core.mvc"
    displayBlock="true"
    xmlns="sap.m"
    xmlns:l="sap.ui.layout"
    xmlns:core="sap.ui.core"
>
    <Shell id="shell">
        <App id="app">
            <pages>
                <Page id="page" title="{i18n>title}">
                    <content>
                        <layout:VerticalLayout id="idVerti">
                            <l:content>
                                <core:Fragment id="idJsFrag" fragmentName="sap.training.fragments.view.MyJsFrag" type="JS"/>
                                <core:Fragment id="idXmlFrag" fragmentName="sap.training.fragments.view.MyXmlFrag" type="XML"/>
                            </l:content>
                        </layout:VerticalLayout>
                    </content>
                </Page>
            </pages>
        </App>
    </Shell>
</mvc:View>
```

#### View.controller.js

```js
sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.training.fragments.controller.View", {
            onInit: function () {

            },

            onXmlButtonPress: function (oEvent) {
                var oInput = this.byId(sap.ui.core.Fragment.createId("idXmlFrag", "idInput"));
                var oText = this.byId(sap.ui.core.Fragment.createId("idXmlFrag", "idText"));

                oText.setText("Hello " + oInput.getValue());
            },

            onJsButtonPress: function (oEvent) {
                var oInput = this.byId(sap.ui.core.Fragment.createId("idJsFrag", "idInput"));
                var oText = this.byId(sap.ui.core.Fragment.createId("idJsFrag", "idText"));

                oText.setText("Hello " + oInput.getValue());
            }
        });
    });

```

<img src="/img/fragment2.png" alt="fragment" style="zoom:80%;" />

<img src="/img/fragment3.png" alt="fragment" style="zoom:80%;" />

js View를 사용하는 경우  load문을 사용할시 view.js 파일 내부에서 

```js
var oMyController = {
	onButtonPress: function (oEvent){
		...
	}
}
```

와 같이 선언하여 oMyController를 controller로 지정할 수 있다.









# Exercise 8

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

