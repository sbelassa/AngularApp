import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { BehaviorSubject } from 'rxjs';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.scss']
})
export class DetailClientComponent implements OnInit {

  public client$: BehaviorSubject<Client>;

  constructor(private ps: ClientService) {
  }

  ngOnInit() {
    this.client$ = this.ps.client$;
  }

}
