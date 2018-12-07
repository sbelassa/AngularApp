import { Component, OnInit } from '@angular/core';
import { LinksI } from 'src/app/shared/interfaces/links-i';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {
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
