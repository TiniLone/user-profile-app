import { Component } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-tut',
  templateUrl: './tut.component.html',
  styleUrls: ['./tut.component.css']
})

export class TutComponent {
  items: FirebaseListObservable<any[]>;
  msgVal = '';

  constructor(public af: AngularFireDatabase) {
    this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
    });
  }

  send(desc: string) {
    this.items.push({ messages : desc });
    this.msgVal = '';
  }
}
