sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "kr/go/iitp/gr5/clb05/zuirtchk/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("kr.go.iitp.gr5.clb05.zuirtchk.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                UIComponent.prototype.init.apply(this, arguments);
                var oStoProcModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/SAP/ZGWB05_STO_PROCESS_SRV");
                sap.ui.getCore().setModel(oStoProcModel);
                console.log(oStoProcModel);
                oStoProcModel.read("/apvDocSet", {
                    urlParameters: {
                        $expand: "toDetSTOApvSet"
                    },
                    success: function(oData, response) {
                        console.log(oData);

                    }
                })

                this.getRouter().initialize();

                this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);