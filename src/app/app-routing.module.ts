import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';;
import {NewDogComponent} from './new-dog/new-dog.component';
import { DetailsComponent } from './details/details.component';
import { DogsComponent } from './dogs/dogs.component';


const routes: Routes = [
  {path: 'new-dog', component: NewDogComponent},
  {path: '', component: DogsComponent},
  {path: 'details/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
