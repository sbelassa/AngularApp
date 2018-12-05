import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {

  @Input() states = Object.values(State);
  @Output() nItem: EventEmitter<Prestation> = new EventEmitter();

  public init = new Prestation();

  constructor() { }

  ngOnInit() {
  }


  public onSubmit(): void {
    this.nItem.emit(this.init);
  }

}
