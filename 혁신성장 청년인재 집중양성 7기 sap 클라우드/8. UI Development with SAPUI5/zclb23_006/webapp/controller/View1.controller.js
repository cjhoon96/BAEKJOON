sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("iitp.zclb23006.controller.View1", {
            onInit: function () {

            },

            onClick: function () {
                var inpvalue = this.getView().byId("inpTeam").getValue();
                var showText = "Hello, " + inpvalue;

                MessageBox.show(showText);
            }
        });
    });
