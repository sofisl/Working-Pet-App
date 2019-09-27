import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as firebase from "firebase";

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  var firebaseConfig = {
    apiKey: "AIzaSyDvVM2pZgI8z7gPfOejDI-LmtixUs5tJws",
    authDomain: "dogs-app-41bc3.firebaseapp.com",
    databaseURL: "https://dogs-app-41bc3.firebaseio.com",
    projectId: "dogs-app-41bc3",
    storageBucket: "dogs-app-41bc3.appspot.com",
    messagingSenderId: "1035867370443",
    appId: "1:1035867370443:web:8e0d766a275781e00ebc4e"
  };

  firebase.initializeApp(firebaseConfig);