import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.css'
})
export class WhatsappButtonComponent {

}
