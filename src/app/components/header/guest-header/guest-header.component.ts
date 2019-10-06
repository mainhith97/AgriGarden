import { ISearch } from './../../../shared/interface';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-guest-header',
  templateUrl: './guest-header.component.html',
  styleUrls: ['./guest-header.component.scss']
})
export class GuestHeaderComponent implements OnInit {
  res1: any;
  res2: any;
  data1: any;
  data2: any;
  res3: any;
  data3: any;
  searchForm: FormGroup;
  res: any;
  data: any;
  cartItemCount = 0;
  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    // giỏ hàng
    this.sharedService.currentMessage.subscribe(msg => this.cartItemCount = msg);
    this.buildForm();
    this.getProfile();
    this.getListType();
  }
  buildForm() {
    this.searchForm = this.formBuilder.group({
      keyword: ['']
    });
  }
  // nhan nut search
  submit({ value }: { value: ISearch }) {
    this.productService.search(value).subscribe(res => {
      this.res = res;
      console.log('true');
      if (this.res.success) {
        this.data = this.res.result;
        console.log(this.data);
        this.router.navigate(['search'], { queryParams: { keyword: this.data } });
      }
    });
  }
  // check localstorage
  readLocalStorageValue(key) {
    return localStorage.getItem(key);
  }
  // lấy thông tin user
  getProfile() {

    this.dataService.getProfile().subscribe(res2 => {
      this.res2 = res2;
      this.data2 = this.res2.result;
    });
  }
  // get list category
  getListType() {

    this.productService.getListType().subscribe(res3 => {
      this.res3 = res3;
      if (this.res3.success) {
        this.data3 = this.res3.result;
      }
    });
  }
  // đăng xuất
  logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['home']);
  }

}
