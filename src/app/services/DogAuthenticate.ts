
import { Injectable } from '@angular/core';
import * as firebase from "firebase";

@Injectable({
    providedIn: 'root',
})
export class DogAuthenticate {

    profilePicUrl = '';
    userName = '';
    userPicElement ='';
    userNameElement = '';
    state = null;

    constructor() { }

    signIn() {
        // Sign into Firebase using popup auth & Google as the identity provider.
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);

    }


//every time something changes, I want this function to be called
    watch() {
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.state = user;
                return true;
            } else {
                this.state  = user;
                return false;
            }
        })
    }

    getCurrentUser(user) {
        if(user) {
            return firebase.auth().currentUser.uid;
        }
    }

    


    signOut() {
        // Sign out of Firebase.
        firebase.auth().signOut();
    }
  
    getProfilePicUrl() {
        return firebase.auth().currentUser.photoURL || '/images/profile_placeholder.png';
    }
    // Returns the signed-in user's display name.
    getUserName() {
        return firebase.auth().currentUser.displayName;
    }
   

     isUserSignedIn() {
        return !!firebase.auth().currentUser;
      }



    addSizeToGoogleProfilePic(url) {
        if (url.indexOf('googleusercontent.com') !== -1 && url.indexOf('?') === -1) {
          return url + '?sz=150';
        }
        return url;
      }

      

   
//to save user data, you need to create a new collection
//with the user ID and then store information with them

}
