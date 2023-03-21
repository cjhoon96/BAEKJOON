sap.ui.define([
    "sap/ui/model/SimpleType",
    "sap/ui/model/ValidateException"
], function(SimpleType, ValidateException) {
    return SimpleType.extend("iitp.zclb23017.model.type.chkTeamNo", {
        formatValue: function (oValue) {
            return oValue;
        },

        parseValue: function (oValue) {
            return oValue;
        },

        validateValue: function (oValue) {
            if (oValue == "D001" || oValue == "D002" || oValue == "D003") {

            } else {
                throw new ValidateException();
            }
        }
    })
})