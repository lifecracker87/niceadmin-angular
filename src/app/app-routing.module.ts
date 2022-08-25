import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { DashboardLayoutComponent } from './layouts/dashboardlayout.component';
import { MinComponent } from './layouts/min.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'blank-page',
        component: BlankPageComponent
      },
      {
        path: 'user-profile',
        component: UserProfileComponent
      }
    ]
  },
  {
    path: '',
    component: MinComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'error',
        component: ErrorComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
