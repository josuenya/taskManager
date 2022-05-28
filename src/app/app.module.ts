import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';


export const firebaseConfig = {
  apiKey: 'AIzaSyARsvLAzpClkEL5LBPhO-Vn6-jiBO_RzWo',
  authDomain: 'taskmanager-876aa.firebaseapp.com',
  databaseURL: 'https://taskmanager-876aa-default-rtdb.firebaseio.com/',
  projectId: 'taskmanager-876aa',
  storageBucket: 'taskmanager-876aa.appspot.com',
  messagingSenderId: '231696089797',
  appId: '1:231696089797:web:3e10ada3be3118d4e566ac',
  measurementId: 'G-B7CB3P2VWC'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
