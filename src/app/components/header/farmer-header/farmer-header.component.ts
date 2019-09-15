import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmer-header',
  templateUrl: './farmer-header.component.html',
  styleUrls: ['./farmer-header.component.scss']
})
export class FarmerHeaderComponent implements OnInit {

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
