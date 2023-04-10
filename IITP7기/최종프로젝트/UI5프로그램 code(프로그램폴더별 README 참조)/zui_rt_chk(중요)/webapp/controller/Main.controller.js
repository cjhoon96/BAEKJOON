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

        return Controller.extend("kr.go.iitp.gr5.clb05.zuirtchk.controller.Main", {
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
                var oTable = this.byId("tblRqsted");
                var selectedIdx = oTable.getSelectedIndices()[0];
                var oView = this._oView;
                var oMsg = oCore.byId("msgStrip");
                var oVerti = this.byId("idTblVerti");
                var oApvBtn = this.getView().byId("apvBtn");
                var optApvBtn = this.getView().byId("partApvBtn");
                var oRjctBtn = this.getView().byId("rejectBtn");
                oApvBtn.setEnabled(false);
                optApvBtn.setEnabled(false);
                oRjctBtn.setEnabled(false);
                if (oMsg) {
                    oMsg.destroy();
                }
                if (!isNaN(selectedIdx)) {
                    oModel = oView.getModel();
                    var oRowContext = oTable.getContextByIndex(selectedIdx); 
                    this._sPath = oRowContext.sPath;
                    this._oApvdoc = oModel.getProperty(this._sPath);
                    var that = this;

                    var sDetPath = "/detSTOApvSet(Apvnum='" + this._oApvdoc.Apvnum + "',Idx=10)"

                    this._oSTOProcModel.read(sDetPath, {
                        success: function(oData) {
                            var sProdid = oData.Prodid;
                            var sPlantid = oData.Giplant;
                            var sStockPath = "/stockDataSet(Prodid='" + sProdid + "',Plantid='" + sPlantid + "',Sloccd='1100')";
                            that._oDetData = oData;
                            that._amt = oData.Amt;
                            that._oSTOProcModel.read(sStockPath, {
                                success: function(oData) {
                                    that._oGiStock = oData;
                                    that._nowStock = oData.Stock;
                                    if ((parseInt(that._nowStock) - parseInt(that._amt)) >= 0) {
                                        that._sType = "Information";
                                        that._sText = "The current stock is " + that._nowStock + "EA.";
                                        oApvBtn.setEnabled(true);
                                        oApvBtn.setVisible(true);
                                        optApvBtn.setEnabled(false);
                                        optApvBtn.setVisible(false);
                                        oRjctBtn.setEnabled(false);
                                        oRjctBtn.setVisible(false);
                                    } else if (parseInt(that._nowStock) === 0) {
                                        that._sType = "Error";
                                        that._sText = "There is no Stock!";
                                        oApvBtn.setEnabled(false);
                                        oApvBtn.setVisible(false);
                                        optApvBtn.setEnabled(false);
                                        optApvBtn.setVisible(false);
                                        oRjctBtn.setEnabled(true);
                                        oRjctBtn.setVisible(true);
                                    } else {
                                        that._sType = "Warning";
                                        that._sText = "The current stock is " + that._nowStock + "EA. Ship out all remaining stock.";
                                        that._befAmt = that._oDetData.Amt
                                        that._oDetData.Amt = that._nowStock;
                                        oApvBtn.setEnabled(false);
                                        oApvBtn.setVisible(false);
                                        optApvBtn.setEnabled(true);
                                        optApvBtn.setVisible(true);
                                        oRjctBtn.setEnabled(false);
                                        oRjctBtn.setVisible(false);
                                    }
                                    var oMsgStrip = new sap.m.MessageStrip("msgStrip", {
                                        text: that._sText,
                                        type: that._sType,
                                        showIcon: true,
                                        showCloseButton: true
                                    })
                                    oVerti.addContent(oMsgStrip);
                                }
                            })
                        }
                    });
                } else {
                    oApvBtn.setEnabled(false);
                    oApvBtn.setVisible(true);
                    optApvBtn.setEnabled(false);
                    optApvBtn.setVisible(false);
                    oRjctBtn.setEnabled(false);
                    oRjctBtn.setVisible(false);
                    if (oMsg) {
                        oMsg.destroy();
                    }
                }
            },

            onApproval: function () {
                var oModel = this.getView().getModel();
                var oSTO = {};
                var oApv = {};
                var that = this;
                var sGiStkPath; 
                var sGrStkPath;
                var oApvBtn = this.getView().byId("apvBtn");
                var optApvBtn = this.getView().byId("partApvBtn");
                var oRjctBtn = this.getView().byId("rejectBtn");
                const sHeadQuarter = '2000';
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
                                        
                                                var sHQPath = "/plantEmpSet('" + sHeadQuarter + "')"
                                                that._oSTOProcModel.read(sHQPath, {
                                                    success: function (oData) {    
                                                        var aCtcMDNum = oData.Empctcnum.split('-');
                                                        var sCtcMDNum = "+8210" + aCtcMDNum[1] + aCtcMDNum[2];
                                                        var sGiPath = "/plantTxtSet('" + oSTO.Giplant + "')";
                                                        that._oSTOProcModel.read(sGiPath, {
                                                            success: function (oData) {
                                                                var sMsg = "-" + oApv.Apvnum + "-   " + oData.Plantdetail + "(" + oSTO.Giplant + ")에서 재고이전 요청을 승인하였습니다. (" + oSTO.Prodid + ' ' + oSTO.Amt + ' ' + oSTO.Unit + ")";
                                                                
                                                                var oparam = '{"message":' + '"' + sMsg + '", "number":' + '"' + sCtcMDNum + '"}';
                                                                
                                                                $.ajax({
                                                                    type: "POST", 
                                                                    url: "https://mub4fgf9cd.execute-api.us-west-2.amazonaws.com/PRD/notification",
                                                                    data: oparam
                                                                });
                                                                
                                                                that._oApvdoc = {};
                                                                that._oDetData = {};
                                                                that._oGiStock = {};
                                                                that._oGrStock = {};
                                                                oApvBtn.setEnabled(false);
                                                                oApvBtn.setVisible(true);
                                                                optApvBtn.setEnabled(false);
                                                                optApvBtn.setVisible(false);
                                                                oRjctBtn.setEnabled(false);
                                                                oRjctBtn.setVisible(false);
                                                                that.getView().byId("tblRqsted").getBinding("rows").refresh();
                                                                that.getView().byId("tblComp").getBinding("rows").refresh();
                                                                
                                                                that._oSTOProcModel.create("/stopoListSet", oSTO);
                                                            } 
                                                        })
                                                    }
                                                })
                                            }
                                        });
                                    }
                                })
                            }
                        })
                    }
                });
                
            },

            onPartApv: function () {
                // 추가: 문자 추가
                var oModel = this.getView().getModel();
                var oSTO = {};
                var oApv = {};
                var that = this;
                var sGiStkPath; 
                var sGrStkPath;
                var oApvBtn = this.getView().byId("apvBtn");
                var optApvBtn = this.getView().byId("partApvBtn");
                var oRjctBtn = this.getView().byId("rejectBtn");
                const sHeadQuarter = '2000';
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
                                        
                                                var sHQPath = "/plantEmpSet('" + sHeadQuarter + "')"
                                                that._oSTOProcModel.read(sHQPath, {
                                                    success: function (oData) {    
                                                        var aCtcMDNum = oData.Empctcnum.split('-');
                                                        var sCtcMDNum = "+8210" + aCtcMDNum[1] + aCtcMDNum[2];
                                                        var sGiPath = "/plantTxtSet('" + oSTO.Giplant + "')";
                                                        that._oSTOProcModel.read(sGiPath, {
                                                            success: function (oData) {
                                                                var sMsg = "-" + oApv.Apvnum + "-   " + oData.Plantdetail + "(" + oSTO.Giplant + ")에서 재고 부족으로 일부 발송하였습니다. (" + oSTO.Prodid + " " + that._befAmt + ' ' + oSTO.Unit + " => " + that._oDetData.Amt + " " + oSTO.Unit + ")";
                                                                var oparam = '{"message":' + '"' + sMsg + '", "number":' + '"' + sCtcMDNum + '"}';
                                                                
                                                                $.ajax({
                                                                    type: "POST", 
                                                                    url: "https://mub4fgf9cd.execute-api.us-west-2.amazonaws.com/PRD/notification",
                                                                    data: oparam
                                                                });
                                                                
                                                                that._oApvdoc = {};
                                                                that._oDetData = {};
                                                                that._oGiStock = {};
                                                                that._oGrStock = {};
                                                                oApvBtn.setEnabled(false);
                                                                oApvBtn.setVisible(true);
                                                                optApvBtn.setEnabled(false);
                                                                optApvBtn.setVisible(false);
                                                                oRjctBtn.setEnabled(false);
                                                                oRjctBtn.setVisible(false);
                                                                that.getView().byId("tblRqsted").getBinding("rows").refresh();
                                                                that.getView().byId("tblComp").getBinding("rows").refresh();

                                                                that._oSTOProcModel.create("/stopoListSet", oSTO)
                                                            } 
                                                        })
                                                    }
                                                });
                                            }
                                        })
                                    }
                                })
                            }
                        });
                    }
                });
            },

            onReject: function () {
                var oTable = this.byId("tblRqsted");
                var oModel = this.getView().getModel();
                var oCompTable = this.getView().byId("tblComp");
                var oApvBtn = this.getView().byId("apvBtn");
                var optApvBtn = this.getView().byId("partApvBtn");
                var oRjctBtn = this.getView().byId("rejectBtn");
                var oUpdate = {};
                var that = this;
                const sHeadQuarter = '2000';
                oUpdate.Apvnum = this._oApvdoc.Apvnum;
                oUpdate.Apvtype = this._oApvdoc.Apvtype;
                oUpdate.Apvgdate = this._oApvdoc.Apvgdate;
                oUpdate.Generator = this._oApvdoc.Generator;
                oUpdate.Gendept = this._oApvdoc.Gendept;
                oUpdate.Apvstatus = "REJ";
                oUpdate.Rejreason = "Out of Stock";
                oUpdate.ApvidL = "";
                oModel.update(this._sPath, oUpdate, {
                    method: "PUT",
                    success: function (data) {
                        sap.m.MessageToast.show("Approval Success");
                        var oMsg = oCore.byId("msgStrip");
                        if (oMsg) {
                            oMsg.destroy();
                        }
                        oApvBtn.setEnabled(false);
                        oApvBtn.setVisible(true);
                        optApvBtn.setEnabled(false);
                        optApvBtn.setVisible(false);
                        oRjctBtn.setEnabled(false);
                        oRjctBtn.setVisible(false);
                        oTable.getBinding("rows").refresh();
                        oCompTable.getBinding("rows").refresh();

                        var sHQPath = "/plantEmpSet('" + sHeadQuarter + "')"
                        oModel.read(sHQPath, {
                            success: function (oData) {    
                                var aCtcMDNum = oData.Empctcnum.split('-');
                                var sCtcMDNum = "+8210" + aCtcMDNum[1] + aCtcMDNum[2];
                                var sGiPath = "/plantTxtSet('" + that._oDetData.Giplant + "')";
                                oModel.read(sGiPath, {
                                    success: function (oData) {
                                        var sMsg = "-" + that._oApvdoc.Apvnum + "-   " + oData.Plantdetail + "(" + that._oDetData.Giplant + ") 해당 상품건에 대한 재고가 없어 발송할 수 없습니다. (" + that._oDetData.Prodid + ' ' + 0 + ' ' + that._oDetData.Unit + ")";
                                        
                                        var oparam = '{"message":' + '"' + sMsg + '", "number":' + '"' + sCtcMDNum + '"}';
                                        $.ajax({
                                            type: "POST", 
                                            url: "https://mub4fgf9cd.execute-api.us-west-2.amazonaws.com/PRD/notification",
                                            data: oparam
                                        });
                                        
                                        that._oApvdoc = {};
                                        that._oDetData = {};
                                        that._oGiStock = {};
                                        that._oGrStock = {};
                                        oApvBtn.setEnabled(false);
                                        oApvBtn.setVisible(true);
                                        optApvBtn.setEnabled(false);
                                        optApvBtn.setVisible(false);
                                        oRjctBtn.setEnabled(false);
                                        oRjctBtn.setVisible(false);
                                        that.getView().byId("tblRqsted").getBinding("rows").refresh();
                                        that.getView().byId("tblComp").getBinding("rows").refresh();
                                    } 
                                })
                            }
                        })
                    }
                })
            },


            onReverse: function () {
                if (this.getView().byId("tblRqsted").getBinding("rows").getLength()) {
                    sap.m.MessageBox.warning(
                        "Take care of the headquarters instructions first.",
                        {
                            icon: sap.m.MessageBox.Icon.WARNING,
                            title: "Warning",
                            actions: [ sap.m.MessageBox.Action.CLOSE],
                            initialFocus: sap.m.MessageBox.Action.CANCEL
                        }
                    );
                } else {
                    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.navTo("Detail");
                }
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
