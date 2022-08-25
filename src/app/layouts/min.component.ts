import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-min',
  template: `<main>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  </main>`,
})
export class MinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
