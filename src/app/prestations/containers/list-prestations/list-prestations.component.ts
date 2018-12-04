import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {
  public collection: Prestation[];
  public headers: string[];
  //pipe = new JsonPipe(); pour mieux utiliser les pipes pour retourner la collection en json

  constructor(
    private ps: PrestationService
  ) { }

  ngOnInit() {
    this.collection = this.ps.collection;
    this.headers = [
      'typePresta',
      'client',
      'nbJour',
      'tjmHt',
      'totalHT',
      'totalTTC',
      'state',
    ];
  }

}
