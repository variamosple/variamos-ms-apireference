import { Request, Response } from "express";
import { RequestAPI, RequestApiSchema } from "../Init/Entities/request";
import {
  ResponseAPIError,
  ResponseAPISuccess,
  ExternalFunctionObjectResponse,
} from "../Init/Entities/response";
import { Project } from "../ProductLineEngineering/Entities/Project";

export default class ReferenceUseCases {
  testExternalFunction = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    
    const transaction_Id = "ChangeThisForMicroserviceName_" + generateId();

    try {
      const responseApi = new ResponseAPISuccess();
      responseApi.message = "Message successfully";
      responseApi.transactionId = transaction_Id;

      // General structure of the project.
      let project: Project = req.body.data.project;
      // Selected model.
      let modelSelectedId: string = req.body.data.modelSelectedId;

      let object = {
        meesage: "hello world in base64!",
        firstObject: "TestObject",
        secondProperty: "TestProperty"
      };

      // Convert content into Base64
      let content_encode = Buffer.from(JSON.stringify(object)).toString(
        "base64"
      );

      //Create var for data response. 
      let dataResponse: ExternalFunctionObjectResponse = {
        name: "test.json",
        content: content_encode,
      };

      responseApi.data = dataResponse;

      return res.status(200).json(responseApi);
    } catch (e) {
      const responseApi = new ResponseAPIError();

      responseApi.transactionId = transaction_Id;
      responseApi.message = "Internal Server Error";
      responseApi.errorCode = "00";
      responseApi.data = JSON.parse(
        JSON.stringify("{ messageError: " + e + " }")
      );

      return res.status(500).json(responseApi);
    }
  };
}


function generateId(): string {
  var dt = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
}
