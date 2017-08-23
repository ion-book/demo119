(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.compoplace = {}),global.ng.core));
}(this, (function (exports,_angular_core) { 'use strict';

var CompoPlaceComponent = (function () {
    function CompoPlaceComponent() {
    }
    CompoPlaceComponent.prototype.ngOnInit = function () {
    };
    CompoPlaceComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'app-compo-place',
                    template: "<p>\n  <a href=\"https://placeholder.com\"><img src=\"http://via.placeholder.com/350x150\"></a></p>",
                    styleUrls: ['./compo-place.component.css']
                },] },
    ];
    /** @nocollapse */
    CompoPlaceComponent.ctorParameters = function () { return []; };
    return CompoPlaceComponent;
}());

var CompoPlaceModule = (function () {
    function CompoPlaceModule() {
    }
    CompoPlaceModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [
                        CompoPlaceComponent
                    ],
                    exports: [CompoPlaceComponent]
                },] },
    ];
    /** @nocollapse */
    CompoPlaceModule.ctorParameters = function () { return []; };
    return CompoPlaceModule;
}());

exports.CompoPlaceModule = CompoPlaceModule;
exports.CompoPlaceComponent = CompoPlaceComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
