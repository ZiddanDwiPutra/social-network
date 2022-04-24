import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { GridComponent, GridListComponent } from '../shared';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [DashboardComponent, GridComponent, GridListComponent],
  exports: [DashboardComponent],
})
export class DashboardModule {}
