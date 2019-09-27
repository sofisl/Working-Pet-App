import { Injectable } from '@angular/core';
import * as firebase from "firebase";
  
@Injectable({
  providedIn: 'root',
})
export class DogService {
  db = firebase.firestore().collection("Dogs");

  constructor() {}

  

  getDogs() {
    return this.db.get().then(querySnapshot => {
        return querySnapshot.docs.map(doc => {
            return {id: doc.id, ... doc.data()}
            });
        });
    };

    addDog(dog) {
        //TODO: RETURN NICER ERROR
        return this.db.add(dog);
    }

  
    getDogByID(id) {
		return this.db.doc(id).get().then(querySnapshot => {
		    return querySnapshot.data();
		});
	};


}

