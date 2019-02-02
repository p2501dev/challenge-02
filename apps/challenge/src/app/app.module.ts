import { BrowserModule, HAMMER_LOADER } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {
  MatTableModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatSortModule,
  MatIconModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { TableViewComponent } from './components/table-view/table-view.component';
import { GridComponent } from './components/grid/grid.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [AppComponent, TableViewComponent, GridComponent, DetailsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
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
