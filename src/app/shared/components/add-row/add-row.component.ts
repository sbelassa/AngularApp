import { Component, OnInit, Input } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-row',
  templateUrl: './add-row.component.html',
  styleUrls: ['./add-row.component.scss']
})
export class AddRowComponent implements OnInit {
  public faPlusCircle = faPlusCircle;
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
