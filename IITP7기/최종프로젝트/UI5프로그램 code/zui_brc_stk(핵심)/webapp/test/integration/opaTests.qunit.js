/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["kr/go/iitp/gr5/clb05/zuibrcstk/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
