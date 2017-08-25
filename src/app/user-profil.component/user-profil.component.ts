import { Component } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})

export class UserProfilComponent {
  users: FirebaseListObservable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.users = db.list('/users', {
      query: {
        limitToLast: 50
      }
    });
  }

  Send(name: string, email: string) {
    this.users.push({ name : name, email: email });
  }
}
