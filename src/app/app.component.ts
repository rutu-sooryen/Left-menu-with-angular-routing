import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'left-menu-demo';
  isExpanded = true;
  showSubMenu: boolean = false;
  isShowing = false;
  showNestedMenu: boolean = false;

  
}
