sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("iitp.zdayb2305.controller.View1", {
            onInit: function () {

            },

            onRowChange: function (oEvent) {
                var oContext = oEvent.getParameters().rowContext.getPath();
                var oTarget = this.byId("infoPanel");
                oTarget.bindElement(oContext);
            }
        });
    });
