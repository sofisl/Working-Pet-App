import { Injectable } from '@angular/core';
import * as firebase from "firebase";

@Injectable({
    providedIn: 'root',
})

export class UserService {

    db = firebase.firestore().collection("Users");
    users ;
    constructor() { }
    num;
    flag = false;
    isAdmin = false;

    getUsers() {
        return this.db.get().then(querySnapshot => {
            return querySnapshot.docs.map(doc => {
                return {id: doc.id, ... doc.data()}
                });
            });
        };

    addUser() {
        firebase.auth().onAuthStateChanged(async (user) => {
            if(user) {
                this.users = await(this.getUsers());
                 for (this.num=0; this.num < this.users.length; this.num++) {
                     if((firebase.auth().currentUser.uid.toString() === this.users[this.num].id)) {
                        this.flag = true;    
                    }
                }

                if (!(this.flag)) {
                    this.db.add({id: firebase.auth().currentUser.uid, admin: false});
                }
            }
        });

    }

    async getUserAdminStatus() {
        firebase.auth().onAuthStateChanged(async (user) => {
            if(user) {
                this.users = await this.getUsers();
                for (this.num=0; this.num < this.users.length; this.num++) {
                     if((firebase.auth().currentUser.uid.toString() === this.users[this.num].id)) {
                        if ((this.users[this.num].admin) === true) {
                            this.isAdmin = true;
                            return this.isAdmin;
                        }
                    }
                }
            } else {
                this.isAdmin = false;
                return this.isAdmin;
            }
        });
    }
}