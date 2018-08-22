import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Plat } from '../plat';
import { PlatService } from '../plat.service';

@Component({
  selector: 'app-plat-search',
  templateUrl: './plat-search.component.html',
  styleUrls: [ './plat-search.component.css' ]
})
export class PlatSearchComponent implements OnInit {
  plats$: Observable<Plat[]>;
  private searchTerms = new Subject<string>();

  constructor(private platService: PlatService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.plats$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.platService.searchPlats(term)),
    );
  }
}
