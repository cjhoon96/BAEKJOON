sap.ui.jsview(
    "iitp.zclb23004.view.JSView",
    {
        getcontrollerName: function () {
            return "iitp.zclb23004.controller.JSView";
        },
        createContent: function () {
            

            var oCheckBox = new sap.m.CheckBox(this.createId("idCheckBox"), {
                text: "No"
            });


            var oButton = new sap.m.Button("idBtn", {
                text: "Button (JS View)",
                // press: function () {
                //     alert("JavaScript View Button Event");
                // }
            });
            return [oCheckBox, oButton];
        }
    }

)
