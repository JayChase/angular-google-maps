"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@agm/core");
var marker_cluster_1 = require("./directives/marker-cluster");
var AgmJsMarkerClustererModule = (function () {
    function AgmJsMarkerClustererModule() {
    }
    return AgmJsMarkerClustererModule;
}());
AgmJsMarkerClustererModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [core_2.AgmCoreModule],
                declarations: [marker_cluster_1.AgmMarkerCluster],
                exports: [marker_cluster_1.AgmMarkerCluster]
            },] },
];
/** @nocollapse */
AgmJsMarkerClustererModule.ctorParameters = function () { return []; };
exports.AgmJsMarkerClustererModule = AgmJsMarkerClustererModule;
//# sourceMappingURL=js-marker-clusterer.module.js.map