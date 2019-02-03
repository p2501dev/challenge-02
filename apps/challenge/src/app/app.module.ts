import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_LOADER } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatTableModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatSortModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatButtonModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { TableViewComponent } from './components/table-view/table-view.component';
import { GridComponent } from './components/grid/grid.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [AppComponent, TableViewComponent, GridComponent, DetailsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
  ],
  providers: [
    {
      provide: HAMMER_LOADER,
      useValue: () => new Promise(() => {}),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
