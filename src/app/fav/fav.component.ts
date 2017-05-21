import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {

  isFavorite = false;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite
  }

}
