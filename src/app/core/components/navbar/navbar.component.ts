import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
    
  constructor() { }

  ngOnInit(): void {
  }

}
