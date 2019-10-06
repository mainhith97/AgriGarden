import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IAlert, Product } from 'src/app/shared/interface';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {
  defaultQuantity = 1;
  productAddedTocart: Product[];
  allTotal: number;
  public globalResponse: any;
  public alerts: Array<IAlert> = [];
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productAddedTocart = this.productService.getProductFromCart();
    // tslint:disable-next-line: forin
    for (const i in this.productAddedTocart) {
      this.productAddedTocart[i].quantity = 1;
    }
    this.productService.removeAllProductFromCart();
    this.productService.addProductToCart(this.productAddedTocart);
    this.calculteAllTotal(this.productAddedTocart);
  }
  onAddQuantity(product: Product) {
    // Get Product
    this.productAddedTocart = this.productService.getProductFromCart();
    this.productAddedTocart.find(p => p.Id === product.Id).quantity = product.quantity + 1;
    this.productService.removeAllProductFromCart();
    this.productService.addProductToCart(this.productAddedTocart);
    this.calculteAllTotal(this.productAddedTocart);
  }
  onRemoveQuantity(product: Product) {
    this.productAddedTocart = this.productService.getProductFromCart();
    this.productAddedTocart.find(p => p.Id === product.Id).quantity = product.quantity - 1;
    this.productService.removeAllProductFromCart();
    this.productService.addProductToCart(this.productAddedTocart);
    this.calculteAllTotal(this.productAddedTocart);
  }
  calculteAllTotal(allItems: Product[]) {
    let total = 0;
    // tslint:disable-next-line: forin
    for (const i in allItems) {
      total = total + (allItems[i].quantity * allItems[i].price_per_unit);
    }
    this.allTotal = total;
  }
}

