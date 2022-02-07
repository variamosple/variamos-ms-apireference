"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductLine = void 0;
const ApplicationEngineering_1 = require("./ApplicationEngineering");
const DomainEngineering_1 = require("./DomainEngineering");
class ProductLine {
    constructor(id, name, domainEngineering = new DomainEngineering_1.DomainEngineering(), applicationEngineering = new ApplicationEngineering_1.ApplicationEngineering()) {
        this.domainEngineering = new DomainEngineering_1.DomainEngineering();
        this.applicationEngineering = new ApplicationEngineering_1.ApplicationEngineering();
        this.id = id;
        this.name = name;
        this.domainEngineering = domainEngineering;
        this.applicationEngineering = applicationEngineering;
    }
}
exports.ProductLine = ProductLine;
