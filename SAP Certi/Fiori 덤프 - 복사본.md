# Fiori 덤프



## What type of concurrency control is offered by OData? 

## (Choose the correct answer). 

Pessimistic concurrency control

No concurrency control

### Optimistic concurrency control

Exclusive concurrency control

****

:book: UX402 - Unit 3 

****





## Is it possible to add an extension point in the component implementation? 

## (Choose the correct answer).

Yes 

### No 

It depends on the type of component. 

****

:book: UX402 - Unit 4

검증필요 

****





## What is returned by the function createEntry?

## (Choose the correct answer). 

The ID of the newly created entity 

### A binding context object 

A newly created object in JSON-format.

****

:book: UX402 - Unit 3 

검증 필요 

****





## Which of the following statements are true for SAP Fiori elements? 

## (Choose the correct answers). 

Heavy UI coding is necessary when working with SAP Fiori Elements. 

### SAP Fiori elements provide designs for UI patterns and predefined templates. 

### Apps are based on OData services and annotations.

*****

:book: UX402 - Unit 3 

https://blogs.sap.com/2021/10/12/what-is-sap-fiori-elements-new-video/

****





## Which function do you call on the ODataModel to trigger a deep insert? 

## (Choose the correct answer). 

### create 

createDeep 

insertDeep 

updateDeep.

****

:book: UX402 - Unit 3 

create_deep_entity 를 controller 에서 접근 하는 방법을 묻는 문제인데

create_deep_entity 는 동일하게 create 메소드로 접근 가능하다.

****





## What class in the SAPUI5 API supports back-end mock up and is recommended by SAP? 

## (Choose the correct answer). 

sap.ui.app.MockServer 

### sap.ui.core.util.MockServer 

sap.m.MockServer 

sap.ui.core.MockServer.

****

:book: UX402 - Unit 3 

****





## What is a GIT branch? 

## (Choose the correct answer). 

A GIT branch represents a local working copy of the main development line. 

A GIT branch always represents the main development line. 

### A GIT branch represents an independent line of development. 

A GIT branch is the SAP implementation of GIT.

****

:book: UX402 - Unit 5 

****





## What parameter is needed when instantiating a MockServer object? 

## (Choose the correct answer). 

uri 

### rootUri 

url 

rootUrl.

****

:book: UX402 - Unit 3 

**Questions :** SAPUI5 Problem with rootUri in Mock Sever

SAPUI5 Problem with rootUri in Mock Sever

**Questions :** SAPUI5 Problem with rootUri in Mock Sever

Thanks a lot to all of you, my friends for anycodings_manifest.json your help and advices. Guys, I think I anycodings_manifest.json solved the problem, almost. Just need your anycodings_manifest.json help with this moment: My Table get data anycodings_manifest.json from mock server, but doesn't show it to anycodings_manifest.json user. Instead of the rows it shows an empty anycodings_manifest.json table where the rows count is equal to the anycodings_manifest.json data in my mockserver file. I mean: At the anycodings_manifest.json moment, in "ZMA_BPSet" there'se 8 rows. anycodings_manifest.json Because of this you can see 8 rows in anycodings_manifest.json table. Can anybody help me?



