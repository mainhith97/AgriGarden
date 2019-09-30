import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-hatgiong-hoa',
  templateUrl: './hatgiong-hoa.component.html',
  styleUrls: ['./hatgiong-hoa.component.scss']
})
export class HatgiongHoaComponent implements OnInit {

  res: any;
  data: any;
  // tslint:disable-next-line: variable-name
  // product_image: SafeResourceUrl;
  constructor(
    private productService: ProductService,
    // private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getListProduct6();
  }

  getListProduct6() {

    this.productService.getListProduct6().subscribe(res => {
      this.res = res;
      if (this.res.success) {
                this.data = this.res.result;
      }
    });
  }

}
