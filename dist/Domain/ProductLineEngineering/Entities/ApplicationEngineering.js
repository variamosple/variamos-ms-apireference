"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationEngineering = void 0;
class ApplicationEngineering {
    constructor(models = [], languagesAllowed = [], applications = []) {
        this.models = [];
        this.languagesAllowed = [];
        this.applications = [];
        this.models = models;
        this.languagesAllowed = languagesAllowed;
        this.applications = applications;
    }
}
exports.ApplicationEngineering = ApplicationEngineering;
