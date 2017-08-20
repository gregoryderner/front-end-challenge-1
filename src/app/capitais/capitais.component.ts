import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { WeatherService } from '../services/weather.service';

@Component({
  templateUrl: './capitais.component.html',
  styleUrls: ['./capitais.component.css'],
  providers: [WeatherService],
  encapsulation: ViewEncapsulation.None
})
export class CapitaisComponent implements OnInit {
  cities: object[];

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getThisCities()
      .then(cities => this.cities = cities);
  }

}