import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();

  constructor() {
  }

  // tslint:disable-next-line:typedef
  sendMessage(product) {
    this.subject.next(product);
  }

  // tslint:disable-next-line:typedef
  getMessage() {
    return this.subject.asObservable();
  }
}
