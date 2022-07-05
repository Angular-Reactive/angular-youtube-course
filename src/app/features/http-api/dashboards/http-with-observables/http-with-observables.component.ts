import { Component, OnInit } from '@angular/core';
import { SearchService } from '@features/http-api/shared/services/search-service';

@Component({
  selector: 'app-http-with-observables',
  templateUrl: './http-with-observables.component.html',
  styleUrls: ['./http-with-observables.component.css']
})
export class HttpWithObservablesComponent implements OnInit {

  constructor(public iTunes: SearchService) { }

  ngOnInit(): void {
  }

  doSearch(term: string) {
    this.iTunes.doSearch(term);
  }

}
