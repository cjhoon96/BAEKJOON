/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"iitp/zfiorib23_chart_line/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
