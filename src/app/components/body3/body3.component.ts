import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-body3',
  templateUrl: './body3.component.html',
  styleUrls: ['./body3.component.scss']
})
export class Body3Component implements OnInit {

  res: any;
  data: any;
  // tslint:disable-next-line: variable-name
  // product_image: SafeResourceUrl;
  constructor(
    private productService: ProductService,
    // private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getListNewest();
  }

  getListNewest() {

    this.productService.getListNewest().subscribe(res => {
      this.res = res;
      if (this.res.success) {
                this.data = this.res.result;
      }
    });
  }

}
