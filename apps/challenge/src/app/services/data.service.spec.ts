import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpRequest } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataService } from './data.service';
import { testData } from './test-data';

describe('DataService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [HttpClientModule, HttpClientTestingModule] })
  );

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it(`should issue the expected request`, async(
    inject([HttpTestingController], (backend: HttpTestingController) => {
      const service: DataService = TestBed.get(DataService);
      expect(service).toBeTruthy();

      service.getData(0, 2).subscribe();

      backend.expectOne({ url: './data/data.json', method: 'GET' });

      backend.expectNone((req: HttpRequest<any>) => req.method === 'PUT');
      backend.expectNone((req: HttpRequest<any>) => req.method === 'DELETE');
    })
  ));

  it(`should return the expected response`, async(
    inject([HttpTestingController], (backend: HttpTestingController) => {
      const service: DataService = TestBed.get(DataService);
      expect(service).toBeTruthy();

      service.getData(0, 2).subscribe(response => {
        expect(response.data.length).toBe(2);
        expect(response.data[0].campaignid).toBe(testData[0].campaignid);
        expect(response.data[1].campaignid).toBe(testData[1].campaignid);
      });

      const request = backend.expectOne({ url: './data/data.json', method: 'GET' });
      request.flush(testData);
    })
  ));
});
