import { Component, OnInit } from '@angular/core';
import { NavService } from './commons/services/utils/nav.service';
import { ServerService } from './commons/services/auth/server.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
    private nav    : NavService,
    private server : ServerService
  ) {
    // load server date time
    server.syncServerDT();
  }
}
