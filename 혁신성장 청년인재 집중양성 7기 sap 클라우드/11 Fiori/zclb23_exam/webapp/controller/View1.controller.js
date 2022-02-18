sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("iitp.zclb23exam.controller.View1", {
            onInit: function () {

            },

            onDepChange: function (oEvent) {
                var oTable = this.getView().byId("tblEmployee");
                if(!oTable.getBinding("rows")){
                    oTable.bindRows({
                        path: "/EtEmpSet"
                    });
                }
                var sContext = oEvent.getParameter("selectedItem").getBindingContext();
                var oModel = this.getView().getModel();
                var Depid = oModel.getProperty("Depid", sContext);
                var oFilter = new sap.ui.model.Filter("Depid", "EQ", Depid);
                oTable.getBinding("rows").filter(oFilter)
            },

            onEmpChange: function (oEvent) {
                var oContext = oEvent.getParameters().rowContext.getPath();
                var oTarget = this.byId("empInfoPanel");
                oTarget.bindElement(oContext);
                var oTargetPop = this.byId("popInfoPanel");
                oTargetPop.bindElement(oContext);

                var oView = this.getView();
                if (!this.byId("digPopup")) {
                    sap.ui.core.Fragment.load({
                        // id: oView.getId(),
                        name: "iitp.zclb23exam.view.dialogPop",
                        type: "XML",
                        controller: this
                    }).then(
                        function(oPopup) {
                            oView.addDependent(oPopup);
                            // var oTargetPop = this.byId("popInfoPanel");
                            // oTargetPop.bindElement(oContext);
                            oPopup.open();
                        }
                    );
                } else {
                    // var oTargetPop = this.byId("popInfoPanel");
                    // oTargetPop.bindElement(oContext);
                    this.byId("digPopup").open();
                }
            },

            onClose: function () {
                this.byId("digPopup").close();
            }
        });
    });