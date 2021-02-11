import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  items: Item[] = [];
  carts: Cart[] = [];
  total: number = 0;

  constructor(private itemsService: ItemService) { }

  ngOnInit(): void {
    this.items = this.itemsService.items;
  }

  storePrice(cart: Cart): void {
    this.carts.push(cart);
    this.total += cart.itemPrice;
  }

  removeFromCart(cart: Cart) {
    this.carts = this.carts.filter(cartItem => cartItem.itemName != cart.itemName);
    this.total -= cart.itemPrice;
  }

  purchaseHandler(): void {
    if (this.carts.length == 0) {
      console.log("Please buy something!");
      return;
    }

    if (this.total > 1000) {
      console.log("You don't have enough gold!");
      return;
    }

    console.log("Transaction Success!");
  }
}
