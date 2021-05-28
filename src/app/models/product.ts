export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
  currentTotalUnitsInStock: number;
  totalUnitsInOrder: number;


  constructor(id: number, name: string, description: string,
              price: number, quantity: number,
              imageUrl: string, currentTotalUnitsInStock: number,
              totalUnitsInOrder: number) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.imageUrl = imageUrl;
    this.currentTotalUnitsInStock = currentTotalUnitsInStock;
    this.totalUnitsInOrder = totalUnitsInOrder;

  }
}
