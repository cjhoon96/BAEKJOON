# UNIT 5. Dependency Management





# Lesson 1. Managing Dependencies



#### 모듈화를 말한다.





* ## sap.ui.require() 및 sap.ui.define()

  sap.ui.define 은 실제 비동기 모듈(AMD, Asynchronous Module Definitions)를 지원하도록 설계되었다.

  모듈의 동기 로딩은 jQuery.sap.require()를 사용하여수행했다. 모듈을 선언할때는 jQuery.sap.declare()를 사용했다.

  sapui5 1.52 버전 부터는 이 jQuery함수가 모두 더이상 사용되지 않는다.







### p.82 부터









* ## Asynchronous Loading of Modules

  

  

  

  

  attachInit() 초기화 된 후에 실행될 함수를 지정할 수 있다.

  

  

  sap.ui.require([])   비 동기화로 













##### myLib 폴더 => MessageManager.js 생성

```javascript
sap.ui.define([
    "sap/m/MessageBox"
    //사용할 라이브러리의 모듈???
], function(MessageBox) {
    return {
        reportSuccess: function (pMsg, pTitle){
            MessageBox.show(pMsg, {
                title: pTitle
            })
        }
    }
    
});
```

#### index.html

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>App Title</title>
    <style>
        html, body, body > div, #container, #container-uiarea {
            height: 100%;
        }
    </style>
    <script
        id="sap-ui-bootstrap"
        src="resources/sap-ui-core.js"
        data-sap-ui-theme="sap_fiori_3"
        
        data-sap-ui-libs = "sap.m"               
        
        data-sap-ui-resourceroots='{
            "IITP.zclb23003": "./"
        }'
        data-sap-ui-oninit="module:sap/ui/core/ComponentSupport"
        data-sap-ui-compatVersion="edge"
        data-sap-ui-async="true"
        data-sap-ui-frameOptions="trusted"
    ></script>

    
    <script>
        sap.ui.getCore().attachInit(
            function () {
                //버튼 생성...
                var oButton = new sap.m.Button({
                    text: "Press me"
                });

                oButton.placeAt("content")

                oButton.attachPress(
                    function () {
                        sap.ui.require(
                            ["IITP/zclb23003/myLib/MessageManager"],

                            function (MessageManager){       //parameter로 모듈 이름
                                MessageManager.reportSucess("메시지", "제목");
                            }
                            
                        );
                    }
                );
            }
        );
    </script>

</head>
<body class="sapUiBody sapUiSizeCompact" id="content">

</body>
</html>
```

<img src="img/bas62.png" alt="bas" style="zoom:75%;" />

#### Run => Open configurations 또는

#### .vscode/launch.json 으로 들어가 아래 내용을 수정한다.

##### .vscode/launch.json

```javascript
{
"args": [
	"--open",
	"index.html"
],
    
}
```

