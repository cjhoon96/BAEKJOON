/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["iitp23/cjh/zdayb2303/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
