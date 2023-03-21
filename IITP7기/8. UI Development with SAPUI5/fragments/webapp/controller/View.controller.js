sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.training.fragments.controller.View", {
            onInit: function () {

            },

            onXmlButtonPress: function (oEvent) {
                var oInput = this.byId(sap.ui.core.Fragment.createId("idXmlFrag", "idInput"));
                var oText = this.byId(sap.ui.core.Fragment.createId("idXmlFrag", "idText"));

                oText.setText("Hello " + oInput.getValue());
            },

            onJsButtonPress: function (oEvent) {
                var oInput = this.byId(sap.ui.core.Fragment.createId("idJsFrag", "idInput"));
                var oText = this.byId(sap.ui.core.Fragment.createId("idJsFrag", "idText"));

                oText.setText("Hello " + oInput.getValue());
            }
        });
    });
