import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, AfterViewInit, ViewChildren, QueryList, ElementRef, Renderer2, ContentChild, AfterContentInit } from '@angular/core';
import { JokeItemComponent } from '../joke-item/joke-item.component';
import { Joke } from './model/joke';

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class JokeListComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input()
  jokes: Joke [];

  @Output()
  addJokeEvent: EventEmitter<Joke> = new EventEmitter<Joke>();

  @Output()
  deleteJokeEvent: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild(JokeItemComponent) jokeViewChild: JokeItemComponent;
  
  @ViewChildren(JokeItemComponent) jokeViewChildren: QueryList<JokeItemComponent>;

  @ViewChild('header') headerEl: ElementRef;

  @ContentChild(JokeItemComponent) jokeContentChild: JokeItemComponent;

  constructor(private renderer: Renderer2) {
    console.log(`new - jokeViewChild is ${this.jokeViewChild}`);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(`afterViewInit - jokeViewChild is ${this.jokeViewChild}`);

    let jokes: JokeItemComponent[] = this.jokeViewChildren.toArray();
    console.log(jokes);

    console.log(`afterViewInit - headerEl is ${this.headerEl}`);
    this.renderer.setProperty(this.headerEl.nativeElement, 'innerHTML', 'Best Joke Machine!');
  }

  ngAfterContentInit(): void {
    console.log(`afterContentInit - jokeContentChild is ${this.jokeContentChild}`);
  }

  addJoke() {
    this.addJokeEvent.emit(new Joke('What did the cheese say when it looked in the mirror?', 'Hello-me (Hallowmi)'));
  }

  deleteJoke() {

  }

}
