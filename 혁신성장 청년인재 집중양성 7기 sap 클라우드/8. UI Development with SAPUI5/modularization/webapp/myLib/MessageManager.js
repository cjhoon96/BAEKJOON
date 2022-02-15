sap.ui.define ( [
    "sap/m/MessageBox",
    "studentb23/sap/training/modularization/myLib/Formatter"
], function (MessageBox, Formatter) {
    return {
        reportSuccess: function(sMsg, sTitle) {
            MessageBox.show(
                Formatter.capitalizeFirstLetter(sMsg), {
                    title: Formatter.capitalizeFirstLetter(sTitle)
                });
        }
    };
});