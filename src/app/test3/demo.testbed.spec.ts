import {ValueService} from '../test1/value.service';
import {TestBed} from '@angular/core/testing';

describe('ValueService with #TestBed', () => {
  let service: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ValueService] });
    service = TestBed.get(ValueService);
  });

  it('should use ValueService', () => {
    expect(service.getValue()).toBe('real value');
  });
});
