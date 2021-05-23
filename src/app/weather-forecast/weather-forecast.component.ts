import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from './../openweather.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {

  constructor(private openWeatherService: OpenWeatherService, private route: ActivatedRoute, private router: Router) { }

  showForecast: boolean = false;
  forecastCity: string = '';
  weatherForecast: any = []

  ngOnInit(): void {
    let city = this.route.snapshot.paramMap.get('city');
    this.getWeatherForecast(city!)
  }

  getWeatherForecast(city: string) {
    this.weatherForecast = [];
    this.showForecast = false;
    this.forecastCity = city;
    this.openWeatherService.getWeatherForecast(city)
      .subscribe((data: any) => {
        let i = 0;
        let j = 0;
        while (i < 5) {
          let forecast = data.list[j++];
          let forecastDate = forecast.dt_txt;
          if (forecastDate.includes('09:00:00')) {
            let forecastData: any = {
              date: forecast.dt,
              temperature: forecast.main.temp,
              seaLevel: forecast.main.sea_level
            };
            this.weatherForecast.push(forecastData);
            i++;
          }
        }
        this.showForecast = true;
      });
  }

  navigateBack() {
    this.router.navigate(['/info', {}]);
  }

}
