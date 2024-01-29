import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './main/app.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesDetailComponent } from './employees-detail/employees-detail.component';
import { DataService } from './data.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    EmployeesDetailComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot([])],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
