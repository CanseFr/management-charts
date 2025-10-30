import { Component } from '@angular/core';
import {NewTicketComponent} from "./new-ticket/new-ticket.component";

@Component({
  selector: 'app-support-client',
  standalone: true,
  imports: [
    NewTicketComponent
  ],
  templateUrl: './support-client.component.html',
  styleUrl: './support-client.component.css'
})
export class SupportClientComponent {

}
