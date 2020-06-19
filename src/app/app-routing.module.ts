import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GallerieComponent } from './gallerie/gallerie.component';
import { ContacterComponent } from './contacter/contacter.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
{path:'Gallerie', component:GallerieComponent},
{path:'Home', component:HomeComponent},
{path:'Contacter', component:ContacterComponent},
{path:'APropos', component:AProposComponent},
{path:'', component:HomeComponent},
{path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
