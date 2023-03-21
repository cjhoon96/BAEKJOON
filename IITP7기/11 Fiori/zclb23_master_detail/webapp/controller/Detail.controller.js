sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/core/UIComponent"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, UIComponent) {
        "use strict";

        return Controller.extend("iitp.zclb23masterdetail.controller.View1", {
            onInit: function () {
                var oRouter = UIComponent.getRouterFor(this);
                oRouter.getRoute("Detail").attachPatternMatched(this._onObjectMatched, this);
            },
            _onObjectMatched: function (oEvent) {
                var paramCarrid = oEvent.getParameter("arguments").selCarrid;
                var oFilter = new Filter("Carrid", "EQ", paramCarrid, "");
                var oTable = this.byId("tbConn");

                var oBinding = oTable.getBinding("items");
                oBinding.filter(oFilter);
            }
        });
    });
