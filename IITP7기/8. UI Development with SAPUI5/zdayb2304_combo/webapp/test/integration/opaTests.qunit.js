/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["iitp/cjh/zdayb2304combo/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
