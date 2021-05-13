import {User} from './user';

export class Order {
  id: number;
  user: User;
  grandTotalPrice: number;
  createDateTime: string;


  constructor(id: number, user: User, grandTotalPrice: number, createDateTime: string) {
    this.id = id;
    this.user = user;
    this.grandTotalPrice = grandTotalPrice;
    this.createDateTime = createDateTime;
  }
}
