"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var snazzy_info_window_1 = require("./directives/snazzy-info-window");
var AgmSnazzyInfoWindowModule = (function () {
    function AgmSnazzyInfoWindowModule() {
    }
    return AgmSnazzyInfoWindowModule;
}());
AgmSnazzyInfoWindowModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [snazzy_info_window_1.AgmSnazzyInfoWindow],
                exports: [snazzy_info_window_1.AgmSnazzyInfoWindow]
            },] },
];
/** @nocollapse */
AgmSnazzyInfoWindowModule.ctorParameters = function () { return []; };
exports.AgmSnazzyInfoWindowModule = AgmSnazzyInfoWindowModule;
//# sourceMappingURL=snazzy-info-window.module.js.map