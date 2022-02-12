sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Fragment) {
        "use strict";

        return Controller.extend("iitp23.cjh.zdayb2303.controller.View1", {
            onInit: function () {
                var oModel = new JSONModel();
                oModel.loadData("../model/data.json");
                this.getView().setModel(oModel);
            },

            // onSrch: function () {
            //     var 
            //     var teamNo = this.getView().byId("inpTeamNo").getValue();
            //     var empNo = this.getView().byId("inpEmpNo").getValue();
            //     var lastShow = teamNo + "부서의 " + empNo + "사원 정보 조회";

            //     MessageBox.show(lastShow, {
            //         title: "사원 정보 조회",
            //         actions: ["확인"]
            //     })
            // },

            // onChief: function () {
                
            // },

            onChief: function () {
                var oView = this.getView();
                if (!this.byId("digPopup")) {
                    Fragment.load({
                        // id: oView.getId(),
                        name: "iitp23.cjh.zdayb2303.view.popFrag",
                        type: "XML",
                        controller: this
                    }).then(
                        function(oPopup) {
                            oView.addDependent(oPopup);
                            oPopup.open();
                        }
                    );
                } else {
                    this.byId("digPopup").open();
                }
            },

            onClose: function () {
                this.byId("digPopup").close();
            }
        });
    });
