# UNIT 4. Load and Initialize SAPUI5



# Lesson 1. Loading and Initializing SAPUI5

index.html 보기



* ## Bootstrapping

  HTML 페이지에서 SAPUI5 기능을 사용하려면 SAPUI5 라이브러리를 로드하고 초기화해야한다.
  
  앱을 독립 실행형으로 실행하는 경우 부트스트램이 HTML 페이지에 추가된다.
  
  SAP FIORI LAUNCHPAD환경에서 LAUNCHPAD는 부트 스트랩을 실행하고 앱표시를 위해 추가 HTML 페이지가 필요하지 않다.
  
  **sap-ui-core.js (표준 부트스트랩 파일)**는 SAPUI5 핵심 라이브러리의 최소 필수 부분과 jQuery 및 몇 가지 jQuery플러그인이 포함된 표준 부트스트랩 파일이다.
  
  부트스트램 파일은 웹 서버에서 상대 경로에 로컬로 로드되거나 컨텐트 제공 네트워크(CDN)를 통해 외부에 로드된다.









* ## SAPUI5 Runtime 구성

  SAPUI5 부트스트램 스크립트가 페이지에 포함되어 있으면 

  스크립트가 브라우저에 로드 되어 실행되는 즉시 SAPUI5 런타임이 자동으로 초기화 된다. 

  * ### Default Values

    SAPUI5런타임에는 각 구성 옵션의 가본값이 포함된다.

  * ### Individual Script tag Attributes(개별 스크립트 태그 속성)

    구성 옵션 별로 부트스트랩 스크립트 태그에 하나의 특성을 사용할 수 있다. ***특성 이름은 구성옵션의 이름과 data-sap-ui-*** 접두부로 이루어져있다.

    ##### Ex )

    ```html
    <script id = "sap-ui-bootstrap"
        scr=""...
    	data-sap-ui-theme="sap_belize"		***!! 구성옵션 libs는 초기에 로드되는 라이브러리 리스트를 정의한다.
        data-sap-ui-libs="sap.m"			***!! 구성옵션 theme은 사용되는 테마를 정의한다.
    	...
    	...
    ```

    

  * ### Single and Complex Configuration Attributes(단일 및 복합 구성 특성)

    ***data-sap-ui-config 특성***을 사용하면 단일 특성에 SAPUI5 런타임의 구성 정보를 제공할 수 있다.

    개별 구성 특성을 포함한 개별 옵션을 스트립트 태그에 연결하는 대신 이 특성을 사용하면 된다.

    

  * ### Global Configuration Object

    전역 구성 오브젝트는 속성 이름이 sap-ui-config 인 전역 윈도우 오브젝트의 속성이다.

    속성은 각 속성이 해당 이름의 구성 옵션을 나타내는 단순한 오브젝트여야 한다.

    부트스트랩 과정에서 구성을 평가하므로 구성 오브젝트는 SAPUI5 가 부트스트랩되기 전에 생성되어야 한다.

    따라서 전역 구성 오브젝트를 사용하려면 ***부트스트랩 태그 앞에 다른 스크립트 태그가 있어야 한다***.

    

  * ### URL Parameters

    구성 매개변수를 앱의 url에 추가할 수 있다. url매개변수 이름은 구성 옵션의 이름과 sap-ui- 접두부로 이루어져있다.

    Ex )  ***index.html?sap-ui-debug=true***

    보안상의 이유로 일부 구성 옵션만 url 매개변수를 통해 설정할 수 있다.

    

  * ### Runtime Configuration Object(런타임 구성 오브젝트)

    런타임에 수정할 수 있는 매우 제한된 범위의 구성 옵션에 대해 set 메소드를 제공한다.

    이러한 구성 옵션의 가장 대표적인 예가 테마이다.

    런타임 구성 오브젝트에 access하려면 ***sap.ui.getCore().getConfiguration() 메소드***를 사용한다.







* ## Application Script

  어플리케이션 스크립트에서 Button 및 Input UI 요소와 같은 컨트롤을 생성한다.
  
  placeAt() 메소드를 사용해 생성한 control들을 Body (UI)영역에 배치한다
  
  .

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>App Title</title>

        <script											  ------------------+
            id="sap-ui-bootstrap"											|
            src="./resources/sap-ui-core.js"								|
            data-sap-ui-theme="sap_belize"									|
            data-sap-ui-libs="sap.m"							        	|
            data-sap-ui-resourceroots='{									+--부트스트랩 스크립트
                "studentb23.sap.training.views": "./"					 	|
            }'												  				|
            data-sap-ui-oninit="module:sap/ui/core/ComponentSupport"		|
            data-sap-ui-compatVersion="edge"								|
            data-sap-ui-async="true"										|
            data-sap-ui-frameOptions="trusted"								|
        ></script>											----------------+
        <script>											------------------------+
            sap.ui.getCore().attachInit(function() {								|
                sap.ui.require(["sap/ui/core/mvc/View"], function(View) {			|
                                                                                    |
                    View.create({													|
                        id: "idXMLView",											|
                        viewName: "studentb23.sap.training.views.view.XMLView",		|
                        type: sap.ui.core.mvc.ViewType.XML							+--어플리케이션 스크립트
                    }).then(function(oView) {										|
                        oView.placeAt("content");									|
                    });																|
                });																	|
            });																		|
        </script>											------------------------+
    </head>

    <body class="sapUiBody" id="content">		--UI영역
    </body>
</html>

```

