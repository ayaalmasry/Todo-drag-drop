import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatButtonModule} from '@angular/material/button';
import{HttpClientModule}  from '@angular/common/http';

import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
  
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    AppRoutingModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
    MatButtonModule,
    HttpClientModule,
    
    
    
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
