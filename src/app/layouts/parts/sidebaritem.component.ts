import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebaritem',
  template: `<li class="nav-item" *ngFor="let mit of menuItems">
    <app-sidebaritem-inner *ngIf="hasSubMenu(mit)" [menuItem]="mit"></app-sidebaritem-inner>
    <a [ngClass]="!isChildLink?'nav-link collapsed':''" [routerLink]="mit.link" *ngIf="!hasSubMenu(mit)">
          <i class="{{mit.icon}}"></i>
          <span>{{mit.title}}</span>
        </a>
</li>`,
})
export class SidebaritemComponent implements OnInit {
  @Input("menuItems") menuItems:any;
  @Input("isChildLink") isChildLink?=false;
  active = false;
  constructor() { }

  ngOnInit(): void {
  }

  hasSubMenu(mit:any){
    if(mit.hasOwnProperty('childs')){
      if(mit.childs.length){
        return true;
      }
    }
    return false;
  }

}
