import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-pipe',
  templateUrl: './default-pipe.component.html',
  styleUrls: ['./default-pipe.component.css']
})
export class DefaultPipeComponent implements OnInit {

  public imageUrl: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