[SAPUI5](https://www.anycodings.com/search?q=sapui5)[MANIFEST.JSON](https://www.anycodings.com/search?q=manifest.json)[MOCKSERVER](https://www.anycodings.com/search?q=mockserver)

Total Answers **1**

## **Answers 1 :** of SAPUI5 Problem with rootUri in Mock Sever

rootUri is used to determine the path of anycodings_mockserver the OData service that should by anycodings_mockserver intercepted by the mock server. It anycodings_mockserver should always correspond to the service anycodings_mockserver uri of your OData service specified in anycodings_mockserver manifest.json.

So, if you have this in your manifest

```json
"dataSources": {
    "mainService": {
        "uri": "/sap/opu/odata/your-service/",
        "type": "OData",
        "settings": {
            "localUri": "localService/metadata.xml"
        }
    }
},
```

your mock server constructor should look anycodings_mockserver like this:

```csharp
var oMockServer = new MockServer({
    rootUri: "/sap/opu/odata/your-service/"
});
```

Note that the rootUri must always have a anycodings_mockserver trailing slash. If your service url in anycodings_mockserver manifest.json does not have one, make anycodings_mockserver sure that rootUri does.

You don't have to change anything in anycodings_mockserver your manifest.json. All test setups are anycodings_mockserver done in mockServer.html and its anycodings_mockserver referenced files.

https://velog.io/@opensapkr/Step-27-Mock-Server-Configuration-apjxptcpgp

****





## If your backend system is based on ABAP 7.50, which are available ways of using facets? 

## (Choose the correct answers). 

Declare both: field groups and facets in CDS view. 

### Declare both: field group and facet as local annotation using WebIDE. 

### Declare field group in CDS view, declare facets as local annotation using WebIDE. 

It is not possible to use facets in ABAP 7.50.

****

:book: UX403 - Unit 4 

검증필요

****





## What can you do by editing manifest.json? 

## (Choose the correct answers). 

### Disable object page. 

### Add object pages as sub page under an object page. 

Define facets on Object Page. 

Disable List Report.

****

:book: UX403 - Unit 5 

검증필요

****





## When do you use deep insert? 

## (Choose the correct answer). 

When working with aggregation binding to update / insert an entity in the bound complex structure. 

When adding a new entity to an entity set. 

### When working with hierarchical data where the data can only be stored in the full hierarchy.

****

:book: UX402 - Unit 3 

hierarchical data = 계층형 데이터 (트리 구조) 

****





## What are the limitations of publishing CDS as OData service by adding a @OData.publish:true? 

## (Choose the correct answers). 

Can not expose associations. 

### Can not change names of entity sets. 

### Only 1 level is taken into consideration when exposing associations. 

### No customized ABAP code in SAP Gateway.

****

:book: UX403 - Unit 2 

검증필요 

일전 신행준 멘토님이 알려주셨던 cds view 를 통해 read 가능한 odata service 를 생성했던 내용과 관련 있는듯 하다.

****





## How is the extension type called to hide UI controls? 

## (Choose the correct answer). 

Control replacement 

Control modification 

### View modification 

Element modification.

****

:book: UX402 - Unit 4 

https://help.sap.com/docs/FIORI_IMPLEMENTATION_740/9231fb54517b4759a855c716887b842e/f0f0df5215eb5c3fe10000000a423f68.html?version=7.40.3.0

****





## Which UI annotation is used to declare a field for the smart filter template? 

## (Choose the correct answer). 

UI.searchField 

### UI.selectionField 

UI.filterField 

UI.finderField

****

:book: UX402 - Unit 3 

https://help.sap.com/doc/saphelp_nw75/7.5.5/en-US/f8/af07bb0770414bb38a25cae29a12e9/content.htm?no_cache=true

****





## What attribute can you use to inform the end-user of what kind of data he should enter in a form field? 

textsuggestion 

### placeholder 

textphrase

****

:book: 확실

****





## In which state are the files in GIT when a remote repository is cloned? 

## (Choose the correct answers). 

Staged and modified 

### Tracked and unmodified 

Tracked and staged 

Modified and tracked.

****

:book: UX402 - Unit 5 !!! Falsche Antwort absichtlich im original. 

https://88240.tistory.com/313

https://m.blog.naver.com/sw4r/221258249271

****





## Does QUnit support SAPUI5 view tests? 

## (Choose the correct answer). 

Yes, you can implement a test class to test UI aspects of SAPUI5. 

### No, for UI tests you must use OPA5. 

You can use the QUnit-extensions, called Selenium, to test SAPUI5 controls.

****

:book: UX402 - Unit 2 

https://help.sap.com/saphelp_uiaddon10/helpdata/en/a6/b0657d226343da81ad96632cd1bd83/content.htm?no_cache=true

https://help.sap.com/saphelp_uiaddon10/helpdata/en/26/96ab50faad458f9b4027ec2f9b884d/content.htm?no_cache=true

검증필요

****





## How does the OData Model handle XSRF tokens? 

## (Choose the correct answer). 

The OData Model does not handle XSRF-tokens. The developer must implement token handling. 

### The OData Model fetches the token when reading the metadata and sends the token automatically in each write request header. 

The OData Model fetches the token for each request and sends the token automatically with each request.

*****

:book: UX402 - Unit 3 

https://help.sap.com/saphelp_snc700_ehp04/helpdata/de/6c/47b2b39db9404582994070ec3d57a2/content.htm?no_cache=true

****





## In an Analytic List Page, the user can filter data by clicking some points in the chart. 

## which javascript function is called(Choose the correct answer). 

### True 

False

****

:book: UX403 - Unit 7 

****





## Which of following templates display only one business entity? 

## (Choose the correct answer). 

List Report 

### Object Page 

Overview Page 

Analytic List Page.

****

:book: UX403 - Unit 2 

검증필요

****





## When running a list report, users can only filter data using fields provided as selection fields by developer. 

## (Choose the correct answer). 

True

### False.

****

:book: UX403 - Unit 3 

검증필요

****





## In what configuration area of the manifest.json file can you activate automatic message creation? 

## (Choose the correct answer). 

sap.app 

sap.ui 

### sap.ui5

****

:book: UX402 - Unit 2 

검증필요

****





## What approach gives you the most flexibility for your SAPUI5 app? 

## (Choose the correct answer). 

Using a controller-based approach 

Using a view-only based approach 

Implement complex UIs in the index.html file 

### Using a component-based approach.

****

:book: UX402 - Unit 2 

검증필요

****





## What steps are used to display a field as a rating indicator? 

## (Choose the correct answers). 

### Set type of line item to #AS_DATAPOINT . 

### Add a @UI.datapoint to the field and set visualization to #RATING. 

Add a @UI.chart annotation to the field and set visualization to #RATING. 

Set the visualization of line item to #RATING.

****

:book: UX403 - Unit 5

https://sapui5.hana.ondemand.com/sdk/#/topic/a797173b84724ef1bc54d59dc575e52f.html

****





## Using S/4 HANA 1610 with ABAP 7.51, which of following templates can you use for Fiori Element? 

## (Choose the correct answers). 

### List Report 

### Object Page 

### Overview Page 

Analytic List Page.

****

:book: UX403 - Unit 2 

맞는거 같다

******





## What query option is needed to access the data of an entity in the JSON format? 

## (Choose the correct answer). 

$json 

### $format=json 

format=json

****

:book: UX402 - Unit 3 

https://stackoverflow.com/questions/42249587/why-can-i-get-to-use-format-json-with-entities-but-not-with-metadata-using-odat

*****





## The CDS annotation @UI.facet is used to: 

## (Choose the correct answers). 

### Create a Header Facet 

### Create a collection facet, which is displayed as section. 

### Create a reference under collection facet. 

Create content, like field groups, or charts for a Facet.

****

:book: UX403 - Unit 4 

검증필요

****





## In which cases, is a local annotation better than a CDS annotation? 

## (Choose the correct answers). 

UI with data intensive. 

Annotations is for 1 field. 

### Complex UI relevant annotations. 

### You want to use annotations which are not support by your current ABAP version.

****

:book: UX403 - Unit 2 

검증필요

****





## What are the differences between analytical entity set and normal entity set from an OData consumer perspective? 

## (Choose the correct answers). 

### The Analytical entity set, generates a new field for primary key. 

### The Analytical entity set, returns all data, needed to analyze the client. 

The Analytical entity set, returns summarized results according to the $select parameter. 

### Analyzes the use of the database and runs faster when SAP HANA is used as database compared to a normal entity set.

****

:book: UX403 - Unit 5 

검증필요

****





## For a list report, which annotation is used to describe the name of business entity displayed on the report? 

## (Choose the correct answer). 

@UI.lineItem.title 

@UI.headerInfo.type 

@UI.headerInfo.typeName 

### @UI.headerInfo.typeNamePlural.

****

:book: UX403 - Unit 3 

https://help.sap.com/saphelp_snc700_ehp04/helpdata/de/f8/af07bb0770414bb38a25cae29a12e9/content.htm?no_cache=true

****





## Which of following description about search field is NOT true? 

## (Choose the correct answer). 

The Search field is searching on more than one data field. 

There is only 1 search field per list report. 

### Search field searches for only 1 data field. 

Search field support fuzzy search.

****

:book: UX403 - Unit 3 

****





## What parameter must you provide when calling the simulate function of the mock server? 

## (Choose the correct answer). 

The full qualified path to the model and the URI for the service document. 

### The full qualified path to the local metadata file and the folder where the model data are stored locally. 

The autoRespondAfter parameter and the full qualified path to the local metadata file.

****

:book: UX402 - Unit 3 

**Mock data** (json files)

You can let the mock server generate random mock data automatically based on services metadata. For this, provide only the path to the metadata file and omit the second parameter of the simulate function as follows:

// url to the service metadata document

​    var sMetadataUrl = "testdata/rmtsampleflight/metadata.xml";

​    oMockServer.simulate(sMetadataUrl);

You can provide your own mock data in .json files, which can either be created manually or saved from an OData service response. Mock data in JSON format can be generated from an OData service by adding the $format=json parameter to the URL. Save the browser response which is called <entity type name>.json, for example Mock.json and put it into the mock data folder. Add the path to the simulate function

http://www.sapui5tutors.com/2016/06/mockserver-in-sapui5.html

****





## Where is the best place to store local data when using the SAP Web IDE? 

## (Choose the correct answers). 

In the models folder. 

### In the localService folder. 

### In the mockdata folder.

****

:book: UX402 - Unit 3 

검증필요

맞는거 같다

****





## The field indicate criticality should be hidden because it means nothing to end user. (Choose the correct answer). 

### True 

False.

****

:book: UX403 - Unit 5 

검증필요

****





## A GIT branch is the SAP implementation of GIT. (Choose the correct answer). 

A merge deletes the content of a branch. 

Allows the merging of two local branches into one local branch. 

### Allows integration of a branch into another branch.

****

:book: UX402 - Unit 5 

문제 이상

******





## Which of the following statements are true with regard to OPA5? (Choose the correct answers). 

### Can be used for user interaction tests

### Can be used for SAPUI5 integration tests. 

Is a view controller test framework 

### Provides the possibility to test navigation.

****

:book: UX402 - Unit 2 

검증필요

****





## Which of the following types are types of cards in an Overview Page? (Choose the correct answers). 

### List Cards

### Link List Cards 

### Analytic Cards 

### Table Cards 

### Stack Cards.

****

:book: UX403 - Unit 6 

https://experience.sap.com/fiori-design-web/cards/

답 검증필요

****





## Which of the following aspects are true for a SAPUI5 UI element? (Choose the correct answers). 

### A UI element has an API. 

### A UI element does not have a renderer. 

A UI element has a renderer. 

### A UI element can have events.

****

:book: UX402 - Unit 2 

검증필요

****





## What is the result of a GIT Clean? (Choose the correct answer). 

Undoes a committed snapshot. 

### Removes all untracked files from the working directory 

Reverts back to the previous state of the project.

****

:book: UX402 - Unit 5 

****





## What is meant by the phrase “SAPUI5 supports modification free enhancements”? (Choose the correct answer). 

The developer must create a copy of the application that should be enhanced and the enhancement is done in the copy. 

### The delivered standard application remains unchanged and hence the extension is considered to be modification free. 

SAP provides a service in the cloud to generate an enhanced application using aspect-oriented programming.

****

:book: UX402 - Unit 4 

검증필요

****





## Which info will be used for creating a destination in SAP Cloud Platform for Fiori Elements development? (Choose the correct answer). 

### Virtual name in SAP Cloud Connector. 

Internal name in SAP Could Connector. 

External name in SAP Cloud Connector. 

Internal address of SAP Backend Server.

****

:book: UX403 - Unit 2 

검증필요

****





## The combination of  Term/Target is unique, that means for an Entity or a field, every term can be used only once. (Choose the correct answer). 

True 

### False.

****

:book: UX403 - Unit 2 

검증필요

****





## What are the ideas behind the SAP UX strategy? (Choose the correct answers). 

### Design Strategy 

New / Renew / Enablement 

### New / Renew /Empower 

### Architecture and Technology 

SAP Screen Personas.

****

:book: UX403 - Unit 1, UX410 - Unit 2 

검증필요

****





## Which OData versions are currently supported by SAPUI5? (Choose the correct answers). 

### OData V2 

OData V5 

### OData V4 

OData V7.

****

:book: UX402 - Unit 2 

****





## Which of the following statements are true with respect to QUnit? (Choose the correct answers). 

### Supports only synchronous testing out of the box. 

### QUnit is a JavaScript unit and integration test framework. 

Supports asynchronous tests out-of-the-box

###  Is capable of testing any generic JavaScript code.

****

:book: UX402 - Unit 2 

****





## What are the features of Fiori Elements? (Choose the correct answers). 

### No JavaScript UI Coding. 

### Metadata-driven approach of Fiori development. 

A replacement for traditional free style SAPUI5 programming, can satisfy all customer needs in a brand new approach. 

### Centrally Provided Templates covering Reporting, Analytic, Transaction scenarios.

****

:book: UX403 - Unit 2 

검증필요

****





## Which of the following are the main states of a file in GIT? (Choose the correct answers). 

### Committed 

### Changed 

Released 

### Modified.

****

:book: UX402 - Unit 5 

https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F

committed staged modified 세개로 나와있다.

검증필요

****





## What aspects of the runtime environment can be accessed by the Device API of SAPUI5? (Choose the correct answers). 

### Operating system 

### Screen size 

### Orientation change 

Language 

### Touch-specific features.

****

:book: UX402 - Unit 2 

검증필요

****





## Which UI annotation is used in the object page to display the object header? (Choose the correct answer). 

UI.headerObject 

UI.objectheader 

### UI.headerInfo 

UI.header

****

:book: UX402 - Unit 3 

https://help.sap.com/saphelp_snc700_ehp04/helpdata/de/f8/af07bb0770414bb38a25cae29a12e9/content.htm?no_cache=true

****





## Which function must be called inside a control renderer to add the control ID to the DOM tree and support eventing? (Choose the correct answer). 

writeClasses 

writeIcon 

### writeControlData 

write.

****

:book: UX402 - Unit 2 

https://velog.io/@rumblekat/Tutorial-10.-Custom-controls

****





## Fiori Elements support write operations, if the backend service is written by CDS working with BOPF. (Choose the correct answer). 

### True 

False.

****

:book: UX403 - Unit 5 

****





## How can you hide some columns when the list report is accessed by a mobile phone? (Choose the correct answer). 

Put all fields, which are not important at the end of the report, when screen gets smaller, the fields will hide automatically. 

Add @UI.hidden for fields. not import. 

Prepare a different version of @UI.lineItem and assign them as adifferent qualifier. 

### Set UI.lineItem.importance for those fields as #LOW or @Medium.

****

:book: UX403 - Unit 3 

HIGH : 기본값 모든 클라이언트에 표시된다.

MEDIUM : 데스크톱 브라우저나 태블릿에만 표시

LOW : 데스크톱 브라우저에만 표시

****





## Which binding modes are supported by SAPUI5? (Choose the correct answers). 

### One-time 

### One-way 

Single-time-only 

### Two-way 

Once.

****

:book: UX402 - Unit 2 

****





## Which areas are part of an Analytic List Page? (Choose the correct answers). 

### Title Area 

### Visual Filters 

Selection Fields 

### Content Area.

****

:book: UX403 - Unit 7 

https://experience.sap.com/fiori-design-web/analytical-list-page/#components

****





## When do you need to work with local data? (Choose the correct answers). 

### When working with static data. 

When performance is poor in the productive system. 

### To perform a quick test without creating live entities on the back-end server. 

When you want to reduce the complexity of your application.

****

:book: UX402 - Unit 3 

****





## Which of the following best describes a commit? (Choose the correct answer). 

With every commit, GIT create a new branch. 

### With every commit, GIT takes a snapshot of the current state of the underlying files. 

With every commit, a new local repository is created. 

A commit in GIT is a local operation.

****

:book: UX402 - Unit 5 

****





## Which of the following information about an OData service should be provided as an annotation? (Choose the correct answer). 

The entities of an OData service. 

Properties of an Entity Set/Collection. 

### The position for each field in a list report. 

Data type for each property in an Entity Set/ Connection.

****

:book: UX403 - Unit 2 

검증필요

****





## When you implement a controller extension and you implement the onInit and onAfterRendering functions in the extension, when are they called? (Choose the correct answer). 

### After the corresponding functions form the standard controller. 

Only the functions of the controller extensions are called. 

Before the corresponding functions from the standard controller.

****

:book: UX402 - Unit 4 

검증필요

****





## What is the relation between the model and the controller in the standard MVC implementation? (Choose the correct answers). 

### The controller modifies the model. 

### The model notifies the controller about changes. 

The model updates the controller. 

The controller sets the model visibility.

****

:book: UX402 - Unit 2 

****





## You want to define a property with the name width to enhance a standard UI5 control. The property should hold the current width of the UI control. What is the best approach to defining the type of such a property? (Choose the correct answer). 

Define the property width of the type string. 

Define the property width of the type sap.ui.core.Integer 

### Define the property width of the type sap.ui.core.CSSSize.

Define the property width of the type sap.ui.core.type.CSSSize.

****

:book: UX402 - Unit 2 

****





## How do you access the MessageManager? (Choose the correct answer). 

### A It is a singleton and can be accessed by the getMessageManager function on the core object. 

You have to instantiate the MessageManager using the constructor function. 

Each UI control provides a function to access the MessageManager.

****

:book: UX402 - Unit 2 

****





## In an overview page, all entity sets for cards have an association with the entity set for global filter, otherwise the filter will not work on the card. (Choose the correct answer). 

True 

### False.

****

:book: UX403 - Unit 6 

검증필요

****





## What method is called inside the library.js file? (Choose the correct answer).  

sap.ui.getCore().registerLibrary 

### sap.ui.getCore().initLibrary 

sap.ui.getCore().loadLibrary 

sap.ui.getCore().runLibrary.

****

:book: UX402 - Unit 2 - !!! Originale Antwort falsch, bitte überprüfen. 

****





## What is the namespace in which the smart controls are bundled? (Choose the correct answer). 

sap.ui.smart 

### sap.ui.comp

sap.m

****

:book: UX402 - Unit 3 

https://sapui5.hana.ondemand.com/#/entity/sap.ui.comp.tutorial.smartControls

****





## What message types are known to SAPUI5? (Choose the correct answers). 

Control message 

### UI message 

### Server message 

Log message.

****

:book: UX402 - Unit 2 !!! Die originale Antwort scheint falsch zu sein. Zur Sicherheit anschauen. 

https://help.sap.com/saphelp_snc700_ehp04/helpdata/de/62/b1481d3e084cb49dd30956d183c6a0/frameset.htm

검증필요

****





## Which of the following are best practices when developing a SAPUI5 app? (Choose the correct answers). 

### Describe your app using a set of metadata. 

Use the Synchronous Model Definition (SMD) syntax. 

### Minimize the code in the index.html file. 

### Make use of patterns. 

### Use an asynchronous model definition in your JavaScript code.

****

:book: UX402 - Unit 2 

검증필요

****





## Which file contains the initialization code for the UI library? (Choose the correct answer). 

library.load.js 

library.js 

loadlibrary.js 

lib.dll.

*****

:book: UX402 - Unit 2 

****





## How can a renderer access the associated elements? (Choose the correct answer). 

The developer must implement an appropriate function to access the elements. 

### SAPUI5 provides functions to access all properties, associations, and aggregations. 

The developer must define a property method in the control metadata and declare the access control.

****

:book: UX402 - Unit 2 

검증필요

****





## What is the result of a GIT Reset? (Choose the correct answer). 

Undo a committed snapshot. 

Removes all untracked files from the working directory. 

### Returns a project back to the previous state.

****

:book: UX402 - Unit 5 

****





## What are the options for external navigation? (Choose the correct answers). 

### Navigation to URL (As a link). 

Navigation to URL (As a button). 

### Navigation to Intent (As a link). 

### Navigation to Intent (As a button).

****

:book: UX403 - Unit 5 

검증필요

****





## What types of extensions/replacements are supported by SAPUI5? (Choose the correct answers). 

Component replacement 

### View replacement 

### View modification 

### Replace service 

### Implement UI Controller Hooks 

Manifest.json replacement.

****

:book: UX402 - Unit 4 

검증필요

****





## Which aggregation is used to overwrite the standard behavior of a SmartField control. (Choose the correct answer). 

overwrite 

### configure 

extension.

****

:book: UX402 - Unit 3 

https://sapui5.hana.ondemand.com/sdk/#/topic/4864403f08c64ca08a2b0ee1fa9cb5e2.html

검증필요

****





## Why does it make sense to use the navigation API of SAPUI5 and concepts such as eventbus or the navcontainer functions of the base application? (Choose the correct answers). 

### Using the navigation API, it is possible to use bookmarks. 

The eventbus concept is deprecated and should no longer be used. 

### Using the navigation API, the configuration of routes and targets are clearly separated from the application implementation. 

The NavContainer of the App object is not accessible inside a component-based app.

****

:book: UX402 - Unit 2 

검증필요

****





## Which of following steps are needed to create an association in CDS and expose it? (Choose the correct answers). 

### Declare an association using “association to” statement. 

Declare an association using “left outer join” statement. 

### Expose the association by writing its name in projection list. 

Expose fields in the association by writing each field in projection list.

****

:book: UX403 - Unit 2 

https://help.sap.com/docs/SAP_HANA_PLATFORM/09b6623836854766b682356393c6c416/6fcd6e5883f04de5b618a6d91141afb4.html?version=2.0.02&locale=en-US

****





## What is the base class for all UI controls in SAPUI5? (Choose the correct answer). 

sap.ui.Control 

### sap.ui.core.Control 

sap.ui.base.Control 

sap.ui.Element.

****

:book: UX402 - Unit 2 

****





## What is the data binding used for? (Choose the correct answer). 

### Data Binding is used to bind two data sources together and keeping them in sync. 

???.

****

:book: UX402 - Unit 2 

****





## What steps needs to be done in manifest.json if you need to hide variant function in a list report? (Choose the correct answers). 

### Add setting to enable smart Variant Management. 

Add setting to disable smart Variant Management. 

### Set setting variantManagementHidden to true. 

Set setting showVariantManagement to false.

****

:book: UX403 - Unit 3 

검증필요

****





## When creating a CDS view, the SQL view name and view name for CDS must be identical. (Choose the correct answer). 

True 

### False.

****

:book: UX403 - Unit 2 

****





## What is the use of the annotation @UI.hidden? (Choose the correct answer). 

Prevent a column from display on the UI. 

Not expose these fields as a property of OData service. 

### Prevent a column selected by user when customizing table settings. 

Create a invisible column to save the value in a hidden control of HTML.

****

:book: UX403 - Unit 3 

@UI.hidden 은 UI 렌더링 결과에서 필드를 숨긴다.

@Consumption.hidden 이 포함된 필드 주석은 클라이언트에 표시 되지 않는다

****





## Which of the following statements are true with regard to implementing your own renderer? (Choose the correct answers). 

Implement the render function inside the control. 

### Implement a renderer class, derived from sap.ui.core.Renderer, in a separate file. 

### Implement the renderer using AMD syntax. 

### Assign a reference to the renderer property of the UI control.

****

:book: UX402 - Unit 2 

검증필요

****





## What is the result of a GIT Revert? (Choose the correct answer). 

### Undoes a committed snapshot. 

Removes all untracked files from the working directory. 

Reverts back to the previous state of the project.

****

:book: UX402 - Unit 5 

****





## Which types are supported as header facets for an object page? (Choose the correct answers). 

### Field Group Facet 

### Plan Text Facet 

Smart Chart Facet 

### Rating Indicator Facet

****

:book: UX403 - Unit 4 

검증필요

****





## Choose available options for creating a value help for a selection field. (Choose the correct answers). 

### By adding a foreign key annotation. 

### By adding a value help annotation. 

If the domain which associates to the field, has a fixed value, the value help will be generated automatically. 

By adding annotations to list all possible in source code of CDS.

****

:book: UX403 - Unit 3 

검증필요

****





## Which of the following properties are relevant to the type of facet? (Choose the correct answers). 

### purpose 

targetQualifier 

parentId 

### type.

****

:book: UX403 - Unit 4

검증필요

****





## To what namespace is the ExtensionPoint class assigned? (Choose the correct answer). 

sap.ui.extension 

sap.m 

### sap.ui.core 

sap.ui.core.extension.

****

:book: UX402 - Unit 4 

https://sapui5.hana.ondemand.com/sdk/#/api/sap.ui.core.ExtensionPoint

****





## Which of the following describe benefits of SAP Fiori elements? (Choose the correct answers). 

### Consistent UI design. 

Full control of the of the generated code at design time. 

### Less support effort. 

Flexibility and freedom in UI design.

****

:book: UX402 - Unit 3 

****





## Which of the following SAP Fiori element based UIs are currently available? (Choose the correct answers). 

Wizard Form 

### List Report 

Master-Detail 

### Overview Pages 

### Object Page.

****

:book: UX402 - Unit 3 

****





## How do you set a field as the title for a business entity? (Choose the correct answer). 

Add @UI.title annotation for that field. 

Add @UI.headerInfo.title annotation for that field. 

### Add @UI.headerInfo.title.value for the CDS view and reference it to the field. 

Add @UI.headerInfo.title for the CDS view and reference it to the field.

****

:book: UX403 - Unit 4 

검증필요

****





## To add a header facet, you should use @UI.HeaderFacet annotation and put it before the define statement of your CDS view. (Choose the correct answer). 

True 

### False.

****

:book: UX403 - Unit 4 

****





## In which base class implementation is the setModel function implemented? (Choose the correct answer). 

### sap.ui.base.ManagedObject 

sap.ui.base.Object 

sap.ui.base.Interface 

sap.ui.model.base.BaseModel.

****

:book: UX402 - Unit 2 

https://sapui5.hana.ondemand.com/sdk/#/api/sap.ui.base.ManagedObject%23methods/setModel

****





## What method must be implemented on the back end to support deep inserts? (Choose the correct answer). 

INSERT_ENTITY_DEEP 

CREATE_ENTITY_DEEP 

### CREATE_DEEP_ENTITY 

APPLY_DEEP_ENTITY.

****

:book: UX402 - Unit 3 




****





