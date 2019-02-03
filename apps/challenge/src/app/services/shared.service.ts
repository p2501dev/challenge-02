import { Injectable } from '@angular/core';

import { Observable, ReplaySubject } from 'rxjs';

import { DataModel } from '../../models/data.model';

@Injectable({ providedIn: 'root' })
export class SharedService {
  private readonly detail$ = new ReplaySubject<DataModel>(1);

  public getDetail(): Observable<DataModel> {
    return this.detail$;
  }

  public setDetail(data: DataModel) {
    this.detail$.next(data);
  }
}
