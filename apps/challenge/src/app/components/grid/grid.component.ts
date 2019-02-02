import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

import { Observable, of } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';

import { DataService } from '../../services/data.service';
import { DataModel } from './../../../models/data.model';

@Component({
  selector: 'chll2-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  data$: Observable<DataModel[]>;
  displayedColumns = [];
  rowCount: number;

  constructor(
    private dataservice: DataService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'edit',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-edit-24px.svg')
    );
  }

  ngOnInit() {
    this.data$ = this.paginator.page.pipe(
      startWith([]),
      switchMap(() =>
        this.dataservice.getData(this.paginator.pageIndex + 1, this.paginator.pageSize)
      ),
      map(response => {
        const data = response.data;
        this.rowCount = response.count;

        if (!!data && data.length > 0) {
          this.displayedColumns = Object.keys(data[0]).concat('select');
        }

        return data;
      }),
      catchError(() => {
        return of([]);
      })
    );
  }

  showMe(data) {
    alert(JSON.stringify(data, undefined, 2));
  }
}
