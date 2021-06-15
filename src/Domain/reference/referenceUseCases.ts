import { Request, Response } from "express";
import {
  ResponseAPIError,
  ResponseAPISuccess,
  ExternalFunctionObjectResponse,
} from "../Init/Entities/response";

export default class ReferenceUseCases {
  testExternalFunction = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const responseApi = new ResponseAPISuccess();
      responseApi.message = "Message successfully";
      responseApi.transactionId = "testExternalFunction_";

      let object = {
        meesage: "hello world in base64!",
        firstObject: "TestObject",
        secondProperty: "TestProperty",
      };

      // Convert content intoBase64
      let content_encode = Buffer.from(JSON.stringify(object)).toString(
        "base64"
      );
      // Test decode.
      // let content_decode = Buffer.from(content_encode, "base64").toString();
      // console.log(content_decode);

      let dataResponse: ExternalFunctionObjectResponse = {
        name: "test.json",
        content: content_encode,
      };
      responseApi.data = dataResponse;

      return res.status(200).json(responseApi);
    } catch (e) {
      const responseApi = new ResponseAPIError();
      responseApi.message = "Internal Server Error";
      responseApi.errorCode = "00";
      responseApi.data = JSON.parse(
        JSON.stringify("{ messageError: " + e + " }")
      );
      responseApi.transactionId = "testExternalFunction_";

      return res.status(500).json(responseApi);
    }
  };
}
