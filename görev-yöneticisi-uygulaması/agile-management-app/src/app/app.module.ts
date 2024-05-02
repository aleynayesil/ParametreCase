import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import {ProgressBarModule} from 'primeng/progressbar';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskComponent } from './task/task.component';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SliderModule} from 'primeng/slider';
import {ContextMenuModule} from 'primeng/contextmenu';
import {BadgeModule} from 'primeng/badge';
import { ChipModule } from 'primeng/chip';
import {ToolbarModule} from 'primeng/toolbar';
import {CheckboxModule} from 'primeng/checkbox';
import {ToastModule} from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {KnobModule} from 'primeng/knob';
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		TagModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FormsModule,
    BadgeModule,
    ChipModule,
    ToolbarModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
    CheckboxModule,
    ToastModule,
    KnobModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
