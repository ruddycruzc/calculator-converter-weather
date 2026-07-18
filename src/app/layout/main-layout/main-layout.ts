import { Component } from '@angular/core';
import { Calculator } from '../../features/calculator/calculator';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [Calculator],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}
