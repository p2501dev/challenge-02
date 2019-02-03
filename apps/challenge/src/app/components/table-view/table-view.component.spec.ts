import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HAMMER_LOADER } from '@angular/platform-browser';
import {
  MatTableModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatSortModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatCheckboxModule,
} from '@angular/material';

import { TableViewComponent } from './table-view.component';
import { GridComponent } from '../grid/grid.component';
import { DetailsComponent } from '../details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('TableViewComponent', () => {
  let component: TableViewComponent;
  let fixture: ComponentFixture<TableViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableViewComponent, GridComponent, DetailsComponent],
      imports: [
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatSortModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatCheckboxModule,
      ],
      providers: [
        {
          provide: HAMMER_LOADER,
          useValue: () => new Promise(() => {}),
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
