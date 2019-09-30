import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-anla',
  templateUrl: './anla.component.html',
  styleUrls: ['./anla.component.scss']
})
export class AnlaComponent implements OnInit {

  res: any;
  data: any;
  // tslint:disable-next-line: variable-name
  // product_image: SafeResourceUrl;
  constructor(
    private productService: ProductService,
    // private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getListProduct2();
  }

  getListProduct2() {

    this.productService.getListProduct2().subscribe(res => {
      this.res = res;
      if (this.res.success) {
                this.data = this.res.result;
      }
    });
  }

}
