import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


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

    const url = `${this.apiRoot}/post`;
    const params = new HttpParams()
      .set('foo', 'moo')
      .set('limit', '25');

    this.http.post(url, {moo:'foo', goo:'loo'}, {params})
      .subscribe(response => console.log(response));
  }

  doPUT() {
    console.log('PUT');

    const url = `${this.apiRoot}/put`;
    const params = new HttpParams()
      .set('foo', 'moo')
      .set('limit', '25');

    this.http.put(url, {moo:'foo', goo:'loo'}, {params})
      .subscribe(response => console.log(response));
  }

  doDELETE() {
    console.log('DELETE');

    const url = `${this.apiRoot}/delete`;
    const params = new HttpParams()
      .set('foo', 'moo')
      .set('limit', '25');

    this.http.delete(url, {params})
      .subscribe(response => console.log(response));
  }

  doGETAsPromise() {
    console.log('GET As Promise');

    const url = `${this.apiRoot}/get`;
    const params = new HttpParams()
      .set('foo', 'moo')
      .set('limit', '25');

    this.http.get(url, {params})
    .toPromise()
    .then(response => console.log(response));
  }

  doGETAsPromiseError() {
    console.log('GET as Promise Error');

    const url = `${this.apiRoot}/post`;
    const params = new HttpParams()
      .set('foo', 'moo')
      .set('limit', '25');

    this.http.get(url, {params})
    .toPromise()
    .then(
      response => console.log(response))
      .catch(msg => console.error(`Error: ${msg.error} ${msg.statusText}`));
  }

  doGETAsObservableError() {
    console.log('GET as Observable Error');

    const url = `${this.apiRoot}/post`;
    const params = new HttpParams()
      .set('foo', 'moo')
      .set('limit', '25');

    this.http.get(url, {params})
    .subscribe({
      next: (response: any) => console.log(response),
      error: (err: any) => console.error(`Error: ${err.error} ${err.statusText}`)
    });
  }

  doGETWithHeaders() {
    console.log('GET with Headers');

    const url = `${this.apiRoot}/get`;
    const params = new HttpParams()
      .set('foo', 'moo')
      .set('limit', '25');
      const headers = new HttpHeaders()
        .set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Authorization', btoa('username:password'));
      
    this.http.get(url, {headers, params})
      .subscribe(response => console.log(response));
  }
}
