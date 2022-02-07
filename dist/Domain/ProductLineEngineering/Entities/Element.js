"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Element = void 0;
class Element {
    constructor(name, type, properties = [], parentId, instanceOfId) {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.properties = [];
        this.id = generateId();
        this.type = type;
        this.name = name;
        this.properties = properties;
        this.parentId = parentId;
        this.instanceOfId = instanceOfId;
    }
}
exports.Element = Element;
function generateId() {
    var dt = new Date().getTime();
    var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
}
