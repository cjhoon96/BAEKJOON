sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller"
], function (JSONModel, Controller) {
	"use strict";

	return Controller.extend("kr.go.iitp.gr5.clb05.zuibrcstk.controller.DetailDetail", {
		onInit: function () {
			this.oOwnerComponent = this.getOwnerComponent();

			this.oRouter = this.oOwnerComponent.getRouter();
			this.oModel = this.oOwnerComponent.getModel();

			this.oRouter.getRoute("detailDetail").attachPatternMatched(this._onPatternMatch, this);
            this._DevDate = new Date();
			this.byId("devDate").setMinDate(new Date());
			this.byId("devDate").setDateValue(new Date());
            this.byId("genDate").setDateValue(new Date());
		},

        onSubmit: function () {
            var oApvModel = this.oOwnerComponent.getModel("stoProc")
            var sNextLayout;
            var deepApvData = {};
            deepApvData.Apvtype = "STO";
            
            var detData = {};
            detData.Prodid = this._giPlantData.prodid;
            detData.Grplant = this._grPlantData.plantid; 
            detData.Grsloc = "1100";
            detData.Giplant = this._giPlantData.plantid;
            detData.Gisloc = "1100";
            detData.Amt = this._Amt;
            detData.Unit = "EA";
            detData.Devdate = this._DevDate;
            var detSTO = [];
            detSTO.push(detData);

            deepApvData.toDetSTOApvSet = detSTO;
            oApvModel.create("/apvDocSet", deepApvData, {
                success: function (data) {
                    sap.m.MessageToast.show("The request was successfully generated.");
                }
            }); 
            sNextLayout = this.oModel.getProperty("/actionButtonsInfo/midColumn/closeColumn");
            this.oRouter.navTo("master", {layout: sNextLayout});
        },

		_onPatternMatch: function (oEvent) {
			this._apvData = oEvent.getParameter("arguments").apvData || this._apvData || "0";
			this._product = oEvent.getParameter("arguments").product || this._product || "0";
            this._giPlantData = this.getView().getModel("othersData").getProperty("/" + this._apvData);
            this._grPlantData = this.getView().getModel("stockData").getProperty("/" + this._product);

			this.getView().bindElement({
				path: "/" + this._apvData,
				model: "othersData"
			});
            
            this.getView().bindElement({
                path: "/" + this._product,
                model: "stockData"
            });

            var oBinding = this.byId("tblDetSTO").getBinding("rows");
            oBinding.filter([ 
                new sap.ui.model.Filter("prodid", "EQ", this._giPlantData.prodid),
                new sap.ui.model.Filter("plantid", "EQ", this._giPlantData.plantid)
            ]);
		},

        onAmountChange: function (oEvent) {
            var oSubmitBtn = this.getView().byId("submitBtn")
            this._Amt = oEvent.getParameters().value;

            if (this._Amt > this._giPlantData.stock) {
                sap.m.MessageBox.error("가용재고량을 초과하였습니다.")
                oSubmitBtn.setEnabled(false);
            } else {
                oSubmitBtn.setEnabled(true);
            }
        },

        onDateChange: function (oEvent) {
            this._DevDate = new Date(oEvent.getParameters().value);
        },

		handleFullScreen: function () {
			var sNextLayout = this.oModel.getProperty("/actionButtonsInfo/endColumn/fullScreen");
			this.oRouter.navTo("detailDetail", {layout: sNextLayout, product: this._product, apvData: this._apvData});
		},

		handleExitFullScreen: function () {
			var sNextLayout = this.oModel.getProperty("/actionButtonsInfo/endColumn/exitFullScreen");
			this.oRouter.navTo("detailDetail", {layout: sNextLayout, product: this._product, apvData: this._apvData});
		},

		handleClose: function () {
			var sNextLayout = this.oModel.getProperty("/actionButtonsInfo/endColumn/closeColumn");
			this.oRouter.navTo("detail", {layout: sNextLayout, product: this._product});
		},

		onExit: function () {
			this.oRouter.getRoute("detailDetail").detachPatternMatched(this._onPatternMatch, this);
		}
	});
});