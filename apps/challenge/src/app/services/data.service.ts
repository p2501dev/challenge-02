import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataModel } from '../../models/data.model';
import { ResponseModel } from '../../models/response.model';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  public getData(pageNr: number, pageSize: number): Observable<ResponseModel> {
    return this.http.get<DataModel[]>('./data/data.json').pipe(
      map(
        array =>
          <ResponseModel>{
            count: array.length,
            data: array.slice(pageNr * pageSize, pageNr * pageSize + pageSize),
          }
      )
    );
  }
}
