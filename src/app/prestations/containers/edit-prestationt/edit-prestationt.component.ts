import { Component, OnInit } from '@angular/core';
import { PrestationResolverService } from '../../services/prestation-resolver.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-edit-prestationt',
  templateUrl: './edit-prestationt.component.html',
  styleUrls: ['./edit-prestationt.component.scss']
})
export class EditPrestationtComponent implements OnInit {

  item: Prestation;

  constructor(private ps: PrestationService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
    .subscribe((data: { item: Prestation }) => {
      this.item = data.item;
    });
  }

  public update(item: Prestation) {
    item.id = this.item.id;
    this.ps.update(item).then((data) => {
      this.router.navigate(['/prestations']);
    });
}


}
