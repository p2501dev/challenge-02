import { AbstractControl, ValidationErrors } from '@angular/forms';

import { isValidNumber } from './validators';

describe('isValidNumber', () => {
  const testcases = [
    { data: '', invalidNumber: true },
    { data: 'abc', invalidNumber: true },
    { data: '123c', invalidNumber: true },
    { data: '123', invalidNumber: false },
    { data: '1.23', invalidNumber: false },
    { data: '123.', invalidNumber: true },
    { data: '-', invalidNumber: true },
    { data: '-123', invalidNumber: false },
    { data: '-1.23', invalidNumber: false },
    { data: '-123.', invalidNumber: true },
  ];

  testcases.forEach(testcase => {
    const desc = `'${testcase.data}' should ` + (testcase.invalidNumber ? 'fail' : 'succeed');
    it(desc, () => {
      const result = isValidNumber(<AbstractControl>{ value: testcase.data });
      if (testcase.invalidNumber) {
        expect(result.invalidNumber).toBeDefined();
        expect(result.invalidNumber).toBe(true);
      } else {
        expect(result).toBeNull();
      }
    });
  });
});
