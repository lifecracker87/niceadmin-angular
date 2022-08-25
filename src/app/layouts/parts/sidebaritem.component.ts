import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebaritem',
  template: `<li class="nav-item" *ngFor="let mit of menuItems">
  <a class="nav-link collapsed" (click)="isCollapsed = !isCollapsed" href="javascript:void(0)" *ngIf="hasSubMenu(mit)">
      <i class="{{mit.icon}}"></i>
      <span>{{mit.title}}</span>
      <i class="bi bi-chevron-down ms-auto" [ngClass]="isCollapsed?'bi-chevron-down':'bi-chevron-up'"></i>
    </a>
    <ul class="nav-content" [collapse]="isCollapsed" [isAnimated]="true">
      <app-sidebaritem [menuItems]="mit.childs" [isChildLink]="true"></app-sidebaritem>
    </ul>
    <a [ngClass]="!isChildLink?'nav-link collapsed':''" [routerLink]="mit.link" *ngIf="!hasSubMenu(mit)">
          <i class="{{mit.icon}}"></i>
          <span>{{mit.title}}</span>
        </a>
</li>`,
})
export class SidebaritemComponent implements OnInit {
  @Input("menuItems") menuItems:any;
  @Input("isChildLink") isChildLink?=false;
  isCollapsed = true;
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
