(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
// public API
var snazzy_info_window_module_1 = require("./snazzy-info-window.module");
exports.AgmSnazzyInfoWindowModule = snazzy_info_window_module_1.AgmSnazzyInfoWindowModule;
var snazzy_info_window_1 = require("./directives/snazzy-info-window");
exports.AgmSnazzyInfoWindow = snazzy_info_window_1.AgmSnazzyInfoWindow;

})));
//# sourceMappingURL=snazzy-info-window.umd.js.map
