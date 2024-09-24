import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  title = 'queimadas';
  map: mapboxgl.Map | undefined;
  style = "mapbox://styles/mapbox/navigation-night-v1";
  lat = -59.9825041;
  long = -3.1316333;
  zoom = 5;

  constructor(){
    //mapboxgl.config.ACCESS_TOKEN = 'YOUR_TOKEN';
    //Object.getOwnPropertyDescriptor(mapboxgl, "accessToken"). set(YOUR_TOKEN');
    //(mapboxgl as any).accessToken = environment.mapbox.accessToken;
  }

  ngOnInit(): void{
    this.buildMap();
  }

  buildMap(): void{
    //const navControl = new mapboxgl.NavigationControl({
      //visualizePitch: true
    //})

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
