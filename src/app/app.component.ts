import { Component } from '@angular/core';
import {DogAuthenticate} from "./services/DogAuthenticate";
import {UserService} from "./services/userService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private readonly dogAuthenticate: DogAuthenticate, private readonly userService: UserService) { }
  isAdmin = false;

  async ngOnInit() {
    this.dogAuthenticate.watch();
    console.log(this.dogAuthenticate.state);
    console.log(await this.userService.addUser());
    await this.userService.getUserAdminStatus();
    console.log(this.userService.isAdmin);
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
