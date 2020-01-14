import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidenav', null) public sidenav: MatSidenav;

  constructor(private sideNavService: SidebarService) {
  }

  ngOnInit() {
   this.sideNavService.sideNavToggleSubject.subscribe(() => {
      this.sidenav.toggle();
    });
  }
}
