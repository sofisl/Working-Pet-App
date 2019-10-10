import {Component} from '@angular/core';
import {DogAuthenticate} from "./services/DogAuthenticate";
import {UserService} from "./services/userService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private readonly dogAuthenticate: DogAuthenticate, private readonly userService: UserService) { }
  isUAdmin = false;
  userState = null;

  async ngOnInit() {
    console.log(this.dogAuthenticate.watch()); //undefined
    console.log(this.dogAuthenticate.state); //null
    // console.log(await this.isUserAdmin());
    // console.log(await this.dogState());
  }

  async signIn() {
    this.dogAuthenticate.signIn();
    await this.userService.addUser();
  }

  signOut() {
    this.dogAuthenticate.signOut();
    
  }

  async dogState() {
    this.dogAuthenticate.watch();
    if (this.dogAuthenticate.watch() != null) {
      this.userState = true;
    } else {
      this.userState = false;
    }
    return this.userState;
  }

  async isUserAdmin() {
    await this.userService.getUserAdminStatus();
    if (this.userService.getUserAdminStatus()) {
      this.isUAdmin = true;
    } else {
      this.isUAdmin = false;
    }
    return this.isUAdmin;
  }

  
}
