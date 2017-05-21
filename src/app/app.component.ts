import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My 1st Angular app';
  imageUrl = "http://lorempixel.com/400/200/";
  isActive = true;

  onClick() {
    this.isActive = !this.isActive;
  }
}
