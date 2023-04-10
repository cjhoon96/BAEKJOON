sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter",
    "sap/f/library",
    "sap/ui/core/UIComponent"
],
	function ( Controller, Filter, FilterOperator, Sorter, fioriLibrary, UIComponent) {
		"use strict";
		return Controller.extend("kr.go.iitp.gr5.clb05.zuibrcstk.controller.Master", {
			onInit: function () {
				this.oView = this.getView();
            
                this._SortBy = "prodid"
                this._Descending = false;
                this.oProductsTable = this.oView.byId("productsTable");
                var oBinding = this.oProductsTable.getBinding("items",'stockData');

				this.oRouter = this.getOwnerComponent().getRouter();
			},


			onSearch: function (oEvent) {
                var oTableSearchState = [],
                    sQuery = oEvent.getParameter("query");  
    
                if (sQuery) {                             
                    oTableSearchState = new Filter({
                            filters: [
                                new Filter("prodid", FilterOperator.Contains, sQuery),        
                                new Filter("prodnm", FilterOperator.Contains, sQuery),         
                            ],              
                            and: false,                                                        
                        }
                    ); 
                }
    
                this.oProductsTable.getBinding("items").filter(oTableSearchState, "Application"); 
			},


            onSortBy: function (oEvent) {
                var checkPressed = oEvent.getSource().getPressed();
                var oBinding = this.oProductsTable.getBinding("items")
                
                if (checkPressed){
                    this._SortBy = "stock"                       
                } else {
                    this._SortBy = "prodid"
                }
                
                var oSorter = [new Sorter(this._SortBy, this._Descending), new Sorter('prestock', this._Descending)];  
                oBinding.sort(oSorter);
            },


            onSortMode: function () {
                this._Descending = !this._Descending;
                var oBinding = this.oProductsTable.getBinding("items");
                var oSorter = [new Sorter(this._SortBy, this._Descending), new Sorter('prestock', this._Descending)];
    
                oBinding.sort(oSorter);
            },


			onListItemPress: function (oEvent) {
				var productPath = oEvent.getSource().getBindingContext("stockData").getPath();
                var product = productPath.split("/").slice(-1).pop(); 
				var oNextUIState;
                this.getOwnerComponent().getHelper().then(function (oHelper) {
                    oNextUIState = oHelper.getNextUIState(1);
                    this.oRouter.navTo("detail", {
                        layout: oNextUIState.layout,
                        product: product
                    });
                }.bind(this));
			},
		});
	}
);
