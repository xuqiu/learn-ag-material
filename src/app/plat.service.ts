import { Injectable } from '@angular/core';
import { Plat } from './plat';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PlatService {

  private platsUrl = 'http://localhost:8080/plat';  // URL to web api

  constructor(private http: HttpClient,
              private messageService: MessageService) { }
  getPlats(): Observable<Plat[]> {
    return this.http.get<Plat[]>(this.platsUrl).pipe(
      tap(() => this.log(`fetched plats`)),
      catchError(this.handleError('getPlats', []))
    );
  }
  getPlat(id: number): Observable<Plat> {
    const url = `${this.platsUrl}/${id}`;
    return this.http.get<Plat>(url).pipe(
      tap(() => this.log(`fetched plat id=${id}`)),
      catchError(this.handleError<Plat>(`getPlat id=${id}`))
    );
  }
  updatePlat (plat: Plat): Observable<any> {
    return this.http.put(this.platsUrl, plat, httpOptions).pipe(
      tap(() => this.log(`updated plat id=${plat.id}`)),
      catchError(this.handleError<any>('updatePlat'))
    );
  }



  addPlat (plat: Plat): Observable<Plat> {
    return this.http.post<Plat>(this.platsUrl, plat, httpOptions).pipe(
      tap((plat: Plat) => this.log(`added plat w/ id=${plat.id}`)),
      catchError(this.handleError<Plat>('addPlat'))
    );
  }

  deletePlat (plat: Plat | number): Observable<Plat> {
    const id = typeof plat === 'number' ? plat : plat.id;
    const url = `${this.platsUrl}/${id}`;

    return this.http.delete<Plat>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted plat id=${id}`)),
      catchError(this.handleError<Plat>('deletePlat'))
    );
  }

  searchPlats(term: string): Observable<Plat[]> {
    if (!term.trim()) {
      // if not search term, return empty plat array.
      return of([]);
    }
    const url = `${this.platsUrl}/query/${term}`;
    return this.http.get<Plat[]>(url).pipe(
      tap(() => this.log(`found plats matching "${term}"`)),
      catchError(this.handleError<Plat[]>('searchPlats', []))
    );
  }

  private log(message: string) {
    this.messageService.add('PlatService: ' + message);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
