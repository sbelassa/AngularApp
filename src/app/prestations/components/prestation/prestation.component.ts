import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { State } from 'src/app/shared/enums/state.enum';
import { PrestationService } from '../../services/prestation.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { PrestationResolverService } from '../../services/prestation-resolver.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  public faTrash = faTrash;
  public faEdit = faEdit;
  @Input() item: Prestation;
  public states = Object.values(State);

  constructor(private ps: PrestationService, private router: Router) {
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

    /**
     * in the api case
     * this.ps.update(this.item, state).subscribe((data) => {
      // response api
      this.item.state = state;
    });

      // think to unsubscribe dans le ngOndestroy
     */
  }

  // delete to be added here with the then
  delete() {
    this.ps.delete(this.item).then((data) => {});
    // this.ps.delete(this.item).subscribe((data) => {}); // unsubscribe OnDestroy
  }

  public getDetail() {
    this.ps.presta$.next(this.item);
  }

  public edit() {
    this.router.navigate(['prestations/edit', this.item.id]);
  }
}
