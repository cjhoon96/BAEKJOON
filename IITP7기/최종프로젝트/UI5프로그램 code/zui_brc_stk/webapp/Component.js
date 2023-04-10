sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/model/json/JSONModel",
        'sap/f/library',
        "sap/f/FlexibleColumnLayoutSemanticHelper"
    ],
    function (UIComponent, JSONModel, fioriLibrary, FlexibleColumnLayoutSemanticHelper) {
        "use strict";

        return UIComponent.extend("kr.go.iitp.gr5.clb05.zuibrcstk.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                var oModel, oStockModel, oStoProcModel, oOthersModel, oRouter, userInfo, userId;

                UIComponent.prototype.init.apply(this, arguments);

                oModel = new JSONModel();
                userInfo = sap.ushell.Container.getService("UserInfo");
                userId = userInfo.getId();
                oModel.setProperty('/userID', userId);
                this.setModel(oModel);
                oStockModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZVB05_CDS_STOCKAIO_CDS/");
                oStoProcModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/SAP/ZGWB05_STO_PROCESS_SRV/");
                oOthersModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZVB05_CDS_STOCKAIO_ALL_CDS/");
                sap.ui.getCore().setModel(oStockModel, 'stockData');
                sap.ui.getCore().setModel(oStoProcModel, 'stoProc');
                sap.ui.getCore().setModel(oOthersModel, 'othersData');
                oRouter = this.getRouter(); 
                oRouter.attachBeforeRouteMatched(this._onBeforeRouteMatched, this);
                oRouter.initialize();
            },
            
            getHelper: function () {
                return this._getFcl().then(function (oFCL) {
                    var oSettings = {
                        defaultTwoColumnLayoutType: fioriLibrary.LayoutType.TwoColumnsMidExpended,
                        defaultThreeColumnLayoutType: fioriLibrary.LayoutType.ThreeColumnsEndExpended
                    };
                    return(FlexibleColumnLayoutSemanticHelper.getInstanceFor(oFCL, oSettings));
                })
            },

            _onBeforeRouteMatched: function(oEvent) {

                var oModel = this.getModel()
                var sLayout = oEvent.getParameters().arguments.layout;
                var oNextUIState;

                if (!sLayout) {
                    this.getHelper().then(function (oHelper) {
                        oNextUIState = oHelper.getNextUIState(0);
                        oModel.setProperty("/layout", oNextUIState.layout);
                    });
                    return;
                }

                oModel.setProperty("/layout", sLayout);
            },

            _getFcl: function () {
                return new Promise(function (resolve, reject) {
                    var oFCL = this.getRootControl().byId("App");
                    if (!oFCL) {
                        this.getRootcontrol().attachAfterInit(function(oEvent) {
                            resolve(oEvent.getSource().byId('App'));
                        }, this);
                        return;
                    }
                    resolve(oFCL);
    
                }.bind(this));
            }
        });
    });