import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyCPy4KJIUIkxrgxsohvYSUhYYbHBElRXNs',
  authDomain: 'user-profile-app.firebaseapp.com',
  databaseURL: 'https://user-profile-app.firebaseio.com',
  projectId: 'user-profile-app',
  storageBucket: 'user-profile-app.appspot.com',
  messagingSenderId: '541050256862'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
