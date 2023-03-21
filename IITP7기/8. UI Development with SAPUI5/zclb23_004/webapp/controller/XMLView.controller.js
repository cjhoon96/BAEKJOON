sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("iitp.zclb23004.controller.XMLView", {
            onInit: function () {

            },

            onSelect: function () {
                var onCheckbox = this.getview().byId("idChk1");

                if (onCheckbox.getSelected()){
                    onCheckbox.setText("Yes");
                } else {
                    onCheckbox.setText("No");
                }
            }
        });
    });
