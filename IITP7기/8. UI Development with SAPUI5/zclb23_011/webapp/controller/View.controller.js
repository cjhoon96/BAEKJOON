sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment) {
        "use strict";

        return Controller.extend("iitp.zclb23011.controller.View", {
            onInit: function () {

            },

            onPopup: function () {
                var oView = this.getView();
                if (!this.byId("digPopup")) {
                    Fragment.load({
                        id: oView.getId(),
                        name: "iitp.zclb23011.view.PopupFrag",
                        type: "XML",
                        controller: this
                    }).then(
                        function (oPopup) {
                            oView.addDependent(oPopup)
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