import { Component, OnInit } from '@angular/core';
import { GeoCode } from 'src/app/models/geocode.model';
import { WeatherData } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  cityName: string = 'Chicago'
  weatherData?: WeatherData;
  geoCodes?: GeoCode[] = [];

  constructor(private weatherService: WeatherService) {

  }
  ngOnInit(): void {
    this.getWeatherDataFromCurrentLocation(this.cityName);
    this.cityName = '';

  };

  onSubmit() {
    this.getWeatherDataFromSearch(this.cityName);
  }

  private getWeatherDataFromCurrentLocation(cityName: string) {
    this.weatherService.getWeatherDataForCurrentLocation()
      .subscribe({
        next: (response) => {
          this.weatherData = response;

          //console.log(response);
        }
      })
  }

  getWeatherDataFromSearch(cityName: string) {
    this.weatherService.getGeoCodeForCityName(cityName).subscribe(gc => {
      this.geoCodes = gc;
      this.getWeatherFromLatLong(gc[0].lat.toString(), gc[0].lon.toString());
    })
  }




  getWeatherFromLatLong(latFromGeoCodeAPI: string, longFromGeoCodeAPI: string): void {
    this.weatherService.getWeatherDataForLatLong(latFromGeoCodeAPI, longFromGeoCodeAPI).subscribe(wd => {
      this.weatherData = wd;
    })
  }
}
