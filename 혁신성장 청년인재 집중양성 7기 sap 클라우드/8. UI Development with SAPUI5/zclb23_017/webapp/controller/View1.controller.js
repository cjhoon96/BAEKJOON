sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "iitp/zclb23017/model/type/chkTeamNo"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("iitp.zclb23017.controller.View1", {
            onInit: function () {
                var oData = {
                    teamNo: 'D001'
                };

                var oModel = new sap.ui.model.json.JSONModel();
                oModel.setData(oData);
                this.getView().setModel(oModel);
            },

            onError: function (oEvent) {
                var oElement = oEvent.getSource();
                oElement.setValueState("Error");
                var oException = oEvent.getParameter("exception");
                var oText = this.byId("idMsgTxt");
                oText.setText("The Team No is Wrong!");

            },

            onSuccess: function (oEvent) {
                var oElement = oEvent.getParameter("element");
                oElement.setValueState(sap.ui.core.ValueState.None);
                var oText = this.byId("idMsgTxt");
                oText.setText("Valid Data");
            }
        });
    });
