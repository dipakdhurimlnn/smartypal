import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {WhatsappButtonComponent} from "../whatsapp-button/whatsapp-button.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        WhatsappButtonComponent
    ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
