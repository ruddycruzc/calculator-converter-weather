import { Component, output } from '@angular/core';
import { CalculatorButtonConfig } from '../../models/calculator-button-config.interface';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button';
import { MEMORY_BUTTONS } from '../../constants/memory-buttons';

@Component({
  selector: 'app-memory-panel',
  standalone: true,
  imports: [CalculatorButtonComponent],
  templateUrl: './memory-panel.html',
  styleUrl: './memory-panel.css',
})
export class MemoryPanelComponent {
  protected readonly buttons = MEMORY_BUTTONS;
  readonly buttonPressed = output<CalculatorButtonConfig>();

  onButtonPressed(button: CalculatorButtonConfig): void {
     console.log(button);
  console.log(button.value);
    
    this.buttonPressed.emit(button);
  }
}
