import { Component, OnInit } from '@angular/core';
import { Dog } from "../dog";
import { ActivatedRoute } from "@angular/router";
import {DogService} from "../services/dog_service";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  dog;
  
  constructor(private route: ActivatedRoute, private readonly dogService: DogService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id || '';
    this.dogService.getDogByID(id).then(dog => this.dog = dog);

  }

  

}
