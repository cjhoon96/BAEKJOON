/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["iitp7/cjhoon/signup/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
