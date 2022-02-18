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

        return Controller.extend("iitp.zfiorib23master.controller.Detail", {
            onInit: function () {
                var oRouter = UIComponent.getRouterFor(this);
                oRouter.getRoute("Detail").attachPatternMatched(this._onObjectMatched, this);
            },
            _onObjectMatched: function (oEvent) {
                var paramDepid = oEvent.getParameter("arguments").selDepid;
                var oFilter = new Filter("Depid", "EQ", paramDepid, "");
                var oTable = this.byId("tbEmp");

                var oBinding = oTable.getBinding("items");
                oBinding.filter(oFilter);
            }
        });
    });
