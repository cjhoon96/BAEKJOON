/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["studentb23/sap/training/modularization/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
