import { Component, Input, OnInit } from '@angular/core';
import { Joke } from './components/joke-list/model/joke';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  data: Joke [] = [
    new Joke('What did the cheese say when it looked in the mirror?', 'Hello-me (Halloumi)'),
      new Joke('What kind of cheese do you use to disguise a small horse?', 'Mask-a-pony (Mascarpone)'),
      new Joke('A kid threw a lump of cheddar at me?', "I thought 'That’s not very mature'") 
  ];

  constructor() { 

  }

  ngOnInit(): void {
  }

  onJokeEvent(joke: Joke) {
    this.data.unshift(joke);
  }

  onDeleteJokes() {
    this.data = [];
  }
}
