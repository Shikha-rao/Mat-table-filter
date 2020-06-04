import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { EmailComponent } from './email/email.component';
import { TableFilterComponent } from './table-filter/table-filter.component';

const routes: Routes = [
  // {path:'email',component:EmailComponent},
  {path:'table-filter',component:TableFilterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
