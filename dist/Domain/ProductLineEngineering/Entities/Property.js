"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property = void 0;
class Property {
    constructor(name, value, type, options, linked_property, linked_value, custom, display, comment, possibleValues) {
        this.id = generateId();
        this.name = name;
        this.value = value;
        this.type = type;
        this.options = options;
        this.linked_property = linked_property;
        this.linked_value = linked_value;
        this.custom = custom;
        this.display = display;
        this.comment = comment;
        this.possibleValues = possibleValues;
    }
}
exports.Property = Property;
function generateId() {
    var dt = new Date().getTime();
    var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
}
