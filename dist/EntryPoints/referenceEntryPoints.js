"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const referenceUseCases_1 = __importDefault(require("../Domain/reference/referenceUseCases"));
const router = express_1.Router();
let referenceUseCases = new referenceUseCases_1.default();
router.get("/external-functions/test-function", referenceUseCases.testExternalFunction);
exports.default = router;
