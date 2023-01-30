import { Component, OnInit } from '@angular/core';
import { WeatherData } from './Models/weather.model';
import { WeatherService } from './Services/weather.service';

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
    

  }
}
