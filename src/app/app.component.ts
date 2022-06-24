import { Component } from '@angular/core';
import { NavItem } from './core/components/navbar/model/nav-item';
import { NavBarAppService } from '@app/services/navbar/nav-bar-app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;

  constructor(public navBarAppService: NavBarAppService) {
    this.title = 'Spring Boot - Angular frontend';

  }
}
