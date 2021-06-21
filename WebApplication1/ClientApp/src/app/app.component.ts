import { Component } from '@angular/core';
import { Action } from 'rxjs/scheduler/Action';
import { Model } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  model = new Model

  getItems() {
    return this.model.items;
  }
}
