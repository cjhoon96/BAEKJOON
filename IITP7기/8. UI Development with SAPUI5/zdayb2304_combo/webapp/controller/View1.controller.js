sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter) {
        "use strict";

        return Controller.extend("iitp.cjh.zdayb2304combo.controller.View1", {
            onInit: function () {
                // var carrUrl = "/sap/opu/odata/sap/UX_TRAVEL_SRV/UX_C_Carrier_TP";
                // var connUrl = "/sap/opu/odata/sap/ux_travel_srv/UX_C_Connection_TP"
                // var oModelCarr = new ODataModel(carrUrl);
                // var oModelConn = new OdataModel(connUrl);
            },

            onChange: function (oEvent) {
                var sPath = oEvent.getParameter("selectedItem").getBindingContext().getPath();
                var oTable = this.byId("SubTable");
                oTable.bindElement(sPath)
            },

            onConnChange: function (oEvent) {
                var oContext = oEvent.getParameters().rowContext.getPath();
                var oTarget = this.byId("infoPanel");
                oTarget.bindElement(oContext);
            }
        });
    });

