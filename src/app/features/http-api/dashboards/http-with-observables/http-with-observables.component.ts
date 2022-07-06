import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '@features/http-api/shared/services/search-service';
import { debounceTime, distinctUntilChanged, map, Observable, Subscription, switchMap } from 'rxjs';
import { TrackModelView } from '../../shared/model/track-modelview';
@Component({
  selector: 'app-http-with-observables',
  templateUrl: './http-with-observables.component.html',
  styleUrls: ['./http-with-observables.component.css']
})
export class HttpWithObservablesComponent implements OnInit, OnDestroy {

  public tracks$: Observable<TrackModelView []>;
  private _searchField: FormControl;
  private searchSubscription: Subscription;

  constructor(public iTunes: SearchService) { }

  ngOnInit(): void {
    this._searchField = new FormControl();

    this.tracks$ = this.searchField.valueChanges
    .pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap( term => this.iTunes.doSearch(term)));
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }

  doSearch(term: string) {
    this.iTunes.doSearch(term);
  }

  public get searchField() {
    return this._searchField;
  }
}


