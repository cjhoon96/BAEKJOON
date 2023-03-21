/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zclb23_014/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
