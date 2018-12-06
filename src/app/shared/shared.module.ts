import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddRowComponent } from './components/add-row/add-row.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { TemplateModule } from '../template/template.module';
import { MyNavComponent } from './components/my-nav/my-nav.component';

@NgModule({
  declarations: [TotalPipe, TableauComponent, StateDirective, AddRowComponent, MyNavComponent],
  exports: [TotalPipe, TableauComponent, StateDirective, AddRowComponent, TemplateModule, FontAwesomeModule, MyNavComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    TemplateModule
  ]
})
export class SharedModule { }
