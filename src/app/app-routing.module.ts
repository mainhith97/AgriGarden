import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminlayoutComponent } from './pages/adminlayout/adminlayout.component';
import { FarmerLayoutComponent } from './pages/farmer-layout/farmer-layout.component';
import { DistributorLayoutComponent } from './pages/distributor-layout/distributor-layout.component';
import { RegisterComponent } from './pages/register/register.component';
import { FarmerRegisterComponent } from './pages/farmer-register/farmer-register.component';
import { AdminService } from './services/admin.service';
import { AuthService } from './services/auth.service';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { MainAdminComponent } from './pages/main-admin/main-admin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './services/auth.guard';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';
import { FarmerService } from './services/farmer.service';
import { AboutLayoutComponent } from './pages/about-layout/about-layout.component';
import { ContactLayoutComponent } from './pages/contact-layout/contact-layout.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { SearchLayoutComponent } from './pages/search-layout/search-layout.component';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { MycartLayoutComponent } from './pages/mycart-layout/mycart-layout.component';
import { ProductByCategoryComponent } from './components/product-by-category/product-by-category.component';
import { ProductLayoutComponent } from './pages/product-layout/product-layout.component';

const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactLayoutComponent },
  { path: 'about', component: AboutLayoutComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: 'category/:id', component: ProductLayoutComponent },
  { path: 'search', component: SearchLayoutComponent },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthService],
    children: [

      { path: 'user', component: DistributorLayoutComponent },
      { path: 'my-cart', component: MycartLayoutComponent },
    ]
  },
  {
    path: '',
    component: MainAdminComponent,
    canActivate: [AdminService],

    children: [
      { path: 'main', component: AdminlayoutComponent },
      { path: 'get-list-user', component: ListUserComponent },
      { path: 'get-list-product', component: ListProductComponent },

    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [FarmerService],

    children: [
      { path: 'myaccount', component: FarmerLayoutComponent },

    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register',  component: RegisterComponent },
  { path: 'farmer_register',  component: FarmerRegisterComponent },
  { path: 'admin', component: AdminloginComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
