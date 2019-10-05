import { NgModule, InjectionToken } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
//import { LoginComponent } from './login/login.component';;
import {NewDogComponent} from './new-dog/new-dog.component';
import { DetailsComponent } from './details/details.component';
import { DogsComponent } from './dogs/dogs.component';
import { ExternalRedirectComponent } from './external-redirect/external-redirect.component';

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');

const routes: Routes = [
  {path: 'new-dog', component: NewDogComponent},
  {path: '', component: DogsComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'externalRedirect', component: ExternalRedirectComponent}
];

@NgModule({
  
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
