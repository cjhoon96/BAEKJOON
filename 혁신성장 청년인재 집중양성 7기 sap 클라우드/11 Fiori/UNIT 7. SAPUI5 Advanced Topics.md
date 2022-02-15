# UNIT 7. SAPUI5 Advanced Topics





# Lesson 1. SAPUI5 at a Glance









# Lesson 2. 





* ## Create a New Component -Component.js

  

  

  





# Lesson 3. Understanding SAPUI5: Routing and Navigation

















# Lesson 10.

#### zfiorib23chartpie

```js
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/viz/ui5/data/FlattenedDataset",
    "sap/viz/ui5/controls/common/feeds/FeedItem"
],
    /**
    * @param {typeof sap.ui.core.mvc.Controller} Controller
    */
    function (Controller, JSONModel, FlattenedDataset, FeedItem) {
        "use strict";

        return Controller.extend("iitp.zfiorib23chartpie.controller.View1", {
            onInit: function () {
                var oData = {
                    newSAP: [
                        { skillName: "ABAP", rate: 35 },

                        { skillName: "New ABAP", rate: 15 },

                        { skillName: "WD4D", rate: 10 },

                        { skillName: "SAPUI5", rate: 15 },

                        { skillName: "Fiori", rate: 20 },

                        { skillName: "SAP HANA", rate: 5 },
                    ],
                };
                var oModel = new JSONModel();
                oModel.setData(oData);

                // CHART STRAT

                var oVizFrame = this.getView().byId("idPieChart");
                var oDataset = new FlattenedDataset({
                    dimensions: [{
                        name: "SkillName",
                        value: "{skillName}"
                    }],
                    measures: [{
                        name: "rate",
                        value: "{rate}"
                    }],
                    data: {
                        path: "/newSAP"
                    }
                });

                oVizFrame.setDataset(oDataset);
                oVizFrame.setModel(oModel);

                //SET CHART PROPERTY
                oVizFrame.setVizProperties({
                    title: {text: "SAP Technology"},
                    plotArea: d3.scale.category20().range(),
                    drawingEffect: "glossy"
                });

                var feedSize = new FeedItem({
                    "uid":"size",
                    "type":"Measure",
                    "values":["rate"]
                });

                var feedColor = new FeedItem({
                    "uid": "color",
                    "type": "Dimension",
                    "values": ["SkillName"]
                });

                oVizFrame.addFeed(feedSize);
                oVizFrame.addFeed(feedColor);
            },
        });
    }
);

```

```xml
<mvc:View
    controllerName="iitp.zfiorib23chartpie.controller.View1"
    xmlns:mvc="sap.ui.core.mvc"
    displayBlock="true"
    xmlns="sap.m"
    xmlns:viz="sap.viz.ui5.controls"
>
    <Shell id="shell">
        <App id="app">
            <pages>
                <Page id="page" title="{i18n>title}">
                    <content>
                        <viz:VizFrame id="idPieChart" vizType="pie"></viz:VizFrame>
                    </content>
                </Page>
            </pages>
        </App>
    </Shell>
</mvc:View>

```

<img src="IMG/FIORI5.PNG" alt="FIORI" style="zoom:75%;" />



#### zfiorib23chartline

