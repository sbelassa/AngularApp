import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss'],
  encapsulation: ViewEncapsulation.None,
  /**
    to be able to use css of state directive in prestation.component here, and
    to add more controle over selector in the css in order not to get overriden
    by other when they choose a class name like yours
   */
})
export class TableauComponent implements OnInit {

  @Input() headers: string[];

  constructor() { }

  ngOnInit() {
  }

}
