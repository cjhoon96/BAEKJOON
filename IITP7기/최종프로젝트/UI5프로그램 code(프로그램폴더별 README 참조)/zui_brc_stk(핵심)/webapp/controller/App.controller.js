sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("kr.go.iitp.gr5.clb05.zuibrcstk.controller.App", {
            onInit: function () {
                
                this.oOwnerComponent = this.getOwnerComponent(); 
                this.oRouter = this.oOwnerComponent.getRouter();
                this.oRouter.attachRouteMatched(this._onRouteMatched, this); 
            },
    
            _onRouteMatched: function (oEvent) {
                var sRouteName = oEvent.getParameter("name");
                var oArguments = oEvent.getParameter("arguments");

                this._updateUIElements();

                this.currentRouteName = sRouteName;      
                this.currentProduct = oArguments.product; 
                this.currentApvData = oArguments.apvData;
            },
    
            onStateChanged: function (oEvent) {
                
                var bIsNavigationArrow = oEvent.getParameter("isNavigationArrow");
                var sLayout = oEvent.getParameter("layout");

                this._updateUIElements();

                if (bIsNavigationArrow) {
                    this.oRouter.navTo(this.currentRouteName, {layout: sLayout, product: this.currentProduct, apvData: this.currentApvData}, true);
                }
            },

            _updateUIElements: function () {
                var oModel = this.oOwnerComponent.getModel(),
                    oUIState;
                this.oOwnerComponent.getHelper().then(function(oHelper) {
                    oUIState = oHelper.getCurrentUIState();
                    oModel.setData(oUIState);
                });
            },

            onExit : function() {
                this.oRouter.detachRouteMatched(this._onRouteMatched, this);
                this.oRouter.detachBeforeRouteMatched(this.onBeforeRouteMatched, this);
            }
            
        });
    });