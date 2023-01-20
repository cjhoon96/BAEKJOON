### Q1.What is the purpose of the SAP HANA Cloud connector?

* It allows the SAP Web IDE to connect to the on-premise system's Cordova development environment
* It connects the services of the SAP HANA Cloud Platform and SAP Web IDE
* It connects the services of the SAP HANA Cloud Platform and on-premise system in the customer's network
* It lists the search components and corresponding search models needed for the app



****

#### The Cloud Connector:

* SAP Cloud Platform app 과 on-premise system 간의 link 역할을 한다.
  * SAP Cloud Platform 에 노출된 system 의 명확한 configuration 과 easy set up 을 결합한다. 
  * 전체 internal landscape 를 노출하지 않고 기존 on-premise asset 을 사용할 수 있다.

* 보안 네트워크에서 on-premise 에이전트로 실행된다.
  * 온프레미스 네트워크와 SAP Cloud Platform 간의 역방향 호출(reverse invoke) 프록시 역할을 한다.

* 세부적인 control을 제공한다.
  * 클라우드 app 에서 액세스 할 수 있는 on-premise 시스템 및 resource
  * cloud connector 를 사용한 cloud application


* business-critical enterprise scenario 에 필요한 기능을 사용할 수 있다.
  * 끊어진 connection 을 자동으로 복구한다.
  * inbound traffic 및 configuration 변경에 대한 감사 log 기록을 제공한다.
  * high-availability setup 에서 실행할 수 있다.


Link: https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e6c7616abb5710148cfcf3e75d96d596.html

Correct Answer: 3

****

****



### Q2. 정리 완료



****

****



### Q3.What happens when you use the SAP Web IDE console during a deployment? (2 Correct)

You can view error messages when a deployment is NOT successful

You can archive the success messages in the console
 You can view error messages when a deployment is successful

1. You can debug the error messages in the console
     Correct Answer: 1,4
       Explanation
       Development Perspective Overview - Continued
       Question 4
       Search:
       Git:
       Advanced Repository
       Search
       Find in files
       (file name or content)
       Find references
       your
       elopment objects
       in your Git repository
       Gerrit:
       Manage your code
       reviews
       Git History:
       Tag, Cherry-Pick, Revert etc.
       Console
       Problems View
       Run Console
       Outline
       Ques:-
       Which element in the SAPUI5 architecture holds the data in JSON or XML?
2. Model
     2.O
       Component
3. O
     Controller
4. View
     Wrong
       Wrong
       Wrong
       Right
       Correct Answer: 1
       Explanation
       The Model View Controller (MVC) concept is used in SAPUI5 to separate the representation of information from the user interaction. This separation facilitates development
       and the changing of parts independently.
       Model, view, and controller are assigned the following roles:
       • The view is responsible for defining and rendering the UI.
       • The model manages the application data.
       • The controller reacts to view events and user interaction by modifying the view and model.
       Link: https://sapui5.hana.ondemand.com/#/topic/91f233476f4d1014b6dd926db0e91070
       Question 5
       Ques:-
       Which application types can you develop and deploy on the SAP HANA Cloud platform? (3 Correct)
       1.✓ HANA XS apps
5. Objective-C apps
6. Java apps
        4.✔
        ABAP apps
        5.✓
        HTML apps
        Correct Answer: 1,3,5
        Explanation
        Home Europe (Rot-Trial Ex+
        account.hanatrial.ondemand.com/cockpit//acc/p1941529813trial/services
        SAP SAP Cloud Platform Cockpit
        Paused)
        Ranjeet
        content and business processes to get work done.
        applications without the need to
        applications based on SAPUIS
        write any code.
        technology
        Applications
        V
        Java Applications
        Extension Suite - Digital Process Automation
        HTML5 Applications
        Business Rules
        Workflow
        HANA XS Applications
        Not enabled
        Not enabled
        Enrich cloud offerings with decision
        Automate business processes using
        Subscriptions
        modeling, management, and
        workflow technology
        execution service.
        Services
        Solutions
        Integration Suite
        SAP HANA/SAP ASE
        API Management
        Connectivity
        Database Systems
        Not enabled
        Enabled
        Expose your data and processes as
        Establish connections between
        Databases & Schemas
        O APIs and manage their lifecycles.
        cloud applications and on-premise systems.
        Open Connectors
        Not enabled
        Simplify integration via APIs
        Service Requests
        Connectivity

