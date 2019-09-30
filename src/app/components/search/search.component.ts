import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ISearch } from 'src/app/shared/interface';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  res: any;
  data: any;
  constructor( private productService: ProductService,
               private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    // this.getSearchResult();
    this.buildForm();
  }
  buildForm() {
    this.searchForm = this.formBuilder.group({
      key: ['']
    });
  }
  getSearchResult({ value }: { value: ISearch }) {
    this.productService.search(value).subscribe(res => {
      this.res = res;
      console.log('true');
      if (this.res.success) {
        this.data = this.res.result;
      }
    });
  }

  // submit({ value }: { value: ISearch }) {
  //   return this.productService.search(value).subscribe(res => {
  //     this.res = res;
  //     if (this.res.success) {
  //       this.data = this.res.result;
  //     } else {
  //       console.log(res);
  //     }
  //   });
  // }
}
