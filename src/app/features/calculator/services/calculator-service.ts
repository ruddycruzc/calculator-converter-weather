import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  readonly display = signal('0');
}
