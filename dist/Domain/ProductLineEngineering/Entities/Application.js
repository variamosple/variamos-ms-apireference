"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
class Application {
    constructor(id, name, models = [], adaptations = []) {
        this.models = [];
        this.adaptations = [];
        this.id = id;
        this.name = name;
        this.models = models;
        this.adaptations = adaptations;
    }
}
exports.Application = Application;
