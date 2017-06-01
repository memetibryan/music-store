import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <h3>Music List:</h3>
  <p>Below are some of the favourite music we have in store:</p>
  <h3>{{musicGenre}}</h3>
  <div class="description" *ngFor="let description of descriptions">
  <ol>
  <li>Song name:- {{musicDescription.name}}</li>
  <li>Artist:- {{musicDescription.artist}}</li>
  <li>Year Produced:- {{musicDescription.year}}</li>
  </ol></div>
  </div>
  `
})

export class AppComponent {
  musicGenre: string = 'Riddims';
  musicDescription: Description = new Description("Turn Me On","Konshens", 2017);
  descriptions: Description[] = [
    new Description("Puppy Tail", "Demarco", 2016),
    new Description("Dont", "The Stooges", 1970),
    new Description("Twilight of the Thunder God", "Amon Amarth", 2008),
    new Description("Dilate", "Ani DiFranco", 1996),
    new Description("Chopin - Complete Nocturnes", "Brigitte Engerer", 2015),
    new Description("Axis Bold As Love", "The Jimi Hendrix Experience", 1967)
  ];
}

export class Description {
  constructor (public name: string, public artist: string, public year: number) {  }
}
