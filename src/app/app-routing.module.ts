import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminlayoutComponent } from './pages/adminlayout/adminlayout.component';
import { FarmerLayoutComponent } from './pages/farmer-layout/farmer-layout.component';
import { DistributorLayoutComponent } from './pages/distributor-layout/distributor-layout.component';

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'myaccount', component: FarmerLayoutComponent },
  { path: 'user', component: DistributorLayoutComponent },
  { path: 'admin', component: AdminLoginComponent },
  { path: 'admin/main',  component: AdminlayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
