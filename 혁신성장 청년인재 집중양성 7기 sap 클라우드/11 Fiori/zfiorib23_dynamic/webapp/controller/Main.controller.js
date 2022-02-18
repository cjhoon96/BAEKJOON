sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("iitp.zfiorib23dynamic.controller.Main", {
            onInit: function () {

            },

            onItemClick: function (oEvent) {
                var sContext = oEvent.getSource().getBindingContext();
                var oModel = this.getView().getModel();
                var depId = oModel.getProperty("Depid", sContext);

                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("Detail",{
                    //Router에 selDepid 파라미터로 manifest 의 target의 패턴을 사용
                    selDepid : depId
                })
            }
        });
    });
