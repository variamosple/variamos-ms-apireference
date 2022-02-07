"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
class Model {
    constructor(id, name, type, elements = [], relationships = [], typeEngineering) {
        this.elements = [];
        this.relationships = [];
        this.id = id;
        this.name = name;
        this.type = type;
        this.elements = elements;
        this.relationships = relationships;
        this.typeEngineering = typeEngineering;
    }
}
exports.Model = Model;
