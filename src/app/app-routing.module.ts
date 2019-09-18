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
import { GuestAncuComponent } from './pages/guest-ancu/guest-ancu.component';
import { GuestAnlaComponent } from './pages/guest-anla/guest-anla.component';
import { GuestAnquaComponent } from './pages/guest-anqua/guest-anqua.component';
import { GuestAnthanComponent } from './pages/guest-anthan/guest-anthan.component';
import { GuestRaucuquaComponent } from './pages/guest-raucuqua/guest-raucuqua.component';
import { AuthService } from './services/auth.service';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { MainAdminComponent } from './pages/main-admin/main-admin.component';
import { UserRaucuquaComponent } from './pages/user-raucuqua/user-raucuqua.component';
import { UserAncuComponent } from './pages/user-ancu/user-ancu.component';
import { UserAnlaComponent } from './pages/user-anla/user-anla.component';
import { UserAnquaComponent } from './pages/user-anqua/user-anqua.component';
import { UserAnthanComponent } from './pages/user-anthan/user-anthan.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './services/auth.guard';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';

const routes: Routes = [
  // { path: 'home',  component: HomeComponent },
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
  // { path: 'login',  component: LoginComponent },
  // { path: 'register',  component: RegisterComponent },
  // { path: 'farmer_register',  component: FarmerRegisterComponent },
  // { path: 'myaccount', component: FarmerLayoutComponent },
  // { path: 'user', component: DistributorLayoutComponent },

  // { path: 'admin', component: AdminLoginComponent },
  // { path: 'admin/main', component: AdminlayoutComponent },

  // { path: 'rau_cu_qua', component: GuestRaucuquaComponent },

  // { path: 'cay_rau_an_cu', component: GuestAncuComponent },
  // { path: 'cay_rau_an_la', component: GuestAnlaComponent },
  // { path: 'hoa_qua', component: GuestAnquaComponent },
  // { path: 'cay_rau_an_than', component: GuestAnthanComponent }

  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'rau_cu_qua', component: GuestRaucuquaComponent },
  { path: 'cay_rau_an_cu', component: GuestAncuComponent },
  { path: 'cay_rau_an_la', component: GuestAnlaComponent },
  { path: 'hoa_qua', component: GuestAnquaComponent },
  { path: 'cay_rau_an_than', component: GuestAnthanComponent },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [

      { path: 'user', component: DistributorLayoutComponent },
      { path: 'user/rau_cu_qua', component: UserRaucuquaComponent },
      { path: 'user/cay_rau_an_cu', component: UserAncuComponent },
      { path: 'user/cay_rau_an_la', component: UserAnlaComponent },
      { path: 'user/hoa_qua', component: UserAnquaComponent },
      { path: 'user/cay_rau_an_than', component: UserAnthanComponent },

      { path: 'myaccount', component: FarmerLayoutComponent },
    ]
  },
  // {
  //   path: '',
  //   component: MainAdminComponent,
  //   canActivate: [AdminService],

  //   children: [
  //     { path: 'main', component: AdminlayoutComponent },

  //   ]
  // },
  { path: 'login', component: LoginComponent },
  { path: 'register',  component: RegisterComponent },
  { path: 'admin', component: AdminloginComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
