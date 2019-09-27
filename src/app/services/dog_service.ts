import { Injectable } from '@angular/core';
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root',
})
export class DogService {
  db = firebase.firestore();
  constructor() {}

  getDogs() {
    return this.db.collection("Dogs").get().then(querySnapshot => {
        return querySnapshot.docs.map(doc => {
            return {id: doc.id, ... doc.data()}
            });
        });
    };
  
    getDogByID(id) {
		return this.db.collection("Dogs").doc(id).get().then(querySnapshot => {
		    return querySnapshot.data();
		});
	};


}

