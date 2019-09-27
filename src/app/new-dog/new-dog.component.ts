import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Dog } from "../dog";
import {DogService} from "../services/dog_service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-dog',
  templateUrl: './new-dog.component.html',
  styleUrls: ['./new-dog.component.scss']
})
export class NewDogComponent implements OnInit {
  newDogForm: FormGroup;
  ID;

  constructor(private formBuilder: FormBuilder, private router: Router, private dogService: DogService) {
    this.newDogForm = this.formBuilder.group({
      name: '',
      nickname: '',
      description: '',
      imgPath: '',
      breeds: '',
      weight: '',
      age: ''
    });
  }

  ngOnInit() {
  }

  async submitDog() {
    this.newDogForm.value.breeds = this.newDogForm.value.breeds.split(', ');
    let newDog = this.newDogForm.value;
    let createdDog = this.dogService.addDog(newDog)
    let dogID = createdDog.then(dog => {
      //return this.ID = dog.id.then(getID => {
      return this.dogService.getDogByID(dog.id)
    });
    //console.log(await dogID);
    this.router.navigate(['/details',(await createdDog).id]);
    //let details = this.dogService.getDogByID(dogID);


    //let createdDogID = createdDog.then(dog => dog.id);
    //console.log(createdDogID);
    //let ID = this.dogService.getDogByID(createdDogID).then(dog => this.dog = dog);
    // let ID = '';
    // let createdDogID = createdDog.then(dog => ID = dog.id);
   // this.router.navigate(['/details',ID]);
  }

}