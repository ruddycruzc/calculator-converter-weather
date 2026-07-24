import { Component, computed, inject } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
export class WeatherComponent {

  private readonly weatherService = inject(WeatherService);

  readonly municipalities = this.weatherService.municipalities;

  readonly weather = this.weatherService.weather;

  readonly loading = this.weatherService.loading;

  readonly error = this.weatherService.error;

}