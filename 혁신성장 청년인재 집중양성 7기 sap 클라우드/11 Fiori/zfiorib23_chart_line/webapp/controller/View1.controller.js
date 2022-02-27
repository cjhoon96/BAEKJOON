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
