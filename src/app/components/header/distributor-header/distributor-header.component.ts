import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-distributor-header',
  templateUrl: './distributor-header.component.html',
  styleUrls: ['./distributor-header.component.scss']
})
export class DistributorHeaderComponent implements OnInit {
  res: any;
  data: any;
  username = '';
  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getProfile();
  }
  logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['home']);
  }
  getProfile() {

    this.dataService.getProfile().subscribe(res => {
      this.res = res;
      if (this.res.success) {
                this.data = this.res.result;
      }
    });
  }
}
