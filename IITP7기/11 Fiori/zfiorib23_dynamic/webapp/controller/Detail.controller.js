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

        return Controller.extend("iitp.zfiorib23dynamic.controller.Detail", {
            onInit: function () {
                var oRouter = this.getRouter();
                oRouter.getRoute("Detail").attachMatched(this._onObjectMatched, this);
            },

            getRouter: function () {
                return UIComponent.getRouterFor(this);
 
            },
            _onObjectMatched: function (oEvent) {
                var parmDepid = oEvent.getParameter("arguments").selDepid;

                var oFilter = new Filter("Depid", "EQ", parmDepid, "");
                var oTable = this.byId("tbEmpList");
                var oBinding = oTable.getBinding("items");
                oBinding.filter(oFilter);
            },
            onBack: function () {
                var oRouter = UIComponent.getRouterFor(this);
                oRouter.navTo("Main");
            }
        });
    });
