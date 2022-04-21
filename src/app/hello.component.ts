import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Khula; }`],
})
export class HelloComponent {
  @Input() name: string;
}
