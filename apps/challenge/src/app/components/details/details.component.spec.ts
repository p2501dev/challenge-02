import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material';

import { DetailsComponent } from './details.component';
import { DataModel } from './../../../models/data.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const data: DataModel = <DataModel>{
  a: 8,
  campaignid: '210a0e48ec0aea780bb747fe56a72d92',
  userid: '16d798b3ae9d72408a91a8737bedb661',
  camp_cpc: 0.271,
  date: new Date(),
  frienddomainid: '9a8799e6ac57db61203d74b98d78e2ee',
  freeclick: true,
  network: 'b',
  PlistaProduct: 'Product 8',
};

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSelectModule,
      ],
      providers: [{ provide: MatDialogRef, use: {} }, { provide: MAT_DIALOG_DATA, useValue: data }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
