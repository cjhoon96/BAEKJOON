sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("iitp.zclb23016.controller.View1", {
            onInit: function () {
                var oModel = new JSONModel();
                oModel.loadData("../model/data.json");
                this.getView().setModel(oModel);
            },

            onSelectionChange: function (oEvent) {
                var oItem = oEvent.getParameter("selectedItem");
                var sPath = oItem.getBindingContext().getPath();

                var oList = this.getView().byId("idList");

                oList.bindElement(sPath);
            }
        });
    });
