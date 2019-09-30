import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-hatgiong-rau',
  templateUrl: './hatgiong-rau.component.html',
  styleUrls: ['./hatgiong-rau.component.scss']
})
export class HatgiongRauComponent implements OnInit {

  res: any;
  data: any;
  // tslint:disable-next-line: variable-name
  // product_image: SafeResourceUrl;
  constructor(
    private productService: ProductService,
    // private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getListProduct5();
  }

  getListProduct5() {

    this.productService.getListProduct5().subscribe(res => {
      this.res = res;
      if (this.res.success) {
                this.data = this.res.result;
      }
    });
  }

}
