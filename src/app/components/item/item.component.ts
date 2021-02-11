import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item!: Item;
  @Output() sendPrice = new EventEmitter<Cart>();
  @Output() removeFromCart = new EventEmitter<Cart>();

  isAdded:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  cartBtnHandler(name: string, price: number): void {
    const cart: Cart = new Cart(name, price);

    if (!this.isAdded) {
      this.isAdded = true;
      this.sendPrice.emit(cart);
      return;
    }

    this.removeFromCart.emit(cart);
    this.isAdded = false;
  }

}
