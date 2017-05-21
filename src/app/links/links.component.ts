import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  links;

  // links = [
  //   {name: 'Angular', url: 'https://angular.io/'},
  //   {name: 'Angular Style Guide', url: 'https://angular.io/docs/ts/latest/guide/style-guide.html'},
  //   {name: 'ngDoc', url: 'http://ngdoc.io/'},
  //   {name: 'Firebase', url: 'https://firebase.com'},  
  // ]
  
  constructor(db: AngularFireDatabase) {
    this.links = db.list('/links');
  }

  send(name, url) {
    this.links.push({name: name.value, url: url.value})
    name.value = url.value = '';
  }

  ngOnInit() {
  }

}
