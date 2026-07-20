import { Component } from '@angular/core';
import { CalculatorComponent } from '../../features/calculator/calculator';
;

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CalculatorComponent],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}
