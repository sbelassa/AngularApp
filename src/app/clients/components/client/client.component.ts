import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { ClientState } from 'src/app/shared/enums/client-state.enum';
import { ClientService } from '../../services/client.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  @Input() item: Client;
  public states = Object.values(ClientState);
  public faTrash = faTrash;

  constructor(private ps: ClientService) { }

  ngOnInit() {
  }

  changeState(event) {
    const state = event.target.value;
    this.ps.update(this.item, state).then((data) => {
      // response api
      this.item.state = state;
    });
  }

  //delete to be added here with the then
  delete() {
    this.ps.delete(this.item).then((data) => {});
  }

  public getDetail() {
    this.ps.client$.next(this.item);
  }
}
