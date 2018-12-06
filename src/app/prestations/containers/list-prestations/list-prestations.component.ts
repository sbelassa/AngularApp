import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {
  //public collection: Prestation[];
  public collection$: Observable<Prestation[]>;
  public headers: string[];
  //private sub: Subscription;
  //pipe = new JsonPipe(); pour mieux utiliser les pipes pour retourner la collection en json

  constructor(
    private ps: PrestationService
  ) { }

  ngOnInit() {
    this.collection$ = this.ps.collection$;
    /*
    this.collection = this.ps.collection;
    this.sub = this.ps.collection$.subscribe((date) => {
      this.collection = date;
    });*/
    this.headers = [
      'typePresta',
      'client',
      'nbJour',
      'tjmHt',
      'totalHT',
      'totalTTC',
      'state',
      'delete',
    ];
  }

}
