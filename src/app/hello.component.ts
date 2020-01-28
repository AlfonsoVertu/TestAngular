import { Component, Input } from '@angular/core';

@Component({
  selector: 'Ciao',
  template: `<h1><a href="www.libertaeazione.info/digitalsalerno/{{ name }}" title="{{ name }}">Benvenuto {{name}}!</a></h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
