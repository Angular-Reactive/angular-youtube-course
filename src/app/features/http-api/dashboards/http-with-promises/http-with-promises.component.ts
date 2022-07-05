import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../shared/services/search-service';

@Component({
  selector: 'app-http-with-promises',
  templateUrl: './http-with-promises.component.html',
  styleUrls: ['./http-with-promises.component.css']
})
export class HttpWithPromisesComponent implements OnInit {

  constructor(public iTunes: SearchService) { }

  ngOnInit(): void {
  }

  doSearch(term: string) {
    this.iTunes.doSearch(term);
  }
}
