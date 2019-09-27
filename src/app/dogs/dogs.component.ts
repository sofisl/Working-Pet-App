import { Component, OnInit } from '@angular/core';
import {Dog} from "../dog";
import {DogService} from "../services/dog_service";

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  
  searchValue = '';

  breeds = [];

  dogs = [];

  filteredBreed;
  allDogs = [];


  constructor(private readonly dogService: DogService) { }

  ngOnInit() {
    this.setBreeds();
    this.dogService.getDogs().then(dogs=> {
      this.dogs = dogs;
      this.allDogs = dogs;
      this.setBreeds();
    });
  
  }
  
  setBreeds() {
    const breedSet = new Set();
    this.dogs.forEach(dog => {
      dog.breeds.forEach(breed => {
        breedSet.add(breed.toLowerCase());
      });
    });

    this.breeds = Array.from(breedSet);
  }

  filterDogs() {
    const lowerSearch = this.searchValue.toLowerCase();
    const lowerFilteredBreed = this.filteredBreed && this.filteredBreed.toLowerCase();

    this.dogs = this.dogs.filter(dog => {
      if (!this.searchValue) return true;

      const matchesName = dog.name.toLowerCase().includes(lowerSearch);
      const matchesNickname = dog.nickname.toLowerCase().includes(lowerSearch);
      const matchesDescription = dog.description.toLowerCase().includes(lowerSearch);
      const matchesBreed = !this.filteredBreed && dog.breeds.some(breed => breed.toLowerCase().includes(lowerSearch) && !!lowerSearch);
      const isTextMatch = (matchesName || matchesNickname || matchesDescription) && lowerSearch.length;

      const onlyBreed = dog.breeds.includes(lowerFilteredBreed);

      if (this.filteredBreed && lowerSearch.length) {
        return onlyBreed && isTextMatch;
      } else if (this.filteredBreed) {
        return onlyBreed;
      } else if (lowerSearch.length) {
        return isTextMatch;
      }
    });
  }

  onKey(event: KeyboardEvent) {
    this.searchValue = (event.target as HTMLInputElement).value;
    this.filterDogs();
  }

  onBreedChange(breed) {
    this.filteredBreed = breed;
    this.filterDogs();
  }

  



  

}
