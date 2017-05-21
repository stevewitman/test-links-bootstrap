import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  links = [
    {name: 'Angular', url: 'https://angular.io/'},
    {name: 'Angular Style Guide', url: 'https://angular.io/docs/ts/latest/guide/style-guide.html'},
    {name: 'ngDoc', url: 'http://ngdoc.io/'},
    {name: 'Firebase', url: 'https://firebase.com'},  
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
