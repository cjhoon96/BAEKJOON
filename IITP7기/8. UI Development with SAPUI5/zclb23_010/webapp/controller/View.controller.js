sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("iitp.zclb23010.controller.View", {
            onInit: function () {

            },
            onMainClick: function () {
                var valMainText = this.getView().byId("idInputMain");
                alert(valMainText.getValue());
            },
            onFragClick: function () {
                var valFragText = this.byId(sap.ui.core.Fragment.createId("idXmlFrag", "idInputFrag"));
                // var valFragText = this.byId("idInputFrag");
                alert(valFragText.getValue());
                alert(ValFragText.getId());
            }
        });
    });
