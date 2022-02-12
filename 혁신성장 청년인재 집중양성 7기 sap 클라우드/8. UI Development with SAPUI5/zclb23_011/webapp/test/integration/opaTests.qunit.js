/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["zclb23011/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
