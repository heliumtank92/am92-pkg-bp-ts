"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHiSubModuleA = void 0;
function sayHiSubModuleA() {
    console.log('Hello World from Named Export of SubModuleA!');
}
exports.sayHiSubModuleA = sayHiSubModuleA;
function sayHiDefaultSubModuleA() {
    console.log('Hello World from Default Export of SubModuleA!');
}
exports.default = sayHiDefaultSubModuleA;
