import {Injectable} from '@angular/core';
import {LISTDEAILS} from './list-details'
@Injectable({
  providedIn: 'root',
})
export class ListService{
  getProducts() { 
    return LISTDEAILS; 
  }
}