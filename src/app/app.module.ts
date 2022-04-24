import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent, FooterComponent } from './shared';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  imports: [BrowserModule, FormsModule, FontAwesomeModule, DashboardModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    FooterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
