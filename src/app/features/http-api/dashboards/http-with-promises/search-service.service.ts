import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestService } from '@app/generics/services/rest-service';

@Injectable()
export class SearchServiceService extends RestService<Object> {

  public apiRoot: string = 'https://itunes.apple.com/search';
  public results: Object [] = [];
  public loading: boolean = false;


  constructor(private http: HttpClient) { 
    super(http, 'https://itunes.apple.com', 'search');
    this.results = [];
    this.loading = false;
  }
}
