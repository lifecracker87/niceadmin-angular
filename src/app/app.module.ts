import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from './app.component';
import { MinComponent } from './layouts/min.component';
import { DashboardLayoutComponent } from './layouts/dashboardlayout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layouts/parts/header.component';
import { SidebarComponent } from './layouts/parts/sidebar.component';
import { SidebaritemComponent } from './layouts/parts/sidebaritem.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from './app-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MinComponent,
    DashboardLayoutComponent,
    SidebaritemComponent,
    BlankPageComponent,
    DashboardComponent,
    LoginComponent,
    ErrorComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    //RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }