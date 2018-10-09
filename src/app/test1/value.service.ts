import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable()
export class ValueService {
  getValue() {
    return 'real value';
  }

  getObservableValue(): Observable<string> {
    return of('observable value');
  }
}
