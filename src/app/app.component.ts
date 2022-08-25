import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit{
  constructor(private title:Title){}
  ngOnInit(): void {
    this.title.setTitle("Truste Admin Template");
  }
}
