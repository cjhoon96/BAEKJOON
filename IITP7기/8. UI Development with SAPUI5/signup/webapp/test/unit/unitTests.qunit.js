/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"iitp7cjhoon/signup/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
