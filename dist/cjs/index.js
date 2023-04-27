"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrowFunc = exports.sayHi = void 0;
function sayHi() {
    console.log('Hello World from Named Export!');
}
exports.sayHi = sayHi;
function sayHiDefault() {
    console.log('Hello World from Default Export!');
}
exports.default = sayHiDefault;
var arrowFunc = function () { return 1; };
exports.arrowFunc = arrowFunc;
