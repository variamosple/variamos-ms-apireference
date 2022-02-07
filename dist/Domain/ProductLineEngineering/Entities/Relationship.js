"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Relationship = void 0;
class Relationship {
    constructor(id, name, type, sourceId, targetId, points = [], min, max, properties = []) {
        this.points = [];
        this.properties = [];
        this.id = id;
        this.name = name;
        this.type = type;
        this.sourceId = sourceId;
        this.targetId = targetId;
        this.points = points;
        this.min = min;
        this.max = max;
        this.properties = properties;
    }
}
exports.Relationship = Relationship;
