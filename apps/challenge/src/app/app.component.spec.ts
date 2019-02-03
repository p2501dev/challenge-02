import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HAMMER_LOADER } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
} from '@angular/material';

import { AppComponent } from './app.component';
import { TableViewComponent } from './components/table-view/table-view.component';
import { GridComponent } from './components/grid/grid.component';
import { DetailsComponent } from './components/details/details.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, TableViewComponent, GridComponent, DetailsComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatSortModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        HttpClientModule,
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
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
