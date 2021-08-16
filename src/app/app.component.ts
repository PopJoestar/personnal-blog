import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routerTransition } from 'src/animations';

@Component({
  selector: 'pb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent {
  title = 'personnal-blog'
  constructor() {
  }

  getOutlet(o: RouterOutlet) {
 return o.activatedRouteData.routeState;
 }
}
