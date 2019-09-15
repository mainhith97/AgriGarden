import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-distributor-header',
  templateUrl: './distributor-header.component.html',
  styleUrls: ['./distributor-header.component.scss']
})
export class DistributorHeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  logout() {
    // localStorage.removeItem('adminToken');
    this.router.navigate(['home']);
  }
}
