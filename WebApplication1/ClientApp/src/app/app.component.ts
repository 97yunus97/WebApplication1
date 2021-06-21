import { Component } from '@angular/core';
import { Action } from 'rxjs/scheduler/Action';
import { Model, ToDoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  model = new Model
  isDisplay = false;

  getItems() {
    if (this.isDisplay) {
      return this.model.items;
    }
    return this.model.items.filter(item => !item.action);
  }

  addItem(value) {
    if (value != "") {
      this.model.items.push(new ToDoItem(value,false))
    }
  }
}
