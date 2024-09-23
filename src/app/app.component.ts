import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../environments/environment';
//export const mapboxgl = require('mapbox-gl');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'queimadas';
  map: mapboxgl.Map | undefined;
  style = "mapbox://stylee/mapbox/streets-v11";
  lat = -5.316213;
  long = -47.959115;
  zoom = 10;

  constructor(){
    //mapboxgl.config.ACCESS_TOKEN = 'YOUR_TOKEN';
    //Object.getOwnPropertyDescriptor(mapboxgl, "accessToken"). set(YOUR_TOKEN');
    //(mapboxgl as any).accessToken = environment.mapbox.accessToken;
  }

  ngOnInit(): void{
    this.buildMap();
  }

  buildMap(): void{
    const navControl = new mapboxgl.NavigationControl({
      visualizePitch: true
    })

    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: "map",
      style: this.style,
      zoom: this.zoom,
      center: [this.lat, this.long],
      attributionControl: false
    })

    //this.map.addControl(navControl, `top-right`);
  }
}
