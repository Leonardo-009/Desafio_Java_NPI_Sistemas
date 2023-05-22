import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocioListComponent } from './socio-list/socio-list.component';
import { CreateSocioComponent } from './create-socio/create-socio.component';
import { UpdateSocioComponent } from './update-socio/update-socio.component';
import { SocioDetalisComponent } from './socio-detalis/socio-detalis.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DependentelistComponent } from './dependentelist/dependentelist.component';
import { CreateDependenteComponent } from './create-dependente/create-dependente.component';
import { UpdateDependenteComponent } from './update-dependente/update-dependente.component';
import { DependenteDetalisComponent } from './dependente-detalis/dependente-detalis.component';


@NgModule({
  declarations: [
    AppComponent,
    SocioListComponent,
    CreateSocioComponent,
    UpdateSocioComponent,
    SocioDetalisComponent,
    DependentelistComponent,
    CreateDependenteComponent,
    UpdateDependenteComponent,
    DependenteDetalisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
