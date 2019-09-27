import { Component, OnInit } from '@angular/core';
import {DogAuthenticate} from "../services/DogAuthenticate";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private readonly dogAuthenticate: DogAuthenticate) { }

  ngOnInit() {
    this.dogAuthenticate.watch();
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
