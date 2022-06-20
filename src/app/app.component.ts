import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input-test';
}

import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[ngModel][replaceCommaByDot]',
})
export class ReplaceCommaByDotDirective {
  @Output() ngModelChange = new EventEmitter();

  @HostListener('input', ['$event.target.value'])
  onInputChange(value: string) {
    value = value.replace(',', '.');
    this.ngModelChange.emit(value);

  }
}
