import { Injectable } from '@angular/core'
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Hero } from './hero'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const heroes: Hero[] = [
      { id: 11, name: 'Squirrel Girl' },
      { id: 12, name: 'Wonder Woman' },
      { id: 13, name: 'Spider Woman' },
      { id: 14, name: 'Fury' },
      { id: 15, name: 'Rogue' },
      { id: 16, name: 'Screaming Mimi' },
      { id: 17, name: 'Meteorite' },
      { id: 18, name: 'The Wasp' },
      { id: 19, name: 'Green Lantern' },
      { id: 20, name: 'XS' }
    ]
    return {heroes}
  }
  
    // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? 
    Math.max(...heroes.map(hero => hero.id)) + 1 : 
    11
  }
}
