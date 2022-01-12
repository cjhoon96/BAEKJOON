# UNIT 5. Dependency Management





# Lesson 1. Managing Dependencies



#### 모듈화를 말한다.





* ## Modularization

  sap.ui.define() 에 사용할 모듈을 정의한다.









* ## Asynchronous Loading of Modules

  

  

  

  

  attachInit() 초기화 된 후에 실행될 함수를 지정할 수 있다.

  

  

  sap.ui.require([])   비 동기화로 













myLib 폴더 => MessageManager.js

```javascript
sap.ui.define([
    "sap/m/MessageBox"

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

