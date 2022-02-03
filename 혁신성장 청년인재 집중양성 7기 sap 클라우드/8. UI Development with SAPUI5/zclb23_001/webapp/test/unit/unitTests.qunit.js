/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"IITP/zclb23_001/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
