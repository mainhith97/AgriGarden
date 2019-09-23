
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminlayoutComponent } from './pages/adminlayout/adminlayout.component';
import { AdminHeaderComponent } from './components/header/admin-header/admin-header.component';
import { AdminSidebarComponent } from './components/sidebar/admin-sidebar/admin-sidebar.component';
import { AdminDashboardComponent } from './components/dashboard/admin-dashboard/admin-dashboard.component';
import { FarmerLayoutComponent } from './pages/farmer-layout/farmer-layout.component';
import { FarmerHeaderComponent } from './components/header/farmer-header/farmer-header.component';
import { GuestHeaderComponent } from './components/header/guest-header/guest-header.component';
import { DistributorHeaderComponent } from './components/header/distributor-header/distributor-header.component';
import { FarmerDashboardComponent } from './components/dashboard/farmer-dashboard/farmer-dashboard.component';
import { FarmerSidebarComponent } from './components/sidebar/farmer-sidebar/farmer-sidebar.component';
import { DistributorLayoutComponent } from './pages/distributor-layout/distributor-layout.component';
import { RegisterComponent } from './pages/register/register.component';
import { SignupComponent } from './components/signup/signup.component';
import { FarmerRegisterComponent } from './pages/farmer-register/farmer-register.component';
import { FarmerSignupComponent } from './components/farmer-signup/farmer-signup.component';
import { OwlModule } from 'ngx-owl-carousel';
import { Body1Component } from './components/body1/body1.component';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { AdminService } from './services/admin.service';
import { Body2Component } from './components/body2/body2.component';
import { Body3Component } from './components/body3/body3.component';
import { FooterComponent } from './components/footer/footer.component';
import { Body4Component } from './components/body4/body4.component';

import { GuestAncuComponent } from './pages/guest-ancu/guest-ancu.component';
import { GuestAnlaComponent } from './pages/guest-anla/guest-anla.component';
import { GuestAnthanComponent } from './pages/guest-anthan/guest-anthan.component';
import { GuestAnquaComponent } from './pages/guest-anqua/guest-anqua.component';
import { BackgroundImageComponent } from './components/background-image/background-image.component';

import { AnquaComponent } from './components/anqua/anqua.component';
import { AnthanComponent } from './components/anthan/anthan.component';
import { AnlaComponent } from './components/anla/anla.component';
import { AncuComponent } from './components/ancu/ancu.component';
import { GuestRaucuquaComponent } from './pages/guest-raucuqua/guest-raucuqua.component';
import { RaucuquaComponent } from './components/raucuqua/raucuqua.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { MainAdminComponent } from './pages/main-admin/main-admin.component';
import { UserAncuComponent } from './pages/user-ancu/user-ancu.component';
import { UserAnlaComponent } from './pages/user-anla/user-anla.component';
import { UserAnthanComponent } from './pages/user-anthan/user-anthan.component';
import { UserAnquaComponent } from './pages/user-anqua/user-anqua.component';
import { UserRaucuquaComponent } from './pages/user-raucuqua/user-raucuqua.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';
import { AboutComponent } from './components/about/about.component';
import { AboutLayoutComponent } from './pages/about-layout/about-layout.component';
import { ContactLayoutComponent } from './pages/contact-layout/contact-layout.component';
import { ContactComponent } from './components/contact/contact.component';
import { TokenInterceptor } from './services/token-interceptor';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductComponent } from './components/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SigninComponent,
    AdminLoginComponent,
    AdminlayoutComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminDashboardComponent,
    FarmerLayoutComponent,
    FarmerHeaderComponent,
    GuestHeaderComponent,
    DistributorHeaderComponent,
    FarmerDashboardComponent,
    FarmerSidebarComponent,
    DistributorLayoutComponent,
    RegisterComponent,
    SignupComponent,
    FarmerRegisterComponent,
    FarmerSignupComponent,
    Body1Component,
    Body2Component,
    Body3Component,
    FooterComponent,
    Body4Component,
    GuestAncuComponent,
    GuestAnlaComponent,
    GuestAnthanComponent,
    GuestAnquaComponent,
    BackgroundImageComponent,
    AncuComponent,
    AnlaComponent,
    AnthanComponent,
    AnquaComponent,
    GuestRaucuquaComponent,
    RaucuquaComponent,
    MainLayoutComponent,
    MainAdminComponent,
    UserAncuComponent,
    UserAnlaComponent,
    UserAnthanComponent,
    UserAnquaComponent,
    UserRaucuquaComponent,
    NotFoundComponent,
    AdminloginComponent,
    AboutComponent,
    AboutLayoutComponent,
    ContactLayoutComponent,
    ContactComponent,
    ProductPageComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OwlModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }, DataService, AuthService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
