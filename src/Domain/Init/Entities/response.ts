export class ResponseAPISuccess {
  transactionId?: string;
  message?: string;
  data?: object;
  constructor(transactionId?: string, message?: string, data?: JSON) {
    this.transactionId = transactionId;
    this.message = message;
    this.data = data;
  }
}

export class ResponseAPIError {
  transactionId?: string;
  message?: string;
  errorCode?: string;
  data?: object;
  constructor(
    transactionId?: string,
    message?: string,
    errorCode?: string,
    data?: object
  ) {
    this.transactionId = transactionId;
    this.message = message;
    this.errorCode = errorCode;
    this.data = data;
  }
}

export class ExternalFunctionAPISuccess {
  transactionId?: string;
  message?: string;
  data?: object;
  constructor(transactionId?: string, message?: string, data?: JSON) {
    this.transactionId = transactionId;
    this.message = message;
    this.data = data;
  }
}

export interface ExternalFunctionObjectResponse {
  name: string;
  content: string;
}
