import { Injectable } from '@angular/core';
import { NavItem } from '@app/core/components/navbar/model/nav-item';

@Injectable({
  providedIn: 'root'
})
export class NavBarAppService {

  private _navItems: NavItem [];
  
  constructor() { 

    this._navItems = [
      {
        displayName: 'Dependency Injection',
        iconName: 'close',
        children: [
          {
            displayName: 'Component providers & viewProviders',
            iconName: 'group',
            route: 'providers'
          }
        ]
      },
      {
        displayName: 'HTTP',
        iconName: 'close',
        children: [
          {
            displayName: 'Setup & usage',
            iconName: 'settings',
            route: 'http-setup'
          },
          {
            displayName: 'HTTP with Promises',
            iconName: 'build',
            route: 'what-up-web'
          },
          {
            displayName: 'HTTP with Observables',
            iconName: 'local_offer',
            route: 'my-ally-cli'
          },
          {
            displayName: 'JSONP with Observables',
            iconName: 'panorama_fish_eye',
            route: 'become-angular-tailer'
          }
        ]
      },
      {
        displayName: 'Routing',
        iconName: 'close',
        children: [
          {
            displayName: 'Route configuration',
            iconName: 'settings',
            route: 'route-configuration'
          },
          {
            displayName: 'Navigation',
            iconName: 'navigation',
            route: 'navigation'
          },          
          {
            displayName: 'Parameterized routes',
            iconName: 'route',
            route: 'parameterized-routes'
          },
          {
            displayName: 'Nested routes',
            iconName: 'alt_route',
            route: 'nested-routes'
          },
          {
            displayName: 'Router Guards',
            iconName: 'router',
            route: 'router-guards'
          },
          {
            displayName: 'Routing Strategies',
            iconName: 'remove_red_eye',
            route: 'routing-strategies'
          }          
        ]
      },
      {
        displayName: 'Unit testing',
        iconName: 'close',
        children: [
          {
            displayName: 'Jasmine & Karma',
            iconName: 'settings',
            route: 'jasmine-and-karma'
          },
          {
            displayName: 'Classes & Pipes',
            iconName: 'class',
            route: 'classes-and-pipes'
          },          
          {
            displayName: 'Mocks & spies',
            iconName: 'real_estate_agent',
            route: 'mocks-and-spies'
          },
          {
            displayName: 'Angular Test Bed',
            iconName: 'bed',
            route: 'angular-test-bed'
          },
          {
            displayName: 'Change Detection',
            iconName: 'track_changes',
            route: 'change-detection'
          },
          {
            displayName: 'Asynchronous code',
            iconName: 'code',
            route: 'asynchronous-code'
          },
          {
            displayName: 'Dependency Injection',
            iconName: 'ios_share',
            route: 'test-dependency-injection'
          },
          {
            displayName: 'Components',
            iconName: 'settings_input_component',
            route: 'test-components'
          },
          {
            displayName: 'Testing Directives',
            iconName: 'directions_off',
            route: 'test-directives'
          },
          {
            displayName: 'Testing Model Driven Forms',
            iconName: 'format_align_left',
            route: 'test-model-driven-forms'
          },
          {
            displayName: 'HTTP & JSONP',
            iconName: 'http',
            route: 'test-http-jsonp'
          },
          {
            displayName: 'Testing Routing',
            iconName: 'feedback',
            route: 'test-routing'
          }
        ]
      },
    ];
  }

  get navItems(): NavItem [] {
    return this._navItems;
  }
}
