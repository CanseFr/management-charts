import { Component } from '@angular/core';
import {HeaderComponent} from "./components/header/header.component";
import {ServerStatusComponent} from "./components/server-status/server-status.component";
import {TrafficComponent} from "./components/traffic/traffic.component";
import {SupportClientComponent} from "./components/support-client/support-client.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    SupportClientComponent
  ]
})
export class AppComponent {

}
