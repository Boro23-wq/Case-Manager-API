"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.CasemanagersController = void 0;
var common_1 = require("@nestjs/common");
var CasemanagersController = /** @class */ (function () {
    function CasemanagersController(casemanagersService) {
        this.casemanagersService = casemanagersService;
    }
    CasemanagersController.prototype.create = function (createCasemanagerDto) {
        return this.casemanagersService.create(createCasemanagerDto);
    };
    CasemanagersController.prototype.findAll = function () {
        return this.casemanagersService.findAll();
    };
    CasemanagersController.prototype.findOne = function (id) {
        return this.casemanagersService.findOne(+id);
    };
    CasemanagersController.prototype.update = function (id, updateCasemanagerDto) {
        return this.casemanagersService.update(+id, updateCasemanagerDto);
    };
    CasemanagersController.prototype.remove = function (id) {
        return this.casemanagersService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], CasemanagersController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], CasemanagersController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], CasemanagersController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], CasemanagersController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], CasemanagersController.prototype, "remove");
    CasemanagersController = __decorate([
        (0, common_1.Controller)('casemanagers')
    ], CasemanagersController);
    return CasemanagersController;
}());
exports.CasemanagersController = CasemanagersController;
