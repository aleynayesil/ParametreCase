import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './cards/card-list/card/card.component';
import { CardListComponent } from './cards/card-list/card-list.component';
import { FormsModule } from '@angular/forms';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { HttpClientModule } from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { CardCreateComponent } from './cards/card-create/card-create.component';
import { ProductService } from './service/product.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent,
    CardCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    RatingModule,
    FormsModule,
    HttpClientModule,
    ConfirmDialogModule,
    ToastModule,
    BrowserAnimationsModule
  ],
  providers: [MessageService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
