sap.ui.define([
    "sap/ui/core/Control"
], function (Control, Panel) {
    "use strict";
    return Control.extend("PdfViewTest.control.PdfView", {
        metadata : {
            properties :{
                value: {type: "string", defaultValue : ""}
            }
        },

        aggregations : {
        },

        init : function () {
        },

        setValue: function (iValue) {
            this.invalidate();
            this.setProperty("value", iValue, true);
        },

        renderer : function (oRM, oControl) {
            oRM.write("<div height='600px'");
            oRM.writeControlData(oControl);
            oRM.writeClasses();
            oRM.write(">");
            oRM.write("<object height='600px'");
            oRM.writeAttributeEscaped("data", oControl.getProperty("value") );
            oRM.write("type='application/pdf' width='100%' height='600px'>");
            oRM.write("<embed width='100%' height='600px' type='application/pdf'");
            oRM.writeAttributeEscaped("src", oControl.getProperty("value") );
            oRM.write("/>")
            oRM.write("</object>");
            oRM.write("</div>");
        }
    });
});