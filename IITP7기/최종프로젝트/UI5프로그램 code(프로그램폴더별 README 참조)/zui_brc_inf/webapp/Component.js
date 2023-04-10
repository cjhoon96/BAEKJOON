sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "kr/go/iitp/gr5/clb05/zuibrcinf/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("kr.go.iitp.gr5.clb05.zuibrcinf.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);