import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  constructor(private ps: ClientService, private router: Router,
    private ar: ActivatedRoute) {
  }

  ngOnInit() {
  }

  public add(item: Client) {
    this.ps.add(item);
    this.router.navigate(['../'], {relativeTo: this.ar});
  }

}
