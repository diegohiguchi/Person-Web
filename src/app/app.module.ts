import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';

import { PersonPhoneService } from './service/service';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    EditarComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PersonPhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
