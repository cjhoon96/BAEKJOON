/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["zclb23014/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
