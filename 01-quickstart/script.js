"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var JokeComponent = /** @class */ (function () {
    function JokeComponent() {
    }
    JokeComponent = __decorate([
        core_1.Component({
            selector: 'joke',
            template: "<h1>What did the cheese say when it looked in the mirror?</h1><p>Halloumi(hello me)</p>"
        })
    ], JokeComponent);
    return JokeComponent;
}());
exports.JokeComponent = JokeComponent;
//# sourceMappingURL=script.js.map