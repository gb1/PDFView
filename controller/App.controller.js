sap.ui.define(["sap/ui/core/mvc/Controller"],
    function (Controller) {
    "use strict";

    return Controller.extend("PdfViewTest.controller.App", {

        onInit: function(){

            var pdfView = this.getView().byId("pdfView");
            pdfView.setValue("egg.pdf");
        }

    });

});