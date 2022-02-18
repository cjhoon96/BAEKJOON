sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("iitp.zclb23masterdetail.controller.Master", {
            onInit: function () {

            },

            onSelectChange: function (oEvent) {
                var oItem = oEvent.getSource();
                var oContext = oItem.getBindingContext();
                var oModel = this.getView().getModel();
                var carrId = oModel.getProperty("Carrid", oContext);
                
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("Detail", {
                    selCarrid: carrId
                })
            }
        });
    });
