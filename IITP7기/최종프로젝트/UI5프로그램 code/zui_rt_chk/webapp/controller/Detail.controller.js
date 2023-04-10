sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/core/Fragment',
	"sap/ui/core/Core"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment, oCore) {
        "use strict";

        return Controller.extend("kr.go.iitp.gr5.clb05.zuirtchk.controller.Detail", {
            onInit: function () {
                this._oView = this.getView(); 
                this._oSTOProcModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/SAP/ZGWB05_STO_PROCESS_SRV");
                this._sPath;
            },
            
            onPopDetApv: function (oEvent) {
                var oContext = oEvent.getSource().getBindingContext(),
                    oControl = oEvent.getSource(),
                    oView = this._oView;
    
                // create popover
                if (!this._pPopover) {
                    this._pPopover = Fragment.load({
                        id: oView.getId(),
                        name: "kr.go.iitp.gr5.clb05.zuirtchk.view.PopDetSTOApv",
                        controller: this,
                        type: "XML"
                    }).then(
                        function (oPopover) {
                            oView.addDependent(oPopover);
                            return oPopover;
                        }.bind(this)
                    );
                }
                this._pPopover.then(function(oPopover) {
                    var oBinding = oView.byId("tblDetSto").getBinding("rows");
                    oBinding.filter([ new sap.ui.model.Filter("Apvnum", "EQ", oView.getModel().getProperty(oContext.getPath()).Apvnum)]);
                    oPopover.openBy(oControl);

                });
            },
    
            onClose: function () {
                this.byId("Popover").close();
            },

            onSelectionChange: function () {
                var oModel;
                var oView = this._oView;
                var oMsg = oCore.byId("msgStrip");
                var oVerti = this.byId("idTblVerti");
                var oTable = this.getView().byId("tblRqsted");
                var selectedIdx = oTable.getSelectedIndices()[0];
                if (oMsg) {
                    oMsg.destroy();
                }

                if (!isNaN(selectedIdx)) {
                    oModel = oView.getModel();
                    var oRowContext = oTable.getContextByIndex(selectedIdx);
                    var oApvBtn = this.getView().byId("btnApv");
                    var oRjctBtn = this.getView().byId("btnRjct"); 
                    this._sPath = oRowContext.sPath;
                    this._oApvdoc = oModel.getProperty(this._sPath);
                    var that = this;

                    var sDetPath = "/detSTOApvSet(Apvnum='" + this._oApvdoc.Apvnum + "',Idx=10)"

                    this._oSTOProcModel.read(sDetPath, {
                        success: function(oData) {
                            that._oDetData = oData;
                            var sProdid = oData.Prodid;
                            var sPlantid = oData.Giplant;
                            that._amt = oData.Amt;
                            var sStockPath = "/stockDataSet(Prodid='" + sProdid + "',Plantid='" + sPlantid + "',Sloccd='1100')" 
                            that._oSTOProcModel.read(sStockPath, {
                                success: function(oData) {
                                    that._oGiStock = oData;
                                    that._nowStock = oData.Stock;
                                    if ((parseInt(that._nowStock) - parseInt(that._amt)) >= 0) {
                                        that._sType = "Information";
                                        that._sText = "The current stock is " + that._nowStock + "EA.";
                                        that._boolEnable = true;
                                    } else {
                                        that._sType = "Error";
                                        that._sText = "The current stock is " + that._nowStock + "EA. Reject the Approval!";
                                        that._boolEnable = false;
                                    }
                                    var oMsgStrip = new sap.m.MessageStrip("msgStrip", {
                                        text: that._sText,
                                        type: that._sType,
                                        showIcon: true,
                                        showCloseButton: true
                                    })
                                    oVerti.addContent(oMsgStrip);
                                    oApvBtn.setEnabled(that._boolEnable);
                                    oRjctBtn.setEnabled(true);
                                }
                            })


                        }
                    });
                } else {
                    this.byId("btnApv").setEnabled(false);
                    this.byId("btnRjct").setEnabled(false);
                    if (oMsg) {
                        oMsg.destroy();
                    }
                }
            },

            onApproval: function () {
                var oModel = this.getView().getModel();
                var oTable = this.byId("tblRqsted");
                var oSTO = {};
                var oApv = {};
                var that = this;
                var sGiStkPath; 
                var sGrStkPath;
                oSTO.Idx = 10;
                oSTO.Prodid = this._oDetData.Prodid;
                oSTO.Ordtype = "STO";
                oSTO.Grplant =  this._oDetData.Grplant;
                oSTO.Grsloc = this._oDetData.Grsloc;
                oSTO.Giplant = this._oDetData.Giplant;
                oSTO.Gisloc = this._oDetData.Gisloc;
                oSTO.Amt = this._oDetData.Amt;
                oSTO.Duedate = this._oDetData.Devdate;
                oSTO.Unit = "EA";
                oSTO.Generator = this._oApvdoc.Generator;
                
                oApv.Apvnum = this._oApvdoc.Apvnum;
                oApv.Apvtype = this._oApvdoc.Apvtype;
                oApv.Apvgdate = this._oApvdoc.Apvgdate;
                oApv.Generator = this._oApvdoc.Generator;
                oApv.Gendept = this._oApvdoc.Gendept;
                oApv.Apvstatus = "APV";

                sGiStkPath = "/stockDataSet(Prodid='" + this._oGiStock.Prodid + "',Plantid='" + this._oGiStock.Plantid + "',Sloccd='1100')" 
                this._oGiStock.Stock = (parseInt(this._oGiStock.Stock) - parseInt(this._oDetData.Amt)).toString();
                

                sGrStkPath = "/stockDataSet(Prodid='" + this._oGiStock.Prodid + "',Plantid='" + this._oDetData.Grplant + "',Sloccd='1100')" 
                this._oSTOProcModel.read(sGrStkPath, {
                    success: function(oData) {


                        that._oGrStock = oData;
                        that._oGrStock.Prestock = (parseInt(that._oGrStock.Prestock) + parseInt(oSTO.Amt)).toString();
                        oModel.update(sGrStkPath, that._oGrStock, {
                            method: "PUT",
                            success: function () {                

                                that._oSTOProcModel.update(sGiStkPath, that._oGiStock, {
                                    method: "PUT",
                                    success: function() {        

                                        that._oSTOProcModel.update(that._sPath, oApv, {
                                            method: "PUT",
                                            success: function () {                        
                                                sap.m.MessageToast.show("Approval Success");
                                                that._oApvdoc = {};
                                                that._oDetData = {};
                                                that._oGiStock = {};
                                                that._oGrStock = {};
                                                that.getView().byId("tblRqsted").getBinding("rows").refresh();
                                                that.getView().byId("tblComp").getBinding("rows").refresh();
                                                that._oSTOProcModel.create("/stopoListSet", oSTO)
                                            }
                                        });
                                    }
                                })
                            }
                        })
                    }
                });
                
            },

            onReject: function () {
                if (!this.oRejectDialog) {
                    this.oRejectDialog = new sap.m.Dialog({
                        title: "RejectReason for Rejection",
                        type: sap.m.DialogType.Message,
                        content: [
                            new sap.m.Label({
                                text: "Do you want to reject this order?",
                                labelFor: "rejectionNote"
                            }),
                            new sap.m.Dialog("rejectionNote", {
                                width: "100%",
                                placeholder: "Add rejectReason for rejection (Necessary)",
                                maxLength: 100,
                                change: function () {
                                    var sReason = sap.ui.getCore().byId("rejectionNote").getValue().split(" ").join('');
                                    if (!!(sReason)) {
                                        sap.ui.getCore().byId("submitBtn").setEnabled(true);
                                    } else {
                                        sap.ui.getCore().byId("submitBtn").setEnabled(false);
                                    }
                                }
                            })
                        ],
                        beginButton: new sap.m.Button("submitBtn", {
                            enabled: false,
                            type: sap.m.ButtonType.Emphasized,
                            text: "Submit",
                            press: function () {
                                var oTable = this.byId("tblRqsted");
                                var oModel = this.getView().getModel();
                                var oCompTable = this.getView().byId("tblComp");
                                var oBtnApv = this.byId("btnApv");
                                var oBtnRjct = this.byId("btnRjct");
                                var oUpdate = {};
                                var sReason = sap.ui.getCore().byId("rejectionNote").getValue();
                                this.oRejectDialog.open();
                                oUpdate.Apvnum = this._oApvdoc.Apvnum;
                                oUpdate.Apvtype = this._oApvdoc.Apvtype;
                                oUpdate.Apvgdate = this._oApvdoc.Apvgdate;
                                oUpdate.Generator = this._oApvdoc.Generator;
                                oUpdate.Gendept = this._oApvdoc.Gendept;
                                oUpdate.Apvstatus = "REJ";
                                oUpdate.Rejreason = sReason;
                                oUpdate.ApvidL = "";
                                oModel.update(this._sPath, oUpdate, {
                                    method: "PUT",
                                    success: function (data) {
                                        sap.m.MessageToast.show("Approval Success");
                                        var oMsg = oCore.byId("msgStrip");
                                        if (oMsg) {
                                            oMsg.destroy();
                                        }
                                        oBtnApv.setEnabled(false);
                                        oBtnRjct.setEnabled(false);
                                        oTable.getBinding("rows").refresh();
                                        oCompTable.getBinding("rows").refresh();
                                    }
                                })
                                this.oRejectDialog.close();
                            }.bind(this)
                        })
                    });
                }
                this.oRejectDialog.open();
            },

            onReverse: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("Main");
            },

            getSelectedRowContext: function(sTableId, fnCallback) {
                var oTable = this.byId(sTableId);
                var iSelectedIndex = oTable.getSelectedIndex();
    
                if (iSelectedIndex === -1) {
                    sap.m.MessageToast.show("Please select a row!");
                    return;
                }
    
                var oSelectedContext = oTable.getContextByIndex(iSelectedIndex);
                if (oSelectedContext && fnCallback) {
                    fnCallback.call(this, oSelectedContext, iSelectedIndex, oTable);
                }
    
                return oSelectedContext;
            },

            onEmpInfo: function () {
            }
        });
    });
