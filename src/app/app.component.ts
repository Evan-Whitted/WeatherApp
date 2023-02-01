import { Component, OnInit } from '@angular/core';
import { WeatherData } from './Models/weather.model';
import { WeatherService } from './Services/weather.service';
import { GeoCode } from './Models/geocode.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
