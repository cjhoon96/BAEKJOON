/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zclb23_011/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
