/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"iitp23cjh/zdayb2303/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
