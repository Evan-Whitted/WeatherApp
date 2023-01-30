import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { environment } from 'src/environment.ts/environment';
import { WeatherData } from '../Models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  // getWeatherData(cityName: string): Observable<WeatherData> {
  //   return this.http.get<WeatherData>('https://api.openweathermap.org/data/2.5/weather?lat=41.8781&lon=87.6298&appid=656d825f90356ea3ea9a6e46f9d0603d'); 
  // }


API_KEY = '656d825f90356ea3ea9a6e46f9d0603d';
 latitude: number = 41.8781;
 longitude: number = -87.6298;

 getWeatherDataForCurrentLocation(): Observable<WeatherData> {
  navigator.geolocation.getCurrentPosition((success) => {
    console.log(success);

         this.latitude = success.coords.latitude; 
          this.longitude = success.coords.longitude;
        return this.http.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&units=Imperial&appid=${this.API_KEY}`);
  })
    return this.http.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&units=Imperial&appid=656d825f90356ea3ea9a6e46f9d0603d`); 
  
}


}
