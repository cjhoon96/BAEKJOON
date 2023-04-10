/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"krgoiitpgr5clb05/zui_rt_chk/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
