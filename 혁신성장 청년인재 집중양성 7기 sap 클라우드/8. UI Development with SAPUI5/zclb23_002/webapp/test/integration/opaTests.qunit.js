/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["IITP/zclb23002/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
