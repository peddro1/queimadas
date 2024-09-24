import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
//import { HttpClientModule } from '@angular/common/http/index';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AppComponent
    //HttpClientModule
  ],
  //bootstrap: [AppComponent]
})
export class AppModule { }
