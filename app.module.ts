import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
// import { InputsModule } from '@progress/kendo-angular-inputs';
import {ReactiveFormsModule,FormsModule } from '@angular/forms';
// import { FirstCompComponent } from './first-comp/first-comp.component';
// import { EmailComponent } from './email/email.component';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { TableFilterComponent } from './table-filter/table-filter.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule } from '@angular/material/form-field';
import {  MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    // FirstCompComponent,
    // EmailComponent,
    TableFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    DropDownsModule,
    // InputsModule,
    ReactiveFormsModule,
    FormsModule,
    MatListModule,
    MatSidenavModule,
    MatMenuModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
