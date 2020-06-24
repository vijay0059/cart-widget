import { Component,OnInit } from '@angular/core';
import {List} from './list';
import {ListService} from './service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular 6';
  lists: List[];
  addedCart = 0;

  constructor(public listService: ListService) {
   
  }

  ngOnInit() {
    this.lists = this.listService.getProducts();
  }
  addCart() {
    this.addedCart +=1
  }
}
