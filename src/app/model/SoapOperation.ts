export class SoapOperation {
  name:string;
  wsdlUrl:string;
  args:Array<SoapArg>;
  request:string;
  response:string;
  result:string;
  resultType:string;
}
export class SoapArg {
  name:string;
  value:string;
}
