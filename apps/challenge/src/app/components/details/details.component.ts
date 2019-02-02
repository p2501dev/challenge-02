import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { DataModel } from 'apps/challenge/src/models/data.model';

@Component({
  selector: 'chll2-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input() detail$: Observable<DataModel>;

  constructor() {}

  ngOnInit() {}
}
