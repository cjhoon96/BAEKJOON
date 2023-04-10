/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"krgoiitpgr5clb05/zui_rt_snd/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
