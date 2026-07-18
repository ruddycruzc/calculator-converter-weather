import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Calculator {
  readonly display = signal('0');
}
