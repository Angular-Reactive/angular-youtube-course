import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '@features/http-api/shared/services/search-service';
import { debounceTime, distinctUntilChanged, flatMap, map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-http-with-observables',
  templateUrl: './http-with-observables.component.html',
  styleUrls: ['./http-with-observables.component.css']
})
export class HttpWithObservablesComponent implements OnInit, OnChanges {

  private _searchField: FormControl;

  constructor(public iTunes: SearchService) { }

  ngOnInit(): void {
    this._searchField = new FormControl();

    this.searchField.valueChanges
    .pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap( term => this.iTunes.doSearch(term)),
      tap(val => console.log(val))
    ).subscribe(obs => console.log(obs));
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  doSearch(term: string) {
    this.iTunes.doSearch(term);
  }

  public get searchField() {
    return this._searchField;
  }
}
