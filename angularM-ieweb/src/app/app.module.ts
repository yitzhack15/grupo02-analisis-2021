import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  imports:      [
     AppRoutingModule,BrowserModule, FormsModule, FlexLayoutModule, BrowserAnimationsModule,
     MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule
   ],
  declarations: [ AppComponent,HomeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
