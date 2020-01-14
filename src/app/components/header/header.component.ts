import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sidebar: SidebarService) { }

  toggleActive = false;

  ngOnInit() {
  }

  toggleRightSidenav() {
    this.toggleActive = !this.toggleActive;
    this.sidebar.toggle();
  }

}
