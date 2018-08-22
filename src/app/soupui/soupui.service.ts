import {Injectable} from '@angular/core';
import {MessageService} from "../message.service";
import {HttpClient} from '@angular/common/http';
import {Observable, of, interval,timer} from 'rxjs';
import {tap, catchError,map,flatMap} from 'rxjs/operators';
import {SoapOperation} from "../model/SoapOperation";
import {SoapResult} from "../model/SoapResult";

@Injectable({
  providedIn: 'root'
})
export class SoupuiService {

  constructor(private http: HttpClient,
              private messageService: MessageService) {
  }

  soapUrl="http://localhost:8080/soapui";

  handleWsdl(wsdlUrl:string): Observable<SoapOperation[]> {
    const url = `${this.soapUrl}/wsdl`;
    return timer(1000).pipe(
      flatMap(value => {
        return this.http.post<SoapOperation[]>(url,wsdlUrl).pipe(
          tap(() => this.log(`fetched handleWsdl`)),
          catchError(err => this.handleError("handleWsdl",err,[]))
        );
      })
    );
    // return this.http.post<SoapOperation[]>(this.soapUrl,wsdlUrl).pipe(
    //   tap(() => this.log(`fetched handleWsdl`)),
    //   catchError(this.handleError('handleWsdl', []))
    // );
  }
  getRequestSoap(soapOperation:SoapOperation):Observable<SoapOperation> {
    const url = `${this.soapUrl}/getRequestSoap`;
    return this.http.post<SoapOperation>(url, soapOperation).pipe(
      tap(() => this.log(`fetched getRequestSoap`)),
      catchError(err => this.handleError("getRequestSoap", err))
    );
  }
  soapCall(soapOperation:SoapOperation):Observable<SoapResult> {
    const url = `${this.soapUrl}/call`;
    return timer(1000).pipe(flatMap(value => {
        return this.http.post<SoapResult>(url, soapOperation).pipe(
          tap(() => this.log(`fetched soapCall`)),
          catchError(err => this.handleError("soapCall", err))
        );
    }));
  }
  extract(soapOperation:SoapOperation):Observable<SoapOperation> {
    const url = `${this.soapUrl}/extract`;
    return this.http.post<SoapOperation>(url, soapOperation).pipe(
      tap(() => this.log(`fetched extract`)),
      catchError(err => this.handleError("extract", err))
    );
  }


  private log(message: string) {
    this.messageService.add('SoupuiService: ' + message);
  }

  private handleError<T>(operation = 'operation',err, result?: T):Observable<T> {
    // TODO: send the error to remote logging infrastructure
    console.error(err); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${err.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);

  }
}
