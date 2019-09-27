import { Component } from '@angular/core';
import {DogAuthenticate} from "./services/DogAuthenticate";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private readonly dogAuthenticate: DogAuthenticate) { }

  ngOnInit() {
    this.dogAuthenticate.watch();
    console.log(this.dogAuthenticate.state);
  }

  signIn() {
    this.dogAuthenticate.signIn();
    //this.signedIn = true;
    //this.name = this.dogAuthenticate.getUserName();
    //console.log(this.dogAuthenticate.isUserSignedIn());
    //return this.name;
    
  }

  signOut() {
    this.dogAuthenticate.signOut();
    //this.signedIn = false;
    //console.log(this.dogAuthenticate.isUserSignedIn());
  }

  
}
