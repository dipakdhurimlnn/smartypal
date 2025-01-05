import {Component, OnInit, Renderer2} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';
import {App} from '@capacitor/app';
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

  private touchStartX: number = 0;
  private touchStartY: number = 0;
  private screenEdgeThreshold = 30; // Threshold for right edge detection (in pixels)

  constructor(private platform: Platform, private router: Router, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      if (this.router.url === '/home') {
        // Exit the app on the home route
        App.exitApp(); // Use Capacitor's App plugin to exit the app
      } else {
        // Go back in history for other routes
        this.router.navigate(['../']); // Or use `window.history.back();` for browser apps
      }
    });
  }

  onTouchStart(event: TouchEvent) {
    const touch = event.touches[0];
    this.touchStartX = touch.clientX;
    this.touchStartY = touch.clientY;
  }

  onTouchEnd(event: TouchEvent) {
    const touch = event.changedTouches[0];
    const touchEndX = touch.clientX;
    const touchEndY = touch.clientY;

    const swipeDistanceX = this.touchStartX - touchEndX;
    const swipeDistanceY = Math.abs(this.touchStartY - touchEndY);

    // Check if the swipe starts near the right edge, moves left, and is mostly horizontal
    if (
      this.touchStartX > window.innerWidth - this.screenEdgeThreshold && // Starts near the right edge
      swipeDistanceX > 50 && // Swipe distance to the left
      swipeDistanceY < 50 // Minimize vertical movement
    ) {
      this.navigateBack(); // Trigger back navigation
    }
  }

  navigateBack() {
    if (this.router.url === '/home') {
      console.log('Exiting app...');
      // For Android native apps, this might exit the app
      App.exitApp();
    } else {
      console.log('Navigating back...');
      this.router.navigate(['../']);
    }
  }
}
