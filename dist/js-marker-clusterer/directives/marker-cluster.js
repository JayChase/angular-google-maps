"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var cluster_manager_1 = require("../services/managers/cluster-manager");
var core_2 = require("@agm/core");
/**
 * AgmMarkerCluster clusters map marker if they are near together
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker-cluster>
 *        <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        </agm-marker>
 *        <agm-marker [latitude]="lat2" [longitude]="lng2" [label]="'N'">
 *        </agm-marker>
 *      </agm-marker-cluster>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMarkerCluster = (function () {
    function AgmMarkerCluster(_clusterManager) {
        this._clusterManager = _clusterManager;
    }
    /** @internal */
    AgmMarkerCluster.prototype.ngOnDestroy = function () {
        this._clusterManager.clearMarkers();
    };
    /** @internal */
    AgmMarkerCluster.prototype.ngOnChanges = function (changes) {
        if (changes['gridSize']) {
            this._clusterManager.setGridSize(this);
        }
        if (changes['maxZoom']) {
            this._clusterManager.setMaxZoom(this);
        }
        if (changes['styles']) {
            this._clusterManager.setStyles(this);
        }
        if (changes['zoomOnClick']) {
            this._clusterManager.setZoomOnClick(this);
        }
        if (changes['averageCenter']) {
            this._clusterManager.setAverageCenter(this);
        }
        if (changes['minimumClusterSize']) {
            this._clusterManager.setMinimumClusterSize(this);
        }
        if (changes['styles']) {
            this._clusterManager.setStyles(this);
        }
        if (changes['imagePath']) {
            this._clusterManager.setImagePath(this);
        }
        if (changes['imageExtension']) {
            this._clusterManager.setImageExtension(this);
        }
    };
    /** @internal */
    AgmMarkerCluster.prototype.ngOnInit = function () {
        this._clusterManager.init({
            gridSize: this.gridSize,
            maxZoom: this.maxZoom,
            zoomOnClick: this.zoomOnClick,
            averageCenter: this.averageCenter,
            minimumClusterSize: this.minimumClusterSize,
            styles: this.styles,
            imagePath: this.imagePath,
            imageExtension: this.imageExtension,
        });
    };
    return AgmMarkerCluster;
}());
AgmMarkerCluster.decorators = [
    { type: core_1.Directive, args: [{
                selector: 'agm-marker-cluster',
                providers: [cluster_manager_1.ClusterManager, { provide: core_2.MarkerManager, useExisting: cluster_manager_1.ClusterManager }]
            },] },
];
/** @nocollapse */
AgmMarkerCluster.ctorParameters = function () { return [
    { type: cluster_manager_1.ClusterManager, },
]; };
AgmMarkerCluster.propDecorators = {
    'gridSize': [{ type: core_1.Input },],
    'maxZoom': [{ type: core_1.Input },],
    'zoomOnClick': [{ type: core_1.Input },],
    'averageCenter': [{ type: core_1.Input },],
    'minimumClusterSize': [{ type: core_1.Input },],
    'styles': [{ type: core_1.Input },],
    'imagePath': [{ type: core_1.Input },],
    'imageExtension': [{ type: core_1.Input },],
};
exports.AgmMarkerCluster = AgmMarkerCluster;
//# sourceMappingURL=marker-cluster.js.map