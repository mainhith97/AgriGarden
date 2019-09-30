import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-anqua',
  templateUrl: './anqua.component.html',
  styleUrls: ['./anqua.component.scss']
})
export class AnquaComponent implements OnInit {

  res: any;
  data: any;
  // tslint:disable-next-line: variable-name
  // product_image: SafeResourceUrl;
  constructor(
    private productService: ProductService,
    // private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getListProduct4();
  }

  getListProduct4() {

    this.productService.getListProduct4().subscribe(res => {
      this.res = res;
      if (this.res.success) {
                this.data = this.res.result;
      }
    });
  }


}
