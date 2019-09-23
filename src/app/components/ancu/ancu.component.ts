import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-ancu',
  templateUrl: './ancu.component.html',
  styleUrls: ['./ancu.component.scss']
})
export class AncuComponent implements OnInit {

  res: any;
  data: any;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getListProduct1();
  }

  getListProduct1() {

    this.productService.getListProduct1().subscribe(res => {
      this.res = res;
      if (this.res.success) {
                this.data = this.res.data;
      }
    });
  }
}
