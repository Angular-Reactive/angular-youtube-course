import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NavItem } from '@app/core/components/navbar/model/nav-item';

export class MatMenuListItem {
  displayName: string;
  iconName?: string;
  isDisabled?: boolean;
  percentage?: string;
  childrens?: MatMenuListItem[];
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  @Input() items: NavItem [];
  @Output() public sidenavToggle = new EventEmitter();
  
  navbarOpen = false;
  menuListItems: MatMenuListItem[];
  objectKeys = Object.keys;
  
  constructor() { }

  ngOnInit(): void {
    this.menuListItems = [
      {
        displayName: 'Backend',
        percentage: '10%',
        childrens:  [
          {
            displayName: 'User list'
          }
        ]
      },
      {
        displayName: 'Directives',
        percentage: '10%',
      },
      {
        displayName: 'Demo',
        percentage: '10%',
      },
];
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  public onToggleSidenav = () => { 
    this.sidenavToggle.emit();
  }

}
