import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { ClientService } from '../../services/client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {

  item: Client;

  constructor(private ps: ClientService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
    .subscribe((data: { item: Client }) => {
      this.item = data.item;
    });
  }

  public update(item: Client) {
    item.id = this.item.id;
    this.ps.update(item).then((data) => {
      this.router.navigate(['/clients']);
    });
}

}
