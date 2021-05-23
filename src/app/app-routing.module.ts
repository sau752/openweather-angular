import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component'
import { WeatherInfoComponent } from './weather-info/weather-info.component'

const routes: Routes = [
  { path: 'info', component: WeatherInfoComponent },
  { path: 'forecast', component: WeatherForecastComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
