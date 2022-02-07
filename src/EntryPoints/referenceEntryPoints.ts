import { Router } from "express";
import ReferenceUseCases from "../Domain/reference/referenceUseCases";
const router = Router();

let referenceUseCases = new ReferenceUseCases();

router.post(
  "/external-functions/test-function",
  referenceUseCases.testExternalFunction
);

export default router;
