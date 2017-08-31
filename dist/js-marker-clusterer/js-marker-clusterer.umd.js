(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// main modules
__export(require("./directives"));
__export(require("./services"));
// we explicitly export the module here to prevent this Ionic 2 bug:
// http://stevemichelotti.com/integrate-angular-2-google-maps-into-ionic-2/
var js_marker_clusterer_module_1 = require("./js-marker-clusterer.module");
exports.AgmJsMarkerClustererModule = js_marker_clusterer_module_1.AgmJsMarkerClustererModule;

})));
//# sourceMappingURL=js-marker-clusterer.umd.js.map
