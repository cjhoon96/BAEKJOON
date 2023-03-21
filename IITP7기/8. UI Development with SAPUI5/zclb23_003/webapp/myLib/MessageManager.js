sap.ui.define([
    "sap/m/MessageBox"
    //사용할 라이브러리의 모듈???
], function(MessageBox) {
    return {
        reportSuccess: function (pMsg, pTitle){
            MessageBox.show(pMsg, {
                title: pTitle
            })
        }
    }
    
});