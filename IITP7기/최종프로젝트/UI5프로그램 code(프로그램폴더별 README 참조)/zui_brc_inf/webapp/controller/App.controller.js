sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("kr.go.iitp.gr5.clb05.zuibrcinf.controller.App", {
            onInit: function () {
                this._oView = this.getView(); 
                this._oSTOProcModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/SAP/ZGWB05_STO_PROCESS_SRV");
            },

            onDataSelect: function (oEvent) {
                var clickedData = oEvent.getParameter("data")[0].data
                sap.m.MessageToast.show("Total " + clickedData.Salestotal + " KRW");
            }
        });
    });
