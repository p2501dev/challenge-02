import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';
import * as moment from 'moment';

import { SharedService } from '../../services/shared.service';
import { isValidNumber } from '../../validators/validators';
import { DataModel } from './../../../models/data.model';

@Component({
  selector: 'chll2-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnDestroy {
  form: FormGroup;
  readonly subscriptions: Subscription = new Subscription();
  readonly plistaProductOptions = Array(10)
    .fill('Product ')
    .map((v, i) => v + (i + 1));

  selectedRow: DataModel;

  constructor(sharedService: SharedService, private formBuilder: FormBuilder) {
    const sub = sharedService.getDetail().subscribe(detail => {
      this.selectedRow = detail;

      const date = moment(detail.date).format('YYYY-MM-DD');
      const time = moment(detail.date).format('HH:mm');

      this.form = this.formBuilder.group({
        a: [detail.a, Validators.required],
        campaignid: [detail.campaignid, Validators.required],
        userid: [detail.userid, Validators.required],
        camp_cpc: [detail.camp_cpc, isValidNumber],
        date: [date, Validators.required],
        time: [time, Validators.required],
        frienddomainid: [detail.frienddomainid, Validators.required],
        freeclick: detail.freeclick,
        network: detail.network,
        PlistaProduct: detail.PlistaProduct,
      });
    });

    this.subscriptions.add(sub);
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
  }
}
