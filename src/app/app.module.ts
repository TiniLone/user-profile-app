import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { TutComponent } from './tut.component/tut.component';
import { UserProfilComponent } from './user-profil.component/user-profil.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyCPy4KJIUIkxrgxsohvYSUhYYbHBElRXNs',
  authDomain: 'user-profile-app.firebaseapp.com',
  databaseURL: 'https://user-profile-app.firebaseio.com',
  projectId: 'user-profile-app',
  storageBucket: 'user-profile-app.appspot.com',
  messagingSenderId: '541050256862'
};

const appRoutes: Routes = [
  { path: 'tut', component: TutComponent },
  { path: 'user-profil', component: UserProfilComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TutComponent,
    UserProfilComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
