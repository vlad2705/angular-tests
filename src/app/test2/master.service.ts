import {Injectable} from '@angular/core';
import {ValueService} from '../test1/value.service';

@Injectable()
export class MasterService {
  constructor(private valueService: ValueService) { }
  getValue() { return this.valueService.getValue(); }
}
