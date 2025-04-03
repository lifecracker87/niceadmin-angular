import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './parts/sidebar.component';
import { HeaderComponent } from './parts/header.component';

@Component({
    selector: 'app-main',
    template: `<app-header></app-header>
            <app-sidebar></app-sidebar>
            <main id="main" class="main">
              <router-outlet></router-outlet>
            </main>
            <footer id="footer" class="footer mt-auto py-3">
              <div class="copyright">
                &copy; Copyright <strong><span>Truste Technology <a href="https://trustetechnology.com"><i class="bi bi-globe"></i></a></span></strong>. All Rights Reserved
              </div>
            </footer>
            <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>`,
    imports: [
        HeaderComponent,
        SidebarComponent,
        RouterOutlet,
    ]
})
export class DashboardLayoutComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
