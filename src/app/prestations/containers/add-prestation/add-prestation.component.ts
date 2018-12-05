import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationService } from '../../services/prestation.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {
  constructor(private ps: PrestationService, private router: Router,
    private ar: ActivatedRoute) {
  }

  ngOnInit() {
  }

  public add(item: Prestation) {
    this.ps.add(item);
    this.router.navigate(['../'], {relativeTo: this.ar}); //redirect to prestations page
  }
}
