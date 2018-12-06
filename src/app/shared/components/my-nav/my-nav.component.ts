import { Component, OnInit, Input } from '@angular/core';
import { LinksI } from '../../interfaces/links-i';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.scss']
})
export class MyNavComponent implements OnInit {
  @Input() liens: LinksI[];

  constructor() { }

  ngOnInit() {
  }

}
