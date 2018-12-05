import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PrestationComponent } from './components/prestation/prestation.component';
import { SharedModule } from '../shared/shared.module';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { TemplateModule } from '../template/template.module';

@NgModule({
  declarations: [PagePrestationsComponent, ListPrestationsComponent, PrestationComponent,
     PageAddPrestationComponent, AddPrestationComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
  ]
})
export class PrestationsModule { }
