import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, Query } from '@angular/core';
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
  keyword: string;
  value: ISearch;
  constructor( private productService: ProductService,
               private formBuilder: FormBuilder,
               private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.keyword = queryParams.keyword;
      this.getSearchResult(this.keyword);
    });
    this.buildForm();
  }
  buildForm() {
    this.searchForm = this.formBuilder.group({
      keyword: ['']
    });
  }
  // đổ dữ liệu tìm kiếm
  getSearchResult(keyword: string) {
    this.productService.getSearchResult(keyword).subscribe(res => {
      this.res = res;
      console.log('done');
      if (this.res.success) {
        this.data = this.res.result;
        console.log(this.data);
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
