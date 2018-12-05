import { Directive, Input, OnChanges, HostBinding } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
@Input() appState: State;
@HostBinding('class') nomClass: string;

  constructor() {
  }

  ngOnChanges() {
    this.nomClass = this.formatClass(this.appState);
  }

  // option --> state-option
  // annulé --> state-annule
  // confirme --> state-confirme
  // en attente --> state-waiting
  private formatClass(state: State): string {
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
  }
}
