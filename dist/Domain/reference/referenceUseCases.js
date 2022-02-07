"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = require("../Init/Entities/response");
class ReferenceUseCases {
    constructor() {
        this.testExternalFunction = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const transaction_Id = "ChangeThisForMicroserviceName_" + generateId();
            try {
                const responseApi = new response_1.ResponseAPISuccess();
                responseApi.message = "Message successfully";
                responseApi.transactionId = transaction_Id;
                // General structure of the project.
                let project = req.body.data.project;
                // Selected model.
                let modelSelectedId = req.body.data.modelSelectedId;
                let object = {
                    meesage: "hello world in base64!",
                    firstObject: "TestObject",
                    secondProperty: "TestProperty"
                };
                // Convert content into Base64
                let content_encode = Buffer.from(JSON.stringify(object)).toString("base64");
                //Create var for data response. 
                let dataResponse = {
                    name: "test.json",
                    content: content_encode,
                };
                responseApi.data = dataResponse;
                return res.status(200).json(responseApi);
            }
            catch (e) {
                const responseApi = new response_1.ResponseAPIError();
                responseApi.transactionId = transaction_Id;
                responseApi.message = "Internal Server Error";
                responseApi.errorCode = "00";
                responseApi.data = JSON.parse(JSON.stringify("{ messageError: " + e + " }"));
                return res.status(500).json(responseApi);
            }
        });
    }
}
exports.default = ReferenceUseCases;
function generateId() {
    var dt = new Date().getTime();
    var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
}
