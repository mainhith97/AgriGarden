import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-nam',
  templateUrl: './nam.component.html',
  styleUrls: ['./nam.component.scss']
})
export class NamComponent implements OnInit {

  res: any;
  data: any;
  // tslint:disable-next-line: variable-name
  // product_image: SafeResourceUrl;
  constructor(
    private productService: ProductService,
    // private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getListProduct8();
  }

  getListProduct8() {

    this.productService.getListProduct8().subscribe(res => {
      this.res = res;
      if (this.res.success) {
                this.data = this.res.result;
      }
    });
  }


}
