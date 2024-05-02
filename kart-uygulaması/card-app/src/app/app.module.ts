import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CardListComponent } from './card/card-list/card-list.component';
import { ACardComponent } from './card/a-card/a-card.component';
import { BCardComponent } from './card/b-card/b-card.component';
import { CCardComponent } from './card/c-card/c-card.component';
import {FieldsetModule} from 'primeng/fieldset';
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    ACardComponent,
    BCardComponent,
    CCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    FieldsetModule,
  ],
  providers: [
    CardListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
