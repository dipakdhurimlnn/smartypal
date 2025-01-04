import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'smartypal';

  constructor(private platform: Platform) {
  }

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Back button pressed!');
      // Custom back button behavior: for example, go back in history
      window.history.back();  // This mimics the back button on Android
    });
  }
}
