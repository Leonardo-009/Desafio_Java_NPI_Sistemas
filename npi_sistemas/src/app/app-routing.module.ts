import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSocioComponent } from './create-socio/create-socio.component';
import { SocioListComponent } from './socio-list/socio-list.component';
import { UpdateSocioComponent } from './update-socio/update-socio.component';
import { SocioDetalisComponent } from './socio-detalis/socio-detalis.component';
import { CreateDependenteComponent } from './create-dependente/create-dependente.component';
import { DependenteDetalisComponent } from './dependente-detalis/dependente-detalis.component';
import {DependentelistComponent} from './dependentelist/dependentelist.component';
import { UpdateDependenteComponent } from './update-dependente/update-dependente.component';


const routes: Routes = [
{path: 'socio', component: SocioListComponent},
{path: 'create-socio', component: CreateSocioComponent},
{path: '', redirectTo: 'socio', pathMatch: 'full'},
{path: 'update-socio/:id', component: UpdateSocioComponent},
{path: 'socio-details/:id', component: SocioDetalisComponent},

{path: 'dependente', component: DependentelistComponent},
{path: 'create-dependente', component: CreateDependenteComponent},
{path: '', redirectTo: 'dependente', pathMatch: 'full'},
{path: 'update-dependente/:id', component: UpdateDependenteComponent},
{path: 'dependente-details/:id', component: DependenteDetalisComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


