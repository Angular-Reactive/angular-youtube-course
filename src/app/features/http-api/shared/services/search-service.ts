import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { RestService } from '@app/generics/services/rest-service';
import * as R from 'ramda';
import { map, Observable, tap } from 'rxjs';
import { ApiResponse } from '../../../../generics/models/api-response';
import { API_URL, responseData2TrackModelViewFn } from '../../dashboards/http-with-promises/http-with-promises.utils';
import { TrackModelView } from '../model/track-modelview';


@Injectable()
export class SearchService extends RestService<TrackModelView> {

  public tracks$: Observable<TrackModelView []>;
  public loading: boolean = false;
  public results: any [];


  constructor(private http: HttpClient,
              @Inject(API_URL) private apiURL: string) { 
    super(http, apiURL, 'search');
    this.loading = false;
    this.results = [];
  }


  doSearch(term: string) {
    let params = {
      term: term,
      media: "music",
      limit: 20
    };

    this.loading = true;
//  
    this.tracks$ = this.makeRequest('get', this.apiURL, params)
      .pipe(
        map((resp: ApiResponse<any>) => {
          if(!resp.hasErrors) {
            this.loading = false;
            return R.map(responseData2TrackModelViewFn, R.path(['results'], resp));
          }
        })
      );   
  }
}

