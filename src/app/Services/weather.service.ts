import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeoCodes } from '../models/geocode.model';
// import { environment } from 'src/environment.ts/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  API_KEY = '656d825f90356ea3ea9a6e46f9d0603d';
  latitude: number = 41.8781;
  longitude: number = -87.623177;

  constructor(private http: HttpClient) { }

  // getWeatherData(cityName: string): Observable<WeatherData> {
  //   return this.http.get<WeatherData>('https://api.openweathermap.org/data/2.5/weather?lat=41.8781&lon=87.6298&appid=656d825f90356ea3ea9a6e46f9d0603d');
  // }

  getWeatherByGeoLocation(): Observable<WeatherData> {
    navigator.geolocation.getCurrentPosition((success) => {
      console.log(success);

      let { latitude: geoLocatedLatitude, longitude: geoLocatedLongitude } = success.coords;
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geoLocatedLatitude}&lon=${geoLocatedLongitude}&units=Imperial&appid=${this.API_KEY}`).then(res => res.json()).then(data => {
        console.log(data);
        return this.http.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?lat=${geoLocatedLatitude}&lon=${geoLocatedLongitude}&units=Imperial&appid=${this.API_KEY}`);
      });
    })
    return this.http.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&units=Imperial&appid=${this.API_KEY}`);
  }

  getWeatherDataForLatLong(searchedLat: string, searchedLong: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?lat=${searchedLat}&lon=${searchedLong}&units=Imperial&appid=${this.API_KEY}`);
  }

  getGeoCodeForCityName(cityName: string): Observable<GeoCodes> {
    //console.log(cityName);
    return this.http.get<GeoCodes>(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${this.API_KEY}`);
  }


    getFiveDayWeather(searchedLat: string, searchedLong: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(`http://api.openweathermap.org/data/2.5/forecast/daily?lat=${searchedLat}&lon=${searchedLong}&cnt=5&appid=${this.API_KEY}`);
      
    }

}
