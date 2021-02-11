export class Cart {
  itemName:string;
  itemPrice:number;

  constructor(name:string, itemPrice:number) {
    this.itemName = name;
    this.itemPrice = itemPrice;
  }
}
