import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product){
    // find() ilgili array'i tek tek dolaşıp filtreleme yapar
    let item = CartItems.find(x=>x.product.productId === product.productId);
    if(item){
      item.quantity+=1;
    }
    else{
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CartItems.push(cartItem)
    }
  }

  removeFromCart(product:Product){
    // Çalışması için tsconfig.json "strictNullChecks": false yapıldı!
    let itemToDelete:CartItem = CartItems.find(x=>x.product.productId === product.productId);
    // splice() belirli indexten itibaren belirtilen adet kadar siler
    CartItems.splice(CartItems.indexOf(itemToDelete), 1);
  }

  list():CartItem[]{
    return CartItems;
  }
}
