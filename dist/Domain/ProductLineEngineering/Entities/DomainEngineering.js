"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainEngineering = void 0;
class DomainEngineering {
    constructor(models = [], languagesAllowed = []) {
        this.models = [];
        this.languagesAllowed = [];
        this.models = models;
        this.languagesAllowed = languagesAllowed;
    }
}
exports.DomainEngineering = DomainEngineering;
