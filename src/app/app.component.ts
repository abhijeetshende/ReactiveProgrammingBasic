import { Component } from '@angular/core';
interface sidebarLinks {
  linkname: string;
  routerLink: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactiveProgrammingBasic';
  tutorialLinks: sidebarLinks[] = [
    { linkname: 'Timer', routerLink: 'timer' }
  ];
}
