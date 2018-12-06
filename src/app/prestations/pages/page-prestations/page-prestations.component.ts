import { Component, OnInit } from '@angular/core';
import { LinksI } from 'src/app/shared/interfaces/links-i';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {
  public list: LinksI[];

  constructor() {
  }

  ngOnInit() {
    this.list = [
      {
        route: 'comment',
        label: 'Comments',
      },
      {
        route: 'detail',
        label: 'Details',
      }
    ];
  }

}
