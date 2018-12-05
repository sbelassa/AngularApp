import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ClientState } from 'src/app/shared/enums/client-state.enum';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {

  @Input() states = Object.values(ClientState);
  @Output() nItem: EventEmitter<Client> = new EventEmitter();

  public init = new Client();

  constructor() { }

  ngOnInit() {
  }

  public onSubmit(): void {
    this.nItem.emit(this.init);
  }
}
