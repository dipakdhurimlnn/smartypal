import { Component } from '@angular/core';
import {NavbarComponent} from "../../../shared/navbar/navbar.component";

@Component({
  selector: 'app-page-physical',
  standalone: true,
    imports: [
        NavbarComponent
    ],
  templateUrl: './page-physical.component.html',
  styleUrl: './page-physical.component.css'
})
export class PagePhysicalComponent {

}
