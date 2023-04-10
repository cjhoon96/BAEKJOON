sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/core/Fragment'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment) {
        "use strict";

        return Controller.extend("kr.go.iitp.gr5.clb05.zuirtsnd.controller.App", {
            onInit: function () {
                this._oSTOProcModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/SAP/ZGWB05_STO_PROCESS_SRV");
            },
            
            onPopDetApv: function (oEvent) {
                var oContext = oEvent.getSource().getBindingContext(),
                    oControl = oEvent.getSource(),
                    oView = this.getView();
    
                // create popover
                if (!this._pPopover) {
                    this._pPopover = Fragment.load({
                        id: oView.getId(),
                        name: "kr.go.iitp.gr5.clb05.zuirtsnd.view.PopDetSTOApv",
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
            
            onReceipt: function (oEvent) {
                var oContext = oEvent.getSource().getBindingContext(),
                    sStoPath = oContext.getPath(),
                    oStoData = this.getView().getModel().getProperty(sStoPath),
                    that = this;
                if (!(oStoData.Transtatus)){
                    sap.m.MessageBox.warning("Has the warehousing process been completed?", {
                        actions: [sap.m.MessageBox.Action.OK, sap.m.MessageBox.Action.CANCEL],
                        emphasizedAction: sap.m.MessageBox.Action.OK,
                        onClose: function (sAction) {
                            if(sAction === "OK"){ 
                                var oStoUpdate = {},
                                    sStockPath = "/stockDataSet(Prodid='" + oStoData.Prodid + "',Plantid='" + oStoData.Grplant + "',Sloccd='1100')",
                                    oMatDoc = {};
                                oStoUpdate.Generator = oStoData.Generator;
                                oStoUpdate.Ordnum = oStoData.Ordnum;
                                oStoUpdate.Idx = oStoData.Idx;
                                oStoUpdate.Prodid = oStoData.Prodid;
                                oStoUpdate.Ordtype = oStoData.Ordtype;
                                oStoUpdate.Reqempid = oStoData.Reqempid;
                                oStoUpdate.Grplant  = oStoData.Grplant ;
                                oStoUpdate.Grsloc = oStoData.Grsloc;
                                oStoUpdate.Giplant = oStoData.Giplant;
                                oStoUpdate.Gisloc = oStoData.Gisloc;
                                oStoUpdate.Vendorid = oStoData.Vendorid;
                                oStoUpdate.Gendate  = oStoData.Gendate ;
                                oStoUpdate.Amt = oStoData.Amt;
                                oStoUpdate.Transtatus = 'X';
                                oStoUpdate.Duedate = oStoData.Duedate;
                                oStoUpdate.Unit = oStoData.Unit;
                                oStoUpdate.Grdate = new Date(); 

                                oMatDoc.Idx = 10
                                oMatDoc.Ordtype = "STO" 
                                oMatDoc.Prodid = oStoData.Prodid
                                oMatDoc.Amt = oStoData.Amt
                                oMatDoc.Unit = oStoData.Unit
                                oMatDoc.Ordnum = oStoData.Ordnum
                                oMatDoc.Execdate = 
                                oMatDoc.Grplant = oStoData.Grplant
                                oMatDoc.Grsloc = oStoData.Grsloc
                                oMatDoc.Giplant = oStoData.Giplant
                                oMatDoc.Gisloc = oStoData.Gisloc

                                that._oSTOProcModel.update(sStoPath, oStoUpdate, {
                                    method: "PUT",
                                    success: function () {
                                        that._oSTOProcModel.read(sStockPath, {
                                            success: function(oData) {
                                                oData.Prestock = (parseInt(oData.Prestock) - parseInt(oStoUpdate.Amt)).toString();
                                                oData.Stock = (parseInt(oData.Stock) + parseInt(oStoUpdate.Amt)).toString();
                                                that._oSTOProcModel.update(sStockPath, oData, {
                                                    method: "PUT",
                                                    success: function () {
                                                        that.getView().byId("tblStoPo").getBinding("rows").refresh();
                                                        sap.m.MessageToast.show("Receipted Successfully");
                                                        that._oSTOProcModel.create("/matDocSet", oMatDoc); 
                                                    }
                                                });
                                            }
                                        })
                                    }
                                });
                            }
                        }
                    });
                }
            },

            onClose: function () {
                this.byId("Popover").close();
            },

        });
    });
