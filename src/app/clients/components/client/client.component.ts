import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { ClientState } from 'src/app/shared/enums/client-state.enum';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  @Input() item: Client;
  public states = Object.values(ClientState);

  constructor(private ps: ClientService) { }

  ngOnInit() {
  }

  changeState(event) {
    const state = event.target.value;
    this.ps.update(this.item, state);
  }

}
