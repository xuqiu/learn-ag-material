import { Component, OnInit } from '@angular/core';
import {SoupuiService} from "./soupui.service";
import {SoapArg, SoapOperation} from "../model/SoapOperation";
import {SoapResult} from "../model/SoapResult";
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-soupui',
  templateUrl: './soupui.component.html',
  styleUrls: ['./soupui.component.css'],
})
export class SoupuiComponent implements OnInit {

  constructor(private soupuiService:SoupuiService) { }

  ngOnInit() {
    this.testInit();
    this.argsSubject.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      // distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((operation) => this.soupuiService.getRequestSoap(operation)),
    ).subscribe(
      value => {
        this.soapOperation.request = value.request;
      }

    );
  }

  testInit(){
    this.wsdlUrl="http://202.202.232.217:8572/ophiuxDataService/ws/service?wsdl";

  }
  loading = [];
  private wsdlUrl:string;
  private soapOperations: SoapOperation[];
  private soapOperation:SoapOperation;
  private soapResult:SoapResult;
  private argsSubject = new Subject<SoapOperation>();

  argChange():void{
    this.argsSubject.next(this.soapOperation);
  }

  fillerContent = Array(50).fill(0).map(() =>
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);


  handle(): void {
    const step = 'handle';
    this.loading[step] = true;
    this.soapOperations = null;
    this.soapOperation = null;
    this.soapResult = null;
    this.soupuiService.handleWsdl(this.wsdlUrl).subscribe(soapOperations => {
      this.soapOperations = soapOperations;
      this.loading[step] = false;
    },error => this.loading[step] = false);
  }
  operationChange():void{
    // this.soapOperation = operation;
    this.soapResult = null;
  }
  call():void {
    const step = 'call';
    this.loading[step] = true;
    this.soapResult = null;
    this.soapOperation.response = null;
    this.soapOperation.result = null;
    this.soupuiService.soapCall(this.soapOperation).subscribe(soapResult => {
      this.soapResult = soapResult;
      this.soapOperation.response = soapResult.response;
      this.loading[step] = false;
    },error => this.loading[step] = false);
  }

  extract(resultType?:string):void {
    const step = 'extract';
    this.loading[step] = true;
    this.soapOperation.result = null;
    if(resultType){
      this.soapOperation.resultType = resultType;
    }

    this.soupuiService.extract(this.soapOperation).subscribe(operation => {
      this.soapOperation.result = operation.result;
      this.loading[step] = false;
    },error => this.loading[step] = false);
  }
}
