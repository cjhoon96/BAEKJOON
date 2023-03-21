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

        return Controller.extend("iitp.zclb23dynamic.controller.Detail", {
            onInit: function () {
                var oRouter = this.getRouter();
                oRouter.getRoute("Detail").attachMatched(this._onObjectMatched, this);
            },

            getRouter: function () {
                return UIComponent.getRouterFor(this);

            },
            _onObjectMatched: function (oEvent) {
                var parmCarrid = oEvent.getParameter("arguments").selCarrid;

                var oFilter = new Filter("Carrid", "EQ", parmCarrid, "");
                var oTable = this.byId("tbConn");
                var oBinding = oTable.getBinding("items");
                oBinding.filter(oFilter);
            },
            onBack: function () {
                var oRouter = UIComponent.getRouterFor(this);
                oRouter.navTo("Main");
            }
        });
    });
