import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'assignment';
  routerLinks: Array<any>;
  selectDropdownRoutes: Array<any>;

  ngOnInit(): void {
    this.routerLinks = [{name: 'view1', route: '/view-one'}, {name: 'view2', route: '/view-two'}, {
      name: 'view3',
      route: '/view-three'
    }];
    this.selectDropdownRoutes = [{name: 'view1', route: '/view-one'}, {name: 'view2', route: '/view-two'}, {
      name: 'view3',
      route: '/view-three'
    }];
  }

  addRoute = (event) => {
    this.routerLinks.push(event);
  };

  removeTab = (routeToRemove, index) => {
    this.routerLinks.splice(index, 1);
    return false;
  };
}
