/*global QUnit*/

sap.ui.define([
	"iitp/zclb23_004/controller/XMLView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("XMLView Controller");

	QUnit.test("I should test the XMLView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
