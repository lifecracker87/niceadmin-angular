import { Component, OnInit } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss'],
    imports: [TabsModule]
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
