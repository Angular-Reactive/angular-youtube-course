import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as R from 'ramda';


@Component({
  selector: 'app-http-api',
  templateUrl: './http-api.component.html',
  styleUrls: ['./http-api.component.css']
})
export class HttpApiComponent implements OnInit {

  apiRoot: string = 'http://httpbin.org';
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  doGET() {
    console.log('GET');
    
    const url = `${this.apiRoot}/get`;
    const params = new HttpParams()
      .set('foo', 'moo')
      .set('limit', '25');

    this.http.get(url, {params})
      .subscribe(response => console.log(response));
  }

  doPOST() {
    console.log('POST');
  }

  doPUT() {
    console.log('PUT');
  }

  doDELETE() {
    console.log('DELETE');
  }

  doGETAsPromise() {
    console.log('GET as Promise');
  }

  doGETAsPromiseError() {
    console.log('GET as Promise Error');
  }

  doGETAsObservableError() {
    console.log('GET as Observable Error');
  }

  doGETWithHeaders() {
    console.log('GET with Headers');
  }
}
