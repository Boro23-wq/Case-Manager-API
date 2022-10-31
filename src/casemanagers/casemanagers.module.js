"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CasemanagersModule = void 0;
var common_1 = require("@nestjs/common");
var casemanagers_service_1 = require("./casemanagers.service");
var casemanagers_controller_1 = require("./casemanagers.controller");
var CasemanagersModule = /** @class */ (function () {
    function CasemanagersModule() {
    }
    CasemanagersModule = __decorate([
        (0, common_1.Module)({
            controllers: [casemanagers_controller_1.CasemanagersController],
            providers: [casemanagers_service_1.CasemanagersService]
        })
    ], CasemanagersModule);
    return CasemanagersModule;
}());
exports.CasemanagersModule = CasemanagersModule;
