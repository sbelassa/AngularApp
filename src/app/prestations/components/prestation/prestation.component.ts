import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { State } from 'src/app/shared/enums/state.enum';
import { PrestationService } from '../../services/prestation.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  public faTrash = faTrash;
  @Input() item: Prestation;
  public states = Object.values(State);

  constructor(private ps: PrestationService) {
  }

  ngOnInit() {
    console.log(event);
  }
  changeState(event) {
    const state = event.target.value;
    this.ps.update(this.item, state).then((data) => {
      // response api
      this.item.state = state;
    });
  }

  //delete to be added here with the then
  delete() {
    this.ps.delete(this.item).then((data) => {});
  }
}
