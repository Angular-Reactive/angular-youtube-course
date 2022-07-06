import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { RestService } from '@app/generics/services/rest-service';
import { AlertService } from '@app/shared/components/alert/alert.service';
import * as R from 'ramda';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../../../../generics/models/api-response';
import { API_URL, responseData2TrackModelViewFn } from '../../dashboards/http-with-promises/http-with-promises.utils';
import { SearchParams } from '../model/search-params.model';
import { TrackModelView } from '../model/track-modelview';


@Injectable()
export class SearchService extends RestService<TrackModelView> {
  public loading: boolean = false;
  public errors$: Observable<string>;
  public results: TrackModelView[];

  public options = {
    autoClose: false,
    keepAfterRouteChange: false
  };

  constructor(private http: HttpClient,
              @Inject(API_URL) private apiURL: string,
              private alertService: AlertService) { 
    super(http, apiURL, 'search');
    this.loading = false;
  }


  doSearchForPromise(term: string) {

    this.loading = true;

    const response$ = this.makeRequest('get', this.apiURL, <SearchParams>{
      term: term,
      media: "music",
      limit: 20
    })
    .pipe(
       map((resp: ApiResponse<any>) =>  resp), 
    ); 

    const aPromise = response$
      .toPromise()
      .then(resp => {
        this.results = R.map(responseData2TrackModelViewFn, R.path(['results'], resp));
        this.loading = false;
      });

    return  aPromise;
  }

  doSearch(term: string) {
  
    this.loading = true;

    const apiResponse$ = this.makeRequest('get', this.apiURL, <SearchParams>{
      term: term,
      media: "music",
      limit: 20
    })
    .pipe(
       map((resp: ApiResponse<any>) =>  resp), 
    ); 
  
    const tracks$ = apiResponse$
      .pipe(
         map((resp: ApiResponse<any>) => { 
          this.loading = false;
          return R.map(responseData2TrackModelViewFn, R.path(['results'], resp))
        }), 
      ); 
      
    this.errors$ = apiResponse$
      .pipe(
        map((resp: ApiResponse<any>) =>  {
          if(resp.getErrorsText()) {
            this.alertService.error(resp.getErrorsText());
          }
          return resp.getErrorsText();
        }),
      ); 

      return tracks$;
  }
}

