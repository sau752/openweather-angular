import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from './../openweather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent implements OnInit {

  title = 'European Weather Channel';

  cities = [
    'London',
    'Paris',
    'Hamburg',
    'Amsterdam',
    'Madrid'
  ]

  weatherInfo: any = []

  constructor(private openWeatherService: OpenWeatherService, private router: Router) { }

  ngOnInit(): void {
    this.cities.forEach((city: string) => {
      this.openWeatherService.getWeatherByCity(city)
        .subscribe((data: any) => {
          let weatherData: any = {
            city: city,
            temperature: data.main.temp,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset
          }
          this.weatherInfo.push(weatherData)
        });
    });
  }

  getWeatherForecast(city: string) {
    this.router.navigate(['/forecast', { city: city }]);
  }

}
