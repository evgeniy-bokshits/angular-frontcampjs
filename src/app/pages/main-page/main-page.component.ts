import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { SidebarService } from 'src/app/components/sidebar/sidebar.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public type: string;

  constructor(private route: ActivatedRoute, private sidebar: SidebarService) {}

  public ngOnInit(): void {
    const data = (this.route.data as BehaviorSubject<{type: string}>).getValue();

    if (data) {
        this.type = data.type;
    }
  }

  toggleRightSidenav() {
    this.sidebar.toggle();
  }
}
