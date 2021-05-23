import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  constructor(private http: HttpClient) { }

  getWeatherByCity(cityName: string): Observable<any> {
    return this.http.get(
      'http://api.openweathermap.org/data/2.5/' +
      'weather?q=' + cityName +
      '&appid=' + '3d8b309701a13f65b660fa2c64cdc517'
    )
  }

  getWeatherForecast(cityName: string): Observable<any> {
    return this.http.get(
      'http://api.openweathermap.org/data/2.5/' +
      'forecast?q=' + cityName +
      '&appid=' + '3d8b309701a13f65b660fa2c64cdc517'
    )
  }

}
