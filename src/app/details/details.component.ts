import { Component, OnInit } from '@angular/core';
import { DogList, Dog } from "../dog";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  dog: Dog;

  constructor() { }

  ngOnInit() {

    this.dog = DogList.data.find((dog) => dog.name === 'Brewery') || { name: 'not found' };

  }

  

}