>
>Useful Links
>Process Integration
>SAP API Business Hub
>Legal Information
>Enabled
>Question 6
>Ques:-
>What are the Lifecycle events of an SAPUI5 view controller? (2 Correct)
>1.0
>onExecution
2. onEntry
3.✓ onExit
4.✔ onBeforeRendering
Wrong
Right
Correct Answer: 3,4
Explanation
Lifecycle Hooks
SAPUI5 provides predefined lifecycle hooks for implementation. You can add event handlers or other functions to the controller and the controller can fire events, for which other controllers or entities can register.
SAPUI5 provides the following lifecycle hooks:
• onInit(): Called when a view is instantiated and its controls (if available) have already been created; used to modify the view before it is displayed to bind event handlers and do other one-time initialization
⚫ onExit(): Called when the view is destroyed; used to free resources and finalize activities
• onAfterRendering(): Called when the view has been rendered and, therefore, its HTML is part of the document; used to do post-rendering manipulations of the HTML. SAPUI5 controls get this hook after being rendered.
• onBeforeRendering(): Invoked before the controller view is re-rendered and not before the first rendering; use onInit() for invoking the hook before the first rendering
Link:
https://sapui5.hana.ondemand.com/1.36.6/docs/guide/121b8e6337d147af9819129e428f1f75.html
Question 7
Ques:-
What activity does the QUnit Stub functionality perform?
1. Returns values for method calls
2. Supplies parameter for method calls
3. Verifies that expected methods are called correctly
4. Provides parameters and return values for method calls
Correct Answer: 1
Explanation
Direct Input
Indirect Input
Code Under Test
Direct Output
Indirect Output
Test Double (Stub/Mock)
Stubs only provide return values for method calls ("indirect input") Mocks
Additionally verify that expected methods are called with the right parameters
("indirect output").
Enable the testing and discovery of side effects.
Caution! Tests can get fragile when mocks are too "strict".
Solution: Dynamically created mocks using a mocking framework http://sinonjs.org/ Figure 199: Test Double
Question 8
Ques:-
What are the limitations of OPA5 test? (2 Correct)
1. The developer needs to create the test during development
2. It never causes a test to fail
3. Testing across more than one page is NOT possible
4. End-to-End tests are NOT recommended
Correct Answer: 3,4
Explanation
The following figure shows some of the limitations when using OPA5.
⚫ Screen capturing.
Testing across more than one page.
• Remote test execution.
. End-to-end test are not recommended with OPA5 due to authentication
issues and the fragility of test data.
A Figure 209: OPA5 Limitations
Question 9
Ques:-
Which file of the SAP HAT Connector stores the WebIDEHosts URL and can be used for troubleshooting?
1.0 appConfig.js
2. Package.json
3. Assistmsg.json
4. Config.json
Correct Answer: 4
Explanation
File Edit Run Deploy Search
Save
Run
盒
</>
203
Code Check
Code Completion
Code Editor
Git Settings
Hybrid Application Toolkit
Plugins
Available Plugins
Optional Plugins
View
Tools Help
SIMMACO
Feedback
Logou
Hybrid Application Toolkit
These property values must match the equivalent in the HAT Connector config.json file.
Port
9010
API Key X2gr91J4ihu60pN8kwbV7
Test Connection
The connection is available.The HAT Connector version is v1.9.7.
=
File
Home View
Cut
Courier New
11 ▾ Α' Α'
Copy
Paste
BI U abe X2 x2
Clipboard
Font
config - WordPad
Picture Paint drawing
Date and Insert time object
Find Replace Select all
Paragraph
Insert
Editing
1 2 3 4 5 6 .......
f
"commandLog": "command.log",
"serverLog"
: "server.log",
"webIdeHosts": ["https://webide-
i045523trial.dispatcher.hanatrial.ondemand.com" ],
"port": 9010,
"apiKey": "X2gr91J4ihu60pN8 kwbV7",
"serverDebug": false,
"maxWait": 6,
"zipSizeLimit": 15,
"workSpace" : "SAPHybrid",
"webapp",
"sourceDir":
Link: https://blogs.sap.com/2015/07/13/how-to-install-hybrid-application-toolkit-hat-on-windows-part-3-of-3/
Question 10
Ques:-
What is the required content of the Component.js file of an extension project? (2 Correct)
1.✓ The namespace of the parent app
2. The controller IDs
3.
The customizing section
4. The link to the parent app
Correct Answer: 3,4
Explanation
jQuery.sap.declare("capp name>.Component");
namespace of custom app
JavaScript
sap.ui.component.load({
name: "<parent app name)",
url: "parent app url"
});
<app name>.Component.extend("capp name>", [
setadata:
manifest: "json"
Di
A Figure 178: Component.js
Question 11
Ques:-
loading parent
application
extending custom app
customization goes here
What is an Aggregation? (2 Correct)
1.✔ Is a parent child relationship
2.✔ A relationship between the text field and its label
3.
Is not a parent/child relationship
4. A relationship between two controls
Correct Answer: 1,4
Explanation
Link: https://sapui5.hana.ondemand.com/1.36.6/docs/guide/91f057786f4d1014b6dd926db0e91070.html
Question 12
Ques:-
Which activities does the OData Model Editor support? (3 Correct)
1. Deploy ODataModels
2. Define Odata models
3. Edit ODataModels
4.✔ Test ODataModels
Correct Answer: 2,3,4
Question 13
Wrong
Wrong
Right
Wrong
Wrong
Right
Right
Ques:-
What does coherence refer to in the SAP Fiori design principles? (2 Correct)
A description of the technological foundation
2.✓
The same intuitive experience across the whole enterprise
3.✓
A consistent interaction and visual design language
4.U
The way in which the data is handled internally
Correct Answer: 2,3
Explanation
Design Principles
The design philosophy of SAP Fiori is based on five core principles. SAP Fiori user experience is role-based, adaptive, simple,
coherent, and delightful.
ROLE-BASED
SAP Fiori is designed for your business, your needs, and how you work. It draws from our broad insights on the multifaceted roles of today's workforce. SAP Fiori provides the right information at the right time and reflects the way you actually work.
DELIGHTFUL
Apart from making you work smarter, SAP Fiori also enriches your work experience by allowing you to simply do your job. COHERENT
Whether you fulfill a sales order, review your latest KPIs, or manage leave requests - SAP Fiori adheres to a consistent interaction and visual design language. Across the enterprise, you enjoy the same intuitive and consistent experience.
SIMPLE
With SAP Fiori, you can complete your job intuitively and quickly. SAP Fiori helps you focus on what is important - essential functions are easy to use and you can personalize the experience to focus on your relevant tasks and activities.
ADAPTIVE
SAP Fiori enables you to work how and where you want, regardless of the device you use. And, it provides relevant information that allows for instant insight.
Link: https://experience.sap.com/fiori-design-web/design-principles/
Question 14
Ques:-
In the Git source code management system, what is executed initially to create the local Git repository in SAP Web IDE?
1.0 Fetch
2.O Push
3. O Clone
4. O Pull
Correct Answer: 3
Explanation
1. Import an existing directory into GIT.
A
a) Create/Switch to the project directory (cd /yourprojectdirectory)
b) Initialize the Repository (git init)
c) Stage all files (git add -A)
d) Commit staged files (git commit -m 'Message')
2. Clone an exsiting GIT repository from a server.
a) Create/Switch to the project directory (cd /yourprojectdirectory)
b) Clone the directory (git clone https://github.com/SAP/hana-shine)
Figure 321: GIT Repositories - Getting Started
Question 15
Ques:-
What is a prerequisite for configuring the SAP Fiori HAT Connector?
1. Create an SAP HANA Cloud Platform (HCP) Web IDE account
2.O
Create a local Cordova project
3. Generate a service certificate
4. Set the path for custom plug-ins
Correct Answer: 1
Explanation
Link: https://blogs.sap.com/2015/08/25/how-to-use-hat-hybrid-application-toolkit-and-test-the-apps/
Question 16
Ques:-
Where are the themes saved for the SAP Fiori launchpad?
1. In the UI theme designer tool
2. In the theme data center
3. O In the theme repository
4. In the bootstrap
Correct Answer: 3
Explanation
• Transaction UI5/THEME_DESIGNER: This transaction is used to create, edit, copy, delete, or rebuild/upgrade a theme.
• Transaction UI5/THEME_TOOL: This transaction is used for deleting, exporting, importing, transporting, and to analyze theme content.
• Transaction UI Theme Repository: This tool is used for exporting or importing single files, or it's used to analyze theme content.
Link: https://blogs.sap.com/2017/01/24/customizing-sap-fiori-launchpad-using-the-ui-theme-designer/
Question 17
Ques:-
What are the basic guidelines of the Extension Point concept of SAPUI5? (2 Correct)
1.✓ The custom app is located in a separate project
2.✔ The custom app and the parent app contain a component.js file
3.0
The parent app contains all modifications
4.0
The custom app remains modification free
Correct Answer: 1,2
Explanation
Parent Application
Extension Project
Component.js
Component.js
declare
modification
load
free
extend
manifest.json
extend
Extensions
^ Figure 177: UI Extension Project
Parent Application
Extension Project
Component.js
Component.js
declare
modification
load
free
extend
manifest.json
A
Figure 177: UI Extension Project
Question 18
Extensions
extend
Ques:-
To perform a QUnit test, what do you include in a test page under your webapp folder?
1. Stub code
2. Mock code
3. O OPA function
4.O SAPUI5 bootstrap code
Correct Answer: 4
Explanation
The next two figures show the content of an example test page.
test qunt html x
2-
<head>
3
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
cbase href="../- -/- -/- -/- -/- -/">
5.
<script ide"sap-ul-bootstrap"
src="../../resources/sap-ui-core.js"
data-sap-ui-libs="sap.m
data-sap-ui-theme="sap_bluecrystal"
data-sap-ui-compatVersion="edge" data-sap-ui-resourceroots" ("sap.training.qunittest": "
data-sap-ui-noConflict="true"
10.
11
12
<
13
</script>
14
<link rel="stylesheet" href="resources/sap/ui/thirdparty/qunit.css" type="text/css" media="screen"/>
15
<script type="text/javascript" src="resources/sap/ui/thirdparty/qunit.js"></script>
16
<script type="text/javascript" src="resources/sap/ui/qunit/qunit-junit.js"></script>
17
<script type="text/javascript" src="resources/sap/ui/qunit/QUnitUtils.js"></script>
18
<script srce"./webapp/util/prettydate.js"></script>
Figure 202: Test Page Example (1 of 2)
Question 19
Ques:-
Which elements are part of the UX? (2 Correct)
1.✔ User interaction
2.
User effectiveness
3.0
User emotion
4.✔
User response
Correct Answer: 1,3
Explanation
Right
Wrong
Right
Right
Wrong
Wrong
User Experience Design Here are the elements of UX design:
Visual design This element not only focuses on making aesthetically pleasing screens but also on removing distractions and letting the user focus on his tasks, communicat-ing
a brand identity, consistent use of color contrasts and typography, and so on.
Information architecture This deals with how to organize and structure the content and provide naviga-tion structures so users can use the application efficiently. Interaction Design This element determines how the application behaves when user interaction occurs. It also involves how to arrange the interface components to facilitate
intuitive navigation.
Usability Usability refers to how easy your application is to use and includes learnability, memorability, efficiency, and user satisfaction._ Accessibility This element defines whether the application is accessible to people with a wide range of hearing, vision, and mental abilities.
Human-computer interaction This element focuses on interaction between humans and computers and ways to optimize it.
Question 20
Ques:-
Which information is included in the SAPUI5 app's manifest.json file? (3 Correct)
1.✔
Referenced data sources
2.✓ SAPUI5 dependencies
3.
Client side data-models
4.
Localization keys
5.
App ID, Name and Version
Correct Answer: 1,2,5
Explanation
Right
The data is stored in json format in the manifest.json file. The developer creates the file with attributes in different namespaces. It contains, for example, the app ID, the
libraries. The existence of the manifest.json file must be declared in the component metadata, which
version, the data sources used, along with the required components and
is then delivered as part of the application archive. After delivery, the file
is
read-only.
Link: https://help.sap.com/viewer/468a97775123488ab3345a0c48cadd8f/7.51.6/en-US/be0cf40f61184b358b5faedaec98b2da.html
Question 21
Ques:-
What do you configure to import the BUILD prototype in the SAP Web IDE for development?
1. The connection in the SAP HANA Cloud Connector
2. The API key in the SAP Web IDE plugin
3. The destination in the SAP HANA Cloud Platform
4. The connection in the SAP HANA Cloud Integration
Correct Answer: 3
Explanation
Wrong
The procedure below details the steps to be taken when working with SAP Web IDE Multicloud. For SAP Web IDE standard, please refer to the SAP Build documentation.
Configure Destinations in SAP Cloud Platform and SAP Web IDE:
If you are using a licensed version of SAP Build you can skip this section. All destinations were created automatically when the SAP Build service was enabled for your company
SAP CP account. If you
are a freemium user, you need to do some configuration steps in SAP CP for SAP Build and WebIDE to be able to communicate effectively
Link: https://www.build.me/splash/sites/default/files/Prototyping_with_BUILD_2.pdf
Question 22
Ques:-
Which SAP Fiori app types require the SAP HANA database? (2 Correct)
1.✔ Analytical
2.
Transactional
3.]
Legacy
4.✓
Factsheet
Correct Answer: 1,4
Explanation
Clients (Desktop/Mobile/
SAP Fiori launchpad
SAP Fiori Client)
SAP Web Dispatcher
HTTP
HTTP
HTTP
Frontend
SAP Fiori
Server
launchpad UI
UI for each SAP Fiori app
OData Service
Backend
SAP
SAP
SAP
SAP
Server
ERP
CRM
SRM
SCM
SAP HANA Database
Figure 2.4 Architecture of an SAP Fiori Analytical App
Clients (Desktop/Mobile/
SAP Fiori launchpad
SAP Fiori Client)
SAP Web Dispatcher
HTTP
HTTP
Frontend
SAP Fiori
Server
launchpad UI
UI for each SAP Fiori app
OData Service
Backend
SAP
SAP
SAP
SAP
Server
ERP
CRM
SRM
SCM
SAP HANA Database
Figure 2.4 Architecture of an SAP Fiori Analytical App
Question 23
Ques:-
What are the advantages of the Sinon.JS framework? (2 Correct)
2. It enables test-driven
1. It supplies higher level test doubles for timers and AJAX requests
development
3. It
provides support
for Spies, stubs and mocks
4. It can be used with any JavaScript unit test framework
Correct Answer: 1,3
Explanation
Sinon.Js is a mocking framework for JavaScript that has the following features:
.
Provides support for spies, stubs and mocks.
Supplies higher-level test doubles for timers and AJAX requests.
Is included in the SAP UI5 libraries.
Question 24
Ques:-
Which properties do you need to configure when you use the Mock server? (2 Correct)
1. Service Url
2. Module path
3. Destination
4. Binding type
Correct Answer: 1,2
Explanation
webapp/localService/mockserver.js (New)
sap.ui.define([
"sap/ui/core/util/MockServer"
], function (MockServer) {
"use strict";
return {
init: function () {
// create
};
});
SAP HANA XS
HTTP
SAP HANA XS
var oMockServer = new MockServer({
rootUri: "/destinations/northwind/V2/Northwind/Northwind.svc/"
});
var oUriParameters = jQuery.sap.getUri Parameters();
// configure
MockServer.config({
autoRespond: true,
});
autoRespondAfter: oUri Parameters.get("serverDelay") || 1000
// simulate
var sPath = jQuery.sap.getModulePath("sap.ui.demo.wt.localService");
oMockServer.simulate (sPath + "/metadata.xml", sPath + "/mockdata");
// start
oMockServer.start();
Link: https://sapui5.hana.ondemand.com/1.36.6/docs/guide/bae9d90d2e9c4206889368f04edab508.html
Question 25
Ques:-
To generate SAPUI5 coding that is based on prototypes, which tool do you use?
1. SPLASH
2. SAP WEB IDE
3. O SAP BUILD
UI Theme Designer
Correct Answer: 2
Explanation
Link: https://blogs.sap.com/2016/09/30/howto-import-build-prototype-into-web-ide/
Question 26
Ques:-
Which of the following sequences is the correct sequence for the Problem Space phase in a Design Thinking workshop?
1. Scoping, 360' Research, Ideation
2.O 360' Research, Scoping, Synthesis
3. Scoping, 360' Research, Synthesis
4. Scoping, Synthesis, Ideation
Correct Answer: 3
Explanation
Link: https://experience.sap.com/skillup/introduction-to-design-thinking/
Question 27
Ques:-
For which operations will the SAP Gateway server compute and return a new ETag in a response header? (2 Correct)
Right
Wrong
Wrong
Wrong
Right
Wrong
1.0 PUT
2.
POST
3.
GET
4.0
DELETE
Correct Answer: 1,2
Explanation
A few special considerations apply for ETags:
• When retrieving an entry, the system
returns an opaque ETag value.
• When getting several entries in a feed,
the
ETag
value
is
included as metadata in
the
entry itself.
•
When
retrieving a
single entry, the
ETag
is
returned as a response header called
do
for feeds for consistency.
ETag as defined by HTTP. The server can choose to also include it in the body as they would
• During processing of POST, PUT, and MERGE the system should compute a new ETag and return it in a response header, regardless of whether the response has a body
with
the actual entry information.
• When issuing a PUT, MERGE or DELETE request, clients need to indicate an ETag
in the If-Match HTTP request header. If it is acceptable for a given client to overwrite any
version of
the
entry
in
the
server,
then
the
value "*"
may
be used instead. If a given entry has an ETag and a client attempts to modify or delete the entry without an If-
Match header servers should fail the request with a 412 response code.
Link: https://help.sap.com/viewer/68bf513362174d54b58cddec28794093/7.51.6/en-US/bea0e62beca343fca78ded10f2937658.html
Question 28
Ques:-
What is the purpose of the Logon Plugin Data Vault of the SAP Fiori Client?
1. Allow a client policy that can be defined on the mobility platform
2.
Prevent the
access
to all nonessential plugins
3. Provide a reusable component for storing sensitive information on the device
4. Enable secure and seamless handling of attachments
Correct Answer: 3
Explanation
The Data Vault is the reusable component for storing sensitive data securely on-device. Each instance of the Data Vault is protected with an application passcode.
MAF Logon Core for registration. MAF Logon Core requires credentials and configuration to execute the registration process. After successful
The Logon Plugin uses
registration, the Logon Core stores the credentials and configuration in
its
private Data Vault.
Link: https://help.sap.com/doc/38ec5403bfbf4d7a8fdd3fee5f9605e0/3.0.14/en-US/dfbc484d5b58438cb6030f2d84ac8a90.html
Question 29
Ques:-
Which deployment options do you have for SAP Fiori Uls and OData Services regarding the software components? (2 Correct)
1. One deployment package on a different system from the business system
2. L One deployment package on the same system as the business system
3.
Two different deployment packages on
a different from the business packages
4.0
Two different deployment packages
on
the same system as
the business system
Correct Answer: 2,3
Explanation
Client
SAP Web Dispatcher
SAP ERP
SAP CRM
SAP SCM
SAP Gateway
SAP
Gateway
SAP Gateway
• SAP Fiori app Uls -
• SAP Fiori app UIs -
• SAP Fiori app Uls -
SAP ERP
SAP CRM
SAP SCM
⚫ UI
Library
⚫ UI Library
⚫
UI
Library
• SAP Fiori launchpad
•
SAP Fiori launchpad
• SAP Fiori launchpad
SAP ERP
SAP ERP
SAP ERP
• SAP ERP server
• SAP CRM server
• SAP SCM server
• SAP Fiori backend
• SAP Fiori backend
• SAP Fiori backend
component
component
component
Figure 2.11 SAP Gateway: Embedded Deployment Option
Client
SAP Web Dispatcher
SAP ERP
SAP CRM
SAP SCM
SAP Gateway
SAP Gateway
SAP Gateway
• SAP Fiori app Uls -
• SAP Fiori app Uls -
• SAP Fiori app Uls -
SAP ERP
SAP
CRM
SAP SCM
⚫ UI Library
⚫ UI Library
⚫ Ul Library
• SAP Fiori launchpad
• SAP Fiori launchpad
• SAP Fiori launchpad
SAP ERP
SAP ERP
SAP ERP
• SAP ERP server
• SAP CRM server
• SAP SCM server
• SAP Fiori backend
• SAP Fiori backend
• SAP Fiori backend
component
component
component
Figure 2.11 SAP Gateway: Embedded Deployment Option
Question 30
Ques:-
What can your customer use a custom SAP Fiori client for? (3 Correct)
1. To apply custom branding
2. To build the SAP Fiori Client with a customized communication protocol
3. To create non-Cordova hybrid application containers
4.
To
wrap the
application
with SAP Mobile Secure
5.✓
To add additional plugins to the application
Correct Answer: 1,3,5
Explanation
Link: https://help.sap.com/doc/38ec5403bfbf4d7a8fdd3fee5f9605e0/3.0.14/en-US/d9373d16ccee4277ba047d130ee9f0de.html
Question 31
Ques:-
Which file is referred to as the App Descriptor and what is its function?
1. The neo.json file is referred to as App Descriptor Its function is to capture data from objects
2. The config-json file is referred to as
App Descriptor Its function is to configure ports and
turn
on plug-ins
3.
The configure.xml file is referred to
as
App Descriptor Its function is
to configure web apps and turn on plug-ins
4. O
The manifest.json file is referred to as
App Descriptor Its function is to instantiate the model
Correct Answer: 4
Explanation
Wrong
Wrong
Wrong
W3C. The descriptor provides a central,
The descriptor for applications, components, and libraries is inspired by the Web Application Manifest concept introduced by the
machine-readable and easy-to-access location for storing metadata associated with an application, an application component, or a library.
Right
The data is stored in
json
format in
the manifest.json file. The developer creates the
file with attributes
in different namespaces. It contains, for example, the app ID, the
version, the data sources
used,
along
with
the required components and libraries. The existence of the manifest.json file must be declared in
the component metadata, which
is then delivered as part of
the
application
archive. After delivery, the file
is
read-only.
Link: https://help.sap.com/viewer/468a97775123488ab3345a0c48cadd8f/7.51.6/en-US/be0cf40f61184b358b5faedaec98b2da.html
Question 32
Ques:-
Which properties are part of the design phase when you develop SAP Fiori apps?
1.
Requirement
gathering,
Research and Documentation
2. Scoping, 360 degree research and Synthesis
3. O
Ideation,
Prototyping and Validation
4. Developing, Testing and Deploying
Correct Answer: 3
Explanation
Link: https://experience.sap.com/fiori-design-web/design-led-development-process-external/
Question 33
Ques:-
How can you extend an SAP Fiori app? (3 Correct)
1.✓ Modify the properties of the view control
2.✓ Enable merging of the standard and the custom controller at runtime
3. Modify the data model to
merge
data at
runtime
4.✓ Add customer view content in
a predefined extension point
5. Modify the runtime libraries that are to be loaded
Correct Answer: 1,2,4
Explanation
Link: https://help.sap.com/viewer/584e0bcbfd4a4aff91c815cefa0bce2d/Cloud/en-US/ada9567b767941aba8d49fdb4fdedea7.html
https://blogs.sap.com/2019/11/10/standard-fiori-app-extension-hide-element-extend-controller/
Question 34
Ques:-
Which of the following components are part of the SAP Web IDE, hybrid app toolkit add-on?
1. Hybrid App Project Templates, Device Configuration, Hybrid App Toolkit Connector
3. Kapsel Plugins,
SAP Web
2. Hybrid Companion App, Config.json, Package.json, SAP Web IDE Plugin
Connector
IDE Plugin, Hybrid App Toolkit
4.O SAP Web IDE Plugin, Hybrid Companion App, Hybrid
App Toolkit Connector
Correct Answer: 4
Explanation
link: https://blogs.sap.com/2017/12/18/end-of-maintenance-for-hybrid-app-toolkit-local-add-on/
Question 35
Ques:-
Your customer wants to extend an SAP Fiori app through a Controller Extension. When can a controller extension lead to a crash? (2 Correct)
1. If the original code required to
run
the application is
overwritten.
2.0 If
the
extension code exists and
is
NOT referenced in the original view.
3.
If the extension code accesses parts of the original application that were removed.
4.0 If the extension code exists in the
extended app but the controller name is changed by an app update.
Correct Answer: 1,3
Explanation
Controller Extensions Caveats
• If the extension code accesses parts of the
original application which are changed, for
example, removed, have a different type, or a different ID, controller extensions can cause
a crash.
• If the extension code makes assumptions about
the application which are no longer valid
after an update, controller extensions can lead to a crash.
• If original code is overwritten which is required for the application to run properly.
controller extensions can lead to a crash.
If the controller name is changed, controller extensions are no longer applied
Question 36
Ques:-
Which methods can you use to bind data to the controls in SAPUI5? (3 Correct)
1.✓ Aggregation
2.0 Structure
3. Combination
4.✓
Property
5.✓ Element
Correct Answer: 1,4,5
Explanation
Binding Types
SAPUI5 supports three different binding types: Property binding, aggregation binding, and element binding.
The binding types are introduced in the following sections.
In this section:
Property Binding
Property binding allows properties of the control to get automatically initialized and updated from model data.
Aggregation Binding
Aggregation binding is used to automatically create child controls according to model data.
Element Binding
Right
Right
Wrong
Wrong
Right
Element binding allows to bind elements to a specific object in the model data, which will create a binding context and allow relative binding within the control and all of its
children. This is especially helpful in master/detail scenarios.
Question 37
Ques:-
For which app type in SAP Fiori do you install the KPI framework?
1.0 Factsheet app
2. Analytical app
3. Legacy app
4. Transactional app
Correct Answer : 2
Explanation
Link: https://help.sap.com/viewer/a630d57fc5004c6383e7a81efee7a8bb/2011.500/en-US/c00cbf7fe8464663aee830fb6e7eec13.html
Question 38
Ques:-
Which dependent plugin must you enable to include the Push plugin when you create a hybrid mobile app?
1. Network Connection
2. App Update
3. Dialog Notification
4. Logon Manager
Correct Answer: 3
Explanation
Link: https://dzone.com/articles/adding-native-touches-your
Question 39
Ques:-
Which model type in SAPUI5 does NOT support one-way and two-way binding from model to view?
1. XML model
2.O JSON model
3. O
Resource model
4.O OData model
Correct Answer: 3
Explanation
link: https://sapui5.hana.ondemand.com/docs/topics/91f122a36f4d1014b6dd926db0e91070.html
Question 40
Ques:-
Which features of the SAP Web IDE help you extend a standard SAP Fiori app? (2 Correct)
1. The Extensibility
Pane
to
extend the control
the files
2. An editor to modify the data model in the extended project
3. A wizard to generate
for each extension possibility
4. The Descriptor Editor to choose elements for extension
Correct Answer: 1,3
Explanation
link: https://blogs.sap.com/2019/12/31/customizing-standard-fiori-applications-in-webide/
https://blogs.sap.com/2015/03/03/extend-a-fiori-application-with-sap-web-ide-part-1/
Question 41
Ques:-
When do you select the custom plugins to build and package a hybrid app using the SAP HAT?
1. During the Configure Path for Custom Plugins step of installing the SAP HAT
new project using the Hybrid Mobile Enablement feature
2. While creating a
3. During the Build the Hybrid Companion App step
Correct Answer: 1
Explanation
of installing the SAP HAT
link: https://blogs.sap.com/2015/08/25/how-to-use-hat-hybrid-application-toolkit-and-test-the-apps/
https://blogs.sap.com/2020/06/27/how-to-migrate-your-hybrid-mobile-hat-project-out-of-sap-web-ide-full-stack/
Question 42
Ques:-
What result do you expect from the de-composition and re-composition phases? (3 Correct)
1.✓ An adaptive and coherent app
2.✓ The prevention of irrelevant data being shown to the user
3.[]
A purpose-built app to support personas
4.✓
The break-down of a large transaction
Wrong
Wrong
Right
Wrong
Wrong
Wrong
5. A responsive de-composed design
Correct Answer: 2,3,4
Explanation
Recomposition While designing an SAP Fiori app, the system is rarely a consideration; rather, the user is at
the
center
point. As
we
saw in the Design Thinking of
UX design, the
process starts with the discovery phase, where end-user feedback is given the utmost priority. Using an SAP
Fiori
app,
you
can
build functionality by com- bining the capability
of multiple GUI transactions. This increases
user
produc-tivity
significantly
by
reducing the navigation
that
users
need
to
go
through
and simplifying
screen interactions.
Decomposition A generic transaction code
used
by
multiple roles
can
be broken into
multiple apps for
each
role, which is called the decomposition process. Most transactions
in
SAP have too many
buttons and menu
options that provide a
lot
of functionality not directly related
to
the
business
transaction at hand. Transaction screens aren't specific
to a role; that
is,
many
users
with
different
roles
use
the
same transaction code. Some buttons
are
set
up
to
display an error if the
user clicking
the button isn't authorized
based on his
role.
Too
many
functions
and options are
confusing
and make it
difficult
for
users
to
focus
on
the
task.
This complexity
is a hindrance that creates a
steep
learning
curve
for
new
users
to
become productive. SAP
Fiori
is role
based,
so
it
aims
to
keep
the apps
simple
by giving only the required screen elements for the user to
perform his tasks based on
the
user's business and needs, thus
allowing the
user
to
maintain focus and be efficient.



Question 43
Ques:-
In a typical SAP Fiori landscape, which server instance stores the SAP Fiori SAPUI5 application code for a transactional app?
1. SAP Back-End Server (BES)
2. SAP Web Dispatcher
3. O
SAP HANA XS Engine
4. SAP Front-End Server (FES)
Correct Answer: 4
Explanation
Wrong
Frontend Server This is the SAP Gateway server that hosts the OData service, which is required for the SAP Fiori apps to communicate with the business data. In addition, the front-end server hosts the SAP Fiori launchpad as well as all of the SAP Fiori apps as Busi-ness Server Pages (BSP) applications.
Question 44
Ques:-
Which of the following activities allow you to store your changes in a local Git repository?
1.0 Commit
2.O Push
3. O
Clone
4. O
Save
Correct Answer: 1
Explanation
Link: https://www.git-tower.com/learn/git/commands/git-commit/
Question 45
Ques:-
Wrong
Wrong
In the design thinking phase of your customer project, one design is accepted as viable. What other attributes need to be valid for this design to be considered? (2 Correct)
1. Usable
2. Achievable
3.✓ Feasible
4. Desirable
Correct Answer: 3,4
Explanation
Desirability
Viability
Feasibility
Figure 1.5 Innovation Intersection
Question 46
Innovation
Ques:-
Which of the following pattern sequences are the QUnit tests based on?
1. Given, When, and Then
2.O
Assert, Act, and Arrange
3. Given, Then, and When
4.O Arrange, Act, and Assert
Correct Answer: 4
Explanation
QUnit Test Example
QUnit uses a set of top-level functions to provide semantic meaning in unit tests.
Just like most of unit test frameworks, it follows an arrange-act-assert pattern, a common test pattern employed when unit testing. Its purpose is to make a clear distinction between the set up for the test, the action that is to be tested, and the evaluation of the results.
Question 47
Ques:-
When SAP Web IDE deploys an SAPUI5 app to the ABAP server, which type of app is it deployed as?
1.0
BSP
2. HTML5
3.O
ABAP
4. OpenUI5
Correct Answer: 1
Explanation
Wrong
Right
The SAPUI5 ABAP repository is part of the SAPUI5 ABAP back-end infrastructure and is the umbrella term for the single SAPUI5 repository of each application. Technically, this infrastructure is based on the Business Server Page (BSP) repository and each SAPUI5 repository is represented by an individual BSP application.
Link: https://sapui5.hana.ondemand.com/#/topic/91f346786f4d1014b6dd926db0e91070
Question 48
Ques:-
In the code on the screenshot, what is the absolute path of the property to retrieve the City value for the company Acme Inc?
4567895
20
21
18
1
var data
{
regions: [
{
name: "Americas",
companies: [
{
};
name: "Acme Inc.", city: "Belmont"
name: "Beam Hdg.",
city: "Hancock"
19 var oModel = new sap.ui.model.json.JSONModel(); oModel.setData(data);
oModel.getProperty("Absolute Path>")
1./regions/0/companies/0/city
2.O/regions/companies/1/city
3.O/regions/1/companies/1/city
Correct Answer: 1
Question 49
Ques:-
In the data in the screenshot, you need to display the List of Companies in the Americas region. Which binding option do you use for the value X?
16
17
18
19
20
21
var data
{
regions: [
{
name: "Americas",
companies: [
{
name: "Acme Inc.",
};
city: "Belmont"
name: "Beam Hdg.",
city: "Hancock"
var oModel = new sap.ui.model.json.JSONModel();
oModel.setData(data);
oModel.getProperty(" Absolute Path>")
1.OX: /region/0/1/companies
2.OX: /region/0/companies
3.OX: /region/companies
Correct Answer: 2
Question 50
Ques:-
In the screenshot, which element of the Arrange-Act-Assert pattern corresponds to the Act in a QUnit test?
QUnit.module("addition",{
beforeEach: function(){
this.oViewController = new ViewController();
},
teardown:function(){
this.oViewController.destroy();
}
});
QUnit.test("press Test", function(pressTest) {
});
this.calculator.press("1");
1. O QUnit.test
2.O this.calculator.press("1")
3. O teardown:function(){}
4. O QUnit.module
Correct Answer : 2
The Exam Questions
Our goal is to help students clear their exam by providing them genuine questions which helps students to achieve their goal. Many students have cleared their exam by going through our courses. Are you ready to clear yours?
Right
Right
Wrong
COURSES
LINKS
Money Back
• SAP Cloud
• FAQ
• SAP Fiori
Guarantee
• SAP HANA
• About Us
• SAP ERP
• Privacy Policy
• More Courses
• Terms & Conditions
• Contact Us
DISCLAIMER
• SAP is the Registered Trade Mark of the respective company.
• Theexamquestions.com is no way affiliated With SAP SE.
• Theexamquestions.com offers only probable exam questions and answers.
• Theexamquestions.com offer learning materials and practice tests created by subject matter technology experts to assist and help learners prepare for those exams. Theexamquestions.com do not offer dumps or questions from the actual exam. Theexamquestions.com does not own or claim any ownership on any of the brands.
• All Certification Brands used on the website are owned by the respective brand owners.
All Course Contents, Trademarks, Service Marks, Trade Names, Product Names And Logos Appearing On The Site Are The Property Of Their Respective Owners. The Website Theexamquestions.Com Is In No Way Affiliated With SAP SE. Copyright © 2021 Www.Theexamquestions.Com. All Rights Reserved.