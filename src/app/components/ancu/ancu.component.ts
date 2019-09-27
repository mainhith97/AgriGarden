import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-ancu',
  templateUrl: './ancu.component.html',
  styleUrls: ['./ancu.component.scss']
})
export class AncuComponent implements OnInit {

  res: any;
  data: any;
  // tslint:disable-next-line: variable-name
  product_image: SafeResourceUrl;
  constructor(
    private productService: ProductService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getListProduct1();
  }

  getListProduct1() {

    this.productService.getListProduct1().subscribe(res => {
      this.res = res;
      if (this.res.success) {
                this.data = this.res.result;
      }
    });
  }

}
