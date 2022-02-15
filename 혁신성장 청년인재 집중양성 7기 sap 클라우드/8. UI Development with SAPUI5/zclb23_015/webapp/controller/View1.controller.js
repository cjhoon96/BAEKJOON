sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("iitp.zclb23015.controller.View1", {
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
