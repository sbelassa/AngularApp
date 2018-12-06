import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddRowComponent } from './components/add-row/add-row.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { TemplateModule } from '../template/template.module';

@NgModule({
  declarations: [TotalPipe, TableauComponent, StateDirective, AddRowComponent],
  exports: [TotalPipe, TableauComponent, StateDirective, AddRowComponent, TemplateModule, FontAwesomeModule],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    TemplateModule
  ]
})
export class SharedModule { }
