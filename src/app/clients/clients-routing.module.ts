import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { PageAddClientsComponent } from './pages/page-add-clients/page-add-clients.component';
import { DetailClientComponent } from './components/detail-client/detail-client.component';
import { CommentClientComponent } from './components/comment-client/comment-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
import { ClientResolverService } from './services/client-resolver.service';

const appRoutes: Routes = [
  { path: '',
  data: {title: 'Our Clients'},
  component: PageClientsComponent,
  children: [
    {
      path: '',
      redirectTo: 'detail',
      pathMatch: 'full'
    },
    {
      path: 'detail',
      component: DetailClientComponent,
    },
    {
      path: 'comment',
      component: CommentClientComponent,
    }
]
  },
  { path: 'add', component: PageAddClientsComponent },
  {
    path: 'edit/:id',
    component: PageEditClientComponent,
    resolve: {
      item: ClientResolverService
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
export class ClientsRoutingModule { }
