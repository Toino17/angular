import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApprenantsListComponent } from './apprenants-list/apprenants-list.component';
import { ApprenantComponent } from './apprenant/apprenant.component';

const routes: Routes = [
  { path: '', component:  ApprenantsListComponent },
  { path: 'apprenant', component: ApprenantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
