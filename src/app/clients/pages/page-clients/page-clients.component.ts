import { Component, OnInit } from '@angular/core';
import { LinksI } from 'src/app/shared/interfaces/links-i';
import { Observable } from 'rxjs';
import { ActivatedRoute, Data } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-page-clients',
  templateUrl: './page-clients.component.html',
  styleUrls: ['./page-clients.component.scss']
})
export class PageClientsComponent implements OnInit {
  public list: LinksI[];
  title$: Observable<string>;

  constructor(private ar: ActivatedRoute) {
  }

  ngOnInit() {
    this.title$ = this.ar.data.pipe(
      pluck('title')
    );

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