```js
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/viz/ui5/data/FlattenedDataset",
    "sap/viz/ui5/controls/common/feeds/FeedItem"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, FlattenedDataset, FeedItem) {
        "use strict";

        return Controller.extend("iitp.zfiorib23chartline.controller.View1", {
            onInit: function () {
                var oData = {
                    newSAP: [
                        { skillName: "ABAP", rate: 35 },

                        { skillName: "New ABAP", rate: 15 },

                        { skillName: "WD4D", rate: 10 },

                        { skillName: "SAPUI5", rate: 15 },

                        { skillName: "Fiori", rate: 20 },

                        { skillName: "SAP HANA", rate: 5 },
                    ],
                };
                var oModel = new JSONModel();
                oModel.setData(oData);

                // CHART STRAT

                var oVizFrame = this.getView().byId("idLineChart");
                var oDataset = new FlattenedDataset({
                    dimensions: [{
                        name: "SkillName",
                        value: "{skillName}"
                    }],
                    measures: [{
                        name: "rate",
                        value: "{rate}"
                    }],
                    data: {
                        path: "/newSAP"
                    }
                });

                oVizFrame.setDataset(oDataset);
                oVizFrame.setModel(oModel);

                //SET CHART PROPERTY
                oVizFrame.setVizProperties({
                    title: {text: "SAP Technology"},
                    plotArea: d3.scale.category20().range()
                });

                var feedValueAxis = new FeedItem({
                    "uid":"valueAxis",
                    "type":"Measure",
                    "values":["rate"]
                });

                var feedCategoryAxis = new FeedItem({
                    "uid": "categoryAxis",
                    "type": "Dimension",
                    "values": ["SkillName"]
                });

                oVizFrame.addFeed(feedValueAxis);
                oVizFrame.addFeed(feedCategoryAxis);
            }
        });
    });

```

```xml
<mvc:View
    controllerName="iitp.zfiorib23chartline.controller.View1"
    xmlns:mvc="sap.ui.core.mvc"
    displayBlock="true"
    xmlns="sap.m"
    xmlns:viz="sap.viz.ui5.controls"
>
    <Shell id="shell">
        <App id="app">
            <pages>
                <Page id="page" title="{i18n>title}">
                    <content>
                        <viz:VizFrame id="idLineChart" vizType="line"></viz:VizFrame>
                    </content>
                </Page>
            </pages>
        </App>
    </Shell>
</mvc:View>
```

#### zfiorib23ex1

```JS
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/viz/ui5/data/FlattenedDataset",
    "sap/viz/ui5/controls/common/feeds/FeedItem"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, FlattenedDataset, FeedItem) {
        "use strict";

        return Controller.extend("iitp.zfiorib23ex1.controller.View1", {
            onInit: function () {
                var oData = {
                    "sales": [
                        {"product": "Jackets", "amount": "65"},
                        {"product": "Shirts", "amount": "70"},
                        {"product": "Pants", "amount": "83"},
                        {"product": "Coats", "amount": "92"},
                        {"product": "Purse", "amount": "77"}
                    ]
                };

                var oModel = new JSONModel();
                oModel.setData(oData);

                //CHART START

                var oVizFrame = this.getView().byId("idColChart");
                var oDataset = new FlattenedDataset({
                    dimensions: [{
                        name: "Product",
                        value: "{product}"
                    }],
                    measures: [{
                        name: "Amount",
                        value: "{amount}"
                    }],
                    data: {
                        path: "/sales"
                    }
                });

                oVizFrame.setDataset(oDataset);
                oVizFrame.setModel(oModel);

                //SET CHART PROPERTY
                oVizFrame.setVizProperties({
                    title: {text: "Sales Data"},
                    plotArea: d3.scale.category20().range()
                });

                var feedvalueAxis = new FeedItem({
                    "uid": "valueAxis",
                    "type": "Measure",
                    "values": ["Amount"]
                });
                
                var feedCategoryAxis = new FeedItem({
                    "uid": "categoryAxis",
                    "type": "Dimension",
                    "values": ["Product"]
                });
                
                oVizFrame.addFeed(feedvalueAxis);
                oVizFrame.addFeed(feedCategoryAxis);
            }
        });
    });
```

```xml
<mvc:View
    controllerName="iitp.zfiorib23ex1.controller.View1"
    xmlns:mvc="sap.ui.core.mvc"
    displayBlock="true"
    xmlns="sap.m"
    xmlns:viz="sap.viz.ui5.controls"
>
    <Shell id="shell">
        <App id="app">
            <pages>
                <Page id="page" title="{i18n>title}">
                    <content>
                        <viz:VizFrame id="idColChart" vizType="column"/>
                    </content>
                </Page>
            </pages>
        </App>
    </Shell>
</mvc:View>

```

