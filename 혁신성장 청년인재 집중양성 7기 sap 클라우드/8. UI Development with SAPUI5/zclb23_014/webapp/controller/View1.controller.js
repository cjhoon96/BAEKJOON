sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("zclb23014.controller.View1", {
            onInit: function () {
                let oData = {
                    "companies": [
                        {"name": "SAP SE", "city": "Walldorf"},
                        {"name": "Beam Hdg.", "city": "Hancock"},
                        {"name": "Carot Ltd.", "city": "Cheshire"},
                        {"name": "Acm Inc.", "city": "Belmont"},
                        {"name": "BMW AG", "city": "Muchen"},
                    ]
                };
                let oModel = new sap.ui.model.json.JSONModel();
                oModel.setData(oData);
                this.getView().setModel(oModel);
            }
        });
    });
