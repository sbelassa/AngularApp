import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Client } from 'src/app/shared/models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-comment-client',
  templateUrl: './comment-client.component.html',
  styleUrls: ['./comment-client.component.scss']
})
export class CommentClientComponent implements OnInit {
  public client$: BehaviorSubject<Client>;

  constructor(private ps: ClientService) { }

  ngOnInit() {
    this.client$ = this.ps.client$;
  }

}
