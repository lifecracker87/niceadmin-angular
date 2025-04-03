import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    imports: [BsDropdownModule, RouterLink]
})
export class HeaderComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }
  toggleSidebar() {
    const kl = "toggle-sidebar";
    if (this.document.body.classList.contains(kl)) {
      this.document.body.classList.remove(kl);
    } else {
      this.document.body.classList.add(kl);
    }
  }
}
