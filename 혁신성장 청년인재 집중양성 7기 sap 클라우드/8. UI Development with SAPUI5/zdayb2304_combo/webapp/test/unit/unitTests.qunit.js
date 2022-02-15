/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"iitpcjh/zdayb2304_combo/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
