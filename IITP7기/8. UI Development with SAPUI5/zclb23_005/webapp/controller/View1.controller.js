sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"   
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("iitp.zclb23005.controller.View1", {
            onInit: function () {

            },

            onSearch: function () {
                var oInput = this.getView().byId("inpTeam");
                var inpValue = oInput.getValue();
                var showText = "Hello, " + inpValue;

                MessageBox.show(showText, {
                    title: "Welcome To ...."
                });
            }
        });
    });
