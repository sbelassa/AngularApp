import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { ClientComponent } from './components/client/client.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PageClientsComponent, ListClientsComponent, ClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ]
})
export class ClientsModule { }
