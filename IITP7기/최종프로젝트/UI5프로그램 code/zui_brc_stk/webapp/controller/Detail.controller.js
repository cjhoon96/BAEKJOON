sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/viz/ui5/data/FlattenedDataset",
    "sap/viz/ui5/controls/common/feeds/FeedItem"
], 
    function (Controller, FlattenedDataset, FeedItem) {
        "use strict";
        return Controller.extend("kr.go.iitp.gr5.clb05.zuibrcstk.controller.Detail", {
            onInit: function () {
                this.oOwnerComponent = this.getOwnerComponent();
                this.oRouter = this.oOwnerComponent.getRouter();
                
                
                this.oModel = this.oOwnerComponent.getModel();
                
                this._selectedRow = "";

                this.oRouter.getRoute("master").attachPatternMatched(this._onProductMatched, this);
                this.oRouter.getRoute("detail").attachPatternMatched(this._onProductMatched, this);
                this.oRouter.getRoute("detailDetail").attachPatternMatched(this._onProductMatched, this);
            },

            onCreateSTOApv: function () {
                var oTable = this.byId("tblotherbrc")
                var selectedIdx = oTable.getSelectedIndices()[0];
                if (!isNaN(selectedIdx)) {
                    var oRowContext = oTable.getContextByIndex(selectedIdx); 
                    var sPath = oRowContext.sPath;
                    var apvData = sPath.split("/").slice(-1).pop(); 
                    var oNextUIState;
                    this.oOwnerComponent.getHelper().then(function (oHelper) {
                        oNextUIState = oHelper.getNextUIState(2);
                        this.oRouter.navTo("detailDetail", {
                            layout: oNextUIState.layout,
                            apvData: apvData,
                            product: this._product
                        });
                    }.bind(this));
                    
                } else {
                    sap.m.MessageBox.error("요청 지점을 선택하세요.");
                }
            },

            _onProductMatched: function (oEvent) {
                this._product = oEvent.getParameter("arguments").product || this._product || "0";

                this.getView().bindElement({
                    path: "/" + this._product,
                    model: "stockData"
                });
                var oBinding = this.byId("tblotherbrc").getBinding("rows");
                oBinding.filter([ new sap.ui.model.Filter("prodid", "EQ", this.getView().getModel("stockData").getProperty("/" + this._product).prodid)]);

                var oVizFrame = this.getView().byId("idVizFrame");
                oVizFrame.setModel(this.oOwnerComponent.getModel("stoProc"));
                oVizFrame.getDataset().getBinding("data").filter([ 
                    new sap.ui.model.Filter("Prodid", "EQ", this.getView().getModel("stockData").getProperty("/" + this._product).prodid),
                    new sap.ui.model.Filter("Giplant", "EQ", this.getView().getModel("stockData").getProperty("/" + this._product).plantid),
                ]);
            },

            handleFullScreen: function () {
                var sNextLayout = this.oModel.getProperty("/actionButtonsInfo/midColumn/fullScreen");
                this.oRouter.navTo("detail", {layout: sNextLayout, product: this._product});
            },
    
            handleExitFullScreen: function () {
                var sNextLayout = this.oModel.getProperty("/actionButtonsInfo/midColumn/exitFullScreen");
                this.oRouter.navTo("detail", {layout: sNextLayout, product: this._product});
            },
    
            handleClose: function () {
                var sNextLayout = this.oModel.getProperty("/actionButtonsInfo/midColumn/closeColumn");
                this.oRouter.navTo("master", {layout: sNextLayout});
            },	

            onExit: function () {
                
                this.oRouter.getRoute("master").detachPatternMatched(this._onProductMatched, this);
                this.oRouter.getRoute("detail").detachPatternMatched(this._onProductMatched, this);
            }
            
        });
    });