import { Component, OnInit, Input } from '@angular/core';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() cart!:Cart;

  constructor() { }

  ngOnInit(): void {
  }

}
