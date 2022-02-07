"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adaptation = void 0;
class Adaptation {
    constructor(id, name, models = []) {
        this.models = [];
        this.id = id;
        this.name = name;
        this.models = models;
    }
}
exports.Adaptation = Adaptation;
