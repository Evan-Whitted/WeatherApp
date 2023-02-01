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
 
  constructor( private weatherService: WeatherService) {

  }

  cityName: string = 'Chicago' 
  weatherData?: WeatherData;
  geoCodes?: GeoCode;
  
  
  ngOnInit(): void  {
    this.getWeatherDataFromCurrentLocation(this.cityName);
    this.cityName = '';
    
  };
  
  onSubmit() {
    this.getWeatherFromSearch(this.cityName);
    this.cityName = '';
    

  }

  private getWeatherDataFromCurrentLocation(cityName: string) {
    this.weatherService.getWeatherDataForCurrentLocation()
    .subscribe({
      next: (response) => {
        this.weatherData = response;

        console.log(response);
      }
    })

  }

  getWeatherFromSearch(name: string): void {
    this.getWeatherFromSearch(`http://api.openweathermap.org/geo/1.0/direct?q=${this.cityName}&limit=5&appid=656d825f90356ea3ea9a6e46f9d0603d`);

  }
}
