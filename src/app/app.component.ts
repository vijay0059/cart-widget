import { Component } from '@angular/core';
import {List} from './list';
import {ListService} from './service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';
  lists: List[];
  addedCart = 0;

  constructor(listService: ListService) {
    this.lists = listService.getHeroes();
  }
  addCart() {
    this.addedCart +=1
  }
}
