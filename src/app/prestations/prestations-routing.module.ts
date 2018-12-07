import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentPrestationComponent } from './components/comment-prestation/comment-prestation.component';
import { DetailPrestationComponent } from './components/detail-prestation/detail-prestation.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationResolverService } from './services/prestation-resolver.service';
import { PageEditPrestationComponent } from './pages/page-edit-prestation/page-edit-prestation.component';

const appRoutes: Routes = [
  {
    path: '',
    data: {title: 'Our Prestations'},
    component: PagePrestationsComponent,
    children: [
      {
        path: '',
        redirectTo: 'detail',
        pathMatch: 'full'
      },
      {
        path: 'detail',
        component: DetailPrestationComponent,
      },
      {
        path: 'comment',
        component: CommentPrestationComponent,
      },
  ]
},
{ path: 'add', component: PageAddPrestationComponent },
{
  path: 'edit/:id',
  component: PageEditPrestationComponent,
  resolve: {
    item: PrestationResolverService
  }
},
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  exports: [RouterModule]
})
export class PrestationsRoutingModule { }
