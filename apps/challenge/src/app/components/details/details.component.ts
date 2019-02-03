import { Component, OnDestroy, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Subscription } from 'rxjs';
import * as moment from 'moment';

import { isValidNumber } from '../../validators/validators';
import { DataModel } from './../../../models/data.model';

@Component({
  selector: 'chll2-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  form: FormGroup;
  readonly subscriptions: Subscription = new Subscription();
  readonly plistaProductOptions = Array(10)
    .fill('Product ')
    .map((v, i) => v + (i + 1));

  selectedRow: DataModel;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataModel
  ) {
    this.selectedRow = data;
  }

  ngOnInit() {
    const date = moment(this.data.date).format('YYYY-MM-DD');
    const time = moment(this.data.date).format('HH:mm');

    this.form = this.formBuilder.group({
      a: [this.data.a, Validators.required],
      campaignid: [this.data.campaignid, Validators.required],
      userid: [this.data.userid, Validators.required],
      camp_cpc: [this.data.camp_cpc, isValidNumber],
      date: [date, Validators.required],
      time: [time, Validators.required],
      frienddomainid: [this.data.frienddomainid, Validators.required],
      freeclick: this.data.freeclick,
      network: this.data.network,
      PlistaProduct: this.data.PlistaProduct,
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onSubmit() {
    const dateString = this.form.get('date').value + ' ' + this.form.get('time').value;
    const date = moment(dateString, 'YYYY-MM-DD HH:mm').toDate();

    this.selectedRow.a = this.form.get('a').value;
    this.selectedRow.campaignid = this.form.get('campaignid').value;
    this.selectedRow.userid = this.form.get('userid').value;
    this.selectedRow.camp_cpc = this.form.get('camp_cpc').value;
    this.selectedRow.date = date;
    this.selectedRow.frienddomainid = this.form.get('frienddomainid').value;
    this.selectedRow.freeclick = this.form.get('freeclick').value;
    this.selectedRow.network = this.form.get('network').value;
    this.selectedRow.PlistaProduct = this.form.get('PlistaProduct').value;

    this.dialogRef.close();
  }

  onCancel() {
    this.dialogRef.close();
  }
}
