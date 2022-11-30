import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebaritem-inner',
  template: `
  <a class="nav-link collapsed" (click)="isCollapsed = !isCollapsed" href="javascript:void(0)">
      <i class="{{menuItem.icon}}"></i>
      <span>{{menuItem.title}}</span>
      <i class="bi bi-chevron-down ms-auto" [ngClass]="isCollapsed?'bi-chevron-down':'bi-chevron-up'"></i>
    </a>
    <ul class="nav-content" [collapse]="isCollapsed" [isAnimated]="true">
      <app-sidebaritem [menuItems]="menuItem.childs" [isChildLink]="true"></app-sidebaritem>
    </ul>`,
})
export class SidebaritemInnerComponent {
  @Input("menuItem") menuItem:any;
  @Input("isChildLink") isChildLink?=false;
  isCollapsed = true;
  active = false;
  constructor() { }
}
