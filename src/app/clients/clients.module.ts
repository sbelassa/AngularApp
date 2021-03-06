import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { ClientComponent } from './components/client/client.component';
import { SharedModule } from '../shared/shared.module';
import { FormReactiveClientComponent } from './components/form-reactive-client/form-reactive-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddClientComponent } from './containers/add-client/add-client.component';
import { PageAddClientsComponent } from './pages/page-add-clients/page-add-clients.component';
import { FormClientComponent } from './components/form-client/form-client.component';
import { DetailClientComponent } from './components/detail-client/detail-client.component';
import { CommentClientComponent } from './components/comment-client/comment-client.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { EditClientComponent } from './containers/edit-client/edit-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';

@NgModule({
  declarations: [PageClientsComponent, ListClientsComponent, ClientComponent,
    FormReactiveClientComponent, AddClientComponent, PageAddClientsComponent, FormClientComponent,
      DetailClientComponent, CommentClientComponent, EditClientComponent, PageEditClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbAccordionModule
  ]
})
export class ClientsModule { }
