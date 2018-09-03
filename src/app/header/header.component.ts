import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  user: 'tareq';
  isNavbarCollapsed = true;
  constructor() {

    // to complete v 281
   }

  logout() {
    this.user = null;
  }

}
