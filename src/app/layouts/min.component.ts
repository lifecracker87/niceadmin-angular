import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-min',
    template: `<main>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  </main>`,
    imports: [RouterOutlet]
})
export class MinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
