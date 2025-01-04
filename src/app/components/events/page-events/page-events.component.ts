import {Component} from '@angular/core';
import {NavbarComponent} from '../../../shared/navbar/navbar.component';
import {DatePipe, NgForOf} from '@angular/common';

interface Event {
  name: string;
  description: string;
  image: string;
  date: string;
  location: string;
  capacity: number;
}

@Component({
  selector: 'app-page-events',
  standalone: true,
  imports: [
    NavbarComponent,
    DatePipe,
    NgForOf
  ],
  templateUrl: './page-events.component.html',
  styleUrl: './page-events.component.css'
})
export class PageEventsComponent {
  events: Event[] = [
    {
      name: 'Summer Garden Party',
      description: 'An elegant outdoor gathering with live music and gourmet catering.',
      image: 'assets/summer-party.jpg',
      date: '2024-06-15',
      location: 'Botanical Gardens',
      capacity: 150
    },
    {
      name: 'Corporate Conference',
      description: 'Annual tech conference with industry leaders and networking opportunities.',
      image: 'assets/corporate-conference.jpg',
      date: '2024-07-20',
      location: 'Convention Center',
      capacity: 500
    },
    {
      name: 'Wedding Showcase',
      description: 'Luxury wedding exhibition featuring top vendors and latest trends.',
      image: 'assets/wedding-showcase.jpg',
      date: '2024-08-10',
      location: 'Grand Hotel',
      capacity: 200
    }
  ];
}
