sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("iitp.zclb23013.controller.View1", {
            onInit: function () {
                var oModel = new JSONModel();
                oModel.loadData("../model/data.json");
                this.getView().setModel(oModel);
            }
        });
    });
