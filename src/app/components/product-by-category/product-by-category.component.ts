import { Component, OnInit } from '@angular/core';
import { IAlert, Product } from 'src/app/shared/interface';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Params } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.scss'],
  providers: [ProductService]
})
export class ProductByCategoryComponent implements OnInit {
  res: any;
  data: any;
  id: number;
  public alerts: Array<IAlert> = [];
  cartItemCount = 0;
  public globalResponse: any;
  allProducts: any;
  productAddedTocart: Product[];
  constructor(private productService: ProductService, private route: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getListProductByType(this.id);
    });
  }
  getListProductByType(id: number) {
    this.productService.getListProductByType(id).subscribe(res => {
        this.res = res;
        if (this.res.success) {
            this.data = this.res.result;
        }
    });
}
  OnAddCart(product: Product ) {
    this.productAddedTocart = this.productService.getProductFromCart();
    if (this.productAddedTocart == null) {
      this.productAddedTocart = [];
      this.productAddedTocart.push(product);
      this.productService.addProductToCart(this.productAddedTocart);
      this.alerts.push({
        id: 1,
        type: 'success',
        message: 'Product added to cart.'
      });
      setTimeout(() => {
        this.closeAlert(this.alerts);
      }, 3000);

    } else {
      const tempProduct = this.productAddedTocart.find(p => p.Id === product.Id);
      if (tempProduct == null) {
        this.productAddedTocart.push(product);
        this.productService.addProductToCart(this.productAddedTocart);
        this.alerts.push({
          id: 1,
          type: 'success',
          message: 'Product added to cart.'
        });
        setTimeout(() => {
          this.closeAlert(this.alerts);
        }, 3000);
      } else {
        this.alerts.push({
          id: 2,
          type: 'warning',
          message: 'Product already exist in cart.'
        });
        setTimeout(() => {
          this.closeAlert(this.alerts);
        }, 3000);
      }

    }
    this.cartItemCount = this.productAddedTocart.length;
    this.sharedService.updateCartCount(this.cartItemCount);
  }
  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

}
