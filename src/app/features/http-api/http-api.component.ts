import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-api',
  templateUrl: './http-api.component.html',
  styleUrls: ['./http-api.component.css']
})
export class HttpApiComponent implements OnInit {

  apiRoot: string = 'http://httpbin.org';
  constructor() { }

  ngOnInit(): void {
  }

  doGET() {
    console.log('GET');
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
