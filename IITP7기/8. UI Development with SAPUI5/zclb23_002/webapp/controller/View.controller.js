sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"              // sap.m 의 MessageBox 모듈을 사용하기 위해 추가
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {     //
        "use strict";

        return Controller.extend("IITP.zclb23002.controller.View", {
            onInit: function () {

            },

            onClick: function () {
                // alert("Button Click");
                MessageBox.show("Button ");
            }
        });
    });
