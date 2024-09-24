import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapRoutingModule } from './map-routing.module';
import { FormsModule } from '@angular/forms';
import { homedir } from 'os';
import { MapComponent } from './map.component';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    MapRoutingModule, 
    FormsModule,
    MapComponent
  ],
  exports:[MapComponent]
})
export class MapModule { }
